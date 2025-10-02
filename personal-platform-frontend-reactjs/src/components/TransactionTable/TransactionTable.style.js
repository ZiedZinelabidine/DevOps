import styled from "styled-components";

export const TransactionTableContainer = styled.div`
  width: 100%;
  padding: 20px;
  overflow-x: auto;
`;

export const TableControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ShowButton = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 200px;
`;

export const ExploreButton = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #28a745;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
`;

export const TableHeader = styled.tr`
  background-color: #f2f2f2;
`;

export const TransactionRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const StatusBadge = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${({ status }) => {
    switch (status) {
      case "Delivered":
        return "#d4edda";
      case "Process":
        return "#fff3cd";
      case "Cancelled":
        return "#f8d7da";
      default:
        return "#f2f2f2";
    }
  }};
  color: ${({ status }) => {
    switch (status) {
      case "Delivered":
        return "#155724";
      case "Process":
        return "#856404";
      case "Cancelled":
        return "#721c24";
      default:
        return "#000";
    }
  }};
`;
