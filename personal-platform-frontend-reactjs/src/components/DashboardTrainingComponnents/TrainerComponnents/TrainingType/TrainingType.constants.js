import { InputTypes } from "../../../Inputs/input.type";

export const formConfig = {
  product_type: {
    inputType: InputTypes.MULTI_RADIO,
    fieldName: "product_type",
    config: {
      required: true,
    },
    options: [
      {
        id: "1",
        label: "Video Training",
        value: "VIDEOSTRAINING",
        subTitle: "Construct your own Video Training",
      },
      {
        id: "2",
        label: "IT Product",
        value: "APPLICATION",
        subTitle: "Construct your own Product",
      },
    ],
  },
};
