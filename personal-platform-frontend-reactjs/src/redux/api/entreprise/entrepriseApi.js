import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const entrepriseApi = createApi({
  reducerPath: "entrepriseApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // UPDATE ENTREPRISE
    updateEntreprise: builder.mutation({
      query: ({ entrepriseId, entrepriseData }) => ({
        url: `${ENDPOINTS.ENTREPRISES}/${entrepriseId}`,
        method: "PATCH",
        body: entrepriseData,
      }),
    }),
    // Get ENTREPRISE
    getEntreprises: builder.query({
      query: (params) => ({
        url: ENDPOINTS.ENTREPRISES + `${params}`,
      }),
    }),

    getSharedEntreprise: builder.query({
      query: (params) => ({
        url: ENDPOINTS.ENTREPRISES + `/shareentreprise/${params}`,
      }),
    }),

    deleteEntreprise: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS.ENTREPRISES}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useGetEntreprisesQuery,
  useUpdateEntrepriseMutation,
  useDeleteEntrepriseMutation,
  useGetSharedEntrepriseQuery,
} = entrepriseApi;
