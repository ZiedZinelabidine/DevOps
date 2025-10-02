import { InputTypes } from "../../../Inputs/input.type";

export const formConfig = {
  supportCourses: {
    inputType: InputTypes.FILE,
    fieldName: "support_courses",
    config: {
      required: true,
      placeholder:
        "Créez un site wordpress réactif avec une fonctionnalité de réservation/paiement",
    },
  },
  link: {
    inputType: InputTypes.TEXT,
    fieldName: "github_link",
    config: {
      required: true,
      placeholder:
        "Créez un site wordpress réactif avec une fonctionnalité de réservation/paiement",
    },
  },
};
