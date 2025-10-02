import { Button } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center; /* Horizontally center */
  align-items: center; /* Vertically center */
  width: 100%;
  gap: 10px;
  margin-bottom: 30px;


  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
`;

// display flex the first element will take 80 percent of the width and the other 2 will take 10% each

export const ButtonGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ButtonContainerStyle = styled(Button)`
  border-radius: 10px;
`;

export const TopContainer2 = styled.div`
  display: inline-flex;
  width: 100%;
  height: 100%;
`;
export const VerticalLine = styled.div`
  border-left: 2px solid black;
  height: 100vh;
  margin: 20px;
`;
export const TopElementSwitchContainer = styled.div`
  display: inline-block;
  width: 100%;
  height: 40vh;
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

export const RowStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 25px;
  
  > * {
    flex: 0 0 calc(25% - 25px); /* For 6 items per row, accounting for gap */
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content */
  min-height: 100vh; /* Full height to avoid padding issues */
  max-height: 100vh; /* Limit the maximum height */
  overflow-y: auto; /* Enable horizontal scrolling if needed */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  background: #202124;
  width: 100%; /* Full width */
`;

export const ContainerWrapper = styled.div`
  padding-top: 30px;
  width: 100%;
  max-width: 100%; /* Prevents any max width constraints */
`;

export const ProductLabelsContainer = styled.div`
  display: flex;
  gap: 10px; // Space between buttons, adjust as needed
  margin-left: 20px;
`;

export const ViewLabelProducts = styled.div`
  color: black;
  border-bottom: 3px solid black;
  padding: 50px 30px 30px 30px;
  font-size: 20px;
  font-family: Inter, sans-serif;
  cursor: pointer;

  &:hover {
    opacity: 0.8; // Optional hover effect
  }
`;

export const ViewLabelMyProducts = styled.div`
  padding: 50px 30px 30px 30px;
  font-size: 20px;
  font-family: Inter, sans-serif;
  border-bottom: 3px solid rgba(38, 132, 255, 1);
  color: rgba(38, 132, 255, 1);


  cursor: pointer;

  &:hover {
    opacity: 0.8; // Optional hover effect
  }
`;

export const StyleProductsCount = styled.div`
  display: flex;
  font-family: Inter, sans-serif;
`;

export const StyleCount = styled.div`
  font-weight: bold;
  display: flex;
  padding-right: 10px;
`;

export const StyleCount1 = styled.div`
  display: flex;
  border-bottom: 3px solid rgba(38, 132, 255, 1);
  color: rgba(38, 132, 255, 1);
  font-family: Inter, sans-serif;
  padding: 50px 30px 30px 30px;
  font-size: 20px;
  margin-left: 400px;
`;

export const StyleLineCount = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

export const StyleBarSearch = styled.div`
  display: flex;
  width: 80%;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
    
`;

export const StyleBarSearchSkills = styled.div`
  height: 42px;
  min-width: 100px;

  @media (max-width: 767px) {
    width: 100%;
    min-width: unset;
    padding-left: 0;
  }
`;

export const NewProductButtonContainer = styled.button`
  background-color: black;
  height: 41px;
  min-width: 200px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: green;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin: 0;
  }
`;

export const TopContainer = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

export const NotFoundTextStyle = styled.div`
  font-size: 40px;
  font-weight: 501;
  font-family: serif;
  text-align: center;
  padding-top: 20%;
  color: white;
`;

export const AddNewProductButtonstyle = styled.button`
  margin-right: 30px;
  background-color: green;
  border: green;
  height: 44px;
  margin-left: 10px;
  margin-top: 5px;
  width: 250px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;
`;
