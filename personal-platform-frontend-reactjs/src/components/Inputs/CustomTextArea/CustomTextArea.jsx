import React from "react";
import { StyledTextArea } from "./CustomTextArea.style";

const CustomTextArea = ({
  value,
  disabled,
  name,
  onChange,
  placeholder,
  row,
  label,
}) => {
  return (
    <React.Fragment>
      {/*label && (
        <label htmlFor={label} className="form-label">
          {label}
          <sup>*</sup>
        </label>
      ) */}
      <StyledTextArea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        rows={row}
        disabled={disabled}
      />
    </React.Fragment>
  );
};

export default CustomTextArea;
