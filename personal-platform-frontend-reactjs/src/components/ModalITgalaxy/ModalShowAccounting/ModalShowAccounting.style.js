import styled from "styled-components";

export const CardStatusProject = styled.div`
  width: 97%;
  font-family: Inter, sans-serif;
  border: 1px solid;
  border-radius: 4px;
  padding: 10px 16px 32px 16px;
  align-items: center; /* Center items vertically */
  margin: 16px;
  margin-top: 30px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  /* Set background color based on props */
  color: ${({ status }) => {
    if (status === "CREATED") return "orange";
    if (status === "VALIDATED") return "green";
    if (status === "FINISHED") return "green";
    if (status === "REFUSED") return "red";
    if (status === "DECLINED") return "red";
    if (status === "SUSPEND") return "red";
  }};
`;

export const CardStatusProjectText = styled.div`
  padding-bottom: 10px;
  padding-top: 20px;
  color: rgb(105, 105, 105);
  font-family: Inter, sans-serif;
  padding-left: 10px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
  gap: 10px; /* Add space between flex items */
`;

export const CardProjectText = styled.div`
  padding-bottom: 10px;
  padding-top: 20px;
  color: black;
  font-family: Inter, sans-serif;
  padding-left: 10px;
  width: 100%;
  font-size: 20px;
`;

export const TitreColum = styled.div`
  font-family: Inter, sans-serif;
  font-weight: 700;
  padding-left: 12px;
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AcceptProposalButton = styled.button`
  background: var(--Success-Success200, rgba(21, 176, 151, 1));
  color: white;
  margin-left: auto;
  height: 46px;
  width: 200px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;

  &:hover {
    background: green; // Change background color on hover
    cursor: pointer; // Optional: Change cursor to pointer
  }
`;

export const DeclineProposalButton = styled.button`
  background: var(--Error-Error100, rgba(228, 98, 111, 1));
  color: white;

  height: 46px;
  width: 200px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;

  &:hover {
    background: red; // Change background color on hover
    cursor: pointer; // Optional: Change cursor to pointer
  }
`;

export const ButtonContainerDecline = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderStyle = styled.div`
  display: flex;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const HeaderText = styled.div`
  font-weight: bold;
  padding-left: 27px;
  padding-top: 10px;
  font-family: Inter, sans-serif;
`;

export const TextDecline = styled.div`
  font-size: 30px;
  font-family: Inter, sans-serif;
  font-weight: bold;
  padding-bottom: 30px;
  padding-top: 30px;
`;

export const TitleFolder = styled.div`
  display: flex;
  justify-content: space-between; /* Distribute space between elements */
  align-items: center; /* Vertically center content */
  width: 100%; /* Ensure it takes the full width of the parent */
`;

export const StatusFolder = styled.div`
  font-family: Inter, sans-serif;
  color: black; /* Optional: Define color for status text */
  font-weight: 501;
  font-size: 20px;
  margin-left: 700px; /* This ensures the component is pushed to the right */
`;

export const LinkContainer = styled.div`
  width: 100%;
  margin-top: 10px; /* Adjusted margin to space out from top */
  height: auto;
  text-align: left; /* Align text to the left */
  padding: 20px; /* Increased padding for spacing */
  background-color: #ffffff; /* White background for clarity */

  p {
    margin: 0; /* Reset margin for paragraph */
    color: rgb(0, 0, 0); /* Define color for clarity */
    font-size: 14px; /* Adjust font size for readability */
    line-height: 1.8; /* Increased line height for better spacing */
    font-family: "Inter", sans-serif; /* Ensure consistent font */
    margin-bottom: 10px; /* Add bottom margin for spacing between lines */
  }
`;
