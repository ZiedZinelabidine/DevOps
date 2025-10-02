import { getTokenFromLocalStorage } from "core/helpers/storage";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import EditProfil from "../../components/ComponnentProfilItems/EditProfil";
import SideBar from "../../components/SideBar/sideBar";
import { useGetUserByIdQuery } from "../../redux/api/users/userApi";
import { StyledContainerProfile, StyledContainerWrapper } from "./styled";
import { Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet"; // Import Helmet for SEO

const Profil = () => {
  const token = getTokenFromLocalStorage();
  const decodeToken = token ? jwtDecode(token) : null;
  const role = decodeToken ? decodeToken.role : null;
  const id = decodeToken ? decodeToken.id : null;

  // Use the correct parameters for the query
  const { data: user, isLoading, error } = useGetUserByIdQuery({ role, id });
  const [dataUser, setDataUser] = useState(null);


  // Setting user data based on fetched data
  useEffect(() => {
    if (!isLoading && !error) {
      setDataUser(user.data);
    }
  }, [user , isLoading]);

  return (
    <>
      <Helmet>
        <title>Profil - ItGalaxy</title>
        <meta 
          name="description" 
          content="Créez un profil et postulez à tous les offres de travailles de notre platform" 
        />
      </Helmet>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          overflow: "hidden",
          minHeight: "100vh",
        }}
      >
        <SideBar path={"/profil"} isLoggedIn={true} role={role} id={id} />
        <StyledContainerWrapper>
          <StyledContainerProfile>
            {isLoading && (
              <div>
                <Spinner animation="border" /> {/* Added animation for clarity */}
              </div>
            )}
            {error && (
              <div>
                Erreur lors de la récupération des données utilisateur : {error.message || "Erreur inconnue"}
              </div>
            )}
            {dataUser ? (
              <EditProfil
                isLoggedIn={true}
                role={role}
                id={id}
                setDataUser={setDataUser}
                editProfil={true}
                userData={dataUser}
              />
            ) : (
              <div>Aucune donnée utilisateur trouvée.</div>
            )}
          </StyledContainerProfile>
        </StyledContainerWrapper>
      </div>
    </>
  );
};

export default Profil;