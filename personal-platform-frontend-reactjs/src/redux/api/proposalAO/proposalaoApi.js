import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const proposalaoApi = createApi({
  reducerPath: "proposalaoApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // ADD PROPOSALAO
    addProposalAO: builder.mutation({
      query: (projectData) => ({
        url: ENDPOINTS.CREATE_PROPOSALAO,
        method: "POST",
        body: projectData,
      }),
    }),
    // GET PROPOSALAO
    getProposalAOs: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CREATE_PROPOSALAO + `?appeloffreId=${params}`,
      }),
    }),

    deleteProposalAO: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS.CREATE_PROPOSALAO}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useAddProposalAOMutation,
  useGetProposalAOsQuery,
  useDeleteProposalAOMutation,
} = proposalaoApi;
