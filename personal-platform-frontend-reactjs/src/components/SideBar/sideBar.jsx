import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/user";
import SideBarAccountings from "./SideBarAccountings/SideBarAccountings";
import SideBarCandidats from "./SideBarCandidat/SideBarCandidats";
import SidebarEntreprises from "./SideBarEntreprise/SideBarEntreprises";
import SideBarRecruter from "./SideBarRecruter/SideBarRecruter";

export default function SideBar({ isLoggedIn, path, role, id }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    localStorage.removeItem("isloggedin");
    window.location.href = `/`;
  };

  return (
    <>
      {isLoggedIn && role === "ENTREPRISE" && (
        <SidebarEntreprises path={path} id={id} onLogout={handleLogout} />
      )}
      {isLoggedIn && role === "CANDIDAT" && (
        <SideBarCandidats path={path} id={id} onLogout={handleLogout} />
      )}
      {isLoggedIn && role === "RECRUTER" && (
        <SideBarRecruter path={path} id={id} onLogout={handleLogout} />
      )}
      {isLoggedIn && role === "ACCOUNTING" && (
        <SideBarAccountings path={path} id={id} onLogout={handleLogout} />
      )}
    </>
  );
}
