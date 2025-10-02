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
  width: 90%;
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
  width: 24%;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 10px;
  height: 100px;
  text-align: center;
  border: 1px solid #e0e0e0; /* Light border for definition */
  border-radius: 8px; /* Rounded corners for softer look */
  padding: 30px; /* Padding for spacing */
  background-color: black; /* Light background to distinguish */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow for depth */

  &:hover {
    background-color: green; /* Light background to distinguish */
  }

`;
