import { InputTypes } from "../Inputs/input.type";
import { countriesData }  from "../../data/countriesData";

const fetchCountries = async () => {
  try {
    // Map fetched data to the desired structure
    const countriesArray = countriesData.map((skill, index) => ({
      id: index + 1,
      title: skill.title, // Assuming the skill object has a name property
      value: skill.title,    // Using the skill ID as the value
      label: skill.title,    // Using the skill ID as the value
    }));
    return(countriesArray);
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};

const locations   = await fetchCountries();

export const formConfig = {

  search: {
    inputType: InputTypes.TEXT,
    fieldName: "search",
    placeholder: "Cherchez des offres",
    row: 2,
  },

  filter: {
    inputType: InputTypes.SELECT,
    fieldName: "filter",
    config: {
      placeholder: "filter",
    },
    options: [
      { id: "0", title: "All" , value: "all" , label: "all" },
      { id: "1", title: "Company Verification", value: "COMPANY" , label: "COMPANY" },
      { id: "2", title: "Company Creation", value: "REQUEST_COMPANY_CREATION" , label: "REQUEST_COMPANY_CREATION" },  
     ],
    row: 2,
  },

  location: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "location",
    isMulti: true,
    config: {
      required: {
        value: true,
        message: "This field is required."  // Optional message for required rule
      },
      placeholder:
        "Region",
     },
     placeholder:
     "Region",
     defaultValue:[],
      options: locations
    },  

}