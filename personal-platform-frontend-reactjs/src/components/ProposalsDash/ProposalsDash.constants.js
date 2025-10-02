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
      { id: "0", title: "ALL" },
      { id: "1", title: "VALIDATED" },
      { id: "1", title: "CREATED" },
      { id: "3", title: "FINISHIED" },
      { id: "4", title: "DECLINED" },
    ],
    row: 2,
  },
};
