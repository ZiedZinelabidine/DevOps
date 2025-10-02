import { createSlice } from "@reduxjs/toolkit";
import {
  getProjectCreationFromLocalStorage,
  saveProjectCreationToLocalStorage,
} from "../../../core/helpers/storage";

export const projectCreationSlice = createSlice({
  name: "projectCreation",
  initialState: {
    projectCreation: JSON.parse(getProjectCreationFromLocalStorage()) || {
      projectTitle: "",
      projectDescription: "",
      competencesSelected: [],
      prix: "",
      offre: "",
      currency: "",
      typeProject: "",
    },
  },

  reducers: {
    AddProjectCreation: (state, action) => {
      const {
        projectTitle,
        projectDescription,
        competencesSelected,
        prix,
        typeProject,
        offre,
        currency,
      } = action.payload;

      state.projectCreation.projectTitle = projectTitle;
      state.projectCreation.projectDescription = projectDescription;
      state.projectCreation.competencesSelected = competencesSelected;
      state.projectCreation.prix = prix;
      state.projectCreation.offre = offre;
      state.projectCreation.currency = currency;
      state.projectCreation.typeProject = typeProject;
      saveProjectCreationToLocalStorage(state.projectCreation);
    },
  },
});

export default projectCreationSlice.reducer;
export const { AddProjectCreation } = projectCreationSlice.actions;
