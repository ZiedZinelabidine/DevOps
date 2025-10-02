import styled from "styled-components";

export const GenericFormChatbotStack = styled.div`
  display: inline-block;
  border: 1px solid;
  border-radius: 10px;
  margin-left: 20px;
  width: 100%;
  margin-top: 6rem;
  padding: 2%;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;
export const GlobalChatBotContainer = styled.div`
  height: auto;
  min-height: 100%;
  padding: 10px;
`;

export const InlineFlexContainer = styled.div`
  display: inline-flex;
  padding: 2%;
`;
export const MarginLeft40pxImageContainer = styled.img`
  margin-left: 40px;
`;
export const MarginLeft40PxFullWidthInlineBlockContainer = styled.div`
  display: inline-block;
  margin-left: 40px;
  width: 100%;
`;
export const Width60PerContainer = styled.div`
  width: 60%;
`;
export const InlineBlockMarginTop20PxContainer = styled.div`
  display: inline-block;
  margin-top: 20px;
  padding: 2%;
`;
export const SelectedItemContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  height: 30vh;
  width: 70%;
  padding: 2%;
  margin-left: 2%;
  margin-bottom: 2%;
  background-color: ${({ isSelected }) =>
    isSelected ? "black" : "transparent"};
  color: ${({ isSelected }) => (isSelected ? "white" : "inherit")};
  box-shadow: 7px 7px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding-bottom: 10px;
  padding-right: 25px;
  color: #495057;
  height: 40px;
  width: 15px;
  border-radius: 50%;

  &:hover {
    opacity: 0.8;
  }
`;
