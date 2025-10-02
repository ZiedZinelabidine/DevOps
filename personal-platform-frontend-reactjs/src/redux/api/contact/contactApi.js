import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // ADD CONTACTS
    addContact: builder.mutation({
      query: (contactData) => ({
        url: ENDPOINTS.CONTACTS,
        method: "POST",
        body: contactData,
      }),
    }),
    // GET CONTACTS
    getContacts: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CONTACTS + `${params}`,
      }),
    }),

    deleteContact: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS.CONTACTS}/${id}`,
        method: "DELETE",
      }),
    }),
    // GET CONTACTS
    getItGalaxyContacts: builder.query({
      query: (params) => ({
        url: ENDPOINTS.CONTACTS + "/itgalaxycontacts/" + `${params}`,
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useAddContactMutation,
  useGetContactsQuery,
  useDeleteContactMutation,
  useGetItGalaxyContactsQuery,
} = contactApi;
