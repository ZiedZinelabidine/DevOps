import {
  CheckIcon,
  RadioContainer,
  RadioInput,
  RadioLabel,
  RadioOption,
  Subtitle,
  Title,
} from "./CustomMultiRadioInput.style";

const CustomMultiRadioInput = ({
  options,
  name,
  selectedValue,
  onChange,
  disabled,
  error,
}) => {

  return (
    <div>
      <RadioContainer>
        {options.map((option) => (
          <RadioOption key={option.id}>
            <RadioInput
              type="radio"
              id={option.id}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={(e) => onChange(e.target.value)}
              disabled={disabled}
            />
            <RadioLabel
              htmlFor={option.id}
              checked={selectedValue === String(option.value)}
            >
              <Title>{option.label}</Title>
              <Subtitle>{option.subTitle}</Subtitle>
              <CheckIcon checked={selectedValue === String(option.value)} />
            </RadioLabel>
          </RadioOption>
        ))}
      </RadioContainer>
      {error && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "8px" }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default CustomMultiRadioInput;
