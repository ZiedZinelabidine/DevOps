import { Controller, useFormContext } from "react-hook-form";
import { isObjectExist } from "../../../core/helpers/object";
import CustomAutoComplete from "../CustomAutoComplete/CustomAutoComplete";
import CustomCheckboxInput from "../CustomCheckboxInput/CustomCheckboxInput";
import CustomFileInput from "../CustomFileInput/CustomFileInput";
import CustomFileMultipleInput from "../CustomMultipleFileInput/CustomFileInput";
import CustomMultiRadioInput from "../CustomMultiRadioInput/CustomMultiRadioInput";
import MultiSelectCompoent from "../CustomMultiSelectAutoComplet/multiSelect";
import CustomNumberInput from "../CustomNumberInput/CustomNumberInput";
import CustomRadioCard from "../CustomRadioCard/CustomRadioCard";
import CustomRadioCard2 from "../CustomRadioCard2/CustomRadioCard2";
import CustomRadioCard3 from "../CustomRadioCard3/CustomRadioCard3";

import CustomSelect from "../CustomSelect/CustomSelect";
import CustomTextArea from "../CustomTextArea/CustomTextArea";
import CustomTextInput from "../CustomTextInput/CustomTextInput";
import { InputTypes } from "../input.type";

function GenericInput({
  name,
  control,
  value,
  previewInput,
  isEdit,
  inputObject,
  disabledForm,
  styles,
  onChange,
  selectedFiles,
  setSelectedFiles,
}) {
  const {
    inputType,
    fieldName,
    defaultValue,
    config = {},
    accept,
    placeholder,
    options,
    textInput,
    white
  } = inputObject;


  const rules = {
    ...config.rules,
    required: isObjectExist(config.required) ? config.required : false,
  };

  const isDisabled = disabledForm ?? false;

  const formContext = useFormContext();
  if (!formContext) {
    console.warn("GenericInput must be used within a FormProvider");
    return null;
  }

  const { formState } = formContext;
  const errorMessage = formState?.errors?.[fieldName]?.message;

  switch (inputType) {
    case InputTypes.TEXT:
      return (
        <Controller
          name={fieldName}
          control={control}
          rules={rules}
          render={({ field }) => (
            <CustomTextInput
              {...field}
              value={value || field.value || ""}
              label={inputObject.label}
              textInput={textInput}
              white={white}
              onChange={(e) => {
                field.onChange(e);
                onChange?.(e);
              }}
              placeholder={inputObject.placeholder}
              disabled={isDisabled}
              error={errorMessage}
            />
          )}
        />
      );

    case InputTypes.TEXTAREA:
      return (
        <Controller
          name={fieldName}
          control={control}
          rules={rules}
          render={({ field }) => (
            <CustomTextArea
              {...field}
              value={value || field.value || ""}
              label={inputObject.label}
              onChange={(e) => {
                field.onChange(e);
                onChange?.(e);
              }}
              placeholder={inputObject.placeholder}
              disabled={isDisabled}
              error={errorMessage}
            />
          )}
        />
      );

    case InputTypes.NUMBER:
      return (
        <Controller
          name={fieldName}
          control={control}
          rules={rules}
          render={({ field }) => (
            <CustomNumberInput
              {...field}
              value={value || field.value || ""}
              label={inputObject.label}
              onChange={(e) => {
                field.onChange(e);
                onChange?.(e);
              }}
              placeholder={inputObject.placeholder}
              disabled={isDisabled}
              error={errorMessage}
            />
          )}
        />
      );

    case InputTypes.RADIO:
      return (
        <Controller
          name={fieldName}
          control={control}
          rules={rules}
          render={({ field, fieldState: { error } }) => (
            <CustomRadioCard
              id={field.id || inputObject.id}
              name={field.name || inputObject.name}
              checked={inputObject.checked}
              onChange={inputObject.onChange}
              icon={inputObject.icon}
              label={inputObject.label}
              classStyle={inputObject.classStyle}
              classContainer={inputObject.classContainer}
              error={error?.message || errorMessage}
            />
          )}
        />
      );

    case InputTypes.RADIO_2:
      return (
        <Controller
          name={fieldName}
          control={control}
          rules={rules}
          render={({ field, fieldState: { error } }) => (
            <CustomRadioCard2
              id={field.id || inputObject.id}
              name={field.name || inputObject.name}
              checked={inputObject.checked}
              onChange={inputObject.onChange}
              icon={inputObject.icon}
              label={inputObject.label}
              error={error?.message || errorMessage}
            />
          )}
        />
      );
    case InputTypes.RADIO_3:
      return (
        <Controller
          name={fieldName}
          control={control}
          rules={rules}
          render={({ field, fieldState: { error } }) => (
            <CustomRadioCard3
              id={field.id || inputObject.id}
              name={field.name || inputObject.name}
              checked={inputObject.checked}
              onChange={inputObject.onChange}
              icon={inputObject.icon}
              label={inputObject.label}
              error={error?.message || errorMessage}
            />
          )}
        />
      );
    case InputTypes.FILE:
      return (
        <Controller
          name={fieldName}
          control={control}
          rules={{
            ...rules,
            validate: (value) => {
              if (rules.required && !value) {
                return "This field is required";
              }
              return true;
            },
          }}
          defaultValue={value || null}
          render={({ field, fieldState: { error } }) => (
            <div>
              <CustomFileInput
                ref={field.ref}
                label={inputObject.label}
                selectedFile={value}
                onFileSelect={(file) => {
                  field.onChange(file);
                  if (onChange) {
                    onChange(file);
                  }
                }}
                accept={accept}
                placeholder={inputObject.placeholder}
                error={error?.message || errorMessage}
              />
            </div>
          )}
        />
      );

    case InputTypes.MULTIPLE_FILE:
      return (
        <Controller
          name={fieldName}
          control={control}
          rules={rules}
          render={({ field, fieldState: { error } }) => (
            <CustomFileMultipleInput
              label={field.name}
              value={field.value}
              onChange={(e) => {
                const files = Array.from(e?.target?.files || []);
                field.onChange(files);
                onChange?.(files);
                if (files.length > 0) {
                  setSelectedFiles(files);
                }
              }}
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
              accept=".pdf"
              placeholder="Enter please your budget for this project"
              error={error?.message || errorMessage}
            />
          )}
        />
      );
    case InputTypes.AUTOCOMPLETE:
      return (
        <Controller
          name={fieldName}
          control={control}
          defaultValue={[]}
          render={({ field, fieldState: { error } }) => {
            console.log("Rendering Autocomplete with value:", field.value);
            return (
              <CustomAutoComplete
                name={field.name}
                options={options}
                value={field.value || []}
                selectedSkills={field.value || []}
                onChange={(selectedOptions) => {
                  console.log("Autocomplete onChange:", selectedOptions);
                  field.onChange(selectedOptions);
                  onChange?.(selectedOptions);
                }}
                recieveSkills={(selectedOptions) => {
                  console.log("Autocomplete recieveSkills:", selectedOptions);
                  field.onChange(selectedOptions);
                  onChange?.(selectedOptions);
                }}
                error={error?.message}
              />
            );
          }}
        />
      );
    case InputTypes.SELECT:
      return (
        <Controller
          name={fieldName}
          control={control}
          rules={rules}
          render={({ field, fieldState: { error } }) => (
            <CustomSelect
              value={field.value}
              label={inputObject.label}
              options={
                inputObject?.options?.map((option) => ({
                  value: option.title, // Used as the value of the select
                  label: option.title, // Displayed in the dropdown
                })) || []
              }
              error={error?.message || errorMessage}
              placeholder={inputObject.placeholder}
              onChange={(value) => {
                field.onChange(value);
                onChange?.(value);
              }}
              defaultValue={defaultValue}
            />
          )}
        />
      );
    case InputTypes.SELECT_PROJECT:
      return (
        <Controller
          name={fieldName}
          control={control}
          rules={rules}
          render={({ field, fieldState: { error } }) => (
            <CustomSelect
              value={field.value}
              label={inputObject.label}
              options={
                inputObject?.options?.map((option) => ({
                  value: option.id, // Used as the value of the select
                  label: option.title, // Displayed in the dropdown
                })) || []
              }
              error={error?.message || errorMessage}
              placeholder={inputObject.placeholder}
              onChange={(value) => {
                field.onChange(value);
                onChange?.(value);
              }}
              defaultValue={defaultValue}
            />
          )}
        />
      );
    case InputTypes.CHECKBOX:
      return (
        <Controller
          name={fieldName}
          control={control}
          rules={rules}
          render={({ field, fieldState: { error } }) => (
            <CustomCheckboxInput
              value={field.value}
              label={inputObject.label}
              error={error?.message || errorMessage}
              onChange={(value) => {
                field.onChange(value);
                onChange?.(value);
              }}
            />
          )}
        />
      );
    case InputTypes.MULTISELECT:
      return (
        <Controller
          name={fieldName}
          control={control}
          rules={rules}
          render={({ field, fieldState: { error } }) => (
            <MultiSelectCompoent
              value={field.value}
              label={inputObject.label}
              isMulti={inputObject.isMulti}
              options={inputObject.options.map((input) => ({
                title: input.title,
                value: input.value,
                label: input.label,
              }))}
              defaultValue={inputObject.defaultValue.map((input) => ({
                title: input.value,
                value: input.value,
                label: input.value,
              }))}
              placeholder={inputObject.placeholder}
              name={field.name}
              error={error?.message || errorMessage}
              styles={styles}
              onChange={(value) => {
                field.onChange(value);
                onChange?.(value);
              }}
              disabled={isDisabled}
            />
          )}
        />
      );
    case InputTypes.MULTI_RADIO:
      return (
        <Controller
          name={fieldName}
          control={control}
          rules={rules}
          render={({ field, fieldState: { error } }) => (
            <CustomMultiRadioInput
              options={options} // Pass options prop to the CustomMultiRadioInput
              name={field.name}
              selectedValue={field.value || ""} // Handle the selected value from the form
              onChange={(value) => {
                field.onChange(value); // Update form state
                onChange?.(value); // Propagate the change to parent component
              }}
              disabled={isDisabled}
              error={error?.message || errorMessage}
            />
          )}
        />
      );

    default:
      return null;
  }
}

export default GenericInput;
