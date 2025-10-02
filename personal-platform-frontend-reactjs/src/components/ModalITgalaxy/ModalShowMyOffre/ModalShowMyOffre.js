import DisplayRawHtml from "components/DisplayRawHtml/DisplayRawHtml";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import {
  useDeleteAppelOffreMutation,
  useUpdateAppelOffreMutation,
} from "../../../redux/api/appeloffres/appeloffreApi";
import {
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} from "../../../redux/api/projects/projectApi";
import ModalComponent from "../ModalComponent";

import {
  AllTags,
  ApplyButton,
  Bloc3,
  BlocTitle,
  BudgetWrapperDescript,
  Budgetdesc2,
  DatePost,
  EnCoursButton,
  ModalBodyStyle,
  StyleDescription,
  StyleI,
  Tag,
  TitleJob,
  TitleJobModalConfiramtion,
} from "./ModalShowMyOffre.style";
import { MapPin } from 'lucide-react'; // Import the MapPin icon from Lucide
const ModalShowMyOffre = (props) => {
  const [confirmationDelete, SetConfirmationDelete] = useState(false);
  const [confirmationSuspend, SetConfirmationSuspend] = useState(false);
  const [loading, setLoading] = useState(false);

  const [deleteOffre] = useDeleteAppelOffreMutation();
  const [suspendOffre] = useUpdateAppelOffreMutation();
  const [deleteProject] = useDeleteProjectMutation();
  const [suspendProject] = useUpdateProjectMutation();

  const handelCloseSuspend = () => {
    SetConfirmationSuspend(false);
  };

  const handelCloseDelete = () => {
    SetConfirmationDelete(false);
  };

  const openModalDelete = () => {
    props.closeModal(false);
    SetConfirmationDelete(true);
  };

  const openModalSuspend = () => {
    props.closeModal(false);
    SetConfirmationSuspend(true);
  };

  // Function to handle offer creation
  const HandleDeleteAppelOffre = async () => {
    try {
      setLoading(true);
      if (props.offre.type === "Contrat") {
        await deleteOffre(props.offre.id).unwrap(); // Handle promise
        props.refetch();
        toast.success("Offre was deleted", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        await deleteProject(props.offre.id).unwrap();
        toast.success("Project was deleted", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      props.refetch();
      SetConfirmationDelete(false); // Reset or hide the modal upon success
    } catch (e) {
      console.error("Error creating offre:", e); // Log error
      // Show specific error message if available
      const errorMessage = e.data?.error || "Please check the inputs";
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Function to handle offer creation
  const HandleSuspendAppelOffre = async () => {
    try {
      if (props.offre.type === "Contrat") {
        await suspendOffre({
          id: props.offre.id,
          body: {
            status: "SUSPEND",
          },
        }).unwrap(); // Handle promise
        props.refetch();
        toast.success("Project was suspended", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        await suspendProject({
          id: props.offre.id,
          body: {
            status: "SUSPEND",
          },
        }).unwrap(); // Handle promise
        toast.success("Project was suspended", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      SetConfirmationSuspend(false); // Reset or hide the modal upon success
      props.refetch(); // Refresh the project list
    } catch (e) {
      console.error("Error creating offre:", e); // Log error
      // Show specific error message if available
      const errorMessage = e.data?.error || "Please check the inputs";
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const RenderHeader = ({ props }) => {
    // Initialize variable to store the number of proposals based on conditions
    let proposalsCount = 0;

    if (
      props.offre.appeloffreProposals &&
      props.offre.appeloffreProposals.length > 0
    ) {
      proposalsCount = props.offre.appeloffreProposals.length; // Get length from appeloffreProposals
    } else if (
      props.offre.type === "SHARETASKS" &&
      props.offre.proposals.length > 0
    ) {
      proposalsCount = props.offre.proposals.length; // Get length from proposals
    } else if (
      props.offre.type === "COMPOSED_FREELANCE" &&
      props.offre.proposalentreprises.length > 0
    ) {
      proposalsCount = props.offre.proposalentreprises.length; // Get length from proposalentreprises
    }

    return (
      <BlocTitle>
        <BudgetWrapperDescript>
          <Budgetdesc2>
            Propositions: {proposalsCount > 0 ? proposalsCount : "0"}
          </Budgetdesc2>
        </BudgetWrapperDescript>
        <TitleJob>{props.offre.title}</TitleJob>

      </BlocTitle>
    );
  };

  const RenderHeaderConfirmation = (
    <BlocTitle>
      <TitleJobModalConfiramtion>Confirmation</TitleJobModalConfiramtion>
    </BlocTitle>
  );

  const RenderBodyModalShowMyOffre = (
    <ModalBodyStyle>
      <StyleDescription>
        {" "}
        <DisplayRawHtml content={props.offre.description} />
      </StyleDescription>
      <AllTags>
        {props.offre.skills.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </AllTags>
      <Bloc3>
        <DatePost>
          Publié:{" "}
          {props.offre.createdAt
            ? new Date(props.offre.createdAt).toDateString()
            : "Date not available"}
        </DatePost>
        <StyleI>
        <MapPin size={20} style={{ paddingRight: "10px" }} /> {/* Using Lucide MapPin */}
          {props.offre.location}
        </StyleI>
      </Bloc3>
    </ModalBodyStyle>
  );

  const RenderFooter = (
    <buttonFotterStyle>
      {props.offre.type === "Contrat" ? (
          <ApplyButton onClick={() => openModalDelete()}>
           Supprimé l'offre
          </ApplyButton>
      ) : props.offre.status === "ACTIVE" ? (
          <ApplyButton onClick={() => openModalDelete()}>
            Supprimé le projet
          </ApplyButton>
      ) : (
        <EnCoursButton>Projet en cours</EnCoursButton>
      )}
    </buttonFotterStyle>
  );

  const RenderBodyConfirmationDelete = (
    <ModalBodyStyle>Confirmez vous  la suppression ?</ModalBodyStyle>
  );

  const RenderBodyConfirmationSuspend = (
    <>
      {loading && <Spinner />}

      <ModalBodyStyle>Confirmez vous  la suspension ?</ModalBodyStyle>
    </>
  );

  const RenderFooterDelete = (
    <buttonFotterStyle>
      <ApplyButton onClick={() => HandleDeleteAppelOffre()}>
         Oui, je supprime
      </ApplyButton>

      <ApplyButton onClick={() => handelCloseDelete()}>Non</ApplyButton>
    </buttonFotterStyle>
  );
  const RenderFooterSuspend = (
    <buttonFotterStyle>
      <ApplyButton onClick={() => HandleSuspendAppelOffre()}>
      Oui, je suspends
      </ApplyButton>

      <ApplyButton onClick={() => handelCloseSuspend()}>Non</ApplyButton>
    </buttonFotterStyle>
  );

  return (
    <>
      <ModalComponent
        show={props.confirmShow}
        closeModal={props.closeModal}
        body={RenderBodyModalShowMyOffre}
        header={<RenderHeader props={props} />}
        footer={RenderFooter}
        footerpaddingtop={"10px"}
        footerpaddingbottom={"10px"}
        bodyPadding={"15px 10px 0px 10px"}
        minWidth={"61vw"}
        Height={"84vh"}
      />

      {confirmationDelete && (
        <ModalComponent
          show={openModalDelete}
          closeModal={handelCloseDelete}
          body={RenderBodyConfirmationDelete}
          header={RenderHeaderConfirmation}
          footer={RenderFooterDelete}
          minWidth={"61vw"}
          footerpaddingtop={"1px"}
          footerpaddingbottom={"1px"}
        />
      )}
      {confirmationSuspend && (
        <ModalComponent
          show={openModalSuspend}
          closeModal={handelCloseSuspend}
          body={RenderBodyConfirmationSuspend}
          header={RenderHeaderConfirmation}
          footer={RenderFooterSuspend}
          minWidth={"61vw"}
          footerpaddingtop={"1px"}
          footerpaddingbottom={"1px"}
        />
      )}
    </>
  );
};

export default ModalShowMyOffre;
