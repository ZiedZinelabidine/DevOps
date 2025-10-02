import { useEffect, useState } from "react";
import Login from "../../components/Authentification/modals/login";
import { useVerifyEmailMutation } from "../../redux/api/verifyEmail/verifyEmailApi";
function VerifyEmail() {
  const queryParams = new URLSearchParams(window.location.search);
  const verificationToken = queryParams.get("verificationToken");
  const type = queryParams.get("type");
  const proxy = queryParams.get("proxy");
  const [openModalLogin , setOpenModalLogin] = useState(true);
  const [handleModalLogin , sethandleModalLogin] = useState(false);


  // Get the mutate function and status info from the hook
  const [verifyEmail, { isLoading, isError, isSuccess, error, data }] =
    useVerifyEmailMutation();

  useEffect(() => {
    // Make sure the token and type are valid before attempting to verify
    if (verificationToken && type) {
      // Trigger the mutation
      verifyEmail({
        filterType: type,
        params: { verificationToken }, // Send token as an object
      })
        .unwrap()
        .then(() => {
          // Handle successful verification, such as redirecting or displaying a message
          console.log("Email verified successfully");
        })
        .catch((err) => {
          // Handle error during verification
          console.error("Verification failed:", err);
        });
    }
  }, [verificationToken, type, verifyEmail]);

  return (
    <Login
      openModalLogin={openModalLogin}
      setOpenModalLogin={setOpenModalLogin}
      handleModalLogin={sethandleModalLogin}
      switchBetweenModals={true}
      proxy={proxy}
    />
  );
}

export default VerifyEmail;
