import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryInvoicingConfig } from "../BaseQueryConfig";

export const genrateInvoicingApi = createApi({
  reducerPath: "genrateInvoicingApi",
  baseQuery: fetchBaseQuery(baseQueryInvoicingConfig),
  endpoints: (builder) => ({
    // ADD INVOICINGS
    genrateInvoicing: builder.mutation({
      query: (invoicingData) => ({
        url: ENDPOINTS.GENERATE_INVOICINGS,
        method: "POST",
        body: invoicingData,
      }),
    }),
    genrateWithdrawalInvoicing: builder.mutation({
      query: (invoicingData) => ({
        url: ENDPOINTS.GENERATE_WITHDRAWAL_INVOICINGS,
        method: "POST",
        body: invoicingData,
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const { useGenrateInvoicingMutation , useGenrateWithdrawalInvoicingMutation } = genrateInvoicingApi;
