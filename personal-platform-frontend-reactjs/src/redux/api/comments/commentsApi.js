import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // ADD COMMENT
    createComment: builder.mutation({
      query: (commentData) => ({
        url: ENDPOINTS.CREATE_COMMENT,
        method: "POST",
        body: commentData,
      }),
    }),
    // Get COMMENTS
    getComments: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CREATE_COMMENT + `${params}`,
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const { useCreateCommentMutation, useGetCommentsQuery } = commentApi;
