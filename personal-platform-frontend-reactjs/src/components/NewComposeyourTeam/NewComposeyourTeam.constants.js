import { countriesData } from "../../data/countriesData";
import { languagesData } from "../../data/languagesData";
import { categoryData } from "../../data/categoryData";
import { skillsData } from "../../data/skillData";
import { InputTypes } from "../Inputs/input.type";

const fetchLanguages = async () => {
  try {
    const languageArray = languagesData.map((skill, index) => ({
      id: index + 1,
      title: skill.title, // Assuming the skill object has a name property
      value: skill.title, // Using the skill ID as the value
      label: skill.title,

    }));

    return languageArray;
  } catch (error) {
    console.error("Error fetching languages:", error);
  }
};

const fetchSkills = async () => {
  try {
    // Map retrieved skills to the format needed for the dropdown
    const skillsArray = skillsData.map((skill, index) => ({
      id: index + 1,
      title: skill.title, // Assuming the skill object has a name property
      value: skill.title, // Using the skill ID as the value
      label: skill.title,

    }));

    return skillsArray; // Update state with fetched skills
  } catch (error) {
    console.error("Error fetching skills:", error);
  }
};

const fetchCategories = async () => {
  try {
    // Map retrieved skills to the format needed for the dropdown
    const skillsArray = categoryData.map((skill, index) => ({
      id: index + 1,
      title: skill.title, // Assuming the skill object has a name property
      value: skill.value, // Using the skill ID as the value
      label: skill.title,

    }));

    return skillsArray; // Update state with fetched skills
  } catch (error) {
    console.error("Error fetching skills:", error);
  }
};

const categories = await fetchCategories();
const languages = await fetchLanguages();
const skills = await fetchSkills();

export const formConfig = {
  projectTitle: {
    inputType: InputTypes.TEXT,
    fieldName: "projectTitle",
    textInput: true,
    white: true,
    placeholder: "Project Title",
    config: {
      required: {
        value: true,
        message: "This field is required.", // Optional message for required rule
      },
      // Adding rules directly into the config for clarity
      rules: {
        // Assuming the field is required
        maxLength: {
          value: 50, // Maximum length of 200 characters
          message: "The title cannot exceed 50 characters.", // Error message
        },
      },
    },
    row: 2,
  },

  projectdescription: {
    inputType: InputTypes.TEXTAREA,
    fieldName: "projectdescription",
    row: 2,
  },

  languagesselected: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "languagesselected",
    isMulti: true,
    defaultValue: [],
    config: {
      required: {
        value: true,
        message: "This field is required.", // Optional message for required rule
      },
      placeholder: "",
    },
    options: languages,
  },

  competencesselected: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "competencesselected",
    isMulti: true,
    defaultValue: [],
    config: {
      required: {
        value: true,
        message: "This field is required.", // Optional message for required rule
      },
      placeholder: "",
    },
    options: skills,
  },

  category: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "category",
    isMulti: true,
    defaultValue: [],
    config: {
      required: {
        value: true,
        message: "This field is required.", // Optional message for required rule
      },
      placeholder: "",
    },
    options: categories,
  },

};
