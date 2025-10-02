import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const proposalApi = createApi({
  reducerPath: "proposalApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // ADD PROPOSAL
    addProposal: builder.mutation({
      query: (projectData) => ({
        url: ENDPOINTS.CREATE_PROPOSAL_CANDIDAT,
        method: "POST",
        body: projectData,
      }),
    }),
    // GET PROPOSAL
    getProposals: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CREATE_PROPOSAL_CANDIDAT + `${params}`,
      }),
    }),
    // ADD PROPOSAL ENTREPRISE
    addProposalEntreprise: builder.mutation({
      query: (projectData) => ({
        url: ENDPOINTS.CREATE_PROPOSAL_ENTREPRISE,
        method: "POST",
        body: projectData,
      }),
    }),
    // GET PROPOSAL ENTREPRISE
    getProposalsEntreprise: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CREATE_PROPOSAL_ENTREPRISE + `${params}`,
      }),
    }),
    // UPDATE PROPOSAL
    updateProposal: builder.mutation({
      query: ({ body, id }) => ({
        url: `${ENDPOINTS.CREATE_PROPOSAL_CANDIDAT}/${id}`,
        method: "POST",
        body: body,
      }),
    }),

    // UPDATE PROPOSAL ENTREPRISE
    updateProposalEntreprise: builder.mutation({
      query: ({ body, id }) => ({
        url: `${ENDPOINTS.CREATE_PROPOSAL_ENTREPRISE}/${id}`,
        method: "PATCH",
        body: body,
      }),
    }),
    deleteProposalEntreprise: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS.CREATE_PROPOSAL_ENTREPRISE}/${id}`,
        method: "DELETE",
      }),
    }),

    // GET PROPOSAL BY ID
    getProposalById: builder.query({
      query: (proposalId) => ({
        url: `${ENDPOINTS.CREATE_PROPOSAL_ENTREPRISE}/${proposalId}`, // Add ID to URL
      }),
    }),

    deleteProposal: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS.CREATE_PROPOSAL_CANDIDAT}/${id}`,
        method: "DELETE",
      }),
    }),

    // GET PROPOSAL ENTREPRISE BY ID
    getProposalEntrepriseById: builder.query({
      query: (proposalId) => ({
        url: `${ENDPOINTS.CREATE_PROPOSAL_ENTREPRISE}/${proposalId}`, // Add ID to URL
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useAddProposalEntrepriseMutation,
  useAddProposalMutation,
  useGetProposalsQuery,
  useGetProposalsEntrepriseQuery,
  useUpdateProposalEntrepriseMutation,
  useUpdateProposalMutation,
  useGetProposalByIdQuery,
  useGetProposalEntrepriseByIdQuery,
  useDeleteProposalEntrepriseMutation,
  useDeleteProposalMutation,
} = proposalApi;
