import React from "react";
import { StyledInput } from "./CustomNumberInput.style";

const CustomNumberInput = ({
  id,
  name,
  placeholder,
  value,
  disabled,
  onChange,
  label,
  defaultValue,
}) => {
  function isValidPrice(value) {
    return /^\d*$/.test(value);
  }
  return (
    <React.Fragment>
      <StyledInput
        type="number"
        id={id}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
      />
      {/* <p style={{ fontSize: '10px', textAlign: 'right', color: isValidPrice(value) ? 'black' : 'black' }}> Price must be a number . </p> */}
    </React.Fragment>
  );
};

export default CustomNumberInput;
