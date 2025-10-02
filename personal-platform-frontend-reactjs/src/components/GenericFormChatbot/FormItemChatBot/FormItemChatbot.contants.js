import { InputTypes } from "../../Inputs/input.type";

export const formConfig = {
  title: {
    inputType: InputTypes.TEXT,
    fieldName: "title",
    config: {
      placeholder: "Expérience : j'ai une entreprise spécialisée dans ...",
    },
    row: 2,
  },
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
  skills: {
    inputType: InputTypes.TEXTAREA,
    fieldName: "skills",
    config: {
      placeholder: "Expérience : j'ai une entreprise spécialisée dans ...",
    },
    row: 2,
  },
};
