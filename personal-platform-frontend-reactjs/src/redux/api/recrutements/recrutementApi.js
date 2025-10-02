import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const recrutementApi = createApi({
  reducerPath: "recrutementApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // ADD RECRUTEMENT
    createRecrutement: builder.mutation({
      query: (recruitmentData) => ({
        url: ENDPOINTS.CREATE_RECRUTEMENT,
        method: "POST",
        body: recruitmentData,
      }),
    }),

    deleteRecrutment: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS.CREATE_RECRUTEMENT}/${id}`,
        method: "DELETE",
      }),
    }),
    // Get RECRUTEMENTS
    getRecrutements: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CREATE_RECRUTEMENT + `${params}`,
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useCreateRecrutementMutation,
  useGetRecrutementsQuery,
  useDeleteRecrutmentMutation,
} = recrutementApi;
