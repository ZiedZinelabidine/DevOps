import SideBar from "components/SideBar/sideBar";
import { getTokenFromLocalStorage } from "core/helpers/storage";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode if it’s not imported yet
import ItGalaxyContactorComponnets from "../../components/ItGalaxyContactorComponnets/ItGalaxyContactor";
import { Helmet } from "react-helmet"; // Import Helmet for SEO

const ItGalaxyContactor = () => {
  const token = getTokenFromLocalStorage();
  const decodeToken = token ? jwtDecode(token) : null;
  const role = decodeToken ? decodeToken.role : null;
  const id = decodeToken ? decodeToken.id : null;

  return (
    <>
      <Helmet>
        <title>ItGalaxy Contactor</title>
        <meta 
          name="description" 
          content="ITGalaxy vous offres un outil pour Contacter tous les entreprises et les profils inscrits gratuitement." 
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
          path={"/itgalaxycontactor"}
          isLoggedIn={true}
          role={role}
          id={id}
          style={{ overflowY: "hidden" }}
        />
        <ItGalaxyContactorComponnets isLoggedIn={true} role={role} id={id} />
      </div>
    </>
  );
};

export default ItGalaxyContactor;