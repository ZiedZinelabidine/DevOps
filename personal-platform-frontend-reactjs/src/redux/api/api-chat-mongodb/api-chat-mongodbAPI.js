import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryChatApiMongodbConfig } from "../BaseQueryChatMongodbConfig";

export const chatmongodbApi = createApi({
  reducerPath: "chatmongodbApi",
  baseQuery: fetchBaseQuery(baseQueryChatApiMongodbConfig),
  endpoints: (builder) => ({
    // UPDATE CRED CHATMONGODB
    updateCredentials: builder.mutation({
      query: ({ userId }) => ({
        url: `${ENDPOINTS.CREDENTIAL}/?userid=${userId}`,
        method: "POST",
      }),
    }),
    // Create Topic
    addTopic: builder.mutation({
      query: ({ bodyData }) => ({
        url: `${ENDPOINTS.TOPICS}`,
        method: "POST",
        body: bodyData,
      }),
    }),

    getChannels: builder.query({
      query: ({ positionChannel, queryChannel }) => {
        const endpoint =
          positionChannel === "owner"
            ? ENDPOINTS.TOPICS
            : ENDPOINTS.SUBSCRIPTIONS;
        return { url: `${endpoint}${queryChannel}` };
      },
    }),
    getFilteredChannels: builder.query({
      query: ({ positionChannel, queryChannel }) => {
        const endpoint =
          positionChannel === "owner"
            ? ENDPOINTS.TOPICS
            : ENDPOINTS.SUBSCRIPTIONS;
        return { url: `${endpoint}${queryChannel}` };
      },
    }),

    // add messages
    addMessage: builder.mutation({
      query: (bodyData) => ({
        url: `${ENDPOINTS.MESSAGES}/`,
        method: "POST",
        body: bodyData,
      }),
    }),

    updatePhoto: builder.mutation({
      query: (bodyData) => ({
        url: `${ENDPOINTS.CANDIDATS}updatephoto`,
        method: "PUT",
        body: bodyData,
      }),
    }),

    updateName: builder.mutation({
      query: (bodyData) => ({
        url: `${ENDPOINTS.CANDIDATS}updatename`,
        method: "PUT",
        body: bodyData,
      }),
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS.CANDIDATS}?_id=${id}`,
        method: "DELETE",
      }),
    }),
    deleteChannel: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS.TOPICS}?_id=${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useUpdateCredentialsMutation,
  useAddTopicMutation,
  useAddMessageMutation,
  useGetChannelsQuery,
  useGetFilteredChannelsQuery,
  useDeleteUserMutation,
  useUpdatePhotoMutation,
  useUpdateNameMutation,
  useDeleteChannelMutation,
} = chatmongodbApi;
