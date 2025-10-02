import {
  COMPANY_EXIST,
  COMPANY_NEW,
} from "core/constants/depositCompanyForm.constants";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getTokenFromLocalStorage } from "../core/helpers/storage";
import { priceCreationCompanyData } from "../data/priceCreationCompanyData"; // Adjust the path as necessary
import {
  useCreateCompanyMutation,
  useUpdateCompanyMutation,
} from "../redux/api/company/companyApi";
import {
  useCreateRequestCompanyCreationMutation,
  useUpdateRequestCompanyCreationMutation,
} from "../redux/api/requestCompanyCreation/requestCompanyCreationApi";
import { s3Upload } from "../redux/api/uploads/uploadSlice";
import { fileToBase64 } from "../utils/fileConvertion";

const useHandleSubmitCompany = (
  selectedElement,
  setSelectedElement,
  setConfirmShow,
  openModalRegister,
  setOpenModalRegister,
  isEdit,
  formMethods,
  companyType,
  companyData,
  requestCompanyData,
  refetchCompanyRequestCreation,
  refetchCompany
) => {
  const [loading, setLoading] = useState(false); // State to control loading

  const [createCompany] = useCreateCompanyMutation();
  const [createRequestCompany] = useCreateRequestCompanyCreationMutation();
  const [updateCompany] = useUpdateCompanyMutation();
  const [updateCompanyCreation] = useUpdateRequestCompanyCreationMutation();

  const dispatch = useDispatch();
  const token = getTokenFromLocalStorage();
  const decodeToken = token ? jwtDecode(token) : null;

  const convertJSONtoFile = (jsonFile) => {
    const content = new Blob([" ".repeat(jsonFile?.size)], {
      type: jsonFile?.type,
    });
    return new File([content], jsonFile?.name, {
      lastModified: jsonFile?.lastModified,
      type: jsonFile?.type,
      lastModifiedDate: jsonFile?.lastModifiedDate,
      webkitRelativePath: jsonFile?.webkitRelativePath,
      size: jsonFile?.size,
    });
  };

  const handleFileUpload = async (formValues, basePath) => {
    const uploadPromises = [];

    if (formValues.companyAddressProofAttachment) {
      uploadPromises.push(
        dispatch(
          s3Upload({
            file: formValues.companyAddressProofAttachment,
            type: "companyAddress/",
            base64URL: await fileToBase64(formValues.companyAddressProofAttachment),
            location: basePath,
            onepart: true,
          })
        )
      );
    }

    if (formValues.companyBINProofAttachment) {
      uploadPromises.push(
        dispatch(
          s3Upload({
            file: formValues.companyBINProofAttachment,
            type: "companyBIN/",
            base64URL: await fileToBase64(formValues.companyBINProofAttachment),
            location: basePath,
            onepart: true,

          })
        )
      );
    }

    if (formValues.companyIBANProofAttachment) {
      uploadPromises.push(
        dispatch(
          s3Upload({
            file: formValues.companyIBANProofAttachment,
            type: "companyIBAN/",
            base64URL: await fileToBase64(formValues.companyIBANProofAttachment),
            location: basePath,
            onepart: true,
          })
        )
      );
    }

    if (formValues.cardIdentityFrontProofAttachment) {
      uploadPromises.push(
        dispatch(
          s3Upload({
            file: formValues.cardIdentityFrontProofAttachment,       
            type: "identityFront/",
            base64URL: await fileToBase64(formValues.cardIdentityFrontProofAttachment),
            location: basePath,
            onepart: true,
          })
        )
      );
    }

    if (formValues.cardIdentityBackProofAttachment) {
      uploadPromises.push(
        dispatch(
          s3Upload({
            file: formValues.cardIdentityBackProofAttachment,
            type: "identityBack/",
            base64URL: await fileToBase64(formValues.cardIdentityBackProofAttachment),
            location: basePath,
            onepart: true,
          })
        )
      );
    }

    await Promise.all(uploadPromises);
  };

  const handleSubmit = async () => {
    setLoading(true); // Start loading
    const formValues = formMethods.getValues();
    let response;
    let success = false;

    try {
      if (companyType === COMPANY_EXIST) {
        const body = {
          presidentId: decodeToken?.id,
          presidentType: decodeToken?.role,
          company_name: formValues.companyName,
          identity_type: formValues.identityType.value,
          company_country: formValues.companyCountry.value,
          identity_company_type: formValues.identityCompanyType.value,
          identity_number: formValues.identityNumber,
          company_siren: formValues.companyBIN,
          company_location: formValues.companyAddress,
        };

        if (companyData?.data?.length > 0) {
          response = await updateCompany(companyData[0]?.id, body);
        } else {
          response = await createCompany(body);
        }

        const basePath = `company/${response?.data?.id}/`;

        // Handle file uploads
        await handleFileUpload(formValues, basePath);
        setSelectedElement(2);
        window.location.reload(); // Refresh the page to reflect changes
      } else if (companyType === COMPANY_NEW) {
        // Find the price for the specific country
        const priceEntry = priceCreationCompanyData.find(
          (entry) => entry.title === formValues.companyCountry
        );
        const price = priceEntry ? priceEntry.price : 100; // Default to 100 if country not found

        const body = {
          presidentId: decodeToken?.id,
          presidentType: decodeToken?.role,
          company_country: formValues.companyCountry.value,
          company_location: formValues.companyAddress,
          rib: formValues.companyIBAN,
          company_name: formValues.companyName,
          price: price, // Set price based on country
          company_siren: formValues.companyBIN,
          identity_number: formValues.identityNumber,
          identity_type: formValues.identityType.value,
        };

        if (requestCompanyData?.data?.length > 0) {
          response = await updateCompanyCreation({
            requestCompanyCreationId: requestCompanyData[0].id,
            requestCompanyCreationData: body,
          });
        } else {
          response = await createRequestCompany(body);
        }
        const basePath = `request_company_creation/${response?.data?.id}/`;
        await handleFileUpload(formValues, basePath);
      }
    } catch (error) {
      // Handle error properly (you can also set error state if needed)
      console.error("Error during submission:", error);
      return {
        success: false,
        targetProductType: "REQUEST_COMPANY_CREATION",
        targetProductId: 0,
        invoicingDescription: "REFUND : error create request company ",
      };
    } finally {
      setLoading(false); // Stop loading regardless of the outcome
      return {
        success: true,
        companyId: response?.data?.id,
        amount: companyType === COMPANY_NEW ? response?.data?.totalPrice : 0,
        companyType,
        paymentRequired: companyType === COMPANY_NEW,
        url: `company`,
        targetProductType: "REQUEST_COMPANY_CREATION",
        targetProductId: response.data.id,
        invoicingDescription:
          "Share REQUEST COMPANY CREATION with the community accounting ItGalaxy",
      };
    }
  };

  return { handleSubmit, loading }; // Return loading state
};

export default useHandleSubmitCompany;
