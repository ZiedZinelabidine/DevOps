import PaginatedComponent from "components/PaginationComponent/PaginationComponent";
import { useState } from "react";
import { useGetUserByIdQuery } from "../../redux/api/users/userApi";
import {
  useGetWithdrawalMethodQuery,
  useGetWithdrawalQuery,
} from "../../redux/api/withdrawal/withdrawalApi";
import ModalAddBankDetails from "../ModalITgalaxy/ModalAddBankDetails/ModalAddBankDetails";
import ModalDeleteWidthrawMethod from "../ModalITgalaxy/ModalDeleteWidthrawMethod/ModalDeleteWidthrawMethod";
import ModalPayOut from "../ModalITgalaxy/ModalPayOut/ModalPayOut";
import {
  BackCard,
  BankDetailCardBloc,
  BankDetailCardBloc1,
  BankDetailCardBloc3,
  BankDetailCardBlocALL,
  BankDetailContent,
  BankDetailTitle,
  CardBalance,
  CardContainer,
  FrontCard,
  InvoicingLink,
  StatusBadge,
  StyleComment,
  StyleTitle,
  StyleTitleBloc,
  StyleTitleStatus,
  StyleTitleWallet,
  StyleWallet,
  StyledYourCardContainer,
  StyledYourCardContainerBank,
  TransactionRow,
  TransactionsTable,
  WithdrawAccountBankButton,
  WithdrawAccountBankButtonDelete,
  WithdrawButton,
  ProductLabelsContainer,
  ViewLabelProducts,
  ViewLabelMyProducts,
  HeaderBar,
  HeaderContainer,
  HeaderContainer1
} from "./WalletComponents.style";
import { useGetInvoicingsQuery } from "../../redux/api/invoicing/invoicingApi";

const WithdrawMethodComponent = (props) => {
  const { typeUser, id, emailUser, nameUser } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModalAddBankDetails, setShowModalAddBankDetails] = useState(false);
  const [showModalDeleteBank, setShowModalDeleteBank] = useState(false);
  const [showModalPayOut, setShowModalPayOut] = useState(false);
  const [showTransaction, setShowTransaction] = useState(false);
  const [showWallet, setShowWallet] = useState(true);

  const paramsWithdrawals = `?userId=${id}&typeUser=${typeUser}`;
  const params = `?userId=${id}&typeUser=${typeUser}`;
  const paramsInvoicing = `?payerId=${id}&payerType=${typeUser}`;

  const handleShowTransaction = () => {
    setShowWallet(false);
    setShowTransaction(true);
  };

  const handleShowWallet = () => {
    setShowWallet(true);
    setShowTransaction(false);
  };

  const handleShowModalDelete = () => {
    setShowModalDeleteBank(true);
  };

  const handleShowModalPayOut = () => {
    setShowModalPayOut(true);
  };

  const handleCloseShowModalPayOut = () => {
    setShowModalPayOut(false);
  };

  const handleCloseShowModalDelete = () => {
    setShowModalDeleteBank(false);
  };

  const handleShowModalAddBank = () => {
    setShowModalAddBankDetails(true);
  };

  const handleCloseModalAddBank = () => {
    setShowModalAddBankDetails(false);
  };

  const { data: withdrawalMethod, refetch: refetchWithdrawalMethod } = useGetWithdrawalMethodQuery(params);

  const { data: withdrawalsData, error: withdrawalError, refetch: refetchWithdrawals } = useGetWithdrawalQuery(paramsWithdrawals, {
    skip: !id,
  });

  const { data: invoicingsData, error: invoicingError, refetch: refetchInvoicing } = useGetInvoicingsQuery(paramsInvoicing);

  const withdrawals = withdrawalsData?.data.map((withdrawal, index) => ({
    num: index + 1,
    id: withdrawal.id,
    type: "retrait",
    date: withdrawal.createdAt || "N/A",
    totalAmount: withdrawal.totalAmount || "0,00 €",
    FeeItgalaxy: withdrawal.feeItGalaxy || "0,00",
    iban: withdrawal.withdrawal_method.iban || "N/A",
    currency: withdrawal.withdrawal_method.currency || "N/A",
    rate: withdrawal.rate || "N/A",
    transfertPrice: withdrawal.transfertPrice,
    netAmount: withdrawal.netAmount || "N/A",
    status: withdrawal.status || "Inconnu",
    withdrawal: "Cliquez pour les détails",
  })) || [];

  const displayedTransactions = invoicingsData?.data.map((invoicing, index) => ({
    num: index + 1,
    id: invoicing.id,
    type: invoicing.type || 'Paiement',
    date: invoicing.createdAt || 'N/A',
    price: invoicing.price || '0,00 €',
    paymentType: invoicing.paymentType || 'N/A',
    status: invoicing.status || 'Inconnu',
    invoicing: 'Cliquez pour les détails',
  })) || [];

  const { data: user } = useGetUserByIdQuery({ role: typeUser, id });

  const bankDetails = withdrawalMethod
    ? {
        id: withdrawalMethod?.data[0]?.id || "N/A",
        owner_bank_account: withdrawalMethod?.data[0]?.owner_bank_account || "N/A",
        bank_country: withdrawalMethod?.data[0]?.bank_country || "N/A",
        currency: withdrawalMethod?.data[0]?.currency || "N/A",
        bankName: withdrawalMethod?.data[0]?.bankName || "N/A",
        iban: withdrawalMethod?.data[0]?.iban || "N/A",
        control_comment: withdrawalMethod?.data[0]?.control_comment || "N/A",
        status: withdrawalMethod?.data[0]?.status || "N/A",
      }
    : {};

  const statusColor =
    bankDetails.status === "VALIDATED"
      ? "green"
      : bankDetails.status === "ACTION_REQUIRED"
      ? "red"
      : bankDetails.status === "VERIFICATION"
      ? "orange"
      : "white";

  return (
    <>
        <HeaderBar>
          <HeaderContainer>
            <p style={{ fontWeight: "501", color: "white", fontFamily: "Inter", margin: 0, fontSize: "40px" }}>
              Votre Portefeuille 
            </p>
            <hr style={{ borderTop: "1px solid", opacity: "1", width: "100%" , color: "gray"}} />
          </HeaderContainer>
        </HeaderBar>

      <StyleWallet>
        <StyledYourCardContainer>
          <StyleTitleWallet>Votre Portefeuille en euro</StyleTitleWallet>
          <CardContainer>
            <BackCard />
            <FrontCard>
              <CardBalance>{user?.data?.balance_details} €</CardBalance>
            </FrontCard>
          </CardContainer>
          <WithdrawButton onClick={handleShowModalPayOut}>
            Retirer
          </WithdrawButton>
        </StyledYourCardContainer>

        <StyledYourCardContainerBank>
          <StyleTitleBloc>
            <StyleTitle>Détails de la Banque :</StyleTitle>
            <BankDetailCardBloc>
              <StyleTitleStatus statusColor={statusColor}>
                Statut : {bankDetails.status}
              </StyleTitleStatus>
              {bankDetails.status === "ACTION_REQUIRED" && bankDetails.control_comment !== "N/A" && (
                <StyleComment>
                  Commentaire de contrôle : {bankDetails.control_comment}
                </StyleComment>
              )}
            </BankDetailCardBloc>
          </StyleTitleBloc>
          <BankDetailCardBloc>
            <BankDetailCardBloc3>
              <BankDetailTitle>Nom du Titulaire du Compte</BankDetailTitle>
              <BankDetailContent>
                {bankDetails.owner_bank_account}
              </BankDetailContent>
            </BankDetailCardBloc3>

            <BankDetailCardBlocALL>
              <BankDetailCardBloc1>
                <BankDetailTitle>Pays de la Banque</BankDetailTitle>
                <BankDetailContent>
                  {bankDetails.bank_country}
                </BankDetailContent>
              </BankDetailCardBloc1>
              <BankDetailCardBloc1>
                <BankDetailTitle>Devise</BankDetailTitle>
                <BankDetailContent>{bankDetails.currency}</BankDetailContent>
              </BankDetailCardBloc1>
            </BankDetailCardBlocALL>

            <BankDetailCardBloc3>
              <BankDetailTitle>IBAN</BankDetailTitle>
              <BankDetailContent>{bankDetails.iban}</BankDetailContent>
            </BankDetailCardBloc3>
          </BankDetailCardBloc>

          {/* Affichage conditionnel basé sur l'existence de withdrawalMethod */}
          {!withdrawalMethod || withdrawalMethod.data.length === 0 ? (
            <WithdrawAccountBankButton onClick={handleShowModalAddBank} disabled={false}>
              Ajouter un compte bancaire
            </WithdrawAccountBankButton>
          ) : (
            <WithdrawAccountBankButtonDelete
              onClick={handleShowModalDelete}
              disabled={bankDetails.status === "VERIFICATION"}
            >
              Supprimer la méthode de retrait
            </WithdrawAccountBankButtonDelete>
          )}
             </StyledYourCardContainerBank>
      </StyleWallet>

      {showWallet && (
        <>
          <hr />
          <ProductLabelsContainer>
            <ViewLabelProducts onClick={handleShowWallet}>Retraits</ViewLabelProducts>
            <ViewLabelMyProducts onClick={handleShowTransaction}>
              Transactions
            </ViewLabelMyProducts>
          </ProductLabelsContainer>
          <TransactionsTable>
            <thead>
              <tr>
                <th>Num</th>
                <th>Date</th>
                <th>Montant Total (EUR)</th>
                <th>Frais ItGalaxy 20% (EUR)</th>
                <th>Votre IBAN Bancaire</th>
                <th>Devise de la Banque</th>
                {bankDetails.bank_country !== 'FR' ? (
                  <>
                    <th>Taux</th>
                    <th>Frais de Transfert (dans votre devise)</th>
                  </>
                ) : (
                  <th>TVA 20%</th>
                )}
                <th>Montant Net (dans votre devise)</th>
                <th>Statut</th>
                <th>Facturation</th>
              </tr>
            </thead>
            <tbody>
              {withdrawals.map((transaction, index) => (
                <TransactionRow key={index}>
                  <td>{transaction.num}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.totalAmount}</td>
                  <td>{transaction.FeeItgalaxy}</td>
                  <td>{transaction.iban}</td>
                  <td>{transaction.currency}</td>
                  {bankDetails.bank_country !== 'FR' ? (
                    <>
                      <td>{transaction.rate}</td>
                      <td>{transaction.transfertPrice}</td>
                    </>
                  ) : (
                    <td>{transaction.FeeItgalaxy}</td>
                  )}
                  <td>{transaction.netAmount}</td>
                  <td>
                    <StatusBadge status={transaction.status}>
                      {transaction.status}
                    </StatusBadge>
                  </td>
                  <td>
                    <InvoicingLink
                      href={`${process.env.REACT_APP_CDN_ITGALAXY}/invoices/${transaction.type}s/withdrawal_${transaction.id}.pdf`}
                    >
                      {transaction.withdrawal}
                    </InvoicingLink>
                  </td>
                </TransactionRow>
              ))}
            </tbody>
          </TransactionsTable>
        </>
      )}

      {showTransaction && (
        <>
          <hr />
          <ProductLabelsContainer>
            <ViewLabelMyProducts onClick={handleShowWallet}>Retraits</ViewLabelMyProducts>
            <ViewLabelProducts onClick={handleShowTransaction}>Transactions</ViewLabelProducts>
          </ProductLabelsContainer>
          <TransactionsTable>
            <thead>
              <tr>
                <th>Num</th>
                <th>Type de Transaction</th>
                <th>Date</th>
                <th>Montant</th>
                <th>Mode de Paiement</th>
                <th>Statut</th>
                <th>Facturation</th>
              </tr>
            </thead>
            <tbody>
              {displayedTransactions.map((transaction, index) => (
                <TransactionRow key={index}>
                  <td>{transaction.num}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.price}</td>
                  <td>{transaction.paymentType}</td>
                  <td>
                    <StatusBadge status={transaction.status}>
                      {transaction.status}
                    </StatusBadge>
                  </td>
                  <td>
                    <InvoicingLink
                      href={`${process.env.REACT_APP_CDN_ITGALAXY}/invoices/${transaction.type}s/facture_${transaction.id}.pdf`}
                    >
                      {transaction.invoicing}
                    </InvoicingLink>
                  </td>
                </TransactionRow>
              ))}
            </tbody>
          </TransactionsTable>
        </>
      )}

      <ModalAddBankDetails
        show={showModalAddBankDetails}
        close={handleCloseModalAddBank}
        id={id}
        role={typeUser}
        nameUser={nameUser}
        emailUser={emailUser}
        refetch={refetchWithdrawalMethod}
      />

      <ModalDeleteWidthrawMethod
        show={showModalDeleteBank}
        close={handleCloseShowModalDelete}
        id={bankDetails.id}
        refetch={refetchWithdrawalMethod}
      />

      <ModalPayOut
        show={showModalPayOut}
        close={handleCloseShowModalPayOut}
        bankDetailsStatus={bankDetails.status}
        id={id}
        role={typeUser}
        refetch={refetchWithdrawals} />

        </>
      );
    };
    
    export default WithdrawMethodComponent;
