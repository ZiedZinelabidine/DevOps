import { countryLengthMapData } from "data/countryLengthMapData";
import { countriesData } from "../../../data/countriesData";
import { InputTypes } from "../../Inputs/input.type";

const fetchCountries = async () => {
  try {
    // Map fetched data to the desired structure
    const countriesArray = countryLengthMapData.map((skill, index) => ({
      id: index + 1,
      title: skill.title, // Assuming the skill object has a name property
      value: skill.title, // Using the skill ID as the value
      label: skill.label,
    }));
    return countriesArray;
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};

const fetchCurencies = async () => {
  try {
    // Map fetched data to the desired structure
    const currencyArray = countriesData.map((skill, index) => ({
      id: index + 1,
      title: skill.currency, // Assuming the skill object has a name property
      value: skill.currency, // Using the skill ID as the value
      label: skill.currency, // Using the skill ID as the value

    }));
    return currencyArray;
  } catch (error) {
    console.error("Error fetching curencies:", error);
  }
};

const locations = await fetchCountries();
const curencies = await fetchCurencies();

export const formConfig = {
  owner_bank_account: {
    inputType: InputTypes.TEXT,
    fieldName: "owner_bank_account",
    white: true,
    textInput: true,
    label: "",
    placeholder: "Add Account Owner Name",
  },
  iban: {
    inputType: InputTypes.TEXT,
    fieldName: "iban",
    white: true,
    textInput: true,
    label: "",
    placeholder: "Add your IBAN",
  },

  bic: {
    inputType: InputTypes.TEXT,
    fieldName: "bic",
    label: "",
    placeholder: "Add your BIC",
  },

  bank_country: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "bank_country",
    isMulti: false,
    config: {
      required: {
        value: true,
        message: "This field is required.", // Optional message for required rule
      },
    },
    placeholder: "Select Bank Country",
    defaultValue: [],
    options: locations,
  },

  currency: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "currency",
    isMulti: false,
    config: {
      required: {
        value: true,
        message: "This field is required.", // Optional message for required rule
      },
      placeholder: "",
    },
    placeholder: "Select Currency",
    defaultValue: [],
    options: curencies,
  },
};
