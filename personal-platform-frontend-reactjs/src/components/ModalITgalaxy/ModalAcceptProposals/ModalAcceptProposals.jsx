import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import DeclinePaymentModal from "components/ModalITgalaxy/DeclinePaymentModal/DeclinePaymentModal";
import ModalPayment from "components/ModalITgalaxy/ModalPayment/ModalPayment";
import PaymentProcessProposal from "components/PaymentForm/PaymentProcessProposal/PaymentProcessProposal";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { getAccessToken } from "../../../core/helpers/storage";
import {
  useGetProjectsQuery,
  useGetProposalsbyProjectIdQuery,
} from "../../../redux/api/projects/projectApi";
import GenericInput from "../../Inputs/GenericInput/GenericInput";
import { InputTypes } from "../../Inputs/input.type";
import ActivatePaymentModal from "../ActivatePaymentModal/ActivatePaymentModal";
import ModalComponent from "../ModalComponent";
import {
  AllCard,
  BackButton,
  CardContainers,
  CardProposal,
  CardProposalTitle,
  CloseDashButton,
  DatePost,
  HeaderStyle,
  HeaderText,
  NotFoundTextStyle,
  PriceStyle,
} from "./ModalAcceptProposals.style";
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

const ModalAcceptProposals = (props) => {
  const [projects, setProjects] = useState([]);
  const [entrepriseid, setEntrepriseId] = useState(null);
  const [role, setRole] = useState(null);
  const [proposals, setProposals] = useState([]);
  const formMethods = useForm({});
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [showModalPaymentModal, setShowModalPaymentModal] = useState(false);
  const [showModalDashProposals, setShowModalDashProposals] = useState(true);
  const [showModalDecline, setShowModalDecline] = useState(false);
  const [showModalActiveVersement, setShowModalActiveVersement] =
    useState(false);
  const [selectedItem, setSelectedItem] = useState(false);
  const [price, setPrice] = useState(null);

  const [formData, setFormData] = useState({
    projects: "",
  });

  const handelRetourTodash = () => {
    setShowModalPaymentModal(false);
    setShowModalDecline(false);
    props.closeModal();
    setShowModalActiveVersement(false);
  };

  // Fetch the access token and decode it
  useEffect(() => {
    const fetchTokenAndProjects = async () => {
      const token = await getAccessToken();
      const decodeToken = token ? jwtDecode(token) : null;
      const id = decodeToken ? decodeToken.id : null;
      const role = decodeToken ? decodeToken.role : null;
      setEntrepriseId(id);
      setRole(role);
    };

    fetchTokenAndProjects();
  }, []);

  // Use the query based on the entrepriseid
  const { data: projectsData, error } = useGetProjectsQuery(
    entrepriseid ? `?entrepriseid=${entrepriseid}` : "",
    {
      skip: !entrepriseid, // Skip fetching if entrepriseid is not available
    }
  );

  useEffect(() => {
    if (projectsData) {
      setProjects(projectsData.data);
      setSelectedProjectId(projectsData?.data[0]?.id);
    }
    if (error) {
      console.error("Error fetching projects:", error);
    }
  }, [projectsData, error]);

  // Form configuration with fetched projects data
  const formConfig = {
    projects: {
      inputType: InputTypes.SELECT_PROJECT,
      fieldName: "projects",
      isMulti: false,
      config: {
        required: true,
        placeholder: "",
      },
      defaultValue: [],
      placeholder: "Select a project please .....",
      options:
        projects.length > 0
          ? projects
          : [{ id: "-1", title: "", value: "", label: "" }], // Check length of projects array
    },
  };

  const { data: proposalsData, error: proposalsError } =
    useGetProposalsbyProjectIdQuery(selectedProjectId, {
      skip: selectedProjectId === null , // This query will be skipped if selectedProjectId is null
    });


 // Update proposals when data changes
  useEffect(() => {
    if (proposalsData) {
      setProposals(proposalsData.proposals);
    }
    if (proposalsError) {
      console.error("Error fetching proposals:", proposalsError);
      setProposals([]); // Clear proposals if there's an error
    }
  }, [proposalsData, proposalsError]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleChangeProjects = (selectedOptions) => {
    const selectedValue = selectedOptions.target.value; // Assuming selectedOptions.target.value gives you the project ID

    setFormData((prevFormData) => ({
      ...prevFormData,
      projects: selectedValue,
    }));
    setSelectedProjectId(selectedValue);
  };

  useEffect(() => {
    if (error) {
      console.error("Error fetching proposals:", error);
      setProposals([]); // Clear proposals if there's an error
    }
  }, [error]);

  const RenderBodyModalApply = () => (
    <>
      {showModalDashProposals && !showModalPaymentModal && (
        <>
          <FormProvider {...formMethods}>
            <GenericInput
              inputObject={{
                ...formConfig.projects,
                label: "Projects",
              }}
              onChange={handleChangeProjects}
              disabledForm={false}
            />
          </FormProvider>

          {proposals.length === 0 ? (
            <CardContainers>
              <NotFoundTextStyle>
                No proposal was created for this project...
              </NotFoundTextStyle>
            </CardContainers>
          ) : (
            <AllCard>
              {proposals.map((proposal) => (
                <CardProposal
                  key={proposal.id}
                  onClick={() => handleItemClick(proposal)}
                >
                  <CardProposalTitle>
                    <ImageProfilCard
                      type={"candidats"}
                      id={proposal.user.id}
                      typeimg={"cercel"}
                    />
                    {`${proposal.user.name} ${proposal.user.first_name}`}
                    <PriceStyle>{`${proposal.price}$`}</PriceStyle>
                  </CardProposalTitle>
                  <DatePost>
                    <span
                      style={{
                        color:
                          proposal.status === "CREATED"
                            ? "orange"
                            : proposal.status === "VALIDATED"
                            ? "var(--Success-Success200, rgba(21, 176, 151, 1))"
                            : proposal.status === "FINISHED"
                            ? "green"
                            : proposal.status === "DECLINED"
                            ? "red"
                            : proposal.status === "DECLINED"
                            ? "red"
                            : "black", // fallback color
                      }}
                    >
                      Status: {proposal.status}
                    </span>
                    <br />
                    <span>
                      Created:{" "}
                      {proposal.createdAt
                        ? new Date(proposal.createdAt).toDateString()
                        : "Date not available"}
                    </span>
                  </DatePost>
                  <PaymentProcessProposal
                    setShowModalProposal={setShowModalDashProposals}
                    setShowModalPaymentModal={setShowModalPaymentModal}
                    setSelectedItem={setSelectedItem}
                    setShowModalDecline={setShowModalDecline}
                    setShowModalActiveVersement={setShowModalActiveVersement}
                    proposal={proposal}
                  />
                </CardProposal>
              ))}
            </AllCard>
          )}
        </>
      )}
    </>
  );

  const RenderHeader = (
    <>
      {showModalPaymentModal ? (
        <HeaderStyle>
          <BackButton onClick={handelRetourTodash}>
            <img src={Vector} style={{ width: "0.83vw" }} alt="vector" />
          </BackButton>
          <HeaderText>
            {" "}
            Payment <PriceStyle>{price}</PriceStyle>{" "}
          </HeaderText>
        </HeaderStyle>
      ) : showModalDashProposals ? (
        "Dashboard Proposal"
      ) : null}
    </>
  );

  const RenderFooter = (
    <>
      <CloseDashButton onClick={props.closeModal}>
        Close Dashboard
      </CloseDashButton>
    </>
  );
  const RenderHeaderActivatePayment = (
    <HeaderStyle>
      <BackButton onClick={handelRetourTodash}>
        <img src={Vector} style={{ width: "0.83vw" }} alt="vector" />
      </BackButton>
      <HeaderText> Active versement </HeaderText>
    </HeaderStyle>
  );

  return (
    <>
      {showModalDashProposals &&
        !showModalDecline &&
        !showModalPaymentModal &&
        !showModalActiveVersement && (
          <ModalComponent
            show={props.show}
            closeModal={props.closeModal}
            body={<RenderBodyModalApply />}
            footer={RenderFooter}
            header={RenderHeader}
            bodyPadding={"15px 10px 0px 10px"}
            minWidth={"56vw"}
            minHeight={"80vh"}
            footerpaddingtop={"0"}
            footerpaddingbottom={"0"}
          />
        )}
      {!showModalDashProposals &&
        !showModalDecline &&
        showModalPaymentModal &&
        !showModalActiveVersement && (
          <ModalPayment
            handleCloseShowModal={handelRetourTodash}
            showModalPayment={showModalPaymentModal}
            price={selectedItem.price}
            paymentProposal={true}
            proposal={selectedItem}
            title={"Accept Proposal"}
            note={"You may choose to dismiss the proposal and receive a refund whenever you wish."}
          />
        )}

      {!showModalDashProposals &&
        showModalDecline &&
        !showModalPaymentModal &&
        !showModalActiveVersement && (
          <DeclinePaymentModal
            proposal={selectedItem}
            handleShowModal={handelRetourTodash}
            showModalDecline={showModalDecline}
            setSelectedItem={setSelectedItem}
          />
        )}

      {showModalActiveVersement &&
        !showModalDashProposals &&
        !showModalDecline &&
        !showModalPaymentModal && (
          <ActivatePaymentModal
            handleShowModal={handelRetourTodash}
            showModalActiveVersement={showModalActiveVersement}
            setSelectedItem={setSelectedItem}
            proposal={selectedItem}
          />
        )}
    </>
  );
};

export default ModalAcceptProposals;
