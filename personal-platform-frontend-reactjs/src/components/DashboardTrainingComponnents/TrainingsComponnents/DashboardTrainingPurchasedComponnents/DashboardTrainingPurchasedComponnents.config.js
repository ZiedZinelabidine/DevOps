import { skillsData } from "data/skillData";
import { InputTypes } from "../../../Inputs/input.type";

export const formConfig = {
  title: {
    inputType: InputTypes.TEXT,
    fieldName: "title",
    placeholder: "Cherchez des offres",
    row: 2,
  },
  skills: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "skills",
    placeholder: "Select skills",
    defaultValue: [],
    isMulti: true,
    row: 2,
    options: skillsData,
  },
};
