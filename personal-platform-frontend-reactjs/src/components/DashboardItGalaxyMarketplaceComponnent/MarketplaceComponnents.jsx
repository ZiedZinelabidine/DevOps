import FormationsCard from "components/DashboardHome/Formations/FormationsCard/FormationsCard";
import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { useCallback, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { languagesData } from "../../data/languagesData";
import { skillsData } from "../../data/skillData";
import { useGetMarketplaceItgalaxyQuery } from "../../redux/api/marketplaceItgalaxy/marketplaceItgalaxyApi";
import { formConfig } from "./MarketplaceComponnents.config";
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
  AddNewProductButtonstyle,
  AdvancedSearchButtonContainerResetFilter,
  TopContainer,
  StyledHr,
  customStyles,
  Wrapper,
} from "./MarketplaceComponnents.style";
import Header from "components/Header/Header";
import Register from "components/Authentification/modals/register";
import ModalShowChoiceProductDemand from "@components/ModalITgalaxy/ModalShowChoiceProductDemand/ModalShowChoiceProductDemand";
import DemandShareProduct from "@components/DemandShareProduct/DemandShareProduct";
import NewCustomProduct from "@components/NewCustomProduct/NewCustomProduct";

const MarketplaceComponents = (props) => {
  const navigate = useNavigate();
  const { skill, language , category} = useParams();
  const [animateDirection, setAnimateDirection] = useState("inRight");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(2000000);
  const [searchQuery, setSearchQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [purchasedProducts, setPurchasedProducts] = useState(false);
  const [showModalRegister, setModalRegister] = useState(false);
  const [showModalProductDemand, setShowModalProductDemand] = useState(false);
  const [demandShareProduct, setDemandShareProduct] = useState(false);
  const [demandnewCustomProduct, setDemandnewCustomProduct] = useState(false);

  const location = useLocation();

  const {
    data: productsData,
    error: productsDataError,
    isLoading: productsDataLoading,
  } = useGetMarketplaceItgalaxyQuery(
    `?page=${currentPage}&limit=${recordsPerPage}&userId=${props.id}&userType=${props.role}${searchQuery}`
  );


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
      navigate('/search/products');
    } else if (newSearchQuery) {
      setSearchQuery(newSearchQuery);
    }
  }, [skill, language, navigate]);

  const handelResetFilter = () => {
    setSearchQuery("");
  };



  const handleChangeSearch = useCallback((e) => {
    if (e.key === "Enter") {
      const queryParams = e.target.value
        ? `&description=${e.target.value}`
        : "";
      setSearchQuery(queryParams);
    }
  }, []);

  const handelModalCreateProduct = () => {
    window.location.href =`/svc/demand-share-product`;
  };

  const handelModalCustomProduct = () => {

    if (!location.pathname.startsWith('/marketplace')) {

     window.location.href = `/svc/infra-as-service`

    } else {

    setShowModalProductDemand(false);
    setDemandnewCustomProduct(true);

    }
  };

  const handelModalDemandShareProduct = () => {

    if (!location.pathname.startsWith('/marketplace')) {

      window.location.href = `/svc/demand-share-product`
      
   } else {    
    setShowModalProductDemand(false);
    setDemandShareProduct(true);
   }

  };


  const handelModalCloseCreateProduct = () => {
    setShowModalProductDemand(false);
  };

  const handleCloseModalRegister = () => {
    setModalRegister(false);
  };


  const handleChangeCategories = (selectedOptions) => {
    const queryParams = `&category=${selectedOptions.value}`;
    setSearchQuery(queryParams);
  };


  useEffect(() => {
    if (!productsDataLoading && !productsDataError && productsData) {
      setAllProducts(productsData.data); // Spread syntax combines both arrays
    }
  }, [productsData, productsDataLoading, productsDataError]);

 
  const formMethods = useForm({});
  const type = formMethods.watch("type");

  const handleNavigate = (type, title) => {

    if (!location.pathname.startsWith('/marketplace')) {
      if (title === "Server Ubuntu") {
        navigate(`/marketplaceubuntu`);
      } else if (title === "Server Debian") {
        navigate(`/marketplacedebian`);
      } else if (title === "Server RedHat") {
        navigate(`/marketplaceredhat`);
      } else if (title === "Database Mongodb") {
        navigate(`/marketplacemongodb`);
      } else if (title === "Database Mysql" ) {
        navigate(`/marketplacemysql`);
      } else if (title === "Database Postgres" ) {
        navigate(`/marketplacepostgres`);
      }

    } else {
      if (type === "MARKETPLACE") {
        if (title === "Server Ubuntu") {
          window.location.href = `/createProductServer?type=ubuntu`;
        } else if (title === "Server Debian") {
          window.location.href = `/createProductServer?type=debian`;
        } else if (title === "Server RedHat") {
          window.location.href = `/createProductServer?type=redhat`;
        } else if (title === "Database Postgres") {
          window.location.href = `/createProductDatabase?type=postgres`;
        } else if (title === "Database Mongodb") {
          window.location.href = `/createProductDatabase?type=mongodb`;
        } else if (title === "Database Mysql") {
          window.location.href = `/createProductDatabase?type=mysql`;
        }
      }
    }
  };

  return (
    <Wrapper>
      {(location.pathname.startsWith('/search/products')) && (
        <Header active={"FREELANCERS"} />
      )}
    {!demandnewCustomProduct && !demandShareProduct && (
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
                    ...formConfig.category,
                    label: "filterType",

                  }}
                  styles={customStyles}
                  onChange={(e) => handleChangeCategories(e)}
                />
              </StyleBarSearchSkills>
            )}
            
             <AddNewProductButtonstyle onClick={handelModalCreateProduct}>Promouvoir votre Produit  </AddNewProductButtonstyle>
            
          </FormProvider>
        </SearchBar>
         <StyledHr />
        
        <TopContainer>
          {allProducts?.length > 0 ? (
            <RowStyle spacing={3}>
              {allProducts.map((value) => (
                <FormationsCard
                  key={value.id}
                  formation={value}
                  animateDirection={animateDirection}
                  category={type}
                  onClick={() =>
                    handleNavigate(value.type, value.title, value.display)
                  }
                />
              ))}
            </RowStyle>
          ) : (
            <NotFoundTextStyle>
              Change the criteria to find more trainings ...
            </NotFoundTextStyle>
          )}
        </TopContainer>
      </ContainerWrapper>)}
      {showModalRegister && (
        <Register
          openModalRegister={showModalRegister}
          setOpenModalRegister={setModalRegister}
          handleModalRegister={handleCloseModalRegister}
          proxy={"dashboard"}
        />)}
      {showModalProductDemand && (
       <ModalShowChoiceProductDemand
          show={showModalProductDemand}
          onHide={handelModalCloseCreateProduct}
          handelModalCustomProduct={handelModalCustomProduct}
          handelModalDemandShareProduct={handelModalDemandShareProduct}
     />
        )}

      {demandShareProduct && !demandnewCustomProduct && (
         <DemandShareProduct setDemandShareProduct={setDemandShareProduct} />
        )}

      {demandnewCustomProduct && !demandShareProduct &&  (
          <NewCustomProduct setNewCustomProduct={setDemandnewCustomProduct} />
      )}


    </Wrapper>
  ) ;
};

export default MarketplaceComponents;
