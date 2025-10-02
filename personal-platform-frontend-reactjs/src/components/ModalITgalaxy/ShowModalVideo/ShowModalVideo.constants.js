import { InputTypes } from "../../Inputs/input.type";

export const formConfig = {
  title: {
    inputType: InputTypes.TEXT,
    fieldName: "titleVideo",
    config: {
      required: true,
      placeholder: "Titre de la vidéo",
    },
  },
  videoFile: {
    inputType: InputTypes.FILE,
    fieldName: "videoFile",
    config: {
      required: true,
      placeholder: "Fichier vidéo",
    },
  },
};
