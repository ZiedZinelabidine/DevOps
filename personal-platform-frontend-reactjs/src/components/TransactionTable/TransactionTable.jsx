import { useState } from "react";
import {
  ExploreButton,
  SearchInput,
  ShowButton,
  StatusBadge,
  Table,
  TableControls,
  TableHeader,
  TransactionRow,
  TransactionTableContainer,
} from "./TransactionTable.style";

const TransactionTable = ({ transactions }) => {
  const [search, setSearch] = useState("");

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.date.includes(search) ||
      transaction.amount.toString().includes(search) ||
      transaction.paymentMode.toLowerCase().includes(search.toLowerCase()) ||
      transaction.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <TransactionTableContainer>
      <TableControls>
        <ShowButton>Show</ShowButton>
        <SearchInput
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ExploreButton>Explore</ExploreButton>
      </TableControls>
      <Table>
        <thead>
          <TableHeader>
            <th>Num</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Payment Mode</th>
            <th>Status</th>
            <th>Invoicing</th>
          </TableHeader>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <TransactionRow key={index}>
              <td>{index + 1}</td>
              <td>{transaction.date}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.paymentMode}</td>
              <td>
                <StatusBadge status={transaction.status}>
                  {transaction.status}
                </StatusBadge>
              </td>
              <td>
                <a href="#">Click for detail</a>
              </td>
            </TransactionRow>
          ))}
        </tbody>
      </Table>
    </TransactionTableContainer>
  );
};

export default TransactionTable;
