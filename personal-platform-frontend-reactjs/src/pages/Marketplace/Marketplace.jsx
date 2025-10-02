import MarketplaceComponnents from "components/DashboardItGalaxyMarketplaceComponnent/MarketplaceComponnents";
import ParcoursForm from "components/DashboardTrainingComponnents/TrainerComponnents/TrainerForm/TrainerForm";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import SideBar from "../../components/SideBar/sideBar";
import { getTokenFromLocalStorage } from "../../core/helpers/storage";
import { Helmet } from "react-helmet"; // Import Helmet for SEO

const Marketplace = () => {
  const token = getTokenFromLocalStorage();
  const decodedToken = token ? jwtDecode(token) : null;
  const role = decodedToken ? decodedToken.role : null;
  const id = decodedToken ? decodedToken.id : null;
  const [trainerForm, setTrainerForm] = useState(false);

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
          path={"/marketplace"}
          isLoggedIn={true}
          role={decodedToken?.role}
          id={decodedToken?.id}
        />
        {!trainerForm ? (
          <MarketplaceComponnents
            role={role}
            id={id}
            setTrainerForm={setTrainerForm}
          />
        ) : (
          <ParcoursForm setTrainerForm={setTrainerForm} isEdit={false} />
        )}
      </div>
    </>
  );
};

export default Marketplace;