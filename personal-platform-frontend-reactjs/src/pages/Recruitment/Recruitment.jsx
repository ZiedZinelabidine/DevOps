import SideBar from "components/SideBar/sideBar";
import { getTokenFromLocalStorage } from "core/helpers/storage";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode if it’s not imported yet
import RecruitmentComponents from "../../components/RecruitmentComponents/RecruitmentComponents";
import { Helmet } from "react-helmet"; // Import Helmet for SEO

const Recruitment = () => {
  const token = getTokenFromLocalStorage();
  const decodeToken = token ? jwtDecode(token) : null;
  const role = decodeToken ? decodeToken.role : null;
  const id = decodeToken ? decodeToken.id : null;
  const recrutementToken = decodeToken ? decodeToken.display : null;

  return (
    <>
      <Helmet>
        <title>Recrutement - ItGalaxy</title>
        <meta 
          name="description" 
          content="Accédez à nos offres de recrutement et gérez vos candidatures sur ItGalaxy." 
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
          path={"/itgalaxyrecruitment"}
          isLoggedIn={true}
          role={role}
          id={id}
          style={{ overflowY: "hidden" }}
        />
        <RecruitmentComponents
          recrutementToken={recrutementToken}
          isLoggedIn={true}
          role={role}
          id={id}
        />
      </div>
    </>
  );
};

export default Recruitment;