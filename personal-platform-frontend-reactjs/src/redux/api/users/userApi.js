import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["user"],
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: ({ role, id }) => {
        let url;
        switch (role) {
          case "CANDIDAT":
            url = `${ENDPOINTS.CANDIDATS}/${id}`;
            break;
          case "ENTREPRISE":
            url = `${ENDPOINTS.ENTREPRISES}/${id}`;
            break;
          case "RECRUTER":
            url = `${ENDPOINTS.CREATE_RECRUTER}/${id}`;
            break;
          case "ACCOUNTING":
            url = `${ENDPOINTS.CREATE_ACCOUNTING}/${id}`;
            break;
        }
        return { url };
      },
      transformResponse: (response) => {
        // Ensure the response has a specific structure
        if (!response.data) {
          return { data: [] }; // Return empty array if data is not found
        }
        return response;
      },
    }),
  }),
});

// Export hooks for using the API endpoints
export const { useGetUserByIdQuery } = userApi;
