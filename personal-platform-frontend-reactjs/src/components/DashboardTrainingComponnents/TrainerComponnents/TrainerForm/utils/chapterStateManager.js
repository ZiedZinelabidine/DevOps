// Helper functions for managing chapter state
export const normalizeChapterData = (data) => {
  if (!data) return null;

  // Handle nested data structures
  const rawData = data.data || data;

  return {
    chapterTitle: rawData.chapterTitle || rawData.title || "",
    chapterDescription: rawData.chapterDescription || rawData.description || "",
    chapterVideo: rawData.chapterVideo || rawData.video || null,
    chapterSupport: rawData.chapterSupport || rawData.support || null,
  };
};

export const formatChapterForBackend = (data) => {
  if (!data) return null;
  const normalizedData = normalizeChapterData(data);
  return {
    title: normalizedData.chapterTitle,
    description: normalizedData.chapterDescription,
    video: normalizedData.chapterVideo,
    support: normalizedData.chapterSupport,
  };
};

export const getChapterFieldName = (index, field) =>
  `chapters.${index}.${field}`;

export const createChapterState = (index) => ({
  id: `chapter_${index + 1}`,
  index,
  chapterTitle: "",
  chapterDescription: "",
  chapterVideo: null,
  chapterSupport: null,
});

export const updateChapterInForm = (setValue, chapters, index, data) => {
  const normalizedData = normalizeChapterData(data);
  if (!normalizedData) return;

  // Update each field individually to ensure proper form state updates
  Object.entries(normalizedData).forEach(([field, value]) => {
    const fieldPath = getChapterFieldName(index, field);
    setValue(fieldPath, value, { shouldDirty: true, shouldTouch: true });
  });
};

export const getChapterFromForm = (getValues, index) => {
  const fields = [
    "chapterTitle",
    "chapterDescription",
    "chapterVideo",
    "chapterSupport",
  ];

  const chapterData = {};
  fields.forEach((field) => {
    const value = getValues(getChapterFieldName(index, field));
    if (value !== undefined) {
      chapterData[field] = value;
    }
  });

  return chapterData;
};

export const validateChapterFields = (data) => {
  if (!data) return false;
  const normalizedData = normalizeChapterData(data);
  return (
    normalizedData &&
    normalizedData.chapterTitle &&
    normalizedData.chapterTitle.trim() !== "" 
  );
};
