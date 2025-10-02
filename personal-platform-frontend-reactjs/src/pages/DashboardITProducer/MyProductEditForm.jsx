import ParcoursForm from "components/DashboardTrainingComponnents/TrainerComponnents/TrainerForm/TrainerForm";
import SideBar from "components/SideBar/sideBar";
import { jwtDecode } from "jwt-decode";
import { getTokenFromLocalStorage } from "../../core/helpers/storage";

const MyProductEditForm = ({ setTrainerForm , isEdit, data }) => {
  const token = getTokenFromLocalStorage();
  const decodedToken = token ? jwtDecode(token) : null;
  const id = decodedToken ? decodedToken.id : null;

  return (
    <div
      style={{
        display: "flex",
        overflowY: "hidden",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      <SideBar
        path={"/producer"}
        isLoggedIn={true}
        role={decodedToken?.role}
        id={decodedToken?.id}
      />
      <ParcoursForm setTrainerForm={setTrainerForm} isEdit={isEdit} data={data} />
    </div>
  );
};
export default MyProductEditForm;
