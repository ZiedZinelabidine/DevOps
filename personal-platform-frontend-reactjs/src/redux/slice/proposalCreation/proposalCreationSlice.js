import { createSlice } from "@reduxjs/toolkit";
import {
  getProposalCreationFromLocalStorage,
  saveProposalCreationToLocalStorage,
} from "../../../core/helpers/storage";

export const proposalCreationSlice = createSlice({
  name: "proposalCreation",
  initialState: {
    proposalCreation: JSON.parse(getProposalCreationFromLocalStorage()) || {
      projectId: "",
      entrepriseId: "",
      proposal_description: "",
      price: "",
      offre: "",
      currency: "",
      proposal_type: "",
    },
  },

  reducers: {
    AddproposalCreation: (state, action) => {
      const {
        projectId,
        entrepriseId,
        proposal_description,
        price,
        proposal_type,
        offre,
        currency,
      } = action.payload;
      state.proposalCreation.projectId = projectId;
      state.proposalCreation.entrepriseId = entrepriseId;
      state.proposalCreation.proposal_description = proposal_description;
      state.proposalCreation.price = price;
      state.proposalCreation.offre = offre;
      state.proposalCreation.currency = currency;
      state.proposalCreation.proposal_type = proposal_type;
      saveProposalCreationToLocalStorage(state.proposalCreation);
    },
  },
});

export default proposalCreationSlice.reducer;
export const { AddproposalCreation } = proposalCreationSlice.actions;
