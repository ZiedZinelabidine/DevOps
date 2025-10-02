import PaginatedComponent from 'components/PaginationComponent/PaginationComponent';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { getTokenFromLocalStorage } from '../../core/helpers/storage';
import { useGetInvoicingsQuery } from '../../redux/api/invoicing/invoicingApi';
import {
  HeaderBar,
  HeaderContainer,
  HeaderContainer1,
  InvoicingLink,
  StatusBadge,
  StyledTransactionsContainer,
  TransactionRow,
  TransactionsTable,
  WalletPageContainer,

} from './WalletComponents.style';
import WidthrawMethodComponnent from './WidthrawMethodComponnent';

const WalletTransactionComponents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);


  // Fetch invoicings

  const token = getTokenFromLocalStorage();
  const decodeToken = token ? jwtDecode(token) : null;
  const idUser = decodeToken ? decodeToken.id : null;
  const roleUser = decodeToken ? decodeToken.role : null;
  const nameUser = decodeToken ? decodeToken.name + " " + decodeToken.first_name : null;
  const emailUser = decodeToken ? decodeToken.email : null;
  const params = `?payerId=${idUser}&payerType=${roleUser}`;

  const { data: invoicings, error: invoicingError, refetch: reftechInvoicing } = useGetInvoicingsQuery(params);

  if (invoicingError) {
    return <div>Error fetching invoicings: {invoicingError.message}</div>;
  }

  // Create transactions from invoicings or use a fallback
  const transactions = invoicings?.data.map((invoicing, index) => ({
    num: index + 1,
    id: invoicing.id,
    type: invoicing.type || 'Payment',
    date: invoicing.createdAt || 'N/A',
    price: invoicing.price || '$0.00',
    paymentType: invoicing.paymentType || 'N/A',
    status: invoicing.status || 'Unknown',
    invoicing: 'Click for detail',
  })) || [];



  // Filter transactions based on search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.paymentType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <WalletPageContainer>
      <StyledTransactionsContainer>
        {roleUser !== 'ENTREPRISE' ? (
          <WidthrawMethodComponnent id={idUser} typeUser={roleUser} nameUser={nameUser} emailUser={emailUser} />
        ) : (
          <>
          <HeaderContainer1>
          <HeaderBar>
           <HeaderContainer>
                <p style={{ fontWeight: "501", color: "white", fontFamily: "Inter", margin: 0, fontSize: "40px" }}>
                  Your Transactions
                </p>
                <hr style={{ borderTop: "1px solid", opacity: "1", width: "100%" , color: "gray"}} />

              </HeaderContainer>
              </HeaderBar>
              </HeaderContainer1>
            <TransactionsTable>
              <thead>
                <tr>
                  <th>Num</th>
                  <th>Transaction Type</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Payment Mode</th>
                  <th>Status</th>
                  <th>Invoicing</th>
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
                      <InvoicingLink href={`${process.env.REACT_APP_CDN_ITGALAXY}/invoices/${transaction.type}s/facture_${transaction.id}.pdf`}>
                        {transaction.invoicing}
                      </InvoicingLink>
                    </td>
                  </TransactionRow>
                ))}
              </tbody>
            </TransactionsTable>
          </>
        )}
      </StyledTransactionsContainer>
    </WalletPageContainer>
  );
};

export default WalletTransactionComponents;

