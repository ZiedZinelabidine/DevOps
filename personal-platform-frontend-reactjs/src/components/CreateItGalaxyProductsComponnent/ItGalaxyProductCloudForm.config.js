import { InputTypes } from "../Inputs/input.type";

export const productCloudForm = {
  typeServer: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "typeServer",
    isMulti: false,
    config: {
      required: true,
    },
    placeholder: "Server capacity",
    defaultValue: [],
    options: [
      { id: "1", title: "1vCPU, 0.5GiB RAM", label: "1vCPU, 0.5GiB RAM", value: "nano" },
      { id: "2", title: "1vCPU, 1GiB RAM", label: "1vCPU, 1GiB RAM", value: "micro" },
      { id: "3", title: "1vCPU, 2GiB RAM", label: "1vCPU, 2GiB RAM", value: "small" },
      { id: "4", title: "2vCPU, 4GiB RAM", label: "2vCPU, 4GiB RAM", value: "medium" },
    ],
  },
  databaseName: {
    inputType: InputTypes.TEXT,
    fieldName: "databaseName",
    textInput: true,
    config: {
      required: true,
    },
    placeholder: "Database Name",
    options: [],
  },

  credentialUsername: {
    inputType: InputTypes.TEXT,
    fieldName: "credentialUsername",
    textInput: true,
    config: {
      required: true,
    },
    placeholder: "username",
    options: [],
  },

  credentialPassword: {
    inputType: InputTypes.TEXT,
    fieldName: "credentialPassword",
    textInput: true,
    config: {
      required: true,
    },
    placeholder: "Password",
    options: [],
  },

  reservationDuration: {
    inputType: InputTypes.NUMBER,
    fieldName: "reservationDuration",
    config: {
      required: true,
    },
    placeholder: "How long did you need the server (hours)?",
  },

  databaseCapacity: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "databaseCapacity",
    isMulti: false,
    config: {
      required: true,
    },
    placeholder: "Database capacity",
    defaultValue: [],
    options: [
      { id: "1", title: "0.25vCPU, 0.5GiB RAM", label: "0.25vCPU, 0.5GiB RAM", value: "nano" },
      { id: "2", title: "0.5vCPU,  1GiB RAM", label: "0.5vCPU,  1GiB RAM", value: "micro" },
      { id: "3", title: "1vCPU,    2GiB RAM", label: "1vCPU,    2GiB RAM", value: "small" },
      { id: "4", title: "2vCPU,    4GiB RAM", label: "2vCPU,    4GiB RAM", value: "medium" },
    ],
  },

  databaseStorage: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "databaseStorage",
    isMulti: false,
    config: {
      required: true,
    },
    placeholder: "Database storage",
    defaultValue: [],
    options: [
      { id: "1", title: "21G", label: "21G", value: "21" },
      { id: "2", title: "30G", label: "30G", value: "30" },
      { id: "3", title: "40G", label: "40G", value: "40" },
      { id: "4", title: "50G", label: "50G", value: "50" },
      { id: "4", title: "60G", label: "60G", value: "60" },
      { id: "4", title: "70G", label: "70G", value: "70" },
      { id: "4", title: "80G", label: "80G", value: "80" },
      { id: "4", title: "90G", label: "90G", value: "90" },
      { id: "4", title: "100G",label: "100G",  value: "100" },
      { id: "4", title: "110G",label: "110G",  value: "110" },
      { id: "4", title: "120G", label: "120G", value: "120" },
      { id: "4", title: "130G", label: "130G", value: "130" },
      { id: "4", title: "140G", label: "140G", value: "140" },
      { id: "4", title: "150G",label: "150G",  value: "150" },
      { id: "4", title: "160G", label: "160G", value: "160" },
      { id: "4", title: "170G", label: "170G", value: "170" },
      { id: "4", title: "180G", label: "180G", value: "180" },
      { id: "4", title: "190G", label: "190G", value: "190" },
      { id: "4", title: "200G", label: "200G", value: "200" },
    ],
  },

  databasemongodbVersion: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "databasemongodbVersion",
    isMulti: false,
    config: {
      required: true,
    },
    placeholder: "Database mongodb version",
    defaultValue: [],
    options: [
      { id: "1", title: "7.0", label: "7.0", value: "7.0" },
      { id: "2", title: "6.0", label: "6.0", value: "6.0" },
      { id: "3", title: "5.0", label: "5.0", value: "5.0" },
    ],
  },

  databasemysqlVersion: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "databasemysqlVersion",
    isMulti: false,
    config: {
      required: true,
    },
    placeholder: "Database Mysql version",
    defaultValue: [],
    options: [
      { id: "1", title: "9.0", label: "9.0",value: "9.0" },
      { id: "2", title: "8.4", label: "8.4",value: "8.4" },
    ],
  },

  databasepostgresVersion: {
    inputType: InputTypes.MULTISELECT,
    fieldName: "databasepostgresVersion",
    isMulti: false,
    config: {
      required: true,
    },
    placeholder: "Database Postgres version",
    defaultValue: [],
    options: [
      { id: "1", title: "17",  label: "17", value: "17" },
      { id: "2", title: "16", label: "16", value: "16" },
      { id: "3", title: "15", label: "15", value: "15" },
    ],
  },
};
