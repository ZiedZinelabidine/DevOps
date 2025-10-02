import { countriesData } from "../../data/countriesData";
import { InputTypes } from "../Inputs/input.type";

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

const locations = await fetchCountries();

export const formConfig = {
  search: {
    inputType: InputTypes.TEXT,
    fieldName: "search",
    placeholder: "Seach for Contacts",
    row: 2,
  },

  locations: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "locations",
    isMulti: true,
    config: {
      required: false,
    },
    placeholder: "COUNTRY",
    defaultValue: [],
    options: locations,
  },

  filter: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "filter",
    isMulti: true,
    config: {
      required: true,
      placeholder: "",
    },
    placeholder: "TYPE CONTACTED",
    defaultValue: [],
    options: [
      { id: "0", title: "CANDIDATS", label: "CANDIDATS", value: "CANDIDATS" },
      { id: "1", title: "ENTREPRISES", label: "ENTREPRISES" ,value: "ENTREPRISES" },
    ],
  },
};
