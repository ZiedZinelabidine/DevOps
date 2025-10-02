import { StyledInput } from "./CustomCheckboxInput.style";

const CustomCheckboxInput = ({
  value,
  name,
  onChange,
  placeholder,
  checked,
  label,
}) => {
  return (
    <div
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "30px",
      }}
    >
      <StyledInput
        type="checkbox"
        placeholder={placeholder}
        value={value}
        checked={checked}
        name={name}
        onChange={onChange}
      />
      {label && (
        <label htmlFor={label} className="form-label">
          {label}
          <sup>*</sup>
        </label>
      )}
    </div>
  );
};

export default CustomCheckboxInput;
