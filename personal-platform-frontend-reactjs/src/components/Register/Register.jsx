import { useEffect, useState } from "react";
import RegisterModal from "../../components/Authentification/modals/register";

function Register() {
  const [openModalRegister , setOpenModalRegister] = useState(true);

  const handleModalCloseRegister = () => {
    window.location.href = `/`;
  }

  return (
    <RegisterModal
        openModalRegister={openModalRegister}
        setOpenModalRegister={setOpenModalRegister}
        handleModalRegister={handleModalCloseRegister}
        proxy={"dashboard"}
    />
  );
}

export default Register;
