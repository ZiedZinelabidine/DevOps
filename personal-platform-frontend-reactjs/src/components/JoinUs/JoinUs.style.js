import { Button } from "react-bootstrap";
import styled from "styled-components";

export const FlexCenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  padding-bottom: 10px;
  width: 80%;
  height: auto;
  margin: auto;
  overflow: hidden;
  @media (max-width: 1440px) {
    width: 100%;
  }
`;
export const InlineFlexContainer = styled.div`
  display: inline-flex;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProjectTypeCardsContainer = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-around;
`;

export const UserTypeCardsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const InlineBlockW45PContainer = styled.div`
  display: inline-block;
  width: 60%;
  @media (max-width: 1024px) {
    width: 90%;
    align-self: center;
  }
`;
export const MarginBottom20PxContainer = styled.div`
  margin-bottom: 20px;
`;
export const FontSize30PXContainer = styled.b`
  padding-bottom: 0px;
  font-size: 20px;
  font-family: Inter, sans-serif;
`;
export const FontSize20PxGrayContainer = styled.b`
  font-size: 20px;
  color: gray;
`;
export const SelectedItemContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  border: 1px solid black;
  height: 30vh;
  width: 70%;
  padding: 2%;
  margin-left: 2%;
  margin-bottom: 2%;
  background-color: ${({ isSelected }) =>
    isSelected ? "#202124" : "transparent"};
  color: ${({ isSelected }) => (isSelected ? "white" : "inherit")};
  box-shadow: ${({ isSelected }) =>
    isSelected ? "5px 5px 0px 0px #090A0B1A" : "5px 5px 0px 0px #000000"};
  border-radius: 5px;
  @media (max-width: 1024px) {
    height: auto;
  }
`;

export const ItemContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  border: 1px solid;
  border-radius: 10px;
  height: 40vh;
  width: 70%;
  margin-left: 2%;
`;
export const Padding10PxContainer = styled.p`
  padding: 0, 2%;
  font-family: Inter, sans-serif;
  color: ${({ isSelected }) => !isSelected && "#AAB9C5"};
`;
export const FontSize40PxContainer = styled.b`
  font-size: 55px;
`;
export const FontSize25Px495057Color = styled.p`
  font-size: 1.2rem;
  color: #808080;
  font-family: Chilanka, sans-serif;
`;
export const FontSize20PxContainer = styled.p`
  font-size: 18px;
  color: #828f9b;
  font-family: Inter, sans-serif;
  font-weight: bold;
  margin-bottom: 40px;
`;
export const BorderedFWPad2BR10Container = styled.div`
  border: 1px solid;
  width: 100%;
  padding: 2%;
  border-radius: 10px;
`;
export const CenteredH5vhContainer = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
`;
export const InlineFlexFwMt30px = styled.div`
  display: inline-flex;
  width: 100%;
  margin-top: 30px;
`;
export const InlineBlockContainer = styled.div`
  display: inline-block;
`;
export const ButtonGroupsContainer = styled.div`
  display: inline-block;
  border-radius: 10px;
  height: auto;
  margin-left: 20px;
  width: 80%;
  margin-top: 6%;
`;
export const ButtonGroupsContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 10px;
  min-height: 100%;
  height: fit-content;
  margin-left: 20px;
  width: 70%;
  margin-top: 5rem;
  padding: 2%;
  box-shadow: 10px 10px 5px 0px black;

  & input {
    width: 100%;
    margin-top: 0.5rem;
  }

  & .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
  }

  @media (max-width: 1024px) {
    width: 90%;
    margin-top: unset;
    margin-left: unset;
    align-self: center;
  }
`;

export const styleJoin = styled.div`
  overflow: hidden;
`;

export const FormQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #202124;
  }
`;

export const FormQuestion = styled.div`
  font-size: 1rem;
  color: #495057;
  font-family: Inter, sans-serif;
`;
