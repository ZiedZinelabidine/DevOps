import ParcoursForm from "components/DashboardTrainingComponnents/TrainerComponnents/TrainerForm/TrainerForm";
import VideosTrainingsComponnents from "components/DashboardTrainingComponnents/TrainingsComponnents/VideosTrainingsComponnents/VideosTrainingsComponnents.jsx";
import SideBar from "components/SideBar/sideBar";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { getTokenFromLocalStorage } from "../../core/helpers/storage.js";
import { Helmet } from "react-helmet"; // Import Helmet for SEO

const DashboardTraining = () => {
  const token = getTokenFromLocalStorage();
  const decodedToken = token ? jwtDecode(token) : null;
  const role = decodedToken ? decodedToken.role : null;
  const id = decodedToken ? decodedToken.id : null;
  const [trainerForm, setTrainerForm] = useState(false);

  return (
    <>
      <Helmet>
        <title>Marketplace des Formations - ItGalaxy</title>
        <meta 
          name="description" 
          content="Trouvez des formations online devellopement web , frontend , backend , devops ... , pas cher et apprenez avec ItGalaxy ." 
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
          path={"/videosTrainings"}
          isLoggedIn={true}
          role={decodedToken?.role}
          id={decodedToken?.id}
        />
        {trainerForm ? (
          <ParcoursForm isEdit={false} setTrainerForm={setTrainerForm} />
        ) : (
          <VideosTrainingsComponnents
            role={role}
            id={id}
            setTrainerForm={setTrainerForm}
          />
        )}
      </div>
    </>
  );
};

export default DashboardTraining;