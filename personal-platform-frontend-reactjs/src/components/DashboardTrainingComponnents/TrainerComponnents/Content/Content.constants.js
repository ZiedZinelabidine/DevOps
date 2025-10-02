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
  title: {
    inputType: InputTypes.TEXT,
    fieldName: "trainingTitle",
    config: {
      required: true,
      placeholder: "Entrez le titre de la formation",
    },
  },

  description: {
    inputType: InputTypes.TEXTAREA,
    fieldName: "trainingDescription",
    config: {
      placeholder: "Entrez la description de la formation",
    },
  },

  training: {
    inputType: InputTypes.NUMBER,
    fieldName: "training",
    config: {
      required: true,
      placeholder: "Entrez le nombre de jours de la formation",
    },
  },
  skills: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "skills",
    isMulti: true,
    defaultValue: [],
    config: {
      required: {
        value: true,
      },
    },
    placeholder: "Select skills ...",
    options: skills,
  },
  image: {
    inputType: InputTypes.FILE,
    fieldName: "image",
    placeholder: "Choisissez une image pour la formation",
    config: {
      required: true,
    },
  },
};
