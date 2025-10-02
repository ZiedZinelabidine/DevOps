import { countriesData } from "../../../data/countriesData";
import { languagesData } from "../../../data/languagesData";
import { skillsData } from "../../../data/skillData";
import { InputTypes } from "../../Inputs/input.type";
import { categoryData } from "../../../data/categoryData";
import { agencyData } from "../../../data/agencyData";


const jobData = [...agencyData ,...categoryData ];


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

const fetchCategories = async () => {
  try {
    // Map retrieved skills to the format needed for the dropdown
    const skillsArray = jobData.map((skill, index) => ({
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

const jobs = await fetchCategories();
const locations = await fetchCountries();
const languages = await fetchLanguages();
const skills = await fetchSkills();

export const formConfig = {
  search: {
    inputType: InputTypes.TEXT,
    fieldName: "search",
    placeholder: "Cherchez des offres",
    row: 2,
  },

  rising_star_global: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "rising_star_global",
    isMulti: false,
    config: {
      required: true,
      placeholder: "",
    },
    defaultValue: [],
    options: [
      { id: "0", title: "ALL", label: "ALL",value: 0 },
      { id: "1", title: "More than 1 stars", label: "More than 1 stars", value: 1 },
      { id: "2", title: "More than 2 stars", label: "More than 2 stars", value: 2 },
      { id: "3", title: "More than 3 stars", label: "More than 3 stars",  value: 3 },
      { id: "4", title: "More than 4 stars", label: "More than 4 stars",  value: 4 },
      { id: "5", title: "5 stars", label: "5 stars", value: 5 },
    ],
  },

  skills: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "skills",
    isMulti: true,
    config: {
      required: true,
      placeholder: "",
    },
    defaultValue: [],
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
  jobs: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "jobs",
    isMulti: true,
    config: {
      required: false,
      placeholder: "",
    },
    defaultValue: [],
    options: jobs,

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
