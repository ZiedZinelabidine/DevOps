import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const recruterApi = createApi({
  reducerPath: "recruterApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // ADD RECRUTER
    createRecruter: builder.mutation({
      query: (recruterData) => ({
        url: ENDPOINTS.CREATE_RECRUTER,
        method: "POST",
        body: recruterData,
      }),
    }),
    // Get RECRUTERS
    getRecruters: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CREATE_RECRUTER + `/${params}`,
      }),
    }),

    getSharedRecruter: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CREATE_RECRUTER + `/sharerecruter/${params}`,
      }),
    }),

    // UPDATE RECRUTER
    updateRecruter: builder.mutation({
      query: ({ recruterId, recruterData }) => ({
        url: `${ENDPOINTS.CREATE_RECRUTER}/${recruterId}`,
        method: "POST",
        body: recruterData,
      }),
    }),
    deleteRecruter: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS.CREATE_RECRUTER}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useCreateRecruterMutation,
  useGetRecrutersQuery,
  useUpdateRecruterMutation,
  useDeleteRecruterMutation,
  useGetSharedRecruterQuery,
} = recruterApi;
