import Jobs from "components/Jobs/Jobs";
import SideBar from "components/SideBar/sideBar";
import {
  getIsloggedFromLocalStorage,
  getTokenFromLocalStorage,
} from "core/helpers/storage";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode if it’s not imported yet
import { useState } from "react";
import AllContracts from "../../components/AllContracts/AllContracts";
import { Helmet } from "react-helmet"; // Import Helmet for SEO

const Contracts = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(getIsloggedFromLocalStorage());
  const token = getTokenFromLocalStorage();
  const decodeToken = token ? jwtDecode(token) : null;
  const role = decodeToken ? decodeToken.role : null;
  const id = decodeToken ? decodeToken.id : null;
  const [alljobSection, setAlljobSection] = useState(true);

  return (
    <>
      <Helmet>
        <title>Contracts - ItGalaxy</title>
        <meta 
          name="description" 
          content="Découvrez et gérez vos offres d'emploi, projets et candidatures sur ItGalaxy." 
        />
      </Helmet>
      <div style={{ display: "flex", overflowY: "hidden", overflowX: "hidden" }}>
        <SideBar
          path={"/contracts"}
          isLoggedIn={true}
          role={role}
          id={id}
          style={{ overflowY: "hidden" }}
        />

        <AllContracts id={id} setAlljobs={setAlljobSection} role={role} />
      </div>
    </>
  );
};

export default Contracts;