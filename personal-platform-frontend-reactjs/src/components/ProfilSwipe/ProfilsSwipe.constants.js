import { InputTypes } from "../Inputs/input.type";

export const formConfig = {
  search: {
    inputType: InputTypes.TEXT,
    fieldName: "search",
    placeholder: "Cherchez des profils",
    row: 2,
  },

  filter: {
    inputType: InputTypes.SELECT,
    fieldName: "filter",
    config: {
      placeholder: "filter",
    },
    options: [
      { id: "0", title: "All" },
      { id: "1", title: "Projects" },
      { id: "2", title: "Contrats" },
    ],
    row: 2,
  },
};
