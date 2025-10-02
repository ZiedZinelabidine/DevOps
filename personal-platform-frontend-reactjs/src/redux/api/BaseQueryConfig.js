// BaseQueryConfig.js
import { getAccessToken } from "../../core/helpers/storage";
export const baseQueryChatApiMongodbConfig = {
  baseUrl: process.env.REACT_APP_API_URL_MOGODB,
};

export const baseQuerySendEmailConfig = {
  baseUrl: process.env.REACT_APP_API_SENDMAIL,
};

export const baseQueryConfig = {
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: async (headers) => {
    // Make this function async
    const token = await getAccessToken(); // Assuming this is asynchronous
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
};

export const baseQueryInvoicingConfig = {
  baseUrl: process.env.REACT_APP_API_INVOICING,
};
