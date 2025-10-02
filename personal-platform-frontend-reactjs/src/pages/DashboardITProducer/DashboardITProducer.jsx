import ListingMyTrainer from "components/DashboardTrainingComponnents/TrainerComponnents/ListMyTrainerComponnents/ListingMyTrainer";
import ParcoursForm from "components/DashboardTrainingComponnents/TrainerComponnents/TrainerForm/TrainerForm";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import SideBar from "../../components/SideBar/sideBar";
import { getTokenFromLocalStorage } from "../../core/helpers/storage";

const DashboardTrainer = () => {
  const token = getTokenFromLocalStorage();
  const decodeToken = token ? jwtDecode(token) : null;
  const role = decodeToken ? decodeToken.role : null;
  const id = decodeToken ? decodeToken.id : null;
  const [trainerForm, setTrainerForm] = useState(false);

  return (
    <div style={{ display: "flex", overflowY: "hidden", overflowX: "hidden" }}>
      <SideBar
        path={"/producer"}
        isLoggedIn={true}
        role={role}
        id={id}
        style={{ overflowY: "hidden" , overflowX: "hidden" }}
      />
      {!trainerForm ? (
        <ListingMyTrainer setTrainerForm={setTrainerForm} />
      ) : (
        <ParcoursForm setTrainerForm={setTrainerForm} isEdit={false}/>
      )}
    </div>
  );
};
export default DashboardTrainer;
