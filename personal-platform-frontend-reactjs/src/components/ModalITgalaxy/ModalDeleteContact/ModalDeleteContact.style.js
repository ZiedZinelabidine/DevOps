import styled from "styled-components";

export const ButtonContainerDelete = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextDelete = styled.div`
  font-size: 30px;
  font-family: Inter, sans-serif;
  font-weight: bold;
  padding-bottom: 30px;
  padding-top: 30px;
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

export const DeleteProposalButton = styled.button`
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
