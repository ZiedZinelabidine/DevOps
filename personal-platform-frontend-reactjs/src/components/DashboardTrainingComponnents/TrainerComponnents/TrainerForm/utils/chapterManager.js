// Utility functions for managing chapter data in the form

/**
 * Normalizes chapter data to ensure consistent structure
 * @param {Object} chapterData Raw chapter data from the form
 * @returns {Object} Normalized chapter data
 */
export const normalizeChapterData = (chapterData) => {
  if (!chapterData) return {};

  return {
    chapterTitle: chapterData.chapterTitle || "",
    chapterDescription: chapterData.chapterDescription || "",
    videos: Array.isArray(chapterData.videos) ? chapterData.videos : [],
    supportFile: chapterData.supportFile || null,
  };
};

/**
 * Formats chapter data for backend submission
 * @param {Object} chapterData Normalized chapter data
 * @returns {Object} Formatted chapter data for backend
 */
export const formatChapterForBackend = (chapterData) => {
  if (!chapterData) return null;

  return {
    title: chapterData.chapterTitle,
    description: chapterData.chapterDescription,
    video: chapterData.chapterVideo,
    supportFiles: chapterData.chapterSupport,
  };
};

/**
 * Formats chapter data for backend submission
 * @param {Object} chapters Array of chapter data
 * @returns {Object} Formatted chapters data for backend
 */
export const formatChaptersForBackend = (chapters) => {
  if (!Array.isArray(chapters) || chapters.length === 0) return {};

  return chapters.reduce((acc, chapter, index) => {
    if (!chapter) return acc;

    const chapterKey = `chapter_${index + 1}`;
    acc[chapterKey] = {
      title: chapter.chapterTitle || "",
      description: chapter.chapterDescription || "",
    };
    return acc;
  }, {});
};

/**
 * Formats the entire form data for backend submission
 * @param {Object} formData Raw form data
 * @returns {Object} Formatted data for backend
 */
export const formatFormDataForBackend = (formData) => {
  return {
    userId: formData.userId || 1, // Default to 1 if not provided
    title: formData.title || "",
    type: "APPLICATION",
    description: formData.description || "",
    languages: formData.languages || "English",
    category: formData.category || [],
    skills: formData.skills || [],
    price: parseFloat(formData.price) || 0,
    repo: formData.repo || "",
    chapters: formatChaptersForBackend(formData.chapters),
  };
};

/**
 * Gets the full field name for a chapter field
 * @param {number} index Chapter index
 * @param {string} fieldName Field name within the chapter
 * @returns {string} Full field name
 */
export const getChapterFieldName = (index, fieldName) => {
  return `chapters.${index}.${fieldName}`;
};

/**
 * Gets chapter data from the form
 * @param {Function} getValues Form getValues function
 * @param {number} index Chapter index
 * @returns {Object} Chapter data
 */
export const getChapterFromForm = (getValues, index) => {
  const chapterData = getValues(`chapters.${index}`);
  if (!chapterData) return null;

  // Return a new object to avoid reference issues
  return {
    chapterTitle: chapterData.chapterTitle || "",
    chapterDescription: chapterData.chapterDescription || "",
    videos: Array.isArray(chapterData.videos) ? [...chapterData.videos] : [],
    supportFile: chapterData.supportFile || null,
  };
};

/**
 * Creates initial state for a new chapter
 * @returns {Object} Initial chapter state
 */
export const createChapterState = () => ({
  chapterTitle: "",
  chapterDescription: "",
  videos: [],
  supportFile: null,
});

/**
 * Updates chapter data in the form
 * @param {Function} setValue Form setValue function
 * @param {number} index Chapter index
 * @param {Object} chapterData Chapter data to update
 */
export const updateChapterInForm = (setValue, index, chapterData) => {
  const normalizedData = normalizeChapterData(chapterData);
  Object.entries(normalizedData).forEach(([field, value]) => {
    setValue(getChapterFieldName(index, field), value, {
      shouldDirty: true,
      shouldTouch: true,
    });
  });
};

/**
 * Validates chapter data
 * @param {Object} chapterData Chapter data to validate
 * @returns {boolean} Whether the chapter data is valid
 */
export const validateChapterData = (chapterData) => {
  if (!chapterData) return false;
  const normalizedData = normalizeChapterData(chapterData);
  return (
    normalizedData &&
    normalizedData.chapterTitle &&
    normalizedData.chapterTitle.trim() !== "" 
  );
};

/**
 * Gets the chapter key for a given index
 * @param {number} index Chapter index
 * @returns {string} Chapter key
 */
export const getChapterKey = (index) => `chapter_${index + 1}`;
