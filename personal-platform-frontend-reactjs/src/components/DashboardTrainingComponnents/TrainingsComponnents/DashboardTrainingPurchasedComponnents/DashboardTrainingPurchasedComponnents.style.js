import { Button } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  margin-left: 2%;
  margin-bottom: 10px;
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
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 5 cards per row */
  max-width: 800px;
  gap: 25px; /* Space between cards */
  margin-top: 30px; /* Space from search bar */

  @media (max-width: 1200px) {
    grid-template-columns: repeat(
      4,
      1fr
    ); /* 4 cards per row on medium screens */
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* 3 cards per row on smaller screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* 2 cards per row on mobile screens */
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr; /* 1 card per row on very small screens */
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
  color: rgba(38, 132, 255, 1);
  padding: 50px 30px 30px 30px;
  font-size: 20px;
  font-family: Inter, sans-serif;
  border-bottom: 3px solid rgba(38, 132, 255, 1);
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
  margin-right: 20px;
  border-radius: 15px;
  color: black;
  height: 40px;
  @media (min-width: 767px) and (max-width: 1023px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 70%;
  }
`;

export const StyleBarSearchSkills = styled.div`
  padding-top: 2px;
  height: 50px;
  width: 200px;
`;

export const NewProductButtonContainer = styled.button`
  margin-right: 50px;
  margin-left: 10px;
  background-color: black;
  height: 40px;
  margin-top: 2px;
  width: 250px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  gap: 15px;

  &:hover {
    background-color: green;
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
  margin-top: 20%;
`;
