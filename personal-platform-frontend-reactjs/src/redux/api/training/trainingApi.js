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
export const trainingApi = createApi({
  reducerPath: "trainingApi",
  baseQuery: customBaseQuery,
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    // UPDATE ENTREPRISE
    addTraining: builder.mutation({
      query: (trainingData) => ({
        url: ENDPOINTS.PRODUCTS,
        method: "POST",
        body: trainingData,
      }),
      invalidatesTags: ["Product"],
    }),
    updateTraining: builder.mutation({
      query: ({ id, trainingData }) => ({
        url: `${ENDPOINTS.PRODUCTS}/${id}`,
        method: "PATCH",
        body: trainingData,
      }),
      providesTags: ["Product"],
    }),
    getMyProducts: builder.query({
      query: ({userId,title}) => ({
        url: title ? `${ENDPOINTS.PRODUCTS}/myproducts?userId=${userId}&page=1&limit=200&title=${title}` : `${ENDPOINTS.PRODUCTS}/myproducts?userId=${userId}&page=1&limit=200`,
      }),
    }),
    getMyProductsWithSoldedProducts: builder.query({
      query: (userId) => ({
        url: `${ENDPOINTS.PRODUCTS}/myproductswithsoldedproduct?userId=${userId}`,
      }),
    }),

    getMyProduct: builder.query({
      query: ({ token, userId }) => ({
        url: `${ENDPOINTS.PRODUCTS}/myproduct/${token}?userId=${userId}`,
      }),
    }),

    // Get Trainings
    getTrainings: builder.query({
      query: ({ userId, userType, params }) => ({
        url: `${ENDPOINTS.PRODUCTS}/getvideostrainings?userId=${userId}&userType=${userType}${params}`,
      }),
    }),

    getTrainingsPurchased: builder.query({
      query: ({ id, role, params }) => ({
        url: `${ENDPOINTS.PRODUCTS}/getvideostrainingsbybuyerid?buyerId=${id}&buyerType=${role}${params}`,
      }),
    }),

    getTrainingByToken: builder.query({
      query: ({ token }) => ({
        url: `${ENDPOINTS.PRODUCTS}?token=${token}`,
      }),
    }),
    getTrainingPurchased: builder.query({
      query: ({ token, id, role }) => ({
        url: `${ENDPOINTS.PRODUCTS}/purchasedproduct?token=${token}&buyerId=${id}&buyerType=${role}`,
      }),
    }),
    deleteTraining: builder.mutation({
      query: (trainingData) => ({
        url: `${ENDPOINTS.PRODUCTS}/`,
        method: "DELETE",
        body: trainingData,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useAddTrainingMutation,
  useGetTrainingsQuery,
  useGetMyProductQuery,
  useGetMyProductsQuery,
  useGetMyProductsWithSoldedProductsQuery,
  useGetTrainingsPurchasedQuery,
  useGetTrainingPurchasedQuery,
  useDeleteTrainingMutation,
  useGetTrainingByTokenQuery,
  useUpdateTrainingMutation,
} = trainingApi;
