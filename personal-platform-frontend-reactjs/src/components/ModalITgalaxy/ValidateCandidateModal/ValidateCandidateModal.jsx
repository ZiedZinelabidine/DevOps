import { useEffect, useState } from "react";
import { useChannelContext } from "../../../../components/allContext/channelContext";
import { useGetProjectsQuery } from "../../../redux/api/projects/projectApi";
import { useGetProposalEntrepriseByIdQuery } from "../../../redux/api/proposals/proposalApi";
import { useGetUserByIdQuery } from "../../../redux/api/users/userApi";
import PaymentForm from "../../PaymentForm/PaymentForm";
import PrimaryButtunComponant from "../../PrimaryButtunComponant";
import ModalComponent from "../ModalComponent";
import CandidateDetailsSection from "./CandidateDetailsSection/CandidateDetailsSection";
import ProjectDetailsSection from "./ProjectDetailsSection/ProjectDetailsSection";
import {
  StyledModalBodyContainer,
  StyledPaymentFormContainer,
} from "./ValidateCandidateModal.style";

const ValidateCandidateModal = ({
  showModalPaiement,
  setShowModalPaiement,
  handleShowModal,
  candidateId,
  idEntreprise,
  price,
  proposalId,
  selectedProposal,
}) => {
  const { selectedProjectId } = useChannelContext();

  const {
    data: candidateData,
    isLoading: candidateDataIsLoading,
    error: candidateDataError,
  } = useGetUserByIdQuery(candidateId);

  const {
    data: proposalEntrepriseData,
    isLoading: proposalEntrepriseIsLoading,
    error: proposalEntrepriseError,
  } = useGetProposalEntrepriseByIdQuery(proposalId, { skip: !proposalId });

  const filersprojets = "?entrepriseId=" + idEntreprise;
  const {
    data: projectsData,
    error: projectsError,
    isLoading: projectsIsLoading,
  } = useGetProjectsQuery(filersprojets);

  const [selectedProjectData, setSelectedProjectData] = useState({});
  const [payClicked, setPayClicked] = useState(false);

  useEffect(() => {
    if (!projectsIsLoading && !projectsError && projectsData) {
      setSelectedProjectData(
        projectsData.data.filter(
          (project) => project.id === selectedProjectId
        )[0]
      );
    }
  }, [projectsData]);

  const RenderBodyPaiement = !payClicked ? (
    <StyledModalBodyContainer>
      <CandidateDetailsSection
        candidateData={candidateData}
        loading={candidateDataIsLoading}
        error={candidateDataError}
      />
      {!proposalEntrepriseIsLoading && selectedProjectData && (
        <ProjectDetailsSection
          proposalsEntrepriseData={proposalEntrepriseData.data}
          projectData={selectedProjectData}
        />
      )}
    </StyledModalBodyContainer>
  ) : (
    <StyledPaymentFormContainer>
      <PaymentForm paymentAmount={price} proposalId={proposalId} />
    </StyledPaymentFormContainer>
  );

  const RenderFooter = (
    <PrimaryButtunComponant
      borderBtn={"none"}
      colorBtn={paletteITgalaxy.secondaryBlueITgalaxy}
      colorTitleBtn={"#fff"}
      event={() => setPayClicked(!payClicked)}
      heightBtn={30}
      widthBtn={"80%"}
      radius={8}
      sizeTitle={10}
      titleBtn={payClicked ? "Retour" : "Payer"}
    />
  );
  return (
    <ModalComponent
      show={showModalPaiement}
      closeModal={handleShowModal}
      body={RenderBodyPaiement}
      footer={RenderFooter}
      bodyPadding={"0px 0px 0px 0px"}
      minWidth={"80%"}
    />
  );
};

export default ValidateCandidateModal;
