import CompanyExistAddressForm from "../../components/DepositCompanyForm/CompanyExistAddressForm/CompanyExistAddressForm";
import CompanyExistBINForm from "../../components/DepositCompanyForm/CompanyExistBINForm/CompanyExistBINForm";
import CompanyExistForm from "../../components/DepositCompanyForm/CompanyExistForm/CompanyExistForm";
import CompanyExistNameForm from "../../components/DepositCompanyForm/CompanyExistNameForm/CompanyExistNameForm";
import CompanyNewCreateForm from "../../components/DepositCompanyForm/CompanyNewCreateForm/CompanyNewCreateForm";
import CompanyNewIBANForm from "../../components/DepositCompanyForm/CompanyNewIBANForm/CompanyNewIBANForm";
import CompanyNewIdentityForm from "../../components/DepositCompanyForm/CompanyNewIdentityForm/CompanyNewIdentityForm";
import CompanyNewPaymentForm from "../../components/DepositCompanyForm/CompanyNewPaymentForm/CompanyNewPaymentForm";

import {
  COMPANY_EXIST,
  COMPANY_EXIST_ITEMS,
  COMPANY_NEW,
  COMPANY_NEW_ITEMS,
} from "../constants/depositCompanyForm.constants";
export const getSideBarItems = (companyType, setItems) => {
  switch (companyType) {
    case COMPANY_NEW:
      setItems(COMPANY_NEW_ITEMS);
      break;
    case COMPANY_EXIST:
      setItems(COMPANY_EXIST_ITEMS);
      break;
    default:
      return null;
  }
};

export const renderDepositCompanyContentList = (
  type,
  companyType,
  selectedElement,
  setItems,
  setSelectedElement,
  disableStep,
  formMethods,
  handleSubmit,
  companyData,
  isEdit,
  requestCompanyData,
  disableStepLocation,
  disableStepIBAN,
  disableStepBIN,
  disableStepIdentity,
  disableStepCompanyName,
  refetchCompany,
  refetchCompanyRequestCreation,
  success
) => {
    if (companyType === COMPANY_NEW) {
        switch (selectedElement) {
          case 1:
            return (
              <CompanyExistForm
                setItems={setItems}
                isEdit={isEdit}
                onCancel={() =>
                  selectedElement > 1 && setSelectedElement((prev) => prev - 1)
                }
                onValidate={() => setSelectedElement((prev) => prev + 1)}
                formMethods={formMethods}
                companyDataType={
                  requestCompanyData ? COMPANY_NEW : COMPANY_EXIST
                }
                disableStep={!isEdit}
              />
            );
          case 2:
            return (
              <CompanyNewCreateForm
                setItems={setItems}
                isEdit={isEdit}
                onCancel={() =>
                  selectedElement > 1 && setSelectedElement((prev) => prev - 1)
                }
                onValidate={() => setSelectedElement((prev) => prev + 1)}
                formMethods={formMethods}
                disableStep={!isEdit}
                data={requestCompanyData}
              />
            ); 
          case 3:
            return (
              <CompanyExistNameForm
                setItems={setItems}
                isEdit={isEdit}
                onCancel={() =>
                  selectedElement > 1 && setSelectedElement((prev) => prev - 1)
                }
                onValidate={() => setSelectedElement((prev) => prev + 1)}
                companyType={companyType}
                data={requestCompanyData}
                formMethods={formMethods}
                disableStep={disableStepCompanyName}
                refetchCompanyRequestCreation={refetchCompanyRequestCreation}
              />
            );
          case 4:
            return (
              <CompanyExistAddressForm
                setItems={setItems}
                isEdit={isEdit}
                onCancel={() =>
                  selectedElement > 1 && setSelectedElement(selectedElement - 1)
                }
                onValidate={() => setSelectedElement(selectedElement + 1)}
                formMethods={formMethods}
                companyType={companyType}
                data={requestCompanyData}
                disableStep={disableStepLocation}
                refetchCompany={refetchCompany}
                refetchCompanyRequestCreation={refetchCompanyRequestCreation}
              />
            );
          case 5:
            return (
              <CompanyNewIBANForm
                setItems={setItems}
                isEdit={isEdit}
                onCancel={() =>
                  selectedElement > 1 && setSelectedElement((prev) => prev - 1)
                }
                onValidate={() => setSelectedElement((prev) => prev + 1)}
                formMethods={formMethods}
                data={requestCompanyData}
                disableStep={disableStepIBAN}
                companyType={companyType}
                refetchCompanyRequestCreation={refetchCompanyRequestCreation}
              />
            );
          case 6:
            return (
              <CompanyNewIdentityForm
                setItems={setItems}
                isEdit={isEdit}
                onCancel={() =>
                  selectedElement > 1 && setSelectedElement((prev) => prev - 1)
                }
                onValidate={() => setSelectedElement((prev) => prev + 1)}
                formMethods={formMethods}
                disableStep={disableStepIdentity}
                companyType={companyType}
                data={requestCompanyData}
                refetchCompanyRequestCreation={refetchCompanyRequestCreation}
              />
            );
          case 7:
            return (
              <CompanyNewPaymentForm
                setItems={setItems}
                isEdit={isEdit}
                onCancel={() =>
                  selectedElement > 1 && setSelectedElement((prev) => prev - 1)
                }
                onValidate={handleSubmit}
                formMethods={formMethods}
                disableStep={disableStep}
                companyType={companyType}
                data={requestCompanyData}
                refetchCompanyRequestCreation={refetchCompanyRequestCreation}
                success={success}
              />
            );
          default:
            return <></>;
        }
      } else if (companyType === COMPANY_EXIST) {
        switch (selectedElement) {
         /* case 1:
            return (
              <CompanyExistForm
                setItems={setItems}
                isEdit={disableStep}
                onCancel={() =>
                  selectedElement > 1 && setSelectedElement((prev) => prev - 1)
                }
                onValidate={() => setSelectedElement((prev) => prev + 1)}
                formMethods={formMethods}
                companyDataType={
                  requestCompanyData ? COMPANY_NEW : COMPANY_EXIST
                }
                disableStep={!isEdit}
              />
            ); */
          case 1:
            return (
              <CompanyExistNameForm
                setItems={setItems}
                isEdit={isEdit}
                onCancel={() =>
                  selectedElement > 1 && setSelectedElement((prev) => prev - 1)
                }
                onValidate={() => setSelectedElement((prev) => prev + 1)}
                formMethods={formMethods}
                disableStep={disableStepCompanyName}
                companyType={companyType}
                data={companyData}
                refetchCompany={refetchCompany}
              />
            );
          case 2:
            return (
              <CompanyNewIdentityForm
                setItems={setItems}
                isEdit={isEdit}
                onCancel={() =>
                  selectedElement > 1 && setSelectedElement((prev) => prev - 1)
                }
                onValidate={() => setSelectedElement((prev) => prev + 1)}
                formMethods={formMethods}
                disableStep={disableStepIdentity}
                companyType={companyType}
                data={companyData}
                refetchCompany={refetchCompany}
              />
            );
          case 3:
            return (
              <CompanyExistAddressForm
                setItems={setItems}
                onCancel={() =>
                  selectedElement > 1 && setSelectedElement((prev) => prev - 1)
                }
                isEdit={isEdit}
                onValidate={() => setSelectedElement((prev) => prev + 1)}
                formMethods={formMethods}
                companyType={companyType}
                data={companyData}
                disableStep={disableStepLocation}
                refetchCompany={refetchCompany}
              />
            );
          case 4:
            return (
              <CompanyExistBINForm
                setItems={setItems}
                isEdit={isEdit}
                onCancel={() =>
                  selectedElement > 1 && setSelectedElement((prev) => prev - 1)
                }
                onValidate={handleSubmit}
                formMethods={formMethods}
                disableStep={disableStepBIN}
                companyType={companyType}
                data={companyData}
                refetchCompany={refetchCompany}
              />
            );
          default:
            <></>;
        }
      }
};
