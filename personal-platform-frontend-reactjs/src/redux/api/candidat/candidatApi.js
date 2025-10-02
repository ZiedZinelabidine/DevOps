import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const candidatApi = createApi({
  reducerPath: "candidatApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // UPDATE CANDIDAT
    updateCandidat: builder.mutation({
      query: ({ userId, candidatData }) => ({
        url: `${ENDPOINTS.CANDIDATS}${userId}`,
        method: "PUT",
        body: candidatData,
      }),
    }),
    // Get CANDIDATS
    getCandidats: builder.query({
      query: (params) => ({
        url: params ? ENDPOINTS.CANDIDATS + `${params}` : ENDPOINTS.CANDIDATS,
      }),
    }),

    getSharedCandidat: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CANDIDATS + `sharecandidat/${params}`,
      }),
    }),

    // Get CheckProfilComplet
    getCheckProfilComplet: builder.query({
      query: (id) => ({
        url: ENDPOINTS.CANDIDATS + `/${id}/checkProfilComplet`,
      }),
    }),
    // Get AllTasks
    getUserAllTasksProjects: builder.query({
      query: ({ id, params = "" }) => ({
        url:
          ENDPOINTS.CANDIDATS +
          `${id}/tasksprojects${params ? `?${params}` : ""}`,
      }),
    }),
    // Get EntrepriseProjects
    getUserEntrepriseProjects: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CANDIDATS + `/${params}` + "/entrepriseprojects",
      }),
    }),

    // Get EntrepriseProjects
    getUserProjects: builder.query({
      query: ({ id, params = "" }) => ({
        url: `${ENDPOINTS.CANDIDATS}/${id}/myprojects${
          params ? `?${params}` : ""
        }`,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS.CANDIDATS}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useDeleteUserMutation,
  useGetCheckProfilCompletQuery,
  useGetCandidatsQuery,
  useGetUserAllTasksProjectsQuery,
  useGetUserEntrepriseProjectsQuery,
  useUpdateCandidatMutation,
  useGetUserProjectsQuery,
  useGetSharedCandidatQuery,
} = candidatApi;
