import { validationSchemas } from "../validationSchemas";

export const validateStep = async (formMethods, currentStep) => {
  const currentSchema = validationSchemas[currentStep];

  if (!currentSchema) {
    return false;
  }

  const isValid = await formMethods.trigger();

  return isValid;
};

export const validateChapterFields = async (formMethods, chapterIndex) => {
  const chapterTitle = formMethods.getValues(`chapters.${chapterIndex}.chapterTitle`);
  const chapterDescription = formMethods.getValues(`chapters.${chapterIndex}.chapterDescription`);

  // Check if the values are empty
  if (chapterTitle === "" || chapterDescription === "") {
    return false; // Return false if any field is empty
  }

  // Proceed to trigger validation if fields are not empty
  const isValid = await formMethods.trigger([
    `chapters.${chapterIndex}.chapterTitle`,
    `chapters.${chapterIndex}.chapterDescription`,
  ]);

  return isValid;
};

export const validateTrainingType = async (formMethods) => {
  const isValid = await formMethods.trigger("product_type");
  return true;
};
