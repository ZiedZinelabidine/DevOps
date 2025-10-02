import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const requestcompanycreationApi = createApi({
  reducerPath: "requestcompanycreationApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // ADD REQUESTCOMPANYCREATION
    createRequestCompanyCreation: builder.mutation({
      query: (projectData) => ({
        url: ENDPOINTS.CREATE_REQUESTCOMPANYCREATION,
        method: "POST",
        body: projectData,
      }),
    }),
    // UPDATE REQUESTCOMPANYCREATION
    updateRequestCompanyCreation: builder.mutation({
      query: ({ requestCompanyCreationId, requestCompanyCreationData }) => ({
        url: `${ENDPOINTS.CREATE_REQUESTCOMPANYCREATION}/${requestCompanyCreationId}`,
        method: "POST",
        body: requestCompanyCreationData,
      }),
    }),
    // Get REQUESTCOMPANYCREATIONS
    getRequestCompanyCreations: builder.query({
      query: ({ presidentId, type }) => ({
        url: `${ENDPOINTS.CREATE_REQUESTCOMPANYCREATION}/president/${presidentId}/type/${type}`,
      }),
    }),

    // GET REQUESTCOMPANYCREATION BY PRESIDENT ID
    getRequestCompanyCreationByPresidentIdAndType: builder.query({
      query: ({ presidentId, type }) => ({
        url: `${ENDPOINTS.CREATE_REQUESTCOMPANYCREATION}/president/${presidentId}/type/${type}`,
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useCreateRequestCompanyCreationMutation,
  useGetRequestCompanyCreationsQuery,
  useGetRequestCompanyCreationByPresidentIdAndTypeQuery,
  useUpdateRequestCompanyCreationMutation,
} = requestcompanycreationApi;
