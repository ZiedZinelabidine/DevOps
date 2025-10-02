import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PRODUCT_DATABASE_ITEMS } from "../../../core/constants/productCloudForm.constants.js";
import { createProductDatabaseForm } from "../../../core/helpers/createProductDatabaseForm.js";
import { getTokenFromLocalStorage } from "../../../core/helpers/storage.js";
import useHandleSubmitItGalaxyProduct from "../../../hooks/useHandleSubmitItGalaxyProduct.js";

import {
  BackButton,
  BigContainer,
  ButtonContainer,
  StyledBoldSubtitle,
  StyledBreadcrumb,
  StyledCircle,
  StyledContainer,
  StyledDepositCompanyHeader,
  StyledFormContainer,
  StyledGoBackContainer,
  StyledGoNextContainer,
  StyledLineOne,
  StyledNextLineOne,
  StyledStep,
  StyledStepContentCard,
  StyledStepContentColumn,
  StyledStepTitle,
  StyledStepTitleCard,
  StyledStepperCard,
  StyledStepsFormContainer,
  StyledSubtitle,
  StyledTitle,
  StyledTitleAndSubtitleContainer,
} from "../style.js";
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

const ProductCreateDatabaseForm = (props) => {
  const token = getTokenFromLocalStorage();
  const decodedToken = token ? jwtDecode(token) : null;
  const userId = decodedToken?.id;
  const userType = decodedToken?.role;
  const items = PRODUCT_DATABASE_ITEMS;

  let version;
  const [selectedElement, setSelectedElement] = useState(1);

  const formMethods = useForm({
    mode: "onChange",
    shouldFocusError: true,
  });

  switch (props.type) {
    case "mongodb":
      version = "24.04.1 LTS";
      break;
    case "mysql":
      version = "Linux 9";
      break;
    case "postgres":
      version = "12";
      break;
  }

  let { handleDatabaseSubmit} = useHandleSubmitItGalaxyProduct(
    userId,
    userType,
    formMethods,
    props.type
  );

  const handleBackButton = () => {
    window.history.back();
  };

  return (
    <StyledContainer>
      <ButtonContainer>
        <BackButton onClick={handleBackButton}>
          <img src={Vector} style={{ width: "0.83vw" }} alt="vector" />
        </BackButton>
        <BigContainer>
          <StyledDepositCompanyHeader>
            <StyledBreadcrumb>
              <StyledTitle>Purchase {props.type} Database</StyledTitle>
              <StyledSubtitle> ItGalaxy Cloud </StyledSubtitle>
            </StyledBreadcrumb>
          </StyledDepositCompanyHeader>
          <StyledFormContainer>
            <StyledLineOne>
              {selectedElement > 2 && (
                <StyledGoBackContainer
                  onClick={() => setSelectedElement(selectedElement - 1)}
                >
                </StyledGoBackContainer>
              )}

              {selectedElement > 1 && selectedElement < 5 && (
                <StyledNextLineOne>
                  <StyledGoNextContainer
                    onClick={() => setSelectedElement(selectedElement + 1)}
                  >
                  </StyledGoNextContainer>
                </StyledNextLineOne>
              )}
            </StyledLineOne>

            <StyledStepsFormContainer>
              <StyledStepContentColumn>
                <StyledStepTitleCard>
                  <StyledBoldSubtitle style={{ color: "#A4ADB6" }}>
                    Step {selectedElement}:{" "}
                  </StyledBoldSubtitle>
                  <StyledBoldSubtitle>
                    {selectedElement && items[selectedElement - 1]?.title}
                  </StyledBoldSubtitle>
                </StyledStepTitleCard>
                <StyledStepContentCard>
                  {createProductDatabaseForm(
                    selectedElement,
                    setSelectedElement,
                    formMethods,
                    props.type,
                    handleDatabaseSubmit
                  )}
                </StyledStepContentCard>
              </StyledStepContentColumn>
              <StyledStepperCard>
                {items.map((item) => (
                  <StyledStep
                    key={item.id}
                    active={selectedElement === item.id}
                    checked={selectedElement > item.id}
                  >
                    <StyledCircle> {item.id}</StyledCircle>
                    <StyledTitleAndSubtitleContainer>
                      <StyledStepTitle> {item.title}</StyledStepTitle>
                    </StyledTitleAndSubtitleContainer>
                  </StyledStep>
                ))}
              </StyledStepperCard>
            </StyledStepsFormContainer>
          </StyledFormContainer>
        </BigContainer>
      </ButtonContainer>
    </StyledContainer>
  );
};
export default ProductCreateDatabaseForm;
