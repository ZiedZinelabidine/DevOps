import { InputTypes } from "../../Inputs/input.type";

export const formConfig = {
  description: {
    inputType: InputTypes.TEXTAREA,
    fieldName: "description",
    config: {
      placeholder: "Expérience : j'ai une entreprise spécialisée dans ...",
    },
    row: 2,
  },
  price: {
    inputType: InputTypes.NUMBER,
    fieldName: "price",
    config: {
      required: true,
      placeholder: "Enter please your budget for this project",
    },
    row: 2,
  },

  cvs: {
    inputType: InputTypes.MULTIPLE_FILE,
    fieldName: "cvs",
    config: {
      required: true,
      placeholder: "Enter please your budget for this project",
    },
    row: 2,
  },
};
