import { getTokenFromLocalStorage } from "core/helpers/storage";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode if it’s not imported yet

import MyWorkingFolder from "components/MyWorkingFolderComponnents/MyWorkingFolder";
import SideBar from "components/SideBar/sideBar";

const MyWorkingFolders = () => {
  const token = getTokenFromLocalStorage();
  const decodeToken = token ? jwtDecode(token) : null;
  const role = decodeToken ? decodeToken.role : null;
  const id = decodeToken ? decodeToken.id : null;

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
        path={"/myworkingfolder"}
        isLoggedIn={true}
        role={role}
        id={id}
        style={{ overflowY: "hidden" }}
      />
      <MyWorkingFolder id={id} />
    </div>
  );
};

export default MyWorkingFolders;
