import Login from "../Authentification/modals/login";

function DashboardProxy() {
  return (
    <Login
      openModalLogin={true}
      setOpenModalLogin={true}
      handleModalLogin={true}
      switchBetweenModals={true}
      proxy={"dashboard"}
    />
  );
}

export default DashboardProxy;
