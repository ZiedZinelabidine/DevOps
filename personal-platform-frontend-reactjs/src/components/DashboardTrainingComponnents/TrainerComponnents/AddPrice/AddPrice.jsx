import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addPriceTraining } from "../../../../redux/slice/TrainingCreation/trainingCreationSlice.js";
import GenericInput from "../../../Inputs/GenericInput/GenericInput.jsx";
import { formConfig } from "./AddPrice.constants";
import { ContentFormContainer, StyledLabel,LoadingContainer ,LoadingMessage } from "./AddPrice.style.js";

export default function AddPrice({
  edit,
  id,
  onValidate,
  handleSubmitUpdate,
  loading,
}) {
  const { token } = useParams();
  const training = useSelector((state) => state.trainingCreation);
  const dispatch = useDispatch();
  const formMethods = useFormContext({
    mode: "onChange",
    shouldFocusError: true,
  });
  const priceEdit = formMethods.getValues("price");
  const [inputValue, setInputValue] = useState(priceEdit);

  const handleChange = (e) => {
    const { name, value } = e.target;
    formMethods.setValue(name, value);
    setInputValue(value);
  };

  const handleSubmit = async (e) => {
    dispatch(
      addPriceTraining({
        price: formMethods.getValues("price"),
      })
    );
    if (edit) {
      const result = await handleSubmitUpdate(id);

      if (result.success) {
        window.location.href = `/myproduct?token=${result.display}&edit=true`;
      }
    } else {
      onValidate();
    }
  };

  return (
    <>
      <ContentFormContainer>
        <StyledLabel>1. Add a price for your product (euro)</StyledLabel>
        <GenericInput
          inputObject={{
            ...formConfig.price,
          }}
          onChange={(e) => handleChange(e)}
          disabledForm={false}
        />
        <>
          {loading ? (
          <LoadingContainer>
          <LoadingMessage>
              Please wait while we process your request. Refreshing the page may result in loss of unsaved content.
          </LoadingMessage>
          <Spinner />
        </LoadingContainer>
          ) : (
            <div style={{ float: "right", marginTop: "10%" }}>
              <Button
                disabled={!inputValue}
                style={{ marginLeft: "15px" }}
                variant="primary"
                onClick={handleSubmit}
              >
                Confirm
              </Button>
            </div>
          )}
        </>
      </ContentFormContainer>
    </>
  );
}
