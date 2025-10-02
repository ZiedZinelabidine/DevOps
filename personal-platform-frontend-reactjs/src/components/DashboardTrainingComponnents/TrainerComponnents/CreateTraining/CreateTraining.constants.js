import { InputTypes } from "../../../Inputs/input.type";
import { languagesData } from "data/languagesData";

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

const languages = await fetchLanguages();

const FILE_SIZE = 5 * 1024 * 1024; // 5MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png" , "application/octet-stream" ];

export const formConfig = {
  title: {
    inputType: InputTypes.TEXT,
    fieldName: "title",
    config: {
      required: "Title is required",
    },
  },
  description: {
    inputType: InputTypes.TEXTAREA,
    fieldName: "description",
    config: {
      required: "Description is required",
    },
  },
  languages: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "languages",
    isMulti: false,
    defaultValue:[],
    config: {
      required: {
        value: true,
        message: "This field is required."  // Optional message for required rule
      },
      validate: {
        notEmpty: (value) => {
          if (value) {
            return "Please select at least one skill";
          }
          return true;
        },
      },
     placeholder:
        "",
     },
     options: languages
  },
  skills: {
    inputType: InputTypes.AUTOCOMPLETE,
    fieldName: "skills",
    config: {
      required: "Please select at least one skill",
      validate: {
        notEmpty: (value) => {
          if (!Array.isArray(value) || value.length === 0) {
            return "Please select at least one skill";
          }
          return true;
        },
        validSkills: (value) => {
          if (Array.isArray(value) && value.length > 0) {
            return (
              value.every(
                (skill) =>
                  skill &&
                  typeof skill === "object" &&
                  "id" in skill &&
                  "title" in skill
              ) || "Invalid skill format"
            );
          }
          return true;
        },
      },
    },
  },
  image: {
    inputType: InputTypes.FILE,
    fieldName: "image",
    config: {
      required: "Image is required",
      validate: {
        fileExists: (value) => {
          if (!value || !(value instanceof File)) {
            return "Image is required";
          }
          return true;
        },
        fileSize: (value) => {
          if (!value || !(value instanceof File)) return "Image is required";
          return value.size <= FILE_SIZE || "File is too large (max 5MB)";
        },
        fileFormat: (value) => {
          if (!value || !(value instanceof File)) return "Image is required";
          return (
            SUPPORTED_FORMATS.includes(value.type) ||
            "Unsupported file format (jpg, jpeg, png only)"
          );
        },
      },
    },
    acceptedFiles: SUPPORTED_FORMATS.join(","),
    maxSize: FILE_SIZE,
  },
};
