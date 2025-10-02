import { skillsData } from "../../../../data/skillData";
import { InputTypes } from "../../../Inputs/input.type";

const fetchSkills = async () => {
  try {
    // Map retrieved skills to the format needed for the dropdown
    const skillsArray = skillsData.map((skill, index) => ({
      id: index + 1,
      title: skill.title, // Assuming the skill object has a name property
      value: skill.title, // Using the skill ID as the value
    }));

    return skillsArray; // Update state with fetched skills
  } catch (error) {
    console.error("Error fetching skills:", error);
  }
};

const skills = await fetchSkills();

export const formConfig = {
  chapterTitle: {
    inputType: InputTypes.TEXT,
    //fieldName: "chapterTitle",
    config: {
      required: true,
      placeholder: "Entrez le titre de la formation",
    },
  },

  chapterDescription: {
    inputType: InputTypes.TEXTAREA,
    //fieldName: "chapterDescription",
    config: {
      placeholder: "Entrez la description de la formation",
    },
  },

  chapterSupport: {
    inputType: InputTypes.FILE,
    //fieldName: "chapterSupport",
    placeholder: "Choisissez une image pour la formation",
    config: {
      required: true,
    },
  },
};
