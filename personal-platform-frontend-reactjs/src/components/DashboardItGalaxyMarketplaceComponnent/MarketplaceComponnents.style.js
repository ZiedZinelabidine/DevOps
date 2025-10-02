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
  margin-bottom: 30px;
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

export const StyledHr = styled.hr`
    border: none;
    height: 2px; /* Adjust height as needed */
    background-color: white; /* Set the color to white */
    color: white;
    margin-top: 15px;
    width: 90%;
    align-items: center;
    justify-content: center;
    margin-left: 5%;

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
  background: #202124; /* Background color */
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
  margin-left: 3%;
  color: black;
  height: 42px;
  flex: 1;
  max-width: 55%;

  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const StyleBarSearchSkills = styled.div`
  height: 42px;
  min-width: 200px;

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
  justify-content: center;
  align-items: center;
  margin-top: 20%; 
  color: white;
`;

export const AdvancedSearchButtonContainerResetFilter = styled.div`
  background: rgba(228, 98, 111, 1);
  margin-top: 10px;
  height: 45px;
  padding: 8px;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  border: none;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: red;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const customStyles = {
  control: (provided) => ({
    ...provided,
    width: '300px',
    height: "50px",
    padding: '0.5rem 3rem',
    backgroundColor: '#111827',
    border: '1px solid #6366f1',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: '0.5rem',
    color: 'white',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#6366f1',
    }
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'rgba(255, 255, 255, 0.5)',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
  }),
  multiValue: (provided, state) => ({
    ...provided,
    width: "150px",
    height: "50px",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#1f2937',
    color: 'white',
    fontFamily: "Inter",
    fontSize: "15px",
    margin: "4px 0",
    cursor: "pointer",
  }),

  multiValueLabel: (provided) => ({
    ...provided,
    color: 'red',

  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: 'white',
    ':hover': {
      backgroundColor: '#6366f1',
      color: 'white',
    }
  }),
};


