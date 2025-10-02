import { useEffect, useState } from "react";
import LoginModal from "../Authentification/modals/login";

function Login() {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  

  const handleModalCloseLogin = () => {
    window.location.href = `/`;
  }

  return (
    <LoginModal
      openModalLogin={openModalLogin}
      setOpenModalLogin={setOpenModalLogin}
      handleModalLogin={handleModalCloseLogin}
      switchBetweenModals={false}
      proxy={"dashboard"}
      />
  );
}

export default Login;
