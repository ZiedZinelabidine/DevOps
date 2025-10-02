import React from "react";
import { StyledSelect } from "./CustomSelect.style";

const CustomSelect = ({
  value,
  name,
  onChange,
  placeholder,
  options,
  error,
  style,
}) => {
  return (
    <React.Fragment>
      <StyledSelect value={value} name={name} style={style} onChange={onChange}>
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      {error && (
        <span
          className="error-message"
          style={{ fontSize: "13px", color: "red" }}
        >
          {error}
        </span>
      )}
    </React.Fragment>
  );
};

export default CustomSelect;
