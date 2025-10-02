import styled from "styled-components";

export const StyledApplicationDetailContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: #f3f3f3; /* Background color */
`;

export const StyledApplicationDetailContentContainer = styled.div`
  flex: 1;
  padding: 40px;
  padding-top: 60px;
  position: relative;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--BaseBaseBlack);

  &:hover {
    color: var(--PrimaryBlue);
  }
`;

export const TitleContainer1 = styled.div`
  display: flex;
`;

export const TitleContainer = styled.div`
  width: 72%;
  margin-top: 20px;
  height: 100px;
  text-align: center;
  border: 1px solid #e0e0e0; /* Light border for definition */
  border-radius: 8px; /* Rounded corners for softer look */
  padding: 15px; /* Padding for spacing */
  background-color: white; /* Light background to distinguish */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow for depth */
`;

export const TitleContainerChapters = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  height: 100px;
  text-align: center;
  border: 1px solid #e0e0e0; /* Light border for definition */
  border-radius: 8px; /* Rounded corners for softer look */
  padding: 15px; /* Padding for spacing */
  background-color: #f9f9f9; /* Light background to distinguish */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow for depth */
`;

export const EditProductEye = styled.div`
  width: 8%;
  margin-top: 22px;
  margin-left: 15px;
  height: 100px;
  text-align: center;
  border: 1px solid #e0e0e0; /* Light border for definition */
  border-radius: 8px; /* Rounded corners for softer look */
  padding: 15px; /* Padding for spacing */
  background-color: black; /* Light background to distinguish */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  cursor: pointer;
  &:hover {
  background-color: green; /* Light background to distinguish */
  }
`;

export const EditProductTrash = styled.div`
  width: 7%;
  margin-top: 22px;
  margin-left: 20px;
  margin-right: 25px;
  height: 100px;
  text-align: center;
  border: 1px solid #e0e0e0; /* Light border for definition */
  border-radius: 8px; /* Rounded corners for softer look */
  padding: 15px; /* Padding for spacing */
  background-color: black; /* Light background to distinguish */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  cursor: pointer;
  &:hover {
  background-color: red; /* Light background to distinguish */
  }
`;
export const EditProductPencil = styled.div`
  width: 8%;
  margin-top: 22px;
  margin-left: 20px;
  height: 100px;
  text-align: center;
  border: 1px solid #e0e0e0; /* Light border for definition */
  border-radius: 8px; /* Rounded corners for softer look */
  padding: 15px; /* Padding for spacing */
  background-color: black; /* Light background to distinguish */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  cursor: pointer;
  &:hover {
  background-color: green; /* Light background to distinguish */
  }

`;

export const ButtonContainerDelete = styled.div`
  display: flex;
`;

export const DeleteProposalButton = styled.button`
  background: var(--Error-Error100, rgba(228, 98, 111, 1));
  color: white;
  height: 80px;
  width: 300px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
  grap: 15px;
  &:hover {
    background: red; // Change background color on hover
    cursor: pointer; // Optional: Change cursor to pointer
  }
`;

export const AcceptProposalButton = styled.button`
  background: var(--Success-Success200, rgba(21, 176, 151, 1));
  color: white;
  margin-left: 20px;
  height: 80px;
  width: 300px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
  grap: 15px;
  &:hover {
    background: green; // Change background color on hover
    cursor: pointer; // Optional: Change cursor to pointer
    color: white;
  }
`;