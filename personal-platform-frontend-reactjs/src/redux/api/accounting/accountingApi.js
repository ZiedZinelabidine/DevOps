import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const accountingApi = createApi({
  reducerPath: "accountingApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // ADD ACCOUNTING
    createAccounting: builder.mutation({
      query: (projectData) => ({
        url: ENDPOINTS.CREATE_ACCOUNTING,
        method: "POST",
        body: projectData,
      }),
    }),
    // Get ACCOUNTINGS
    getAccountings: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CREATE_ACCOUNTING + `/${params}`,
      }),
    }),
    // Get ACCOUNTINGS
    getAccountingJobs: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CREATE_ACCOUNTINGJOBS + `/${params}`,
      }),
    }),
    // Get ALL ACCOUNTINGS
    getAccountingAllJobs: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CREATE_ACCOUNTINGJOBS + `/alljobs${params}`,
      }),
    }),

    // UPDATE CANDIDAT
    updateAccountingJobs: builder.mutation({
      query: ({ accountingjobId, accountingData }) => ({
        url: `${ENDPOINTS.CREATE_ACCOUNTINGJOBS}/${accountingjobId}`,
        method: "POST",
        body: accountingData,
      }),
    }),

    getMyAccountingJob: builder.query({
      query: (params) => ({
        url:
          ENDPOINTS.CREATE_ACCOUNTINGJOBS +
          `/getjobbypresidentid/${params.id}/type/${params.type}`,
      }),
    }),

    getAffectedAccountingJobs: builder.query({
      query: (params) => ({
        url:
          ENDPOINTS.CREATE_ACCOUNTINGJOBS +
          `/accountingjobsbyaccountid/${params}`,
      }),
    }),

    deleteAccountingJobs: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS.CREATE_ACCOUNTINGJOBS}/${id}`,
        method: "DELETE",
      }),
    }),

    addAccountingJobs: builder.mutation({
      query: (accountingJobData) => ({
        url: `${ENDPOINTS.CREATE_ACCOUNTINGJOBS}`,
        method: "POST",
        body: accountingJobData,
      }),
    }),
    // UPDATE CANDIDAT
    updateAccounting: builder.mutation({
      query: ({ userId, accountingData }) => ({
        url: `${ENDPOINTS.CREATE_ACCOUNTING}${userId}`,
        method: "PUT",
        body: accountingData,
      }),
    }),
    // DELETE ACCOUNTING
    deleteAccounting: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS.CREATE_ACCOUNTING}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useCreateAccountingMutation,
  useGetAccountingsQuery,
  useDeleteAccountingMutation,
  useUpdateAccountingMutation,
  useAddAccountingJobsMutation,
  useDeleteAccountingJobsMutation,
  useUpdateAccountingJobsMutation,
  useGetAccountingJobsQuery,
  useGetAccountingAllJobsQuery,
  useGetAffectedAccountingJobsQuery,
  useGetMyAccountingJobQuery,
} = accountingApi;
