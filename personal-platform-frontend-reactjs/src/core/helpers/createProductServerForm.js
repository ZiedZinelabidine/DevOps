import CredentialsServerForm from "components/CreateItGalaxyProductsComponnent/ItGalaxyProductCreateServer/CredentialsServerForm/CredentialsServerForm";
import ProductPaymentServerForm from "components/CreateItGalaxyProductsComponnent/ItGalaxyProductCreateServer/ItGalaxyProductPaymentServerForm/ProductPaymentServerForm";
import ReservedDurationServerForm from "components/CreateItGalaxyProductsComponnent/ItGalaxyProductCreateServer/ReservedDurationServerForm/ReservedDurationServerForm";
import TypeServerForm from "components/CreateItGalaxyProductsComponnent/ItGalaxyProductCreateServer/TypeServerForm/TypeServerForm";
import { FormProvider } from "react-hook-form";

export const createProductServerForm = (
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
        <TypeServerForm
          onValidate={handleValidate}
          onCancel={handleCancel}
          formMethods={formMethods}
          type={type}
        />
      );
    case 2:
      return renderWithFormProvider(
        <CredentialsServerForm
          onValidate={handleValidate}
          onCancel={handleCancel}
          formMethods={formMethods}
        />
      );
    case 3:
      return renderWithFormProvider(
        <ReservedDurationServerForm
          onValidate={handleValidate}
          onCancel={handleCancel}
          formMethods={formMethods}
          type={type}
        />
      );
    case 4:
      return renderWithFormProvider(
        <div style={{width: '100%'}}>
        <ProductPaymentServerForm
          onCancel={handleCancel}
          onValidate={handleValidate}
          formMethods={formMethods}
          type={type}
          handleSubmit={handleSubmit}
        />
        </div>
      );
    default:
      return null;
  }
};
