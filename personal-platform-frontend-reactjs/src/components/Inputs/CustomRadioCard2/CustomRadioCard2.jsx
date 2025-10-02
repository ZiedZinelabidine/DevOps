import {
  Label,
  StyledInput,
  StyledRadioContainer,
} from "./CustomRadioCard.style";

const CustomRadioCard2 = ({ id, name, checked, onChange, label, icon }) => {
  return (
    <StyledRadioContainer>
      <StyledInput
        type="radio"
        name={name}
        id={id}
        className="radio-button"
        checked={checked}
        onChange={onChange}
      />
      <Label htmlFor={id} onClick={onChange} className="radio-label">
        <div>
          <span className="text d-block">
            <b>{label}</b>
          </span>
        </div>
      </Label>
    </StyledRadioContainer>
  );
};

export default CustomRadioCard2;
