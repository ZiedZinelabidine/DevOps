import { createSlice } from "@reduxjs/toolkit";
import {
  getProjectCreatedFromLocalStorage,
  getProposalEntrepriseCreationFromLocalStorage,
  saveProjectProposalEntrepriseCreationToLocalStorage,
  saveProposalEntrepriseCreationToLocalStorage,
} from "../../../core/helpers/storage";

export const proposalEntrepriseCreationSlice = createSlice({
  name: "proposalEntrepriseCreation",
  initialState: {
    projectEntrepriseProposal: JSON.parse(
      getProjectCreatedFromLocalStorage()
    ) || {
      projectTitle: "",
      projectDescription: "",
      languagesSelected: [],
      category: [],
      competencesSelected: [],
    },
    proposals:
      JSON.parse(getProposalEntrepriseCreationFromLocalStorage()) || [],
  },
  reducers: {
    AddProjectProposalEntrepriseCreation: (state, action) => {
      const {
        projectTitle,
        projectDescription,
        competencesSelected,
        languagesSelected,
        category,
      } = action.payload;

      state.projectEntrepriseProposal = {
        ...state.projectEntrepriseProposal, // Maintain other fields
        projectTitle,
        projectDescription,
        languagesSelected,
        competencesSelected,
        category,
      };

      saveProjectProposalEntrepriseCreationToLocalStorage(
        state.projectEntrepriseProposal
      );
    },

    AddProposalToProposalsEntrepriseCreation: (state, action) => {
      const { proposal } = action.payload;

      if (state.proposals.length === 0 && state.proposals[0] === null) {
        state.proposals = [proposal]; // Add the new proposal
      } else if (state.proposals.length < 5) {
        state.proposals.push(proposal); // Push new proposal if under limit
      }

      saveProposalEntrepriseCreationToLocalStorage(state.proposals);
    },

    DeleteProposalToProposalsEntrepriseCreation: (state, action) => {
      const { index } = action.payload; // Only need the index

      // Ensure index is valid to prevent runtime errors
      if (index >= 0 && index < state.proposals.length) {
        state.proposals.splice(index, 1); // Remove the proposal at the specified index

        // Save updated proposals to localStorage
        saveProposalEntrepriseCreationToLocalStorage(state.proposals);
      }
    },
  },
});

export default proposalEntrepriseCreationSlice.reducer;

export const {
  AddProjectProposalEntrepriseCreation,
  AddProposalToProposalsEntrepriseCreation,
  DeleteProposalToProposalsEntrepriseCreation,
} = proposalEntrepriseCreationSlice.actions;
