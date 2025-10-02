import CapacityDatabaseForm from "components/CreateItGalaxyProductsComponnent/ItGalaxyProductCreateDatabase/CapacityDatabaseForm/CapacityDatabaseForm";
import CredentialsDatabaseForm from "components/CreateItGalaxyProductsComponnent/ItGalaxyProductCreateDatabase/CredentialsDatabaseForm/CredentialsDatabaseForm";
import ProductPaymentDatabaseForm from "components/CreateItGalaxyProductsComponnent/ItGalaxyProductCreateDatabase/ItGalaxyProductPaymentDatabaseForm/ProductPaymentDatabaseForm";
import ReservedDurationDatabaseForm from "components/CreateItGalaxyProductsComponnent/ItGalaxyProductCreateDatabase/ReservedDurationDatabaseForm/ReservedDurationDatabaseForm";
import VersionDatabaseForm from "components/CreateItGalaxyProductsComponnent/ItGalaxyProductCreateDatabase/VersionDatabaseForm/VersionDatabaseForm";
import { FormProvider } from "react-hook-form";

export const createProductDatabaseForm = (
  selectedElement,
  setSelectedElement,
  formMethods,
  type,
  handleSubmit
) => {
  const handleCancel = () => {
    if (selectedElement > 1) setSelectedElement(selectedElement - 1);
  };

  const handleValidate = async () => {
    await setSelectedElement(selectedElement + 1);
  };

  const renderWithFormProvider = (Component) => (
    <FormProvider {...formMethods}>{Component}</FormProvider>
  );

  switch (selectedElement) {
    case 1:
      return renderWithFormProvider(
        <VersionDatabaseForm
          onValidate={handleValidate}
          onCancel={handleCancel}
          formMethods={formMethods}
          type={type}
        />
      );

    case 2:
      return renderWithFormProvider(
        <CapacityDatabaseForm
          onValidate={handleValidate}
          onCancel={handleCancel}
          formMethods={formMethods}
          type={type}
        />
      );
    case 3:
      return renderWithFormProvider(
        <CredentialsDatabaseForm
          onValidate={handleValidate}
          onCancel={handleCancel}
          formMethods={formMethods}
        />
      );
    case 4:
      return renderWithFormProvider(
        <ReservedDurationDatabaseForm
          onValidate={handleValidate}
          onCancel={handleCancel}
          formMethods={formMethods}
          type={type}
        />
      );
    case 5:
      return renderWithFormProvider(
        <ProductPaymentDatabaseForm
          onCancel={handleCancel}
          onValidate={handleValidate}
          formMethods={formMethods}
          type={type}
          handleSubmit={handleSubmit}
        />
      );
    default:
      return null;
  }
};
