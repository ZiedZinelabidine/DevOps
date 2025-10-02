import { InputTypes } from "../../Inputs/input.type";

export const formConfig = {
  status: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "status",
    isMulti: false,
    config: {
      required: false,
      placeholder: "",
    },
    defaultValue: [],
    options: [
      { id: "0", title: "IN_PROGRESS", value: "IN_PROGRESS" , label:"IN_PROGRESS"  },
      { id: "1", title: "ACTION_REQUIRED", value: "ACTION_REQUIRED" , label:"ACTION_REQUIRED" },
      { id: "2", title: "VALIDATED", value: "VALIDATED", label:  "VALIDATED" },
    ],
  },
};
