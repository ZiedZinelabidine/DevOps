import FormationsCard from "components/DashboardHome/Formations/FormationsCard/FormationsCard";
import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { jwtDecode } from "jwt-decode";
import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getTokenFromLocalStorage } from "../../../../core/helpers/storage";
import { useGetTrainingsPurchasedQuery } from "../../../../redux/api/training/trainingApi";
import { formConfig } from "./DashboardTrainingPurchasedComponnents.config";
import {
  Container,
  ContainerWrapper,
  NewProductButtonContainer,
  ProductLabelsContainer,
  RowStyle,
  SearchBar,
  StyleBarSearch,
  StyleBarSearchSkills,
  StyleCount,
  StyleCount1,
  StyleLineCount,
  StyleProductsCount,
  TopContainer,
  ViewLabelMyProducts,
  ViewLabelProducts,
  Wrapper,
  NotFoundTextStyle
} from "./DashboardTrainingPurchasedComponnents.style";

const DashboardTrainingsPurchased = (props) => {
  const [animateDirection, setAnimateDirection] = useState("inRight");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(200000);
  const [searchQuery, setSearchQuery] = useState("");
  const token = getTokenFromLocalStorage();
  const decodeToken = token ? jwtDecode(token) : null;
  const role = token ? decodeToken.role : null;
  const id = token ? decodeToken.id : null;

  const {
    data: productsData,
    error: productsDataError,
    isLoading: productsDataLoading,
    refetch,
  } = useGetTrainingsPurchasedQuery({
    id: id,
    role: role,
    params: `&page=${currentPage}&limit=${recordsPerPage}${searchQuery}`,
  });

  const handelAllProducts = () => {
    props.setPurchasedProducts(false);
  };

  const formMethods = useForm({});

  const handleNavigate = (token) => {
    window.location.href = `/productPurchased/${token}`;
  };

  const handleChangeSearch = useCallback((e) => {
    if (e.key === "Enter") {
      const queryParams = e.target.value
        ? `&title=${e.target.value}`
        : "";
      setSearchQuery(queryParams);
    }
  }, []);


  return (
    <Wrapper>
      <ContainerWrapper>
        <SearchBar>
          <FormProvider {...formMethods}>
            <StyleBarSearch>
              <GenericInput
                inputObject={{
                  ...formConfig.title,
                  label: "filterType",
                }}
                onChange={(e) => handleChangeSearch(e.target.value)}
              />
            </StyleBarSearch>

            {props.role === "CANDIDAT" && (
              <NewProductButtonContainer onClick={handelAllProducts}>
                {"Create a product"}
              </NewProductButtonContainer>
            )}
          </FormProvider>
        </SearchBar>
        <TopContainer>
          <Container>
            <StyleLineCount>
              <ProductLabelsContainer>
                <ViewLabelProducts onClick={handelAllProducts}>
                  Trainings
                </ViewLabelProducts>
                <ViewLabelMyProducts>Purchased Trainings</ViewLabelMyProducts>
              </ProductLabelsContainer>
              <StyleProductsCount>
                {productsData && (
                  <StyleCount1>
                    <StyleCount>{productsData.pagination.totals}</StyleCount>{" "}
                    Trainings found
                  </StyleCount1>
                )}
              </StyleProductsCount>
            </StyleLineCount>
          </Container>
          {productsData?.data?.length > 0 ? (
            <RowStyle spacing={3}>
              {productsData.data.map((value) => (
                <FormationsCard
                  key={value.id}
                  formation={value.product}
                  animateDirection={animateDirection}
                  category={value.product.category}
                  onClick={() => handleNavigate(value.product.display)}
                />
              ))}
            </RowStyle>
          ) : (
            <NotFoundTextStyle>
              No trainings available...
            </NotFoundTextStyle>
          )}
        </TopContainer>
      </ContainerWrapper>
    </Wrapper>
  );
};
export default DashboardTrainingsPurchased;
