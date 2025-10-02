import { InputTypes } from "../../Inputs/input.type";

export const formConfig = {
  email: {
    inputType: InputTypes.TEXT,
    fieldName: "email",
    config: {
      required: true,
      placeholder: "Email address",
    },
  },
};
