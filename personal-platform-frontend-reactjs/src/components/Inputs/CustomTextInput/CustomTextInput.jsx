import styled from "styled-components";
import { Search } from "lucide-react";

export const StyledSearchIcon = styled(Search)`
  position: absolute;
  right: 15px;
  color: black;
  margin-top: 8px ;
  z-index: 2;
  transition: transform 0.2s ease;
`;

export const StyledInput = styled.input`
  padding: ${(props) => (props.textInput ? '0.8rem' : '0.8rem 3rem')};
  background-color: ${(props) => (props.white ? 'white' : '#111827')};
  border: 1px solid #6366f1;
  border-radius: 0.5rem;
  color: ${(props) => (props.white ? 'black' : 'white')};
  font-size: 1rem;
  box-sizing: border-box;
  transition: all 0.2s ease;
  width: 1000px;
  

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  @media (max-width: 1280px) {
    font-size: 15px; // Responsive font size
  }
`;


const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 8px;
  position: relative; // Position relative to contain the absolute positioned icon
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  color: #333;
`;


const SearchIcon = styled.div`
position: absolute;
left: 1rem;
top: 50%;
transform: translateY(-50%);
color: rgba(255, 255, 255, 0.6);
pointer-events: none;
`;

const CustomTextInput = ({
  value,
  name,
  disabled,
  onChange,
  placeholder,
  defaultValue,
  error,
  label,
  textInput=false,
  white=false,
  id = name,
}) => {
  return (
    <InputContainer>
      <StyledInput
        type="text"
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
        error={error}
        aria-label={label || placeholder}
        aria-invalid={!!error}
        textInput={textInput}
        white={white}
      />
      {!textInput && (
     <SearchIcon>
      <Search size={20} />
      </SearchIcon>)}

    </InputContainer>
  );
};

export default CustomTextInput;