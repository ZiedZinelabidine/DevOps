import { Label, StyledInput } from "./CustomRadioCard.style";

const CustomRadioCard = ({
  id,
  name,
  checked,
  onChange,
  label,
  icon,
  classStyle,
  classContainer,
}) => {
  return (
    <div className={classContainer ? classContainer : "radio-container me-4"}>
      <StyledInput
        type="radio"
        name={name}
        id={id}
        className="radio-button"
        checked={checked}
        onChange={onChange}
      />
      <Label htmlFor={id} className={classStyle ? classStyle : "radio-label"}>
        {icon && <i className={icon}></i>}
        <div>
          <span className="text d-block">
            <b>{label}</b>
          </span>
        </div>
      </Label>
    </div>
  );
};

export default CustomRadioCard;
