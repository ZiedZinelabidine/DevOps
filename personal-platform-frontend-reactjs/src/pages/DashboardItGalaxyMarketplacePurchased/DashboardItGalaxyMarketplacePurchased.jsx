import FormationsCard from "components/DashboardHome/Formations/FormationsCard/FormationsCard";
import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { getTokenFromLocalStorage } from "core/helpers/storage";
import { useGetMarketplaceItgalaxysPurchasedQuery } from "../../redux/api/marketplaceItgalaxy/marketplaceItgalaxyApi";
import { formConfig } from "./DashboardItGalaxyMarketplacePurchased.config";
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
  AddNewProductButtonstyle,
  Wrapper,
  NotFoundTextStyle
} from "./DashboardItGalaxyMarketplacePurchased.style";
import { Helmet } from "react-helmet";
import SideBar from "components/SideBar/sideBar";
import DemandShareProduct from "@components/DemandShareProduct/DemandShareProduct";
import NewCustomProduct from "@components/NewCustomProduct/NewCustomProduct";
import ModalShowChoiceProductDemand from "@components/ModalITgalaxy/ModalShowChoiceProductDemand/ModalShowChoiceProductDemand";
import { StyledHr } from "@components/DashboardItGalaxyMarketplaceComponnent/MarketplaceComponnents.style";

const DashboardItGalaxyMarketplacePurchased = () => {
  const [animateDirection, setAnimateDirection] = useState("inRight");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(2000000);
  const [searchQuery, setSearchQuery] = useState("");
  const token = getTokenFromLocalStorage();
  const decodeToken = token ? jwtDecode(token) : null;
  const role = token ? decodeToken.role : null;
  const id = token ? decodeToken.id : null;
  const [purchasedProductsData, setPurchasedProductsData] = useState();
  const [showModalProductDemand, setShowModalProductDemand] = useState(false);
  const [demandShareProduct, setDemandShareProduct] = useState(false);
  const [demandnewCustomProduct, setDemandnewCustomProduct] = useState(false);
  const location = useLocation();
  
  

  const {
    data: productsData,
    error: productsDataError,
    isLoading: productsDataLoading,
    refetch,
  } = useGetMarketplaceItgalaxysPurchasedQuery({
    id: id,
    role: role,
    params: `&page=${currentPage}&limit=${recordsPerPage}${searchQuery}`,
  });


  useEffect(() => {
    if (!productsDataLoading && !productsDataError && productsData) {
      const marketplaceProducts = productsData.data.marketplaceProducts || [];
      const applicationProducts = productsData.data.applicationProducts || [];
      setPurchasedProductsData([
        ...marketplaceProducts,
        ...applicationProducts,
      ]); // Spread syntax combines both arrays
    }
  }, [productsData, productsDataLoading, productsDataError]);

 

  const formMethods = useForm({});
  const type = formMethods.watch("type");


  const handleNavigate = (token, type) => {
    if (type === "SOLDEDPRODUCT") {
      window.location.href = `/productPurchased/${token}`;
    } else if (type === "MARKETPLACEPRODUCT") {
      window.location.href = `/itgalaxyProductPurchased/${token}`;
    }
  };

  if (productsDataLoading) {
    return <div>Loading...</div>;
  }

  if (productsDataError) {
    return <div>Error loading data: {productsDataError.message}</div>;
  }
  const handelModalCustomProduct = () => {

    if (!location.pathname.startsWith('/myproducts')) {

     window.location.href = `/infra-as-service`

    } else {

    setShowModalProductDemand(false);
    setDemandnewCustomProduct(true);

    }
  };

  const handelModalDemandShareProduct = () => {
    if (!location.pathname.startsWith('/myproducts')) {
      window.location.href = `/svc/demand-share-product`    
   } else {    
    setShowModalProductDemand(false);
    setDemandShareProduct(true);
   }

  };

  const handelModalCloseCreateProduct = () => {
    setShowModalProductDemand(false);
  };

  const handelModalCreateProduct = () => {
    window.location.href = `/svc/demand-share-product`
  };


  return (
    <>
    <Helmet>
      <title>Marketplace - ItGalaxy</title>
      <meta 
        name="description" 
        content="Découvrez notre marketplace, parcourez les options des hébergements des serveurs et les base de données pour le fonctionnement de vos projets." 
      />
    </Helmet>
    <div
      style={{
        display: "flex",
        overflowY: "hidden",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      <SideBar
        path={"/myproducts"}
        isLoggedIn={true}
        role={decodeToken?.role}
        id={decodeToken?.id}
      />

    <Wrapper>
    {!demandShareProduct && !demandnewCustomProduct && (
      <ContainerWrapper>
        <SearchBar>
          <FormProvider {...formMethods}>
            <div style={{ 'display' : 'flex' , width: '80%'}} >
            <StyleBarSearch>
              <GenericInput
                inputObject={{
                  ...formConfig.title,
                  label: "filterType",
                }}
              />
            </StyleBarSearch>
            <AddNewProductButtonstyle onClick={handelModalCreateProduct} > Promouvoir votre Produit  </AddNewProductButtonstyle>
            </div>
          </FormProvider>
        </SearchBar>
        <StyledHr />
        <TopContainer>
          {purchasedProductsData?.length > 0 ? (
          <RowStyle spacing={3}>
            {purchasedProductsData?.map((value) =>
              <FormationsCard
                  key={value.id}
                  formation={{
                    id: value.id,
                    title: value.productType,
                    description: value.type,
                    skills: ["Cloud"],
                    price: value.totalPrice,
                    languages: value.languages,
                    type: value.type,
                    details: value.details,
                  }}
                  animateDirection={animateDirection}
                  category={type}
                  onClick={() => handleNavigate(value.display, value.type)}
                />
            )}
           </RowStyle>
           ) : (
             <NotFoundTextStyle>
                No Products purchased...
             </NotFoundTextStyle>
           )}
        </TopContainer>
      </ContainerWrapper>)}

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
    </div>
    </>

  );
};
export default DashboardItGalaxyMarketplacePurchased;
