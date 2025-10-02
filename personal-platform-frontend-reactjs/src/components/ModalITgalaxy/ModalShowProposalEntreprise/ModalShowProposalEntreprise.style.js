import styled from "styled-components";

export const CardStatusProject = styled.div`
  width: 97%;
  font-family: Inter, sans-serif;
  border: 1px solid #6366f1 ;
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
    if (status === "CREATED") return "white";
    if (status === "VALIDATED") return "green";
    if (status === "FINISHED") return "green";
    if (status === "REFUSED") return "red";
    if (status === "DECLINED") return "red";
    if (status === "DECLINED") return "red";
  }};
`;

export const CardStatusProjectText = styled.div`
  padding-bottom: 10px;
  padding-top: 20px;
  color: rgb(105, 105, 105);
  font-family: Inter, sans-serif;
  align-items: center;
  display: flex;
  width: 100%;
  gap: 10px; /* Add space between flex items */
`;

export const CardProjectText = styled.div`
  padding-bottom: 10px;
  padding-top: 20px;
  color: white;
  font-family: Inter, sans-serif;
  padding-left: 10px;
  width: 100%;
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

export const Budgetdesc1 = styled.p`
  font-family: Inter, sans-serif;
  border: 1px solid #ccc; // Lighter border for subtle contrast
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // Soft shadow for depth
  right: 0;
  font-size: 24px;
  color: red;
  font-weight: 600;
  line-height: 30.86px;
  padding: 10px;
`;
