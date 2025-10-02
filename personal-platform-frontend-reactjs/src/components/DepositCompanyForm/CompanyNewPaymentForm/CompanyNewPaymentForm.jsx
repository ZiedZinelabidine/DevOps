import PaymentDetails from "components/PaymentForm/paymentDetails/paymentDetails";
import { priceCreationCompanyData } from "data/priceCreationCompanyData"; // Adjust the path as necessary

const CompanyNewPaymentForm = ({
  isEdit = true,
  onValidate,
  onCancel,
  formMethods,
  disableStep,
  refetchCompanyRequestCreation,
}) => {
  const formValues = formMethods.getValues();
  const priceEntry = priceCreationCompanyData.find(
    (entry) => entry.title === formValues.companyCountry
  );
  const price = priceEntry ? priceEntry.price : 100;

  return (
    <PaymentDetails
      title={"PAYMENT COMPANY CREATION"}
      note={
        "Note that if the proposal isn't finished, you will receive a refund."
      }
      price={price}
      onSubmit={onValidate}
    />
  );
};

export default CompanyNewPaymentForm;
