import Jobs from "components/Jobs/Jobs";
import SideBar from "components/SideBar/sideBar";
import {
  getIsloggedFromLocalStorage,
  getTokenFromLocalStorage,
} from "core/helpers/storage";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode if it’s not imported yet
import { useState } from "react";
import AccountingJobs from "../../components/AccountingJobs/AccountingJobs";
import MyProjects from "../../components/MyProjects/MyProjects";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import MyJobs from "components/MyJobs/MyJobs";

const Projects = () => {
  const token = getTokenFromLocalStorage();
  const decodeToken = token ? jwtDecode(token) : null;
  const role = decodeToken ? decodeToken.role : null;
  const id = decodeToken ? decodeToken.id : null;
  const [alljobSection, setAlljobSection] = useState(true);

  return (
    <>
      <Helmet>
        <title>Projets - ItGalaxy</title>
        <meta
          name="description"
          content="Découvrez et gérez vos offres d'emploi, projets et candidatures sur ItGalaxy."
        />
      </Helmet>
      <div style={{ display: "flex", overflowY: "hidden", overflowX: "hidden" }}>
        <SideBar
          path={"/projects"}
          isLoggedIn={true}
          role={role}
          id={id}
          style={{ overflowY: "hidden" }}
        />

        {role === "CANDIDAT" ? (
          alljobSection ? ( <Jobs id={id} setAlljobs={setAlljobSection} role={role} /> ) : (<MyJobs id={id} setAlljobs={setAlljobSection} /> )
     
        ) : role === "ENTREPRISE" ? (
          <MyProjects decodeToken={decodeToken} id={id} />
        ) : role === "ACCOUNTING" ? (
          <AccountingJobs id={id} />
        ) : null}
      </div>
    </>
  );
};

export default Projects;