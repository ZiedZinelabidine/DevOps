import styled from "styled-components";

export const SearchBarModalStyle = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    width: "113px",
    height: "25px",
    borderRadius: "14px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: state.isSelected ? "#2563eb" : "#1e293b",
    color: "white",
    fontFamily: "Inter, sans-serif",
    fontSize: "11px",
    margin: "4px 0",
    cursor: "pointer",
    transition: "all 0.2s ease",
    ":hover": {
      backgroundColor: "#3b82f6",
      transform: "translateY(-1px)",
    },
    ":active": {
      backgroundColor: "#1d4ed8",
    },
  }),
  control: (provided, state) => ({
    ...provided,
    width: "400px",
    height: "50px",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e293b",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: state.isFocused ? "0 0 0 2px rgba(59, 130, 246, 0.5)" : "none",
    color: "white",
    fontFamily: "Inter, sans-serif",
    fontSize: "15px",
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: "#3b82f6",
    },
  }),
  multiValue: (provided, state) => ({
    ...provided,
    width: "120px",
    height: "30px",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2563eb",
    color: "white",
    fontFamily: "Inter, sans-serif",
    fontSize: "15px",
    margin: "4px 0",
    cursor: "pointer",
    transition: "all 0.2s ease",
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: "white",
    fontWeight: "500",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "white",
    backgroundColor: "transparent",
    fontFamily: "Inter, sans-serif",
    fontSize: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#1e293b",
    borderRadius: "14px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  }),
};

export const customStylesSearchModal = {
  option: (provided, state) => ({
    ...provided,
    width: "100%",
    height: "50px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "16px",
    backgroundColor: state.isSelected ? "#2563eb" : state.isFocused ? "rgba(59, 130, 246, 0.1)" : "transparent",
    color:  "white",
    fontFamily: "Inter, sans-serif",
    fontSize: "15px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    ":hover": {
      backgroundColor: state.isSelected ? "#2563eb" : "rgba(59, 130, 246, 0.1)",
    },
  }),
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    minHeight: "50px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1e293b",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: state.isFocused ? "0 0 0 2px rgba(59, 130, 246, 0.5)" : "none",
    color: "white",
    fontFamily: "Inter, sans-serif",
    fontSize: "15px",
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: "#3b82f6",
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "white",
    backgroundColor: "transparent",
    fontFamily: "Inter, sans-serif",
    fontSize: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  multiValue: (provided, state) => ({
    ...provided,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#2563eb",
    color: "white",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    margin: "4px",
    padding: "2px 8px",
    transition: "all 0.2s ease",
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: "white",
    padding: "4px",
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    color: "white",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "white",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#1e293b",
    borderRadius: "14px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    zIndex: 100,
  }),
  menuList: (provided) => ({
    ...provided,
    padding: "8px",
    "::-webkit-scrollbar": {
      width: "8px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#4b5563",
      borderRadius: "4px",
    },
  }),
};

export const SearchTitleStyle = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #e2e8f0;
  margin-bottom: 12px;
  font-family: "Inter", sans-serif;
  letter-spacing: -0.025em;
  margin-left: 5%;
`;

export const SearchColumnstyle = styled.div`
  flex: 1;
  min-width: 0;
  
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const AdvancedSearchButtonModalContainer = styled.button`
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background: #64748b;
    cursor: not-allowed;
    transform: none;
  }
`;

export const SearchInputModalContainer = styled.div`
  position: relative;
  width: 100%;
  
  &:focus-within {
    &::after {
      content: '';
      position: absolute;
      inset: -3px;
      border-radius: 16px;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      z-index: -1;
      opacity: 0.5;
    }
  }
`;