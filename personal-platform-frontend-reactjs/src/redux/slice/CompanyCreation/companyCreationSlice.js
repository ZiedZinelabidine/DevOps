import { createSlice } from "@reduxjs/toolkit";

export const companyCreationSlice = createSlice({
  name: "companyCreation",
  initialState: {
    type_product: "",
    videos: [],
    files: {},
    details: {},
    type: "Company Exist",
    level: "",
    exercices: {},
    price: "",
    image_url: "",
    current_image_url: "",
    current_video_url: "",
    current_exercices_url: "",
    status: "",
    company_location_status: "",
    company_siren_status: "",
    identity_front_status: "",
    identity_back_status: "",
    rib_status: "",
    paymentIntentId: "",
    company_name_status: "",
  },

  reducers: {
    clearVideosCompany: (state) => {
      state.videos = [];
    },
    addTypeCompany: (state, action) => {
      state.type = action.payload;
    },
    addImageURL: (state, action) => {
      state.image_url = action.payload;
    },
    getFileURL: (state, action, type) => {
      switch (state.type_product) {
        case "APPLICATIONS":
          switch (type) {
            case "VIDEO":
              state.current_video_url = `/applications/${action.id}/videos/${action.file_name}`;
              break;
            case "EXERCICE":
              state.current_exercices_url = `/applications/${action.id}/exercices/${action.file_name}`;
              break;
            case "IMAGE":
              state.current_exercices_url = `/applications/${action.id}/images/${action.file_name}`;
              break;
          }
          break;
        case "VIDEOSTRAINING":
          switch (type) {
            case "VIDEO":
              state.current_video_url = `/video_company/${action.id}/videos/${action.file_name}`;
              break;
            case "EXERCICE":
              state.current_exercices_url = `/video_company/${action.id}/exercices/${action.file_name}`;
              break;
            case "SUPPORT":
              state.current_exercices_url = `/video_company/${action.id}/supports/${action.file_name}`;
              break;
            case "IMAGE":
              state.current_exercices_url = `/video_company/${action.id}/images/${action.file_name}`;
              break;
          }
          break;
        case "SESSIONTRAINING":
          switch (type) {
            case "VIDEO":
              state.current_video_url = `/session_company/${action.id}/videos/${action.file_name}`;
              break;

            case "SUPPORT":
              state.current_exercices_url = `/session_company/${action.id}/supports/${action.file_name}`;
              break;
            case "IMAGE":
              state.current_exercices_url = `/session_company/${action.id}/images/${action.file_name}`;
              break;
          }
      }
    },
    getVideoURL: (state, action) => {
      switch (state.type_product) {
        case "APPLICATIONS":
          state.current_video_url = `/applications/${action.id}/videos/${action.file_name}`;
          break;
        case "VIDEOSTRAINING":
          state.current_video_url = `/video_companys/${action.id}/videos/${action.file_name}`;
          break;
        case "SESSIONTRAINING":
          state.current_video_url = `/session_companys/${action.id}/videos/${action.file_name}`;
          break;
        default:
          state.current_video_url = "";
          break;
      }
    },
    getImageURL: (state, action) => {
      switch (state.type_product) {
        case "APPLICATIONS":
          state.current_image_url = `/applications/${action.id}/image/${action.file_name}`;
          break;
        case "VIDEOSTRAINING":
          state.current_image_url = `/video_companys/${action.id}/image/${action.file_name}`;
          break;
        case "SESSIONTRAINING":
          state.current_image_url = `/session_companys/${action.id}/image/${action.file_name}`;
          break;
        default:
          state.current_exercices_url = "";
          break;
      }
    },
    getExerciceURL: (state, action) => {
      switch (state.type_product) {
        case "APPLICATIONS":
          state.current_exercices_url = `/applications/${action.id}/exercices/${action.file_name}`;
          break;
        case "VIDEOSTRAINING":
          state.current_exercices_url = `/video_companys/${action.id}/exercices/${action.file_name}`;
          break;
        case "SESSIONTRAINING":
          state.current_exercices_url = `/session_companys/${action.id}/exercices/${action.file_name}`;
          break;
        default:
          state.current_exercices_url = "";
      }
    },
    addVideoURL: (state, action) => {
      state.image_url = action.payload;
    },
    addTypeProductCompany: (state, action) => {
      state.type_product = action.payload;
    },
    addLevelCompany: (state, action) => {
      state.level = action.payload;
    },
    addVideoCompany: (state, action) => {
      state.videos = [...state.videos, action.payload];
    },
    addFilesCompany: (state, action) => {
      state.files = action.payload;
    },
    addDetailsCompany: (state, action) => {
      state.details = action.payload;
    },
    addExercicesCompany: (state, action) => {
      state.exercices = action.payload;
    },
    addPriceCompany: (state, action) => {
      state.price = action.payload;
    },
    editVideoCompany: (state, action) => {
      state.videos = state.videos.map((item) =>
        item.videoUrl === action.payload.videoUrl
          ? {
              ...item,
              titleVideo: action.payload.titleVideo,
              videoUrl: action.payload.videoUrl,
            }
          : item
      );
    },
    addStatus: (state, action) => {
      state.status = action.payload;
    },
    addCompanyLocationStatus: (state, action) => {
      state.company_location_status = action.payload;
    },
    addCompanySirenStatus: (state, action) => {
      state.company_siren_status = action.payload;
    },
    addIdentityFrontStatus: (state, action) => {
      state.identity_front_status = action.payload;
    },
    addIdentityBackStatus: (state, action) => {
      state.identity_back_status = action.payload;
    },
    addRibStatus: (state, action) => {
      state.rib_status = action.payload;
    },
    addPaymentIntentId: (state, action) => {
      state.paymentIntentId = action.payload;
    },
    addCompanyNameStatus: (state, action) => {
      state.company_name_status = action.payload;
    },
  },
});

export default companyCreationSlice.reducer;
export const {
  addVideoCompany,
  editVideoCompany,
  addFilesCompany,
  addDetailsCompany,
  addPriceCompany,
  addExercicesCompany,
  addTypeCompany,
  addLevelCompany,
  addCompanyNameStatus,
  addPaymentIntentId,
  addTypeProductCompany,
  clearVideosCompany,
  addImageURL,
  addStatus,
  addCompanyLocationStatus,
  addCompanySirenStatus,
  addIdentityFrontStatus,
  addIdentityBackStatus,
  addRibStatus,
} = companyCreationSlice.actions;
