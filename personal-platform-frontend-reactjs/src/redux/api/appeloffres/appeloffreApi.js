import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const appeloffreApi = createApi({
  reducerPath: "appeloffreApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // ADD APPEL OFFRE
    createAppelOffre: builder.mutation({
      query: (projectData) => ({
        url: ENDPOINTS.CREATE_APPELOFFRE,
        method: "POST",
        body: projectData,
      }),
    }),
    // ADD APPEL OFFRE
    updateAppelOffre: builder.mutation({
      query: ({ body, id }) => ({
        url: `${ENDPOINTS.CREATE_APPELOFFRE}/${id}`,
        method: "PATCH",
        body,
      }),
    }),
    getSharedAppelOffre: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CREATE_APPELOFFRE + `/shareappeloffre/${params}`,
      }),
    }),

    // Delete APPEL OFFRE
    deleteAppelOffre: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS.CREATE_APPELOFFRE}/${id}`,
        method: "DELETE",
      }),
    }),

    // Get APPEL OFFRES
    getAppelOffres: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CREATE_APPELOFFRE + `${params}`,
      }),
    }),
    // Get APPEL OFFRES BY USERID
    getAppelOffresbyuserid: builder.query({
      query: ({ filterType, params }) => {
        let url;

        if (filterType === "CANDIDAT") {
          url =
            ENDPOINTS.CREATE_APPELOFFRE +
            `/getappeloffresbyproposaluserid?proposalAppelOffreApplierType=CANDIDAT${params}`;
        } else {
          url =
            ENDPOINTS.CREATE_APPELOFFRE +
            `/getappeloffresbyproposaluserid?proposalAppelOffreApplierType=RECRUTER${params}`;
        }

        return { url };
      },
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useCreateAppelOffreMutation,
  useGetSharedAppelOffreQuery,
  useDeleteAppelOffreMutation,
  useUpdateAppelOffreMutation,
  useGetAppelOffresQuery,
  useGetAppelOffresbyuseridQuery,
} = appeloffreApi;
