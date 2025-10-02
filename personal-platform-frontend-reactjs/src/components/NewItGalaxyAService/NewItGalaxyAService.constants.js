import { countriesData } from "../../data/countriesData";
import { languagesData } from "../../data/languagesData";
import { skillsData } from "../../data/skillData";
import { InputTypes } from "../Inputs/input.type";
import { categoryData } from "../../data/categoryData";



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


const fetchCountries = async () => {
  try {
    // Map fetched data to the desired structure
    const countriesArray = countriesData.map((skill, index) => ({
      id: index + 1,
      title: skill.title, // Assuming the skill object has a name property
      value: skill.title, // Using the skill ID as the value
      label: skill.title,
    }));
    return countriesArray;
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};

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

const locations = await fetchCountries();
const languages = await fetchLanguages();
const skills = await fetchSkills();
const categories = await fetchCategories();


export const formConfig = {
  title: {
    inputType: InputTypes.TEXT,
    fieldName: "title",
    placeholder: "Project Title",
    textInput: true,
    white: true,
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

  description: {
    inputType: InputTypes.TEXTAREA,
    fieldName: "description",
    row: 2,
  },

  languages: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "languages",
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

  skills: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "skills",
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

  price: {
    inputType: InputTypes.NUMBER,
    fieldName: "price",
    config: {
      required: true,
      placeholder: "Enter please your budget for this project",
    },
    row: 2,
  },
  location: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "location",
    isMulti: false,
    config: {
      required: {
        value: true,
        message: "This field is required.", // Optional message for required rule
      },
      placeholder: "",
    },
    defaultValue: [],
    options: locations,
  },
};
