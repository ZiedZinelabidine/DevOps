import { jwtDecode } from "jwt-decode";
import { getTokenFromLocalStorage } from "../../../core/helpers/storage";
import SideBar from "../../SideBar/sideBar";
import ItGalaxyProductCreateDatabaseForm from "./ItGalaxyProductCreateDatabaseForm";

const ProductDatabaseServer = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const type = queryParams.get("type");

  const token = getTokenFromLocalStorage();
  const decodedToken = token ? jwtDecode(token) : null;
  const role = decodedToken ? decodedToken.role : null;
  const id = decodedToken ? decodedToken.id : null;

  return (
    <div style={{ display: "flex", overflowY: "hidden", overflowX: "hidden" }}>
      <SideBar
        path={"/marketplace"}
        isLoggedIn={true}
        role={role}
        id={id}
        style={{ overflowY: "hidden" }}
      />
      <ItGalaxyProductCreateDatabaseForm type={type} />
    </div>
  );
};

export default ProductDatabaseServer;
