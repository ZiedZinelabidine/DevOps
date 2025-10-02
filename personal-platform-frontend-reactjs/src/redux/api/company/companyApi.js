import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // CREATE COMPANY
    createCompany: builder.mutation({
      query: (companyData) => ({
        url: ENDPOINTS.COMPANY,
        method: "POST",
        body: companyData,
      }),
    }),
    // UPDATE COMPANY
    updateCompany: builder.mutation({
      query: ({ companyId, companyData }) => ({
        url: `${ENDPOINTS.COMPANY}/${companyId}`,
        method: "POST",
        body: companyData,
      }),
    }),
    // Get COMPANY
    getCompanys: builder.query({
      query: (params) => ({
        url: ENDPOINTS.COMPANY + `${params}`,
      }),
    }),

    // Get company by presidentId and Type
    getCompanyByPresidentIdAndType: builder.query({
      query: ({ presidentId, type }) => ({
        url: `${ENDPOINTS.COMPANY}/president/${presidentId}/type/${type}`,
      }),
    }),

    deleteCompany: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS.COMPANY}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useCreateCompanyMutation,
  useGetCompanysQuery,
  useGetCompanyByPresidentIdAndTypeQuery,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
} = companyApi;
