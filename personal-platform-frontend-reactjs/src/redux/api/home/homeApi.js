import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // Get Formation
    getPublicFormation: builder.query({
      query: (page) => ({
        url: `${ENDPOINTS.PUBLIC_PRODUCTS}?page=${page}&limit=3&type=VIDEOSTRAINING`,
      }),
    }),
    getPublicProducts: builder.query({
      query: (params) => ({
        url: params ? ENDPOINTS.PUBLIC_PRODUCTS : ENDPOINTS.PUBLIC_PRODUCTS,
      }),
    }),
    getPublicUsers: builder.query({
      query: (params) => ({
        url: params
          ? ENDPOINTS.PUBLIC_USERS + `${params}`
          : ENDPOINTS.PUBLIC_USERS,
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useGetPublicFormationQuery,
  useGetPublicProductsQuery,
  useGetPublicUsersQuery,
} = homeApi;
