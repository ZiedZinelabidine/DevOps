import * as yup from "yup";

const FILE_SIZE = 5 * 1024 * 1024; // 5MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "application/octet-stream" , "application/xml"];

export const validationSchemas = {
  1: yup.object().shape({
    productType: yup.string().required("Please select a training type"),
  }),
  2: yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    language: yup.string().required("Language is required"),
    skills: yup
      .array()
      .required("Please select at least one skill")
      .min(1, "Please select at least one skill"),
    image: yup
      .mixed()
      .required("Image is required")
      .test(
        "fileRequired",
        "Image is required",
        (value) => value instanceof File
      )
      .test(
        "fileSize",
        "File is too large (max 5MB)",
        (value) => value instanceof File && value.size <= FILE_SIZE
      )
      .test(
        "fileType",
        "Unsupported file format (jpg, jpeg, png only)",
        (value) =>
          value instanceof File && SUPPORTED_FORMATS.includes(value.type)
      ),
  }),
  3: yup.object().shape({
    chapters: yup.array().of(
      yup.object().shape({
        chapterTitle: yup.string().required("Chapter title is required"),
        chapterDescription: yup.string(),
      })
    ),
  }),
  4: yup.object().shape({
    price: yup
      .number()
      .required("Price is required")
      .min(0, "Price must be greater than or equal to 0")
    }),
  5: yup.object().shape({
    // Final validation before submission
    title: yup.string().required("Title is required"),
    type: yup.string().required("Training type is required"),
    description: yup.string().required("Description is required"),
    languages: yup.string().required("Language is required"),
    price: yup.number().required("Price is required"),
    chapters: yup
      .array()
      .min(1, "At least one chapter is required")
      .of(
        yup.object().shape({
          chapterTitle: yup.string().required("Chapter title is required"),
          chapterDescription: yup.string(),
        })
      ),
  }),
};
