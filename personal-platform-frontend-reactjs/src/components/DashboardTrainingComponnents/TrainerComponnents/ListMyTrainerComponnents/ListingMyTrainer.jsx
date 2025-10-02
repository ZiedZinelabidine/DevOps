import FormationsCard from "components/DashboardHome/Formations/FormationsCard/FormationsCard";
import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { jwtDecode } from "jwt-decode";
import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getTokenFromLocalStorage } from "../../../../core/helpers/storage";
import { useGetMyProductsQuery } from "../../../../redux/api/training/trainingApi";
import { formConfig } from "./ListingMyTrainer.config";
import {
  Container,
  ContainerWrapper,
  CreateTrainingButtonContainer,
  NotFoundTextStyle,
  SearchBar,
  SearchFilterBar,
  StyledSearchBarContainer,
  Wrapper
} from "./ListingMyTrainer.style";

const ListingMyTrainer = (props) => {
  const formMethods = useForm({});
  const dispatch = useDispatch();
  const tokenUser = getTokenFromLocalStorage();
  const decodeToken = tokenUser ? jwtDecode(tokenUser) : null;
  const userId = decodeToken ? decodeToken.id : null;
  const [title, setTitle] = useState("");

  // Fetch the products using the title
  const { data: myProducts } = useGetMyProductsQuery({ userId, title });

  // Handler for changing the search input and setting title on Enter
  const handleChangeSearch = useCallback((e) => {
    if (e.key === "Enter") {
      setTitle(e.target.value);
    }
  }, []);

  const handleNavigate = (token) => {
    window.location.href = `myproduct?token=${token}&edit=true`;
  };

  const handelTrainerForm = () => {
    props.setTrainerForm(true);
  };

  return (
    <Wrapper>
      <ContainerWrapper>
        <SearchBar>
          <FormProvider {...formMethods}>
            <StyledSearchBarContainer>
              <SearchFilterBar onKeyDown={handleChangeSearch}>
                <GenericInput
                  inputObject={{
                    ...formConfig.title,
                    label: "Filter by Title",
                  }}
                  disabledForm={false}
                />
              </SearchFilterBar>

              <CreateTrainingButtonContainer onClick={handelTrainerForm}>
                Create a Product
              </CreateTrainingButtonContainer>
            </StyledSearchBarContainer>
          </FormProvider>
        </SearchBar>
        <Container>
          {myProducts && myProducts.data.length > 0 ? (
            myProducts.data.map((value) => (
              <FormationsCard
                key={value.id}
                formation={value}
                animateDirection="fade-in" // Assuming you handle animations via this prop
                onClick={() => handleNavigate(value.display)}
              />
            ))
          ) : (
            <NotFoundTextStyle>
              No Product created ...
            </NotFoundTextStyle>
          )}
        </Container>
      </ContainerWrapper>
    </Wrapper>
  );
};

export default ListingMyTrainer;
