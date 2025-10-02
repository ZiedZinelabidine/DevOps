import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { accountingApi } from "./api/accounting/accountingApi";
import { chatmongodbApi } from "./api/api-chat-mongodb/api-chat-mongodbAPI";
import { appeloffreApi } from "./api/appeloffres/appeloffreApi";
import { authApi } from "./api/auth/authApi";
import { candidatApi } from "./api/candidat/candidatApi";
import { chatIdApi } from "./api/chatId/chatIdApi";
import { commentApi } from "./api/comments/commentsApi";
import { companyApi } from "./api/company/companyApi";
import { contactApi } from "./api/contact/contactApi";
import { entrepriseApi } from "./api/entreprise/entrepriseApi";
import { genrateInvoicingApi } from "./api/genrateInvoicing/genrateInvoicingApi.js";
import { ItemsApi } from "./api/getItems/getItemsAPI";
import { homeApi } from "./api/home/homeApi";
import { invoicingApi } from "./api/invoicing/invoicingApi";
import { jobsApi } from "./api/jobs/JobsApi";
import { marketplaceItgalaxyApi } from "./api/marketplaceItgalaxy/marketplaceItgalaxyApi";
import { paymentApi } from "./api/payment/paymentApi";
import { projectApi } from "./api/projects/projectApi";
import { proposalaoApi } from "./api/proposalAO/proposalaoApi";
import { proposalApi } from "./api/proposals/proposalApi";
import { recrutementApi } from "./api/recrutements/recrutementApi";
import { recruterApi } from "./api/recruter/recruterApi";
import { requestcompanycreationApi } from "./api/requestCompanyCreation/requestCompanyCreationApi";
import { soldedProductsApi } from "./api/soldedProducts/soldedProductsApi";
import { trainingApi } from "./api/training/trainingApi";
import { userApi } from "./api/users/userApi";
import { verifyEmailApi } from "./api/verifyEmail/verifyEmailApi";
import { withdrawalApi } from "./api/withdrawal/withdrawalApi";
import chatIdSlice from "./slice/chatIdSlice/chatIdSlice";
import companyCreationSlice from "./slice/CompanyCreation/companyCreationSlice";
import dashboardDetailsSlice from "./slice/DashboardDetails/DashboardDetailsSlice";
import projectCreationSlice from "./slice/projectCreation/projectCreationSlice";
import { projectSlice } from "./slice/projectSlice/projectSlice";
import proposalEntrepriseSlice from "./slice/proposal/proposalEntrepriseSlice";
import proposalSlice from "./slice/proposal/proposalSlice";
import proposalCreationSlice from "./slice/proposalCreation/proposalCreationSlice";
import proposalEntrepriseCreationSlice from "./slice/propsoalEntrepriseCreationSlice/proposalEntrepriseCreationSlice";
import proxySlice from "./slice/proxySlice/proxySlice";
import trainingCreationSlice from "./slice/TrainingCreation/trainingCreationSlice";
import userSlice from "./slice/userSlice/userSlice";

const rootReducer = combineReducers({
  user: userSlice,
  proxy: proxySlice,
  projectCreation: projectCreationSlice,
  proposalCreation: proposalCreationSlice,
  proposalEntrepriseCreation: proposalEntrepriseCreationSlice,
  dashboardDetails: dashboardDetailsSlice,
  [authApi.reducerPath]: authApi.reducer,
  [projectApi.reducerPath]: projectApi.reducer,
  [proposalApi.reducerPath]: proposalApi.reducer,
  [trainingApi.reducerPath]: trainingApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [entrepriseApi.reducerPath]: entrepriseApi.reducer,
  [ItemsApi.reducerPath]: ItemsApi.reducer,
  [paymentApi.reducerPath]: paymentApi.reducer,
  [candidatApi]: candidatApi.reducer,
  [accountingApi]: accountingApi.reducer,
  [recruterApi.reducerPath]: recruterApi.reducer,
  [recrutementApi.reducerPath]: recrutementApi.reducer,
  [commentApi.reducerPath]: commentApi.reducer,
  [candidatApi.reducerPath]: candidatApi.reducer,
  [accountingApi.reducerPath]: accountingApi.reducer,
  [soldedProductsApi.reducerPath]: soldedProductsApi.reducer,
  [homeApi.reducerPath]: homeApi.reducer,
  [chatmongodbApi.reducerPath]: chatmongodbApi.reducer,
  [chatIdApi.reducerPath]: chatIdApi.reducer,
  [contactApi.reducerPath]: contactApi.reducer,
  [proposalaoApi.reducerPath]: proposalaoApi.reducer,
  [appeloffreApi.reducerPath]: appeloffreApi.reducer,
  [jobsApi.reducerPath]: jobsApi.reducer,
  [verifyEmailApi.reducerPath]: verifyEmailApi.reducer,
  [companyApi.reducerPath]: companyApi.reducer,
  [requestcompanycreationApi.reducerPath]: requestcompanycreationApi.reducer,
  [invoicingApi.reducerPath]: invoicingApi.reducer,
  [genrateInvoicingApi.reducerPath]: genrateInvoicingApi.reducer,
  [withdrawalApi.reducerPath]: withdrawalApi.reducer,
  [marketplaceItgalaxyApi.reducerPath]: marketplaceItgalaxyApi.reducer,
  project: projectSlice,
  proposal: proposalSlice,
  proposalEntreprise: proposalEntrepriseSlice,
  trainingCreation: trainingCreationSlice,
  companyCreation: companyCreationSlice,
  chatId: chatIdSlice,
});
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat([authApi.middleware])
      .concat([projectApi.middleware])
      .concat([proposalApi.middleware])
      .concat([trainingApi.middleware])
      .concat([userApi.middleware])
      .concat([entrepriseApi.middleware])
      .concat([ItemsApi.middleware])
      .concat([paymentApi.middleware])
      .concat([recruterApi.middleware])
      .concat([commentApi.middleware])
      .concat([candidatApi.middleware])
      .concat([accountingApi.middleware])
      .concat([soldedProductsApi.middleware])
      .concat([chatmongodbApi.middleware])
      .concat([homeApi.middleware])
      .concat([proposalaoApi.middleware])
      .concat([contactApi.middleware])
      .concat([appeloffreApi.middleware])
      .concat([jobsApi.middleware])
      .concat([verifyEmailApi.middleware])
      .concat([recrutementApi.middleware])
      .concat([chatIdApi.middleware])
      .concat([invoicingApi.middleware])
      .concat([companyApi.middleware])
      .concat([requestcompanycreationApi.middleware])
      .concat([genrateInvoicingApi.middleware])
      .concat([withdrawalApi.middleware])
      .concat([marketplaceItgalaxyApi.middleware]),
});
