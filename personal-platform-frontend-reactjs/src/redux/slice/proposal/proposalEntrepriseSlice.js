import { createSlice } from "@reduxjs/toolkit";
import { proposalApi } from "../../api/proposals/proposalApi";

const INITIAL_STATE = {
  projects: [],
  isLoading: false,
  error: null,
};

export const proposalEntrepriseSlice = createSlice({
  name: "proposalEntrepriseSlice",
  initialState: INITIAL_STATE,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loadProposalSuccess: (state, action) => {
      state.isLoading = false;
      state.projects = action.payload;
    },
    loadProposalFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      proposalApi.endpoints.getProposalsEntreprise.matchFulfilled,
      (state, { payload }) => {
        const { proposalsEntreprise } = payload;
        state.proposalsEntreprise = proposalsEntreprise;
        // saveProposalsEntrepriseToLocalStorage(proposalsEntreprise);
      }
    );
    builder.addMatcher(
      proposalApi.endpoints.getProposalsEntreprise.matchPending,
      () => {
        // removeProposalsEntrepriseFromLocalStorage();
        return INITIAL_STATE;
      }
    );
  },
});

export const { startLoading, loadProjectsSuccess, loadProjectsFailure } =
  proposalEntrepriseSlice.actions;

export default proposalEntrepriseSlice.reducer;
