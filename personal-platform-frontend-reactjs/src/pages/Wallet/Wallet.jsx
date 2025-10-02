import SideBar from "components/SideBar/sideBar";
import {
  getIsloggedFromLocalStorage,
  getTokenFromLocalStorage,
} from "core/helpers/storage";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode if it’s not imported yet
import { useState } from "react";
import WalletTransactionComponnents from "../../components/WalletComponnents/WalletTransactionComponnents";
import { Helmet } from "react-helmet"; // Import Helmet for SEO

const Wallet = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(getIsloggedFromLocalStorage());
  const token = getTokenFromLocalStorage();
  const decodeToken = token ? jwtDecode(token) : null;
  const role = decodeToken ? decodeToken.role : null;
  const id = decodeToken ? decodeToken.id : null;

  return (
    <>
      <Helmet>
        <title>Portefeuille - ItGalaxy</title>
        <meta 
          name="description" 
          content="Gérez vos transactions et fonds sur ItGalaxy en toute sécurité. Accédez à l'historique de vos transactions , de paiements et des factures ." 
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
          path={"/wallet"}
          isLoggedIn={true}
          role={role}
          id={id}
          style={{ overflowY: "hidden" }}
        />

        <WalletTransactionComponnents isLoggedIn={isLoggedIn} role={role} id={id} />
      </div>
    </>
  );
};

export default Wallet;
