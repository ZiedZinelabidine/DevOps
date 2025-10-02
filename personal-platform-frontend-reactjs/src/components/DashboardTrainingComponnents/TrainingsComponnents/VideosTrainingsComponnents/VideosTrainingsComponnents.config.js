import { skillsData } from "data/skillData";
import { InputTypes } from "../../../Inputs/input.type";
import { languagesData } from "data/languagesData";

const fetchSkills = async () => {
  try {
    // Map retrieved skills to the format needed for the dropdown
    const skillsArray = skillsData.map((skill, index) => ({
      id: index + 1,
      title: skill.title, // Assuming the skill object has a name property
      value: skill.title,    // Using the skill ID as the value
      label: skill.title,

    }));

    return(skillsArray); // Update state with fetched skills
  } catch (error) {
    console.error("Error fetching skills:", error);
  }
};

const fetchLanguages = async () => {
  try {
  
    const languageArray = languagesData.map((skill, index) => ({
      id: index + 1,
      title: skill.title, // Assuming the skill object has a name property
      value: skill.title,    // Using the skill ID as the value
      label: skill.title,
    }));

    return(languageArray);
    
  } catch (error) {
    console.error("Error fetching languages:", error);
  }
};

const skills    = await fetchSkills();
const languages = await fetchLanguages();

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
    placeholder: "Select skills",
    defaultValue: [],
    isMulti: true,
    row: 2,
    options: skills,
  },

  languages: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "languages",
    placeholder: "Select languages",
    isMulti: true,
    defaultValue:[],
    config: {
      required: {
        value: true,
        message: "This field is required."  // Optional message for required rule
      },
     placeholder:
        "",
     },
     options: languages
  },

};
