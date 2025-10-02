import { createSlice } from "@reduxjs/toolkit";
import {
  getProposalsFromLocalStorage,
  removeProposalsLocalStorage,
  saveProposalsToLocalStorage,
} from "../../../core/helpers/storage";
import { proposalApi } from "../../api/proposals/proposalApi";

const INITIAL_STATE = {
  projects: getProposalsFromLocalStorage() || [],
  isLoading: false,
  error: null,
};

export const proposalSlice = createSlice({
  name: "proposalSlice",
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
      proposalApi.endpoints.getProposals.matchFulfilled,
      (state, { payload }) => {
        const { proposals } = payload;
        state.proposals = proposals;
        saveProposalsToLocalStorage(proposals);
      }
    );
    builder.addMatcher(proposalApi.endpoints.getProposals.matchPending, () => {
      removeProposalsLocalStorage();
      return INITIAL_STATE;
    });
  },
});

export const { startLoading, loadProjectsSuccess, loadProjectsFailure } =
  proposalSlice.actions;

export default proposalSlice.reducer;
