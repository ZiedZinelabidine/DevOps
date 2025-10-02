// Modal.js
import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const SearchItem = styled.div`
  flex: 1 1 45%; // Flex-grow and basis for two items per row
  margin: 10px;
  @media (max-width: 768px) {
    flex: 1 1 100%; // Full width for mobile view
  }
`;

export const SearchItemDailyRate = styled.div`
  width: 100%;
  margin: 10px;
  @media (max-width: 768px) {
    flex: 1 1 100%; // Full width for mobile view
  }
`;

export const AdvancedSearchButtonModalContainer = styled.button`
  position: fixed;
  margin-left: 820px;
  background-color: black;
  color: white;
  height: 46px;
  width: 200px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const customStylesSearchModal = {
  option: (provided, state) => ({
    ...provided,
    width: "200px",
    height: "50px",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    color: "black",
    fontFamily: "Bold",
    fontSize: "15px",
    margin: "4px 4px ",
    cursor: "pointer",
    ":active": {
      backgroundColor: "#14171F",
    },
  }),
  control: (provided, state) => ({
    ...provided,
    width: "400px",
    height: "50px",
    overflowY: "scroll", // Adjust height to your preference
    borderRadius: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    color: "white",
    fontFamily: "Inter",
    grap: "11px",
    fontSize: "15px",
  }),
  multiValue: (provided, state) => ({
    ...provided,
    width: "150px",
    height: "30px",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#14171F",
    color: "white",
    fontFamily: "Inter",
    fontSize: "15px",
    margin: "4px 0",
    cursor: "pointer",
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: "white",
    fontWeight: "bold",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    width: "150px",
    height: "30px",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#14171F",
    color: "white",
    fontFamily: "Inter",
    fontSize: "15px",
    margin: "4px 0",
    cursor: "pointer",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "white",
    alignItems: "center",
    overflowY: "scroll",
    borderRadius: "14px",
    maxHeight: "200px",
  }),
};

export const SearchTitleStyle = styled.p`
  font-weight: 600;
  font-size: 16px;
  font-family: Inter, sans-serif;
`;

export const StayledLabel = styled.label`
  font-size: 15px;
  font-weight: 501;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
`;
