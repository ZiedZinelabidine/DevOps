import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const chatIdApi = createApi({
  reducerPath: "chatIdApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // Get CHATID
    getChatIds: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CHATIDS + `${params}`,
      }),
    }),
  }),
});
// Export hooks for using the API endpoints
export const { useGetChatIdsQuery } = chatIdApi;
