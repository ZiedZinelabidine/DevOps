import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useGetCompanyByPresidentIdAndTypeQuery } from "../../../redux/api/company/companyApi";
import { useGenrateWithdrawalInvoicingMutation } from '../../../redux/api/genrateInvoicing/genrateInvoicingApi';
import { useAddInvoicingMutation } from '../../../redux/api/invoicing/invoicingApi';
import { useCreateWithdrawalMutation } from "../../../redux/api/withdrawal/withdrawalApi";
import GenericInput from "../../Inputs/GenericInput/GenericInput";
import ModalComponent from "../ModalComponent";
import { formConfig } from "./ModalPayOut.constants";
import {
  PayOutButton,
  StyleInput,
  Title,
  TitleInvalid,
  TitleRising,
  StyleInputRising
} from "./Style";


const ModalPayOut = (props) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const date = new Date();  // retourne le nombre de millisecondes depuis le 1er janvier 1970
  const now = String(`${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`);

  const formMethods = useForm({});
  const [createWithdrawal] = useCreateWithdrawalMutation();
  const [createInvoice] = useAddInvoicingMutation();
  const [generateInvoicing] = useGenrateWithdrawalInvoicingMutation();
  const [formData, setFormData] = useState({
    rising: 0,
  });

  const { data: company } = useGetCompanyByPresidentIdAndTypeQuery({ presidentId: props.id, type: props.role });

  const handleChangeRising = (amount) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      rising: amount.target.value
    }));
  };

  const handlePayOutClick = async () => {
    setLoading(true);

    try {
      const withdrawalResponse = await createWithdrawal({
        userId: props.id,
        typeUser: props.role,
        totalAmount: formData.rising, // Assurer que formData est correctement configuré
      }).unwrap();  // Utilisation de unwrap pour gérer correctement la promesse

      const sendInvoicing = await generateInvoicing({
        "fileFolder": "invoices/withdrawals",
        "fileName": "withdrawal_" + withdrawalResponse.id + ".pdf",
        "id": withdrawalResponse.id,
        "status": "DONE",
        "date": now,
        "items": [
          {
            "totalAmount": withdrawalResponse.totalAmount,
            "feeItGalaxy": withdrawalResponse.feeItGalaxy,
            "toCurrency": withdrawalResponse.withdrawalMethod.currency,
            "rate": withdrawalResponse.rate,
            "netAmount": withdrawalResponse.netAmount,
            "transfertPrice": withdrawalResponse.transfertPrice
          }
        ],
        "customer": {
          "summary": withdrawalResponse.nameUser,
          "company_name": withdrawalResponse.company.company_name,
          "siren": withdrawalResponse.company.company_siren,
          "company_country": withdrawalResponse.company.company_location,
          "iban": withdrawalResponse.withdrawalMethod.iban,
          "toCurrency": withdrawalResponse.withdrawalMethod.currency,
          "email": withdrawalResponse.emailUser
        }

      });

      console.log("envoi de la facture S3 && email", sendInvoicing);

      toast.success("Création de retrait réussie", {
        position: "top-center",
        autoClose: 3000,
      });

      window.location.href = `/wallet`;
      props.close();
    } catch (e) {
      console.error("Erreur lors de la création du retrait :", e);
      setError("Erreur lors de la création du retrait ... veuillez essayer à nouveau.");
    } finally {
      setLoading(false); // Assurer que l'état de chargement est réinitialisé
    }
  };

  const RenderBodyPayOut = (
    <>
      {loading && <Spinner />}

      {props.bankDetailsStatus !== 'VALIDATED' && (
        <StyleInput>
          <TitleInvalid>{"1. Veuillez vérifier votre méthode de retrait, elle n'est pas encore valide pour le retrait. Merci."}</TitleInvalid>
        </StyleInput>
      )}

      {(company?.data?.length === 0 || company?.data[0].status !== 'VALIDATED') && (
        <StyleInput>
          <TitleInvalid>{"2. Veuillez vérifier les détails de votre entreprise, ils ne sont pas encore valides pour le retrait. Merci."}</TitleInvalid>
        </StyleInput>
      )}

      {company?.data?.length > 0 && company?.data[0].status === 'VALIDATED' && props.bankDetailsStatus === 'VALIDATED' && (
        <FormProvider {...formMethods}>
          <StyleInputRising>
            <TitleRising>{"Montant à retirer :"}</TitleRising>
            <GenericInput
              inputObject={{
                ...formConfig.rising,
              }}
              onChange={handleChangeRising}
              disabledForm={false}
            />
            <TitleRising>{"euros"}</TitleRising>
          </StyleInputRising>
          {error && (
            <p style={{ marginTop: "40px", marginLeft: "20%", color: "red" }}>{error}</p>
          )}
        </FormProvider>
      )}
    </>
  );

  const RenderFooterPayOut = (
    <PayOutButton 
      onClick={handlePayOutClick} 
      disabled={company?.data?.length === 0 || company?.data[0]?.status !== 'VALIDATED' || props?.bankDetailsStatus !== 'VALIDATED'}
    >
      Retirer
    </PayOutButton>
  );

  const RenderHeaderPayOut = (
    <Title>
      Combien d'argent avez-vous besoin ?
    </Title>
  );

  return (
    <ModalComponent
      show={props.show}
      closeModal={props.close}
      body={RenderBodyPayOut}
      header={RenderHeaderPayOut}
      footer={RenderFooterPayOut}
      bodyPadding={"0px"}
      minWidth={"50vw"}
      Height={"300px"}
      footerpaddingtop={"0"}
      footerpaddingbottom={"0"}
    />
  );
};

export default ModalPayOut;
