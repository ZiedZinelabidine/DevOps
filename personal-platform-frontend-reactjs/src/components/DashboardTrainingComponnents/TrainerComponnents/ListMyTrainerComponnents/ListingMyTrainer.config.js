import { skillsData } from "data/skillData";
import { InputTypes } from "../../../Inputs/input.type";

export const formConfig = {
  title: {
    inputType: InputTypes.TEXT,
    fieldName: "title",
    placeholder: "Seach for Products",
    row: 2,
  },
  skills: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "skills",
    isMulti: false,
    row: 2,
    options: skillsData,
    defaultValue: [],
    placeholder: "Select a skills",
  },
  type: {
    inputType: InputTypes.SELECT,
    fieldName: "type",
    row: 2,
    options: [
      {
        id: "0",
        title: "Video trainings",
        value: "VIDEO_TRAINING",
      },
      {
        id: "1",
        title: "Applications",
        value: "APPLICATIONS",
      },
    ],
  },
};
