import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const withdrawalApi = createApi({
  reducerPath: "withdrawalApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // ADD ACCOUNTING
    createWithdrawalMethod: builder.mutation({
      query: (withdrawalMethodData) => ({
        url: ENDPOINTS.WITHDRAWAL_METHODS,
        method: "POST",
        body: withdrawalMethodData,
      }),
    }),
    // Get ACCOUNTINGS
    updateWithdrawalMethod: builder.mutation({
      query: ({ id, withdrawalMethodData }) => ({
        url: `${ENDPOINTS.WITHDRAWAL_METHODS}/${id}`,
        method: "POST",
        body: withdrawalMethodData,
      }),
    }),

    // Get ACCOUNTINGS
    getWithdrawalMethod: builder.query({
      query: (params) => ({
        url: `${ENDPOINTS.WITHDRAWAL_METHODS}/${params}`,
      }),
    }),

    // Get ALL ACCOUNTINGS
    getWithdrawalMethods: builder.query({
      query: (params) => ({
        url: ENDPOINTS.WITHDRAWAL_METHODS,
      }),
    }),

    // DELETE ACCOUNTING
    deleteWithdrawalMethod: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS.WITHDRAWAL_METHODS}/${id}`,
        method: "DELETE",
      }),
    }),

    createWithdrawal: builder.mutation({
      query: (withdrawalData) => ({
        url: ENDPOINTS.WITHDRAWAL,
        method: "POST",
        body: withdrawalData,
      }),
    }),

    getWithdrawal: builder.query({
      query: (params) => ({
        url: `${ENDPOINTS.WITHDRAWAL}/${params}`,
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useCreateWithdrawalMethodMutation,
  useGetWithdrawalMethodQuery,
  useGetWithdrawalMethodsQuery,
  useDeleteWithdrawalMethodMutation,
  useCreateWithdrawalMutation,
  useGetWithdrawalQuery,
} = withdrawalApi;
