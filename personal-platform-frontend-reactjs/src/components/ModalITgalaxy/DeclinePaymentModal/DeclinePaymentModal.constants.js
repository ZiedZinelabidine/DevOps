import { InputTypes } from "../../Inputs/input.type";

export const formConfig = {
  comment: {
    inputType: InputTypes.TEXTAREA,
    fieldName: "comment",
    label: "",
    placeholder: "Add the raison ...",
  },
  proposalTauxFin: {
    inputType: InputTypes.NUMBER,
    fieldName: "taux",
    id: "taux",
    placeholder: "$",
  },
};
