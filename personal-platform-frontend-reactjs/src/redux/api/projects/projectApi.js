import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // ADD PROJECT
    createProject: builder.mutation({
      query: (projectData) => ({
        url: ENDPOINTS.CREATE_PROJECT,
        method: "POST",
        body: projectData,
      }),
    }),
    // Get PROJECTS
    getProjects: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CREATE_PROJECT + `${params}`,
      }),
    }),

    getSharedProject: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CREATE_PROJECT + `/shareproject/${params}`,
      }),
    }),
    updateProject: builder.mutation({
      query: ({ body, id }) => ({
        url: `${ENDPOINTS.CREATE_PROJECT}/${id}`,
        method: "PATCH",
        body,
      }),
    }),

    deleteProject: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS.CREATE_PROJECT}/${id}`,
        method: "DELETE",
      }),
    }),
    getProposalsbyProjectId: builder.query({
      query: (params) => ({
        url:
          ENDPOINTS.CREATE_PROJECT +
          `/getproposalswithprojectId?projectId=${params}`,
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useCreateProjectMutation,
  useGetSharedProjectQuery,
  useGetProjectsQuery,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
  useGetProposalsbyProjectIdQuery,
} = projectApi;
