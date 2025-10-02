import {
  AdvancedSearchButtonContainer,
  ContainerProfileSelected,
  ProfilAvatarContainerValidation,
  TitleStyle,
} from "components/ComponnentProfilItems/profilfreelances/styled";
import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import ModalComponent from "components/ModalITgalaxy/ModalComponent";
import ModalPayment from "components/ModalITgalaxy/ModalPayment/ModalPayment";
import Spinner from "components/Spinner/Spinner";
import {
  getProjectProposalEntrepriseCreationFromLocalStorage,
  getProposalEntrepriseCreationFromLocalStorage,
  getTokenFromLocalStorage,
} from "core/helpers/storage";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { getCountComposeFreelanceFromLocalStorage } from "../../core/helpers/storage";
import { countfreeShares } from "../../data/countfreeShares";
import { priceShares } from "../../data/priceShares";
import useHandleSubmitProposalEntrepriseCreation from "../../hooks/useHandleSubmitProposalEntrepriseCreation";
import useLoggedIn from "../../hooks/useLoggedIn";
import Login from "../Authentification/modals/login";
import Register from "../Authentification/modals/register";

export default function ValidationEntrepriseProposal(props) {
  const proposalEntreprise = getProposalEntrepriseCreationFromLocalStorage();
  const token = getTokenFromLocalStorage();
  const decodeToken = token ? jwtDecode(token) : null;
  const [showModalPayment, setShowModalPayment] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const isLoggedIn = useLoggedIn();

  const projectProposalEntreprise =
    getProjectProposalEntrepriseCreationFromLocalStorage()
      ? JSON.parse(getProjectProposalEntrepriseCreationFromLocalStorage())
      : {};

  const proposalsData = useSelector(
    (state) => state.proposalEntrepriseCreation.proposals
  );
  const [proposals, setProposals] = useState(proposalsData);

  const [requestproposalEntreprise, setRequestproposalEntreprise] = useState({
    projectData: {
      entrepriseId: decodeToken?.id,
      title: projectProposalEntreprise.projectTitle,
      project_description: projectProposalEntreprise.projectDescription,
      skills: projectProposalEntreprise.competencesSelected,
      languages: projectProposalEntreprise.languagesSelected,
      type: "COMPOSED_FREELANCE",
      category: projectProposalEntreprise.category,
      status: "ACTIVE",
    },
    proposals: JSON.parse(proposalEntreprise),
  });

  const handelModalPayment = () => {
    setShowModalPayment(true);
  };

  const handleCloseModalPayment = () => {
    setShowModalPayment(false);
  };

  let { handleSubmit, loading } = useHandleSubmitProposalEntrepriseCreation(
    requestproposalEntreprise
  );

  // Define validationSelectionModal before using it in Renderfooter
  const validationSelectionModal = async () => {
    try {
      if (
        getCountComposeFreelanceFromLocalStorage() >
        countfreeShares.compose_team
      ) {
        handelModalPayment();
      } else {
        const response = await handleSubmit('xxxxxxx' , 0.00 );

        if (response.success) {
          window.location.href = `/projects`;
        }
      }
    } catch (error) {
      console.error("Error during proposal creation:", error);
      toast.error(
        "Problem encountered during project creation. Please try again.",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };

  const RenderFooter = (
    <AdvancedSearchButtonContainer onClick={validationSelectionModal}>
       {loading ? (
          <Spinner />
        ) : ("Validate your selection")}   
    </AdvancedSearchButtonContainer>
  );

  const RenderHeader = <TitleStyle> {"Selected Profils :"}</TitleStyle>;

  const RenderBody = (

      <ProfilAvatarContainerValidation>
        {Array.from({ length: proposals.length }).map((_, index) => (
          <ContainerProfileSelected key={index}>
            {proposals[index] !== null ? (
              <ImageProfilCard
                type={"candidats"}
                id={proposals[index].userId}
                typeimg={"composeteam"}
              />
            ) : (
              <ImageProfilCard type={"candidats"} typeimg={"composeteam"} />
            )}
          </ContainerProfileSelected>
        ))}
      </ProfilAvatarContainerValidation>
  );

  const handleModalLogin = () => {
    setOpenModalLogin(!openModalLogin);
  };

  const handleModalRegister = () => {
    setOpenModalRegister(!openModalRegister);
  };

  const switchBetweenModals = () => {
    if (openModalLogin) {
      setOpenModalLogin(false);
      setOpenModalRegister(true);
    } else if (openModalRegister) {
      setOpenModalRegister(false);
      setOpenModalLogin(true);
    }
  };

  return (
    <>
      {!openModalRegister && !openModalLogin ? (
        <>
          {!showModalPayment && (
            <ModalComponent
              show={props.showModalValidation}
              closeModal={props.closeValidationSelection}
              body={RenderBody}
              header={RenderHeader}
              bodyPadding={"0"}
              minWidth={"10vw"}
              height={"20vh"}
              footerpaddingtop={"0"}
              footerpaddingbottom={"0"}
              footer={RenderFooter}
            />
          )}

          {showModalPayment && (
            <ModalPayment
              handleCloseShowModal={props.closeValidationSelection}
              showModalPayment={showModalPayment}
              price={priceShares.compose_team}
              title={"PAYMENT PROJECT CREATION"}
              note={
                "To share this project with community you need to pay the service."
              }
              onSubmit={handleSubmit}
            />
          )}
        </>
      ) : (
        <>
          {openModalRegister && (
            <Register
              openModalRegister={openModalRegister}
              handleModalRegister={handleModalRegister}
              switchBetweenModals={openModalRegister}
              freelance={false}
              switchlogin={true}
            />
          )}
          {openModalLogin && (
            <Login
              openModalLogin={openModalLogin}
              handleModalLogin={handleModalLogin}
              switchBetweenModals={openModalRegister}
            />
          )}
        </>
      )}
    </>
  );
}
