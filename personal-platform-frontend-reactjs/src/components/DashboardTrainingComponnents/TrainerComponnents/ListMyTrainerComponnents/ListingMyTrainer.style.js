import { Button } from "react-bootstrap";
import styled from "styled-components";

export const ButtonGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainerStyle = styled(Button)`
  border-radius: 10px;
`;

export const VerticalLine = styled.div`
  border-left: 2px solid black;
  height: 100vh;
  margin: 20px;
`;

export const ButtonStyle = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  height: 100%;
  font-weight: ${({ selected }) =>
    selected ? "600" : "400"}; // bold if selected
  color: ${({ selected }) =>
    selected ? "#000000" : "#A0A0A0"}; // black if selected, gray otherwise
  margin-right: 20px; // space between buttons
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: ${({ selected }) =>
      selected ? "#000000" : "transparent"}; // underline if selected
  }

  &:hover {
    color: #000000; // turn black on hover
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f3f3f3; /* Background color */
`;

export const ContainerWrapper = styled.div`
  padding-top: 30px;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0; /* Top and bottom margin for spacing */
`;

export const StyledSearchBarContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 25px;
  margin-top: 30px;
  > * {
    flex: 0 0 calc(16.666% - 25px); /* For 6 items per row, accounting for gap */
  }

  @media (max-width: 1200px) {
    > * {
      flex: 0 0 calc(25% - 25px); /* For 4 items per row */
    }
  }

  @media (max-width: 992px) {
    > * {
      flex: 0 0 calc(33.333% - 25px); /* For 3 items per row */
    }
  }

  @media (max-width: 768px) {
    > * {
      flex: 0 0 calc(50% - 25px); /* For 2 items per row */
    }
  }

  @media (max-width: 576px) {
    > * {
      flex: 0 0 100%; /* For 1 item per row */
    }
  }
`;

export const CreateTrainingButtonContainer = styled.button`
  background-color: black;
  height: 40px;
  margin-top: 2px;
  width: 250px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  gap: 10px;

  &:hover {
    border: none;
    background-color: green; // Keep hover background color
  }
`;

export const SearchFilter = styled.div`
  padding-left: 10px;
  width: 250px;
  display: flex;
  height: 41px;
`;

export const SearchFilterBar = styled.div`
  width: 80%;
  display: flex;
  height: 43px;
  margin-inline: 10px;
`;

export const SearchFilterSkills = styled.div`
  padding-left: 10px;
  width: 180px;
  display: flex;
  padding-top: 4px;
`;

export const NotFoundTextStyle = styled.div`
  font-size: 40px;
  font-weight: 501;
  font-family: serif;
  text-align: center;
  padding-top: 20%;
`;
