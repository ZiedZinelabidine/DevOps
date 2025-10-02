import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";
import { decodeLoginUserResponse } from "./decoders";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // LOGIN
    login: builder.mutation({
      query: (loginData) => ({
        url: ENDPOINTS.LOGIN,
        method: "POST",
        body: loginData,
      }),
      transformResponse: (response) => {
        return decodeLoginUserResponse(response);
      },
    }),
    userForgotPassword: builder.mutation({
      query: (email) => ({
        url: `${ENDPOINTS.FORGET_PASSWORD}?email=${email}`,
        method: "POST",
      }),
    }),
    signupEntreprise: builder.mutation({
      query: (signupData) => ({
        url: ENDPOINTS.SIGNUP_ENTREPRISE,
        method: "POST",
        body: signupData,
      }),
      transformResponse: (response) => {
        return decodeLoginUserResponse(response);
      },
    }),
    signupCandidat: builder.mutation({
      query: (signupData) => ({
        url: ENDPOINTS.SIGNUP_CANDIDAT,
        method: "POST",
        body: signupData,
      }),
      transformResponse: (response) => {
        return decodeLoginUserResponse(response);
      },
    }),
    signupRecruiter: builder.mutation({
      query: (signupData) => ({
        url: ENDPOINTS.SIGNUP_RECRUITER,
        method: "POST",
        body: signupData,
      }),
      transformResponse: (response) => {
        return decodeLoginUserResponse(response);
      },
    }),
    signupAccounting: builder.mutation({
      query: (signupData) => ({
        url: ENDPOINTS.SIGNUP_ACCOUNTING,
        method: "POST",
        body: signupData,
      }),
      transformResponse: (response) => {
        return decodeLoginUserResponse(response);
      },
    }),
    loginAccounting: builder.mutation({
      query: (loginData) => ({
        url: ENDPOINTS.LOGIN_ACCOUNTING,
        method: "POST",
        body: loginData,
      }),
      transformResponse: (response) => {
        return decodeLoginUserResponse(response);
      },
    }),
    resetPassword: builder.mutation({
      query: ({ filterType, token, params }) => {
        let url;
        switch (filterType) {
          case "CANDIDAT":
            url = `${ENDPOINTS.RESET_PASSWORD_USER}?token=${token}`;
            break;
          case "ENTREPRISE":
            url = `${ENDPOINTS.RESET_PASSWORD_ENTREPRISE}?token=${token}`;
            break;
          case "RECRUTER":
            url = `${ENDPOINTS.RESET_PASSWORD_RECRUTER}?token=${token}`;
            break;
          case "ACCOUNTING":
            url = `${ENDPOINTS.RESET_PASSWORD_ACCOUNTING}?token=${token}`;
            break;
          default:
        }
        return {
          url,
          method: "POST", // Specify the method
          body: params, // Send params as the body of the POST request
        };
      },
      transformResponse: (response) => {
        return decodeLoginUserResponse(response);
      },
    }),

    // LOGOUT
    logout: builder.mutation({
      query: () => ({
        url: ENDPOINTS.LOGOUT,
        method: "POST",
      }),
    }),
  }),
});
export const {
  useLoginMutation,
  useSignupCandidatMutation,
  useSignupEntrepriseMutation,
  useSignupRecruiterMutation,
  useLogoutMutation,
  useResetPasswordMutation,
  useUserForgotPasswordMutation,
  useLoginAccountingMutation,
  useSignupAccountingMutation,
} = authApi;
