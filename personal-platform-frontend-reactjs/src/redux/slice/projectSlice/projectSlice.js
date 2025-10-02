import { createSlice } from "@reduxjs/toolkit";
import {
  getProjectCreatedFromLocalStorage,
  getProjectsFromLocalStorage,
  removeCreatedProjectLocalStorage,
  removeProjetsFromLocalStorage,
  saveCreatedProjectToLocalStorage,
  saveProjectsToLocalStorage,
} from "../../../core/helpers/storage";
import { projectApi } from "../../api/projects/projectApi";

const INITIAL_STATE = {
  projects: getProjectsFromLocalStorage || [],
  projectcreated: getProjectCreatedFromLocalStorage || [],
  isLoading: false,
  error: null,
};

export const projectSlice = createSlice({
  name: "projectSlice",
  initialState: INITIAL_STATE,
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
  extraReducers: (builder) => {
    builder.addMatcher(
      projectApi.endpoints.getProjects.matchFulfilled,
      (state, { payload }) => {
        const { projects } = payload;
        state.projects = projects;
        saveProjectsToLocalStorage(projects);
      }
    );
    builder.addMatcher(
      projectApi.endpoints.createProject.matchFulfilled,
      (state, { payload }) => {
        const { project } = payload;
        state.project = project;
        saveCreatedProjectToLocalStorage(project);
      }
    );
    builder.addMatcher(projectApi.endpoints.getProjects.matchPending, () => {
      removeProjetsFromLocalStorage();
      removeCreatedProjectLocalStorage();
      return INITIAL_STATE;
    });
  },
});

export const { startLoading, loadProjectsSuccess, loadProjectsFailure } =
  projectSlice.actions;

export default projectSlice.reducer;
