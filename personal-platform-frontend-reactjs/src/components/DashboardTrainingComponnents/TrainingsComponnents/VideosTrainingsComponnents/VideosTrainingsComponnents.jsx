import FormationsCard from "components/DashboardHome/Formations/FormationsCard/FormationsCard";
import DashboardTrainerPurchasedComponnents from "components/DashboardTrainingComponnents/TrainingsComponnents/DashboardTrainingPurchasedComponnents/DashboardTrainingPurchasedComponnents";
import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { useCallback, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams,useLocation } from "react-router-dom";
import { languagesData } from "../../../../data/languagesData";
import { skillsData } from "../../../../data/skillData";
import { useGetTrainingsQuery } from "../../../../redux/api/training/trainingApi";
import { formConfig } from "./VideosTrainingsComponnents.config";
import {
  Container,
  ContainerWrapper,
  NewProductButtonContainer,
  NotFoundTextStyle,
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
  Wrapper
} from "./VideosTrainingsComponnents.style";
import Header from "components/Header/Header";
import Register from "components/Authentification/modals/register";

const VideosTrainingsComponnents = (props) => {
  const navigate = useNavigate();
  const { skill, language } = useParams();
  const [animateDirection, setAnimateDirection] = useState("inRight");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(2000);
  const [searchQuery, setSearchQuery] = useState("");
  const [purchasedProducts, setPurchasedProducts] = useState(false);
  const [showModalRegister , setModalRegister] = useState(false);

  const location = useLocation();
  

  const {
    data: productsData,
    error: productsDataError,
    isLoading: productsDataLoading,
    refetch,
  } = useGetTrainingsQuery({
    userId: props.id,
    userType: props.role,
    params: `&page=${currentPage}&limit=${recordsPerPage}${searchQuery}`,
  });

  const handleChangeSearch = useCallback((e) => {
    if (e.key === "Enter") {
      const queryParams = e.target.value
        ? `&description=${e.target.value}`
        : "";
      setSearchQuery(queryParams);
    }
  }, []);

  // Validate URL parameters and set initial search query
  useEffect(() => {
    let shouldRedirect = false;
    let newSearchQuery = "";

    if (skill) {
      const formattedSkill = skill.replace(/-/g, ' ');
      const validSkill = skillsData.find(
        s => s.title.toLowerCase() === formattedSkill.toLowerCase()
      );

      if (validSkill) {
        newSearchQuery = `&skills=${validSkill.title}`;
      } else {
        shouldRedirect = true;
      }
    }

    if (language) {
      const formattedLanguage = language.replace(/-/g, ' ');
      const validLanguage = languagesData.find(
        l => l.title.toLowerCase() === formattedLanguage.toLowerCase()
      );

      if (validLanguage) {
        newSearchQuery = `&languages=${validLanguage.title}`;
      } else {
        shouldRedirect = true;
      }
    }

    if (shouldRedirect) {
      navigate('/search/trainings');
    } else if (newSearchQuery) {
      setSearchQuery(newSearchQuery);
    }
  }, [skill, language, navigate]);

  const handleModalRegister = () => {
    setModalRegister(true);
    };

    const handleCloseModalRegister = () => {
        setModalRegister(false);
    };

  const handleChangeSkills = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    const queryParams = `&skills=${selectedValues}`;
    setSearchQuery(queryParams);
  };

  const handleChangeLanguages = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    const queryParams = `&languages=${selectedValues}`;
    setSearchQuery(queryParams);
  };

  const handelPurchasedProducts = () => {
    setPurchasedProducts(true);
  };

  const handleNavigate = (token) => {
    if (location.pathname === '/search/trainings') {
      handleModalRegister() ;

    } else {  
    window.location.href = `/itgalaxyProductDetails/${token}`;

    }
  };

  const formMethods = useForm({});

  const handleCreateProduct = () => {
    props.setTrainerForm(true);
  };

  if (props.isLoading) {
    return <div>Loading...</div>;
  }

  if (props.error) {
    return <div>Error loading data: {props.error.message}</div>;
  }

  return !purchasedProducts ? (
    <Wrapper>
         {location.pathname === '/search/trainings' && (
            <Header active={"FREELANCERS"} />
          )}
      <ContainerWrapper>
        <SearchBar>
          <FormProvider {...formMethods}>
            <StyleBarSearch onKeyDown={handleChangeSearch}>
              <GenericInput
                inputObject={{
                  ...formConfig.title,
                  label: "filterType",
                }}
                onChange={(e) => handleChangeSearch(e.target.value)}
              />
            </StyleBarSearch>
            {!skill && (
              <StyleBarSearchSkills>
                <GenericInput
                  inputObject={{
                    ...formConfig.skills,
                    label: "filterType",
                  }}
                  onChange={(e) => handleChangeSkills(e)}
                />
              </StyleBarSearchSkills>
            )}
            {!language && (
              <StyleBarSearchSkills>
                <GenericInput
                  inputObject={{
                    ...formConfig.languages,
                    label: "filterType",
                  }}
                  onChange={(e) => handleChangeLanguages(e)}
                />
              </StyleBarSearchSkills>
            )}

            {props.role === "CANDIDAT" && (
              <NewProductButtonContainer onClick={handleCreateProduct}>
                {"Create a product"}
              </NewProductButtonContainer>
            )}
          </FormProvider>
        </SearchBar>
        <TopContainer>
          <Container>
            <StyleLineCount>
              <ProductLabelsContainer>
                <ViewLabelProducts>Trainings</ViewLabelProducts>
                {location.pathname !== '/search/trainings' && (
                <ViewLabelMyProducts onClick={handelPurchasedProducts}>
                  Purchased Trainings
                </ViewLabelMyProducts> )}
              </ProductLabelsContainer>
              <StyleProductsCount>
                {productsData && (
                  <StyleCount1>
                    <StyleCount>{productsData?.pagination.totals}</StyleCount>{" "}
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
                  formation={value}
                  animateDirection={animateDirection}
                  category={value.category}
                  onClick={() => handleNavigate(value.display)}
                />
              ))}
            </RowStyle>
          ) : (
            <NotFoundTextStyle>
              Change the criteria to find more trainings ...
            </NotFoundTextStyle>
          )}
        </TopContainer>
      </ContainerWrapper>
      {showModalRegister && (
       <Register
        openModalRegister={showModalRegister}
        setOpenModalRegister={setModalRegister}
        handleModalRegister={handleCloseModalRegister}
        proxy={"dashboard"}
      />)}
    </Wrapper>
  ) : (
    <DashboardTrainerPurchasedComponnents
      role={props.role}
      setPurchasedProducts={setPurchasedProducts}
    />
  );
};

export default VideosTrainingsComponnents;
