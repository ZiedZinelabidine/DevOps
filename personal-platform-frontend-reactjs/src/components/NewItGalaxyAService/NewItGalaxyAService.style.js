import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 600px; // Define a max width for the form
  margin: 0 auto; // Center the form
  padding: 30px;
  background-color: #ffffff; // Background color for the form
  border-radius: 8px; // Rounded corners
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); // Subtle shadow
`;

export const TitleForm = styled.h2`
  font-size: 35px;
  margin-left: 25%;
  color: white;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;


  hr {
    margin: 10px auto;
    width: 50%; // Width of the divider
    height: 2px;
    background-color: #007bff; // Color for the divider
    border: none;
    border-radius: 5px;
  }
`;

export const TitleStyle = styled.div`
  display: flex;
  padding-top: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; // Center the button horizontally
  align-items: center; // Center the button vertically if needed
  margin-top: 20px;
  margin-left: 1%;
`;

export const ButtonSubmit = styled.button`
  width: 98%;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, #155e75, #6d28d9);
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
    
    &::before {
      left: 100%;
    }
  }
  
  &:focus {
    outline: none;
 }
    
 &:disabled {
    cursor: not-allowed; // Not-allowed cursor for disabled button
  }
`;

export const InputContainer = styled.div`
  margin-left: 10px;
  margin-right: 3px;
  background-color: black; // Light background for input containers
  padding: 15px;
  border-radius: 8px; // Rounded corners for input containers
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); // Light shadow effect
  width: 100%;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 16px; // Font size for labels
  font-weight: bold;
  color: #555; // Label color
  margin-bottom: 8px; // Space below label
  color: white;

`;

export const GenericInputField = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 15px;
  text-align: left; // Align text to the left
  direction: ltr; // Ensure LTR direction
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;

export const LocationStyle = styled.div`
  display: flex;
`;

export const LocationStyleModal = styled.div`
  display: flex;
  margin-left: 600px;
`;

export const TextStyleModal = styled.div`
  font-size: 25px; /* Font size for the message */
  font-family: Inter, sans-serif;
  margin-bottom: 20px; /* Space below the text */
`;

export const ButtonSubmitStyle = styled.button`
  background-color: black;
  color: white;
  height: 40px;
  width: 200px;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.3s ease;
  margin-left: 30px;
  &:hover {
    transform: scale(1.05); // Slightly increase size on hover
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); // Focus outline effect
  }
  &:disabled {
    background-color: #ccc; // Color for disabled state
    cursor: not-allowed; // Not-allowed cursor for disabled button
  }
`;

export const customStylesSearchModal = {
  option: (provided, state) => ({
    ...provided,
    height: "50px",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
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
    height: "50px",
    overflowY: "scroll",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "white",
    fontFamily: "Inter",
    grap: "11px",
    fontSize: "15px",
  }),
  multiValue: (provided, state) => ({
    ...provided,
    width: "200px",
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

export const ButtonSubmitDisable = styled.button`
  background-color: gray;
  color: white;
  height: 50px;
  width: 300px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05); // Slightly increase size on hover
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); // Focus outline effect
  }

  &:disabled {
    background-color: #ccc; // Color for disabled state
    cursor: not-allowed; // Not-allowed cursor for disabled button
  }
`;

export const ContainerStyleShareTask = styled.div`
  width: 100%;
  padding : 20px;
  min-height: 100vh;
  background-color: #020617;

`;

export const BackButton = styled.button`
  background: none;
  border: none;
  padding-top: 10px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  color: white;
`;

export const SuccessMessage = styled.div`
  text-align: center;
  padding: 3rem 0;
  border: 1px solid #6366f1;
  margin-top: 20%;
`;

export const SuccessIcon = styled.div`
  margin: 0 auto 1.5rem;
  color: #10b981;
  animation: scaleIn 0.5s ease;
  
  @keyframes scaleIn {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const SuccessTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #f8fafc;
`;

export const SuccessText = styled.p`
  font-size: 1.125rem;
  color: #e2e8f0;
  max-width: 30rem;
  margin: 0 auto;
`;