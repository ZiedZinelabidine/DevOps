import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const invoicingApi = createApi({
  reducerPath: "invoicingApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // ADD INVOICINGS
    addInvoicing: builder.mutation({
      query: (invoicingData) => ({
        url: ENDPOINTS.INVOICINGS,
        method: "POST",
        body: invoicingData,
      }),
    }),
    // GET INVOICINGS
    getInvoicings: builder.query({
      query: (params) => ({
        url: ENDPOINTS.INVOICINGS + `${params}`,
      }),
    }),

    updateInvoicings: builder.mutation({
      query: ({ invoicingId, invoicingData }) => ({
        url: `${ENDPOINTS.CREATE_INVOICING}/${invoicingId}`,
        method: "POST",
        body: invoicingData,
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useAddInvoicingMutation,
  useGetInvoicingsQuery,
  useUpdateInvoicingsMutation,
} = invoicingApi;
