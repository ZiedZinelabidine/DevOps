import { InputTypes } from "../Inputs/input.type";

export const formConfig = {
  title: {
    inputType: InputTypes.TEXT,
    fieldName: "title",
    placeholder: "Cherchez des offres",
    row: 2,
  },

  filter: {
    inputType: InputTypes.SELECT,
    fieldName: "filter",
    config: {
      placeholder: "filter",
    },
    options: [
      { id: "0", title: "ACTIVE" },
      { id: "1", title: "SUSPENDED" },
    ],
    row: 2,
  },
};
