import { InputTypes } from "components/Inputs/input.type";

export const formConfig = {
  companyName: {
    inputType: InputTypes.TEXT,
    fieldName: "companyName",
    label: "Company Name or User name",
    placeholder: "Enter company name or user name...",
  },
  addressLine: {
    inputType: InputTypes.TEXT,
    fieldName: "addressLine",
    label: "Address line",
    placeholder: "Enter the adresse ",
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
};
