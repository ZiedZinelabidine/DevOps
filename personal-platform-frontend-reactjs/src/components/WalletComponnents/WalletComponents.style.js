import styled from "styled-components";

export const WalletPageContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  background: #202124; /* Background color */
`;

export const StyledTransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 10px 20px; /* Increased padding for spacious layout */
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
`;

export const TransactionsTable = styled.table`
  width: 100%;
  margin-top: 50px;
  border-collapse: collapse;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd; /* Added border for better separation */
    color: white; /* Soft text color */
    background-color: #111827; /* Header background */

  }

  th {
    background-color: #111827; /* Header background */
    font-weight: bold;
  }
`;

export const TransactionRow = styled.tr`
  transition: background-color 0.3s;

  &:nth-child(even) {
    background-color: #f9f9f9; /* Alternating row color */
  }

  &:hover {
    background-color: #e0f7fa; /* Highlight on hover */
  }
`;

export const StatusBadge = styled.span`
  padding: 5px 10px;
  border-radius: 12px;
  color: ${(props) => {
    switch (props.status) {
      case "Delivered":
        return "#28A562";
      case "Process":
        return "#CD6200";
      case "REFUND":
        return "red";
      default:
        return "#28A562";
    }
  }};
  background-color: ${(props) => {
    switch (props.status) {
      case "Delivered":
        return "#EBF9F1";
      case "Process":
        return "#FEF2E5";
      case "Canceled":
        return "#FBE7E8";
      default:
        return "#EBF9F1";
    }
  }};
`;

export const InvoicingLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const WithdrawButton = styled.button`
  background-color: white; /* Button color */
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-top: 75px;
  width: 100%;

  &:hover {
    background-color: blue; /* Darker blue on hover */
    transition: background-color 0.3s ease; /* Smooth transition */
    color: white;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 100px;
  text-align: center;
  border-radius: 8px; /* Rounded corners for softer look */
  padding: 15px; /* Padding for spacing */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow for depth */
`;

export const HeaderContainer1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-radius: 6px 6px 0 0;
  padding: 10px;
  margin-bottom: 30px;
  position: relative;
  flex-direction: row;
  @media (min-width: 767px) {
    padding-left: 21px;
  }
`;

export const HeaderBar = styled.div`
  display: flex;
  width: 96%;
  margin-left: 2%;
  margin-bottom: 1%;
`;

export const StyledYourCardContainer = styled.div`
  background-color: black;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;
export const CardContainer = styled.div`
  position: relative;
  height: 200px;
  margin-top: 30px;
`;

export const BackCard = styled.div`
  position: absolute;
  top: 10px; /* Offset to create layering effect */
  left: 10px;
  width: 100%;
  height: 100%;
  // top left corner #6e6e70 bottom right corner black
  background: linear-gradient(140deg, #6e6e70, black);
  border-radius: 15px;
  rotate: -6deg;
  translate: -9px -10px;
`;

export const FrontCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // top right corner: #6a67d6  middle: #3f85f9 bottom left corner #28b1f5
  background: linear-gradient(-90deg, #6a67d6, #3f85f9, #28b1f5);
  border-radius: 15px;
  padding: 80px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  /* Circle pattern at the top right corner */
  &::after {
    content: "";
    position: absolute;
    top: -80px;
    right: -80px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
  }
  /* Another circle pattern with slight difference */
  &::before {
    content: "";
    position: absolute;
    top: -80px;
    right: -80px;
    width: 175px;
    height: 175px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
  }
`;

export const CardBalance = styled.div`
  font-size: 28px;
  font-weight: bold;
  padding-left: 50px;
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  opacity: 0.9; /* Lighter for subtle details */
`;

export const CardType = styled.span`
  font-size: 16px;
`;

export const CardInfo = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  margin-top: 40px;

  .title-row {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .card-info-title {
    font-size: 16px;
    font-weight: 600;
  }
  .info-row {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .card-number {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
  }

  .eye-icon {
    cursor: pointer;
  }
`;

export const TotalBalance = styled.div`
  text-align: center;
  margin-bottom: 20px;

  .balance {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .percentage {
    font-size: 14px;
    color: #6c757d;
    margin-bottom: 10px;
  }

  .earnings,
  .withdrawals {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .earnings span,
  .withdrawals span {
    font-weight: 600;
  }
`;

export const StyleWallet = styled.div`
  display: flex;
`;

export const StyledYourCardContainerBank = styled.div`
  background-color: #202124;
  padding: 20px;
  margin-left: 10px;
  width: 100%;
  border: 1px solid #6366f1;
  color: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #333;
`;

export const BankDetailCard = styled.div`
  background: #f9f9f9; /* Light grey background */
  border-radius: 8px; /* Rounded corners */
  padding: 15px;
  margin: 10px 0; /* Margin between cards */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  margin-left: 15px;
  margin-right: 15px;
  width: 480px;
`;

export const BankDetailCardBloc1 = styled.div`
  background-color: #111827;
  border-radius: 8px; /* Rounded corners */
  padding: 15px;
  margin: 10px 0; /* Margin between cards */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  margin-left: 15px;
  width: 50%;
`;

export const BankDetailCardBloc3 = styled.div`
  background-color: #111827;
  border-radius: 8px; /* Rounded corners */
  padding: 15px;
  margin: 10px 0; /* Margin between cards */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  margin-left: 15px;
  margin-right: 15px;
  width: 98.5%;
  color: white;
`;

export const BankDetailTitle = styled.h5`
  margin: 0;
  font-size: 16px;
  color: white;
`;

export const BankDetailContent = styled.p`
  margin: 5px 0 0 0; /* Some margin on top */
  font-size: 20px;
  color: #666; /* Lighter shade for the content */
  width: 100%;
`;

export const BankDetailCardBloc = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BankDetailCardBlocALL = styled.div`
  display: flex;
`;

export const StyleTitle = styled.div`
  font-size: 20px;
  font-family: Inter, sans-serif;
  padding-bottom: 20px;
`;

export const WithdrawAccountBankButton = styled.button`
  background-color: white; /* Button color */
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
  float: right; /* Float the button to the right */
  &:hover {
    background-color: blue; /* Darker blue on hover */
    transition: background-color 0.3s ease; /* Smooth transition */
    color: white;
  }
`;

export const WithdrawAccountBankButtonDelete = styled.button`
  background-color: red; /* Button color */
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
  float: right; /* Float the button to the right */
`;

export const StyleTitleBloc = styled.div`
  display: flex;
  justify-content: space-between; /* Distribute items across the width */
  align-items: center; /* Optional: aligns items vertically centered */
  width: 100%; /* Make sure the container takes full width */
`;

export const StyleTitleStatus = styled.div`
  font-size: 20px;
  font-family: "Inter", sans-serif;
  padding-bottom: 20px;
  font-weight: bold;
  color: ${(props) => props.statusColor}; /* Use prop for color */
  border: 2px solid ${(props) => props.statusColor}; /* Border matches the text color */
  border-radius: 8px; /* Rounded corners */
  padding: 10px; /* Internal padding for better spacing */
  margin-bottom: 10px;
  margin-right: 20px;
`;

export const StyleComment = styled.div`
  font-size: 10px;
  font-family: "Inter", sans-serif;
  padding-bottom: 20px;
  font-weight: bold;
  color: ${(props) => props.statusColor}; /* Use prop for color */
  border-radius: 8px; /* Rounded corners */
  padding: 10px; /* Internal padding for better spacing */
  margin-bottom: 10px;
  margin-right: 20px;
`;

export const StyleTitleWallet = styled.div`
  font-size: 20px;
  font-family: Inter, sans-serif;
  padding-bottom: 10px;
  padding-top: 10px;
  color: white;
  `;

export const ProductLabelsContainer = styled.div`
  display: flex;
  gap: 10px; // Space between buttons, adjust as needed
`;

export const ViewLabelProducts = styled.div`
  color: rgba(38, 132, 255, 1);
  padding: 24px;
  font-family: Inter, sans-serif;
  height: 70px;
  border-bottom: 3px solid rgba(38, 132, 255, 1);
  cursor: pointer;
  font-size: 30px;

  &:hover {
    opacity: 0.8; // Optional hover effect
  }
`;

export const ViewLabelMyProducts = styled.div`
  color: white;
  padding: 24px;
  font-family: Inter, sans-serif;
  height: 70px;
  border-bottom: 3px solid white;
  cursor: pointer;
  font-size: 30px;

  &:hover {
    opacity: 0.8; // Optional hover effect
  }
`;
