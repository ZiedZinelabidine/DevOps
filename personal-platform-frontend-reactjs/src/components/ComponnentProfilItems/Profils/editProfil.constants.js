import { countriesData } from "../../../data/countriesData";
import { languagesData } from "../../../data/languagesData";
import { skillsData } from "../../../data/skillData";
import { InputTypes } from "../../Inputs/input.type";
import { categoryData } from "../../../data/categoryData";
import { agencyData } from "../../../data/agencyData";


const fetchCountries = async () => {
  try {
    const countriesArray = countriesData.map((skill, index) => ({
      id: index + 1,
      title: skill.title,
      value: skill.title,
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
      title: skill.title,
      value: skill.title,
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
      value: skill.title,
      label: skill.title, // Using the skill ID as the value
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

const fetchAgencies = async () => {
  try {
    // Map retrieved skills to the format needed for the dropdown
    const skillsArray = agencyData.map((skill, index) => ({
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
const agencies =  await fetchAgencies();

export const formConfig = {
  job: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "job",
    isMulti: false,
    config: {
      required: false,
      placeholder: "",
    },
    defaultValue: [],
    options: jobs,

  },

  agence :  {
    inputType: InputTypes.MULTISELECT,
    fieldName: "job",
    isMulti: false,
    config: {
      required: false,
      placeholder: "",
    },
    defaultValue: [],
    options: agencies,

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
  country_details: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "country_details",
    isMulti: false,
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
};
