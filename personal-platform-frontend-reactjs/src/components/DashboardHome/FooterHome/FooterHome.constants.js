import { InputTypes } from "../../Inputs/input.type";

export const formConfig = {
  email: {
    inputType: InputTypes.TEXT,
    fieldName: "email",
    label: "Email address",
    config: {
      required: true,
      placeholder: "Email address",
      "aria-label": "Subscribe to newsletter",
    },
  },
};
