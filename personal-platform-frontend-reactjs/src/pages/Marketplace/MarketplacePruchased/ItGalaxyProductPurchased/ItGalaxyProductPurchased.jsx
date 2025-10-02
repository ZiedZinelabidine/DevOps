import SideBar from "components/SideBar/sideBar";
import { getTokenFromLocalStorage } from "core/helpers/storage";
import { jwtDecode } from "jwt-decode";
import { Spinner } from "react-bootstrap"; // Import Spinner from react-bootstrap
import { useParams } from "react-router-dom";
import { useGetMarketplaceItgalaxyByTokenQuery } from "../../../../redux/api/marketplaceItgalaxy/marketplaceItgalaxyApi";
import ItGalaxyDatabaseProduct from "./ItGalaxyDatabaseProduct/ItGalaxyDatabaseProduct";
import ItGalaxyServerProduct from "./ItGalaxyServerProduct/ItGalaxyServerProduct";
import { BackButton, ButtonContainer, MessageContainer } from "./Style"; // Assuming MessageContainer is a styled component
import ModalSupport from "components/ModalITgalaxy/ModalSupport/ModalSupport";
import { useState } from "react";
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

const ItGalaxyProduct = () => {
  const { token } = useParams();
  const userToken = getTokenFromLocalStorage();
  const decodeUserToken = userToken ? jwtDecode(userToken) : null;
  const id = decodeUserToken ? decodeUserToken.id : null;
  const role = decodeUserToken ? decodeUserToken.role : null;
  const email = decodeUserToken ? decodeUserToken.email : null;
  const [showModalSupport , setShowModalSupport] = useState(false);


  const handleCloseShowModal = () => {
    setShowModalSupport(false) ;
  }


  const handleBackButton = () => {
    window.history.back();
  };


  const {
    data: itgalaxyproducts,
    error,
    isLoading,
    refetch
  } = useGetMarketplaceItgalaxyByTokenQuery({ token, id, role });

  return (
    <div
      style={{
        display: "flex",
        overflowY: "auto",
        minHeight: "100vh",
        overflowX: "hidden",
        background: "#202124"
      }}
    >
      <SideBar
        path={"/myproducts"}
        isLoggedIn={true}
        role={role}
        id={id}
        style={{ minHeight: "100vh", overflowY: "auto" }}
        
      />
      
      {/* Loading State */}
      {isLoading && (
        <MessageContainer>
          <Spinner animation="border" role="status" style={{ marginBottom: "10px" }}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <span>Loading...</span>
        </MessageContainer>
      )}

      {/* Error State */}
      {error && (
        <MessageContainer>
          <span>Error loading product data. Please try again later.</span>
        </MessageContainer>
      )}

    {/* No Product Data Available */}
    {!isLoading && !error && (!itgalaxyproducts || !itgalaxyproducts.data) && (
        <MessageContainer>
          <span>No product data available.</span>
        </MessageContainer>
      )}
      {!isLoading && (
 
      <ButtonContainer>
      <BackButton onClick={handleBackButton}>
            <img src={Vector} style={{ width: "0.83vw" }} alt="vector" />
      </BackButton>
      </ButtonContainer>)}


      {itgalaxyproducts && itgalaxyproducts.data && itgalaxyproducts.data.productType === "SERVER" && (
        <ItGalaxyServerProduct data={itgalaxyproducts.data} setShowModalSupport={setShowModalSupport} />
      )}

      {itgalaxyproducts && itgalaxyproducts.data && itgalaxyproducts.data.productType === "DATABASE" && (
        <ItGalaxyDatabaseProduct data={itgalaxyproducts.data} setShowModalSupport={setShowModalSupport} refetch={refetch} />
      )}

     {showModalSupport && (
      <ModalSupport showModal={showModalSupport} handleShowModal={handleCloseShowModal} email={email} />
     )}
    </div>
  );
};

export default ItGalaxyProduct;