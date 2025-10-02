import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  tagTypes: ["payment"],
  endpoints: (builder) => ({
    getPaymentHistory: builder.query({
      query: () => ({
        url: `${ENDPOINTS.PAYMENT}/history`,
        method: "GET",
      }),
      providesTags: ["payment"],
    }),
    // CREATE Payment method
    createPayment: builder.mutation({
      query: (body) => ({
        url: `${ENDPOINTS.PAYMENT}create-payment`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["stripe"],
    }),
    createPaymentWithWallet: builder.mutation({
      query: (body) => ({
        url: `${ENDPOINTS.PAYMENT}create-payment-wallet`,
        method: "POST",
        body: body,
      }),
      tagTypes: ["payment"],
    }),
    refundStripePayment: builder.mutation({
      query: ({ params, body }) => ({
        url: `${ENDPOINTS.PAYMENT}/refund-payment`,
        method: "POST",
        body: body,
      }),
    }),
    refundWalletPayment: builder.mutation({
      query: (body) => ({
        url: `${ENDPOINTS.PAYMENT}/refundwithwallet`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useCreatePaymentMutation,
  useRefundWalletPaymentMutation,
  useCreatePaymentWithWalletMutation,
  useRefundStripePaymentMutation,
  useGetPaymentHistoryQuery,
} = paymentApi;
