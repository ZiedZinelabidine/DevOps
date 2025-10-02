import { skillsData } from "data/skillData";
import { InputTypes } from "components/Inputs/input.type";

export const formConfig = {
  title: {
    inputType: InputTypes.TEXT,
    fieldName: "title",
    placeholder: "Seach for Products",
    row: 2,
  },
  skills: {
    inputType: InputTypes.MULTISELECTSELECT,
    isMulti: false,
    fieldName: "skills",
    row: 2,
    options: skillsData,
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
