import { Button } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding: 10px;
  align-items: center;

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
  gap: 25px;
  margin-top: 30px;
  width: 100%;
  justify-content: center;

  > * {
    flex: 0 0 calc(16.666% - 21px); /* 6 cards per row, accounting for gap */
    max-width: calc(
      16.666% - 21px
    ); /* Ensure cards don't grow beyond their size */
  }

  @media (max-width: 1200px) {
    > * {
      flex: 0 0 calc(25% - 19px); /* 4 cards per row */
      max-width: calc(25% - 19px);
    }
  }

  @media (max-width: 992px) {
    > * {
      flex: 0 0 calc(33.333% - 17px); /* 3 cards per row */
      max-width: calc(33.333% - 17px);
    }
  }

  @media (max-width: 768px) {
    > * {
      flex: 0 0 calc(50% - 13px); /* 2 cards per row */
      max-width: calc(50% - 13px);
    }
  }

  @media (max-width: 576px) {
    > * {
      flex: 0 0 calc(100% - 25px); /* 1 card per row */
      max-width: calc(100% - 25px);
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
  background: #f3f3f3; /* Background color */
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
`;

export const ViewLabelProducts = styled.div`
  color: rgba(38, 132, 255, 1);
  border-bottom: 3px solid rgba(38, 132, 255, 1);
  padding: 50px 30px 30px 30px;
  font-size: 20px;
  font-family: Inter, sans-serif;
  cursor: pointer;
  &:hover {
    opacity: 0.8; // Optional hover effect
  }
`;

export const ViewLabelMyProducts = styled.div`
  color: black;
  padding: 50px 30px 30px 30px;
  font-size: 20px;
  font-family: Inter, sans-serif;
  border-bottom: 3px solid black;

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
  position: relative;
  border-radius: 15px;
  color: black;
  height: 50px;
  flex: 1;
  min-width: 200px;

  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const StyleBarSearchSkills = styled.div`
  height: 50px;
  min-width: 250px;

  @media (max-width: 767px) {
    width: 100%;
    min-width: unset;
    padding-left: 0;
  }
`;

export const NewProductButtonContainer = styled.button`
  background-color: black;
  height: 50px;
  min-width: 150px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  margin: 0 10px;

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
  padding-top: 100px;
`;
