import { countriesData } from "../../../data/countriesData";
import { languagesData } from "../../../data/languagesData";
import { skillsData } from "../../../data/skillData";
import { InputTypes } from "../../Inputs/input.type";
import { categoryData } from "../../../data/categoryData";


const fetchCategories = async () => {
  try {
    // Map retrieved skills to the format needed for the dropdown
    const skillsArray = categoryData.map((skill, index) => ({
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
const categories = await fetchCategories();
const locations = await fetchCountries();
const languages = await fetchLanguages();
const skills = await fetchSkills();

export const formConfig = {
  filterType: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "filterType",
    isMulti: true,
    config: {
      required: true,
      placeholder: "",
    },
    defaultValue: [
      { id: "1", title: "Contrats" , label: "Contrats" , value: "Contrats"  },
      { id: "2", title: "Projects" , label: "Projects" , value: "Projects" },
    ],
    options: [
      { id: "1", title: "Contrats" , label: "Contrats" , value: "Contrats"  },
      { id: "2", title: "Projects" , label: "Projects" , value: "Projects" },
    ],
  },

  position: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "position",
    isMulti: true,
    config: {
      required: false,
      placeholder: "",
    },
    defaultValue: [],
    options: categories
  },
  nbr_applications: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "nbr_applications",
    isMulti: false,
    config: {
      required: false,
      placeholder: "",
    },
    defaultValue: [],
    options: [
      { id: "0", title: "None", label: "None" },
      { id: "1", title: "Less than 10",label:  "Less than 10" ,value: 10 },
      { id: "2", title: "Less than 20", label: "Less than 20" ,value: 20 },
      { id: "2", title: "Less than 30", label: "Less than 30", value: 30 },
    ],
  },
  skills: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "skills",
    isMulti: true,
    defaultValue: [],
    config: {
      required: false,
      placeholder: "",
    },
    options: skills,
  },
  locations: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "locations",
    isMulti: true,
    config: {
      required: false,
      placeholder: "",
    },
    defaultValue: [],
    options: locations,
  },
  languages: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "languages",
    isMulti: true,
    config: {
      required: false,
      placeholder: "",
    },
    defaultValue: [],
    options: languages,
  },
  CreatedAt: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "CreatedAt",
    isMulti: false,
    config: {
      required: false,
      placeholder: "",
    },
    defaultValue: [],
    options: [
      { id: "0", title: "None" , label:"None"  },
      { id: "1", title: "Last 24H",      label: "Last 24H",  value: 1 },
      { id: "2", title: "Last 3 days",   label: "Last 3 days",value: 3 },
      { id: "3", title: "Last 7 days",   label: "Last 7 days", value: 7 },
      { id: "4", title: "Last 31 days",  label:"Last 31 days", value: 31 },
    ],
  },
  keywords: {
    inputType: InputTypes.TEXTAREA,
    fieldName: "keywords",
    placeholder:
      "Put some Keyswords of what you looking for spareted with ';' ",
    defaultValue: "",
    config: {
      required: false,
    },
  },
};
