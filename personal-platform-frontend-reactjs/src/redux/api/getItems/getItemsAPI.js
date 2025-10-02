import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../../core/constants/endpoints";
import { baseQueryConfig } from "../BaseQueryConfig";

export const ItemsApi = createApi({
  reducerPath: "ItemsApi",
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    // Get ENTREPRISEITEMS
    FilterItems: builder.query({
      query: ({ filterType, params }) => {
        let url;
        switch (filterType) {
          case "projects":
            url = ENDPOINTS.CREATE_PROJECT + params;
            break;
          case "soldedproducts":
          case "products":
            url = ENDPOINTS.SOLDED_PRODUCTS + params;
            break;
          case "contacted":
          case "itgalaxy contactor":
            url = ENDPOINTS.CONTACTS + params + "&contactedType=ENTREPRISE";
            break;
          case "appeloffreproposals":
          case "appeloffres":
            url = ENDPOINTS.APPELOFFRES + params;
            break;
          default:
            url = ENDPOINTS.CREATE_PROJECT + params;
            break;
        }
        return { url };
      },
    }),

    getCandidatItems: builder.query({
      query: ({ filterType, params }) => {
        let url;
        switch (filterType) {
          case "projects":
            url = `${ENDPOINTS.CREATE_PROJECT}/getprojectsbyproposaluserid?proposalEntrepiseUserId=${params}&proposalUserId=${params}&page=1&limit=100`;
            break;

          case "purchased products":
            url = `${ENDPOINTS.SOLDED_PRODUCTS}?buyerType=CANDIDAT&buyerId=${params}&page=1&limit=200`;
            break;

          case "my products":
            url = `${ENDPOINTS.PRODUCTS}/myproductswithsoldedproduct?userId=${params}&page=1&limit=200`;
            break;

          case "contrats":
            url = `${ENDPOINTS.APPELOFFRES}/getappeloffresbyproposaluserid?proposalAppelOffreApplierType=CANDIDAT&proposalAppelOffreApplierId=${params}&page=1&limit=200`;
            break;

          case "itgalaxy contactor":
            url = `${ENDPOINTS.CONTACTS}?contactedType=CANDIDAT&contactedId=${params}&page=1&limit=200`;
            break;

          case "recruitment":
            url = `${ENDPOINTS.CREATE_RECRUTEMENT}?recruted_type=CANDIDAT&recrutedId=${params}&page=1&limit=200`;
            break;
          case "accounting":
            url = `${ENDPOINTS.CREATE_ACCOUNTINGJOBS}/getaccountingjobbypresidentid/${params}/type/CANDIDAT`;
            break;

          default:
        }
        return { url };
      },
    }),

    getRecruterItems: builder.query({
      query: ({ filterType, params }) => {
        let url;
        switch (filterType) {
          case "mes offres":
            url = `${ENDPOINTS.APPELOFFRES}?recruterId=${params}&page=1&limit=200`;
            break;

          case "vos propositions":
            url = `${ENDPOINTS.APPELOFFRES}/getappeloffresbyproposaluserid?proposalAppelOffreApplierType=RECRUTER&proposalAppelOffreApplierId=${params}&page=1&limit=200`;
            break;

          case "contactors":
            url = `${ENDPOINTS.CONTACTS}?contactorId=${params}&page=1&limit=200`;
            break;

          case "recruitments":
            url = `${ENDPOINTS.CREATE_RECRUTEMENT}?recruterId=${params}&page=1&limit=200`;
            break;

          case "accounting":
            url = `${ENDPOINTS.CREATE_ACCOUNTINGJOBS}/getaccountingjobbypresidentid/${params}/type/RECRUTER`;
            break;

          default:
        }
        return { url };
      },
    }),

    getAccountingItems: builder.query({
      query: ({ filterType, params }) => {
        let url;
        switch (filterType) {
          case "my folders":
            url =
              ENDPOINTS.CREATE_ACCOUNTINGJOBS +
              `/accountingjobsbyaccountid/${params}`;
            break;
          case "my request":
            url =
              ENDPOINTS.CREATE_ACCOUNTINGJOBS +
              `/getaccountingjobbypresidentid/${params}/type/ACCOUNTING`;
            break;
          default:
        }
        return { url };
      },
    }),

    FilterItemsDetails: builder.query({
      query: ({ filterType, params }) => {
        let url;
        switch (filterType) {
          case "COMPOSED_FREELANCE":
            url = ENDPOINTS.CREATE_PROPOSAL_ENTREPRISE + params;
            break;
          case "SHARETASK":
            url = ENDPOINTS.CREATE_PROPOSAL_CANDIDAT + params;
            break;
          case "Contrat":
            url = ENDPOINTS.CREATE_PROPOSALAO + params;
            break;
          case "Contactor":
            url = ENDPOINTS.CONTACTS + params;
            break;
          case "Recruitment":
            url = ENDPOINTS.CREATE_RECRUTEMENT + params;
            break;
          case "AccountingJob":
            url = ENDPOINTS.CREATE_ACCOUNTINGJOBS + params;
            break;
          default:
            // handle any unknown filterType, if necessary
            break;
        }
        return { url };
      },
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  useGetCandidatItemsQuery,
  useFilterItemsQuery,
  useFilterItemsDetailsQuery,
  useGetRecruterItemsQuery,
  useGetAccountingItemsQuery,
} = ItemsApi;
