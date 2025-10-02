import { InputTypes } from "../../Inputs/input.type";

export const formConfig = {
  comment: {
    inputType: InputTypes.TEXTAREA,
    fieldName: "comment",
    label: "Laissez un commentaire",
    placeholder: "Ajouter un commentaire ici ...",
  },
  proposalTauxFin: {
    inputType: InputTypes.NUMBER,
    fieldName: "taux",
    id: "taux",
    placeholder: "$",
  },
};
