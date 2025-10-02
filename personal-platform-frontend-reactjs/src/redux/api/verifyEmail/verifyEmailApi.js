import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

// Create the API
export const verifyEmailApi = createApi({
  reducerPath: "verifyEmailApi", // Name the reducer path
  baseQuery: fetchBaseQuery(baseQueryConfig), // Base configuration for the query
  endpoints: (builder) => ({
    // Define a mutation endpoint for email verification
    verifyEmail: builder.mutation({
      query: ({ filterType, params }) => {
        let url;
        // Determine the URL based on the filterType
        switch (filterType) {
          case "CANDIDAT":
            url = ENDPOINTS.VERIFYEMAIL_USER; // Use only the base URL without params for POST
            break;
          case "ENTREPRISE":
            url = ENDPOINTS.VERIFYEMAIL_ENTREPRISE; // Use only the base URL without params for POST
            break;
          case "RECRUTER":
            url = ENDPOINTS.VERIFYEMAIL_RECRUITER; // Use only the base URL without params for POST
            break;
          case "ACCOUNTING":
            url = ENDPOINTS.VERIFYEMAIL_ACCOUNTING; // Use only the base URL without params for POST
            break;
          default:
        }

        // Return the URL and body for the POST request
        return {
          url,
          method: "POST", // Specify the method
          body: params, // Send params as the body of the POST request
        };
      },
    }),

    resetVerifyEmail: builder.mutation({
      query: ({ filterType, email }) => {
        let url;
        // Determine the URL based on the filterType
        switch (filterType) {
          case "CANDIDAT":
            url = `${ENDPOINTS.RESET_VERIFYEMAIL_USER}?email=${email}`; // Use only the base URL without params for POST
            break;
          case "ENTREPRISE":
            url = `${ENDPOINTS.RESET_VERIFYEMAIL_ENTREPRISE}?email=${email}`; // Use only the base URL without params for POST
            break;
          case "RECRUTER":
            url = `${ENDPOINTS.RESET_VERIFYEMAIL_RECRUITER}?email=${email}`; // Use only the base URL without params for POST
            break;
          case "ACCOUNTING":
            url = `${ENDPOINTS.RESET_VERIFYEMAIL_ACCOUNTING}?email=${email}`; // Use only the base URL without params for POST
            break;
          default:
        }

        // Return the URL and body for the POST request
        return {
          url,
          method: "POST", // Specify the method
        };
      },
    }),

  }),
});

// Export the hook for the mutation
export const { useVerifyEmailMutation , useResetVerifyEmailMutation } = verifyEmailApi;
