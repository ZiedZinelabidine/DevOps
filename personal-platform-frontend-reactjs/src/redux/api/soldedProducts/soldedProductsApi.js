import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { getTokenFromLocalStorage } from "../../../core/helpers/storage";
import { baseQueryConfig } from "../BaseQueryConfig";

const customBaseQuery = fetchBaseQuery({
  ...baseQueryConfig,
  prepareHeaders: (headers) => {
    const token = getTokenFromLocalStorage();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
export const soldedProductsApi = createApi({
  reducerPath: "soldedProductsApi",
  baseQuery: customBaseQuery,
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getSoldedProducts: builder.query({
      query: (params) => ({
        url: `${ENDPOINTS.SOLDED_PRODUCTS}/${params}`,
      }),
    }),

    addSoldedProducts: builder.mutation({
      query: (soldedproductData) => ({
        url: ENDPOINTS.SOLDED_PRODUCTS,
        method: "POST",
        body: soldedproductData,
      }),
    }),
  }),
});

export const { useGetSoldedProductsQuery, useAddSoldedProductsMutation } =
  soldedProductsApi;
