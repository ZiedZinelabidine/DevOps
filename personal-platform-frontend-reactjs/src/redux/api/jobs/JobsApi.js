import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // ADD PROJECT
    createJob: builder.mutation({
      query: (jobData) => ({
        url: ENDPOINTS.JOBS,
        method: "POST",
        body: jobData,
      }),
    }),
    // Get PROJECTS
    getJobs: builder.query({
      query: ({ filterType, params }) => {
        let url;
        switch (filterType) {
          case "All":
            url = ENDPOINTS.JOBS + params;
            break;
          case "Contrats":
            url = ENDPOINTS.APPELOFFRES + params;
            break;
          case "Projects":
            url = ENDPOINTS.CREATE_PROJECT + params + "&type=SHARETASK";
            break;
          default:
            url = ENDPOINTS.JOBS + params;
            break;
        }
        return { url };
      },
    }),
  }),
});

// Export hooks for using the API endpoints
export const { useCreateJobMutation, useGetJobsQuery } = jobsApi;
