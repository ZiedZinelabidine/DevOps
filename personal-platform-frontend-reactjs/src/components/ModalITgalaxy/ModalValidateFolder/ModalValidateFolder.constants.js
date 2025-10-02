import { InputTypes } from "../../Inputs/input.type";

export const formConfig = {
  comment: {
    inputType: InputTypes.TEXTAREA,
    fieldName: "comment",
    config: {
      placeholder: "Expérience : j'ai une entreprise spécialisée dans ...",
    },
    row: 2,
  },
  status_company: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "status",
    isMulti: false,
    config: {
      required: false,
      placeholder: "",
    },
    defaultValue: [],
    options: [
      { id: "0", title: "IN_PROGRESS", value: "IN_PROGRESS" , label: "IN_PROGRESS" },
      { id: "1", title: "ACTION_REQUIRED", value: "ACTION_REQUIRED", label: "ACTION_REQUIRED"  },
      { id: "2", title: "VALIDATED", value: "VALIDATED" , label: "VALIDATED"},
    ],
  },

  status_request_company_creation: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "status",
    isMulti: false,
    config: {
      required: false,
      placeholder: "",
    },
    defaultValue: [],
    options: [
      { id: "0", title: "IN_PROGRESS", value: "IN_PROGRESS", label:  "IN_PROGRESS" },
      { id: "1", title: "ACTION_REQUIRED", value: "ACTION_REQUIRED", label:"ACTION_REQUIRED"  },
      { id: "2", title: "COMPANY_CREATED", value: "COMPANY_CREATED" , label:"COMPANY_CREATED" },
    ],
  },

  companyBINProofAttachment: {
    inputType: InputTypes.FILE,
    fieldName: "companyBINProofAttachment",
    config: {
      required: true,
    },
    placeholder: "Company siren created proof attachment",
  },
  companyBIN: {
    inputType: InputTypes.NUMBER,
    fieldName: "companyBIN",
    config: {
      required: true,
    },
    placeholder: "What's the BIN company created?",
  },
};
