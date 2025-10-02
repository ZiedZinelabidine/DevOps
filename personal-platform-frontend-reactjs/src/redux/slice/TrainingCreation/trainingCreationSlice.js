import { createSlice } from "@reduxjs/toolkit";

export const trainingCreationSlice = createSlice({
  name: "trainingCreation",
  initialState: {
    product_type: "APPLICATION",
    videos: [],
    files: {},
    details: {},
    type: "APPLICATION",
    level: "",
    exercices: {},
    price: "",
    image_url: "",
    current_image_url: "",
    current_video_url: "",
    current_exercices_url: "",
  },

  reducers: {
    clearVideosTraining: (state) => {
      state.videos = [];
    },
    addTypeTraining: (state, action) => {
      state.type = action.payload;
    },
    addImageURL: (state, action) => {
      state.image_url = action.payload;
    },

    getImageURL: (state, action) => {
      switch (state.product_type) {
        case "APPLICATIONS":
          state.current_image_url = `/applications/${action.id}/image/${action.file_name}`;
          break;
        case "VIDEOSTRAINING":
          state.current_image_url = `/video_trainings/${action.id}/image/${action.file_name}`;
          break;
        case "SESSIONTRAINING":
          state.current_image_url = `/session_trainings/${action.id}/image/${action.file_name}`;
          break;
        default:
          state.current_exercices_url = "";
          break;
      }
    },

    addVideoURL: (state, action) => {
      state.image_url = action.payload;
    },
    addTypeProductTraining: (state, action) => {
      state.product_type = action.payload;
    },
    addLevelTraining: (state, action) => {
      state.level = action.payload;
    },
    addVideoTraining: (state, action) => {
      state.videos = [...state.videos, action.payload];
    },
    addFilesTraining: (state, action) => {
      state.files = action.payload;
    },
    addDetailsTraining: (state, action) => {
      state.details = action.payload;
    },
    addExercicesTraining: (state, action) => {
      state.exercices = action.payload;
    },
    addPriceTraining: (state, action) => {
      state.price = action.payload;
    },
    editVideoTraining: (state, action) => {
      state.videos = state.videos.map((item) =>
        item.videoUrl === action.payload.videoUrl
          ? {
              ...item,
              titleVideo: action.payload.titleVideo,
              descriptionVideo: action.payload.descriptionVideo,
              videoUrl: action.payload.videoUrl,
            }
          : item
      );
    },
  },
});

export default trainingCreationSlice.reducer;
export const {
  addVideoTraining,
  editVideoTraining,
  addFilesTraining,
  addDetailsTraining,
  addPriceTraining,
  addExercicesTraining,
  addTypeTraining,
  addLevelTraining,
  addTypeProductTraining,
  clearVideosTraining,
  addImageURL,
} = trainingCreationSlice.actions;
