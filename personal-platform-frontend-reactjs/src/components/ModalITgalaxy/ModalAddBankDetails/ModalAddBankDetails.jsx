import { countryLengthMapData } from "data/countryLengthMapData";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useCreateWithdrawalMethodMutation } from "../../../redux/api/withdrawal/withdrawalApi";
import GenericInput from "../../Inputs/GenericInput/GenericInput";
import ModalComponent from "../ModalComponent";
import { formConfig } from "./ModalAddBankDetails.constants";
import { AddBankAccountButton, StyledFormText, TitleStyle } from "./Style";

const ModalAddBankDetails = (props) => {
  const formMethods = useForm({ mode: "onChange", shouldFocusError: true });
  const {
    clearErrors,
    formState: { errors },
  } = formMethods;
  const [lenghtOwnerBankAccount, setLenghtOwnerBankAccount] = useState(0);
  const [lenghtIban, setLenghtIban] = useState(0);
  const [lenghtCountry, setLenghtCountry] = useState(0);
  const [currency, setCurrency] = useState("");
  const [createWidthowMethod] = useCreateWithdrawalMethodMutation();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [withdrawalMethodData, setWithdrawalMethodData] = useState({
    userId: props.id,
    typeUser: props.role,
    nameUser: props.nameUser,
    emailUser: props.emailUser,
    owner_bank_account: "",
    bank_country: "",
    currency: "",
    iban: "",
  });

  useEffect(() => {
    const countryCode = withdrawalMethodData.bank_country; // Get current bank_country value
    const countryData = countryLengthMapData.find(
      (item) => item.title === countryCode
    ); // Find country data
    const currencyValue = countryData ? countryData.currency : ""; // Get currency if found, else set it to empty
    setCurrency(currencyValue);
    setWithdrawalMethodData((prevData) => ({
      ...prevData,
      currency: currencyValue,
    }));
  }, [withdrawalMethodData.bank_country]);

  const handleAddCreateWithdrawalMethod = async () => {
    setLoading(true);
    try {
      await createWidthowMethod(withdrawalMethodData).unwrap(); // Assuming createWithdrawalMethod returns a promise.
      toast.success("Create Withdrawal Method Success", {
        position: "top-center",
        autoClose: 3000,
      });
      props.refetch();
      props.close();
    } catch (e) {
      console.error("Error creating withdrawal method:", e.message); // Log only the message
      setError("Error creating withdrawal method: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeOwerBankAccount = (selectedOptions) => {
    setLenghtOwnerBankAccount(selectedOptions.target.value);
    setWithdrawalMethodData((prevWithdrawalMethodData) => ({
      ...prevWithdrawalMethodData,
      owner_bank_account: selectedOptions.target.value,
    }));
  };
  const handleChangeIban = (selectedOptions) => {
    setLenghtIban(selectedOptions.target.value);
    setWithdrawalMethodData((prevWithdrawalMethodData) => ({
      ...prevWithdrawalMethodData,
      iban: selectedOptions.target.value,
    }));
  };

  const handleChangeBankCountry = (selectedOptions) => {
    setLenghtCountry(selectedOptions.value);
    setWithdrawalMethodData((prevWithdrawalMethodData) => ({
      ...prevWithdrawalMethodData,
      bank_country: selectedOptions.value,
    }));
  };

  const RenderHeader = <TitleStyle>Ajouter un compte bancaire</TitleStyle>;

  const RenderFooter = (
    <AddBankAccountButton
      onClick={handleAddCreateWithdrawalMethod}
      disabled={
        lenghtOwnerBankAccount === 0 || lenghtIban === 0 || lenghtCountry === 0
      }
    >
      Ajouter un compte bancaire
    </AddBankAccountButton>
  );

  const RenderBody = (
    <>
      {loading && <Spinner />}

      {error !== "" && <p style={{ color: "red" }}> {error} </p>}
      <FormProvider {...formMethods}>
        <StyledFormText>Propriétaire du compte </StyledFormText>
        <GenericInput
          inputObject={{
            ...formConfig.owner_bank_account,
            label: "owner_bank_account",
          }}
          onChange={handleChangeOwerBankAccount}
          disabledForm={false}
        />
        <StyledFormText> Pays </StyledFormText>
        <GenericInput
          inputObject={{
            ...formConfig.bank_country,
            label: "bank_country",
            validation: { required: "Country bank is required." },
          }}
          onChange={handleChangeBankCountry}
          disabledForm={false}
        />
        <StyledFormText> IBAN </StyledFormText>
        <GenericInput
          inputObject={{
            ...formConfig.iban,
            label: "iban",
          }}
          onChange={handleChangeIban}
          disabledForm={false}
        />
      </FormProvider>
    </>
  );

  return (
    <ModalComponent
      show={props.show}
      closeModal={props.close}
      header={RenderHeader}
      body={RenderBody}
      footer={RenderFooter}
      bodyPadding={"20px 20px 20px 20px"}
      Height={"37vw"}
      minWidth={"70vw"}
      footerpaddingtop={"0"}
      footerpaddingbottom={"0"}
    />
  );
};

export default ModalAddBankDetails;
