import { InputTypes } from "../../components/Inputs/input.type";

import { countriesData } from "../../data/countriesData";

const fetchCountries = async () => {
  try {
    // Map fetched data to the desired structure
    const countriesArray = countriesData.map((skill, index) => ({
      id: index + 1,
      title: skill.title, // Assuming the skill object has a name property
      value: skill.title, // Using the skill ID as the value
      label: skill.title, // Using the skill ID as the value

    }));
    return countriesArray;
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};
const locations = await fetchCountries();

export const depositCompanyFormConfig = {
  companyExist: {
    inputType: InputTypes.MULTI_RADIO,
    fieldName: "companyExist",
    config: {
      required: true,
    },
    options: [
      {
        id: "1",
        label: "Yes",
        value: 1,
      },
      {
        id: "2",
        label: "No",
        value: 2,
      },
    ],
  },
  createNewCompany: {
    inputType: InputTypes.MULTI_RADIO,
    fieldName: "createNewCompany",
    config: {
      required: true,
    },
    options: [
      {
        id: "1",
        label: "Yes",
        value: 1,
      },
      {
        id: "2",
        label: "No",
        value: 2,
      },
    ],
  },
  companyName: {
    inputType: InputTypes.TEXT,
    fieldName: "companyName",
    textInput: true,
    config: {
      required: true,
    },
    label: "What's the name of your company?",
    placeholder: "What's the name of your company?",
  },
  companyAddress: {
    inputType: InputTypes.TEXT,
    fieldName: "companyAddress",
    textInput: true,
    config: {
      required: true,
    },
    placeholder: "What's your company address?",
  },

  companyCountry: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "companyCountry",
    isMulti: false,
    config: {
      required: true,
    },
    placeholder: "Identity type",
    defaultValue: [],
    options: locations,
  },

  companyAddressProofAttachment: {
    inputType: InputTypes.FILE,
    fieldName: "companyAddressProofAttachment",
    config: {
      required: true,
    },
    placeholder: "Company address proof attachment",
  },
  companyIBAN: {
    inputType: InputTypes.NUMBER,
    fieldName: "companyIBAN",
    config: {
      required: true,
    },
    placeholder: "What's your International Bank Account Number ?",
  },
  companyIBANProofAttachment: {
    inputType: InputTypes.FILE,
    fieldName: "companyIBANProofAttachment",
    config: {
      required: true,
    },
    placeholder: "Company IBAN proof attachment",
  },

  identityType: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "identityType",
    isMulti: false,
    config: {
      required: true,
    },
    placeholder: "Identity type",
    defaultValue: [],
    options: [
      { id: "1", title: "CIN", value: "CIN" , label: "CIN"  },
      { id: "2", title: "Passport", value: "Passport" , label : "Passport" },
      { id: "3", title: "Drivers license", value: "Drivers%20license" , label:"Drivers license" },
    ],
  },

  identityCompanyType: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "identityCompanyType",
    isMulti: false,
    config: {
      required: true,
    },
    placeholder: "Identity Company Type",
    defaultValue: [],
    options: [
      {
        id: "1",
        title: "Certificate of Existence",
        value: "Certificate%20of%20Existence",
      },
      { id: "2", title: "KBIS DOCUMENT", value: "KBIS%20DOCUMENT"  , label:"KBIS DOCUMENT" },
      { id: "3", title: "SIREN DOCUMENT", value: "SIREN%20DOCUMENT"  , label: "SIREN DOCUMENT"},
    ],
  },

  identityNumber: {
    inputType: InputTypes.TEXT,
    fieldName: "identityNumber",
    textInput: true,
    config: {
      required: true,
    },
    placeholder: "Identity number",
  },
  identityProofAttachment: {
    inputType: InputTypes.FILE,
    fieldName: "companyBINProofAttachment",
    config: {
      required: true,
    },
    placeholder: "Company BIN proof attachment",
  },

  identityFrontCardProofAttachment: {
    inputType: InputTypes.FILE,
    fieldName: "cardIdentityFrontProofAttachment",
    config: {
      required: true,
    },
    placeholder: "Card Identity Front proof attachment",
  },
  identityBackCardProofAttachment: {
    inputType: InputTypes.FILE,
    fieldName: "cardIdentityBackProofAttachment",
    config: {
      required: true,
    },
    placeholder: "Card Identity Back proof attachment",
  },
  city: {
    inputType: InputTypes.TEXT,
    fieldName: "city",
    label: "City",
    placeholder: "City",
  },
  state: {
    inputType: InputTypes.TEXT,
    fieldName: "state",
    label: "State",
    placeholder: "Arusha, Tanzania",
  },
  postalCode: {
    inputType: InputTypes.TEXT,
    fieldName: "postalCode",
    label: "Postal code",
    placeholder: "9090",
  },
  paymentMethodCard: {
    inputType: InputTypes.RADIO,
    fieldName: "paymentMethod",
    label: "Card",
    value: "card",
  },
  paymentMethodWallet: {
    inputType: InputTypes.RADIO,
    fieldName: "paymentMethod",
    label: "Wallet",
    value: "wallet",
  },
  cardholderName: {
    inputType: InputTypes.TEXT,
    fieldName: "cardholderName",
    label: "Cardholder's name",
    placeholder: "Seen on your card",
  },
  cardNumber: {
    inputType: InputTypes.NUMBER,
    fieldName: "cardNumber",
    label: "Card number",
    placeholder: "Seen on your card",
  },
  expiry: {
    inputType: InputTypes.TEXT,
    fieldName: "expiry",
    label: "Expiry",
    placeholder: "MM/YY",
  },
  cvc: {
    inputType: InputTypes.NUMBER,
    fieldName: "cvc",
    label: "CVC",
    placeholder: "654",
  },
  companyBIN: {
    inputType: InputTypes.TEXT,
    fieldName: "companyBIN",
    textInput: true,
    config: {
      required: true,
    },
    placeholder: "What's your company's Business Identity Number?",
  },
  companyBINProofAttachment: {
    inputType: InputTypes.FILE,
    fieldName: "companyBINProofAttachment",
    config: {
      required: true,
    },
    placeholder: "Company BIN proof attachment",
  },
};
