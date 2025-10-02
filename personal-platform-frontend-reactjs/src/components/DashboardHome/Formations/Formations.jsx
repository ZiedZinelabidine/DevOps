import { useCallback, useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { useIntl } from "react-intl";
import { products } from "../../../utils/fake_data.js";
import { profils } from "../../../utils/profils_data.js";
import CustomText from "../CustomText/CustomText";
import CustomPaginator from "./CustomPaginator/CustomPaginator.jsx";
import { RootStyle, RowStyle, StackStyle , RowStyleFormations , SeeMoreButton} from "./Formations.style";
import FormationsCard from "./FormationsCard/FormationsCard";
import Card from "components/ComponnentProfilItems/profilfreelances/card.jsx";
import Register from "components/Authentification/modals/register.jsx";
import { useGetMarketplaceItgalaxyQuery } from "../../../redux/api/marketplaceItgalaxy/marketplaceItgalaxyApi.js";

function Formations() {
  const intl = useIntl();

  // Separate state variables for each section's pagination
  const [profilsPage, setProfilsPage] = useState(1);

  const [animateDirection, setAnimateDirection] = useState("");
  const [showPaginator, setShowPaginator] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Profiles only
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showModalRegister, setModalRegister] = useState(false);
  const [memoizedProducts,setMemoizedProducts] = useState([]);

  const {
      data: productsData,
      error: productsDataError,
      isLoading: productsDataLoading,
    } = useGetMarketplaceItgalaxyQuery(
      `?page=${1}&limit=${9}`
    );


  useEffect(() => {
      if (!productsDataLoading && !productsDataError && productsData) {
        setMemoizedProducts(productsData.data);
      }
    }, [productsData, productsDataLoading, productsDataError]);

    
  const memorizedProfils = useMemo(() => profils, []);

  const handleConnecter = (value) => {
    window.location.href = `/freelance/${value.display}`

  };

  const handleCloseModalRegister = () => {
    setModalRegister(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const formationsLength = memorizedProfils?.length || 0;
    if (windowWidth > 1200) {
      setItemsPerPage(5);
      setShowPaginator(formationsLength > 4);
    } else if (windowWidth > 768) {
      setItemsPerPage(2);
      setShowPaginator(formationsLength > 2);
    } else {
      setItemsPerPage(1);
      setShowPaginator(formationsLength > 1);
    }
  }, [memorizedProfils, windowWidth]);

  const visibleProfils = useMemo(() => {
    const startIndex = (profilsPage - 1) * itemsPerPage;
    return memorizedProfils?.slice(startIndex, startIndex + itemsPerPage) || [];
  }, [memorizedProfils, profilsPage, itemsPerPage]);

  const productCards = useMemo(
    () =>
      memoizedProducts?.map((value) => ( // Display only the first 12 products
        <FormationsCard
          key={value.id}
          formation={value}
          useStaticImage={false}
          formationType={"HOME_PAGE"}
        />
      )),
    [memoizedProducts]
  );

  const profilCards = useMemo(
    () =>
      visibleProfils?.map((value) => (
        <Card
          key={value.id || value.name} // Ensure unique key or name
          index={value.id}
          item={value}
          handleConnecter={handleConnecter}
        />
      )),
    [visibleProfils]
  );

  const handleTouchStart = (e) => {
    if (isAnimating) return;
    const touch = e.touches[0];
    if (touch.clientY > window.innerHeight * 0.8) return;
    setTouchStart(touch.clientX);
  };

  const handleTouchMove = (e) => {
    if (isAnimating || !touchStart) return;
    const touch = e.touches[0];
    if (touch.clientY > window.innerHeight * 0.8) return;
    setTouchEnd(touch.clientX);
  };

  const handleTouchEnd = () => {
    if (isAnimating || !touchStart || !touchEnd) return;
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <RootStyle spacing={5} as="section">
      <Helmet>
        <title>
          {intl.formatMessage({ id: "dashboard.Freelances.heading" })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({ id: "dashboard.formations.supporting" })}
        />
      </Helmet>
      <CustomText
        headingText={intl.formatMessage({
          id: "dashboard.Freelances.heading",
        })}
      />

      <StackStyle
        style={{ alignItems: "center", position: "relative" }}
        spacing={5}
      >
        <RowStyle
          spacing={3}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          data-animate={animateDirection}
        >
          {profilCards}
        </RowStyle>

        <CustomPaginator
          formationsLength={Math.ceil(
            (memorizedProfils?.length || 0) / itemsPerPage
          )}
          page={profilsPage}
          setPage={setProfilsPage}
        />

      <CustomText
        headingText={intl.formatMessage({ id: "dashboard.Cloud.heading" })}
      />

        <RowStyleFormations
          spacing={3}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          data-animate={animateDirection}
        >
          {productCards} {/* Render all 12 products without pagination */}
        </RowStyleFormations>

        <SeeMoreButton onClick={() =>  window.location.href = `/search/products`}>
          Voir plus de produits
        </SeeMoreButton>
      </StackStyle>


      {showModalRegister && (
        <Register
          openModalRegister={showModalRegister}
          setOpenModalRegister={setModalRegister}
          handleModalRegister={handleCloseModalRegister}
          proxy={"dashboard"}
        />
      )}
    </RootStyle>
  );
}

export default Formations;
