import Select from "react-select";

export default function MultiSelectCompoent({
  options,
  selectedOptions,
  defaultValue,
  onChange,
  isMulti,
  styles,
  rules,
  placeholder,
  disabled,
}) {

  return (
    <Select
      closeMenuOnSelect={true}
      defaultValue={defaultValue}
      value={selectedOptions}
      isMulti={isMulti}
      options={options}
      styles={styles}
      rules={rules}
      onChange={onChange}
      placeholder={placeholder}
      isDisabled={disabled}
    />
  );
}
