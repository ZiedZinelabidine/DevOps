import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loadProjectsSuccess: (state, action) => {
      state.isLoading = false;
      state.projects = action.payload;
    },
    loadProjectsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, loadProjectsSuccess, loadProjectsFailure } =
  projectSlice.actions;

export default projectSlice.reducer;
