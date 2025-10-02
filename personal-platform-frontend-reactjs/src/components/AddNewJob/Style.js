import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding : 1%;
  background: linear-gradient(145deg, #1f2937 0%, #111827 100%);
  border-radius: 1.5rem;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  overflow: hidden;
  backdrop-filter: blur(10px);
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
    cursor: not-allowed; // Not-allowed cursor for disabled button
  }
`;

export const ContainerStyleCompose = styled.div`
  width: 90%;
  min-height: 100vh;
   padding-bottom: 30px;
   background: #202124;
   padding: 20px;
`;



export const FormContent = styled.div`
  padding: 3rem;
`;

export const TitleStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(59, 130, 246, 0) 0%,
      rgba(59, 130, 246, 0.5) 50%,
      rgba(59, 130, 246, 0) 100%
    );
  }
`;

export const BackButton = styled.button`
  color: #60a5fa;
  transition: all 0.3s ease;
  background: rgba(59, 130, 246, 0.1);
  border: none;
  padding: 0.75rem;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #93c5fd;
    background: rgba(59, 130, 246, 0.2);
    transform: translateX(-2px);
  }
`;

export const TitleForm = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
  padding-left: 35%;
  padding-top: 2%;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: -0.025em;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputContainer = styled.div`
  background: rgba(17, 24, 39, 0.6);
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  width: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 8px 12px -1px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.15);
  }
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1.25rem;
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid rgba(75, 85, 99, 0.4);
  border-radius: 0.75rem;
  color: white;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #60a5fa;
    box-shadow: 
      0 0 0 3px rgba(59, 130, 246, 0.3),
      0 0 0 1px #60a5fa;
    background: rgba(17, 24, 39, 0.8);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const LocationStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.875rem 1.25rem;
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid rgba(75, 85, 99, 0.4);
  border-radius: 0.75rem;
  color: white;
  font-size: 1rem;
  transition: all 0.2s ease;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.5em;
  padding-right: 2.5rem;

  &:focus {
    outline: none;
    border-color: #60a5fa;
    box-shadow: 
      0 0 0 3px rgba(59, 130, 246, 0.3),
      0 0 0 1px #60a5fa;
    background-color: rgba(17, 24, 39, 0.8);
  }

  option {
    background-color: #1f2937;
    color: white;
    padding: 0.5rem;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.875rem 1.25rem;
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid rgba(75, 85, 99, 0.4);
  border-radius: 0.75rem;
  color: white;
  font-size: 1rem;
  transition: all 0.2s ease;
  height: 12rem;
  resize: vertical;
  line-height: 1.5;

  &:focus {
    outline: none;
    border-color: #60a5fa;
    box-shadow: 
      0 0 0 3px rgba(59, 130, 246, 0.3),
      0 0 0 1px #60a5fa;
    background: rgba(17, 24, 39, 0.8);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

export const ButtonSubmit = styled.button`
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  border-radius: 1rem;
  border: none;
  transition: all 0.3s ease;
  width: 300px;
  height: 56px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 8px 20px rgba(37, 99, 235, 0.3),
      0 0 0 1px rgba(59, 130, 246, 0.5);

    &::before {
      transform: translateX(100%);
    }
  }

  &:focus {
    outline: none;
    box-shadow: 
      0 0 0 3px rgba(59, 130, 246, 0.5),
      0 8px 20px rgba(37, 99, 235, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    background: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%);
    cursor: not-allowed;
    transform: none;
    
    &::before {
      display: none;
    }
  }
`;
