import styled from "styled-components";

export const CardProposal = styled.div`
  box-shadow: 10px 10px 0px 0px #3f464f;
  height: 209px;
  width: 100%;
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded corners */
  padding: 16px; /* Inner spacing */
  margin: 16px; /* Outer spacing */
  margin-top: 50px;
  transition: transform 0.3s; /* Smooth transition for hover effect */

  align-items: center; /* Center align items */
  margin: 20px; /* Optional: Outer spacing for the container */
`;

export const PriceStyle = styled.div`
  justify-content: space-between;
  align-items: center;
`;

export const CardProposalTitle = styled.div`
  color: black;
  font-family: Inter, sans-serif;
  font-weight: 501;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DatePost = styled.div`
  color: #c8c8c8;
  font-family: Inter, sans-serif;
  font-weight: 501;
  padding-top: 30px;
  margin-bottom: 20px;
`;

export const NotFoundTextStyle = styled.div`
  font-size: 40px;
  font-weight: 501; /* Change if you want to set to normal or bold */
  font-family: serif;

  /* Center text */
  text-align: center;
  margin: 0; /* Reset margins */

  /* Optional styles for full-width centering */
  width: 100%; /* Ensure it takes the full width of the container */
  display: flex; /* Use flexbox for better centering */
  justify-content: center; /* Horizontally center */
`;

export const CardContainers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 707px;
  margin-top: -130px;
`;

export const AllCard = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: flex-start;
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseDashButton = styled.button`
  background: black;
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
    background: gray; // Change background color on hover
    cursor: pointer; // Optional: Change cursor to pointer
  }
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

export const HeaderStyle = styled.div`
  display: flex;
`;

export const ButtonContainerDecline = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextDecline = styled.div`
  font-size: 30px;
  font-family: Inter, sans-serif;
  font-weight: bold;
  padding-bottom: 30px;
  padding-top: 30px;
`;
