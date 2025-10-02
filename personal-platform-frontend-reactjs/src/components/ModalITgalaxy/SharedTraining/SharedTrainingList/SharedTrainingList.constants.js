import { InputTypes } from "../../Inputs/input.type";

export const formConfig = {
  application: {
    inputType: InputTypes.CHECKBOX,
    fieldName: "application",
    config: {
      required: true,
      placeholder:
        "Créez un site wordpress réactif avec une fonctionnalité de réservation/paiement",
    },
  },
  session_training: {
    inputType: InputTypes.CHECKBOX,
    fieldName: "session_training",
    config: {
      required: true,
      placeholder:
        "Créez un site wordpress réactif avec une fonctionnalité de réservation/paiement",
    },
  },
  video_training: {
    inputType: InputTypes.CHECKBOX,
    fieldName: "video_training",
    config: {
      required: true,
      placeholder:
        "Créez un site wordpress réactif avec une fonctionnalité de réservation/paiement",
    },
  },
};
