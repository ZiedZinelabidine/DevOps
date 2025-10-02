import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const marketplaceItgalaxyApi = createApi({
  reducerPath: "marketplaceItgalaxy",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // ADD PRODUCT
    addMarketplaceItgalaxy: builder.mutation({
      query: (productData) => ({
        url: ENDPOINTS.CREATE_MARKETPLACE_ITGALAXY_PRODUCT,
        method: "POST",
        body: productData,
      }),
    }),
    // GET PRODUCT
    getMarketplaceItgalaxy: builder.query({
      query: (params) => ({
        url: `${ENDPOINTS.PRODUCTS}/getmarketplaceproducts${params}`,
      }),
    }),
    // GET PRODUCT
    getMarketplaceItgalaxysPurchased: builder.query({
      query: ({ id, role, params }) => ({
        url: `${ENDPOINTS.PRODUCTS}/getmarketplaceproductsbybuyerid?buyerId=${id}&buyerType=${role}${params}`,
      }),
    }),

    // GET PRODUCT BY TOKEN
    getMarketplaceItgalaxyByToken: builder.query({
      query: ({ token, id, role }) => ({
        url: `${ENDPOINTS.CREATE_MARKETPLACE_ITGALAXY_PRODUCT}?token=${token}&buyerId=${id}&buyerType=${role}`, // Add ID to URL
      }),
    }),

    //searchMarketplace
  }),
});

// Export hooks for using the API endpoints
export const {
  useAddMarketplaceItgalaxyMutation,
  useGetMarketplaceItgalaxyByTokenQuery,
  useGetMarketplaceItgalaxyQuery,
  useGetMarketplaceItgalaxysPurchasedQuery,
} = marketplaceItgalaxyApi;
