import DisplayRawHtml from "components/DisplayRawHtml/DisplayRawHtml";
import {
  getAccessToken,
  getTypeFromLocalStorage,
  sendNotificationEmail,
} from "core/helpers/storage";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { FormProvider } from "react-hook-form";
import { useAddMessageMutation } from "../../../redux/api/api-chat-mongodb/api-chat-mongodbAPI";
import { useAddProposalAOMutation } from "../../../redux/api/proposalAO/proposalaoApi";
import { useAddProposalMutation } from "../../../redux/api/proposals/proposalApi";
import GenericInput from "../../Inputs/GenericInput/GenericInput";
import ModalComponent from "../ModalComponent";
import { formConfig } from "./ModalApply.constants";
import { MapPin } from 'lucide-react'; // Import the MapPin icon from Lucide
import { fileToBase64 } from "../../../utils/fileConvertion";
import { Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import { useGetCheckProfilCompletQuery } from "../../../redux/api/candidat/candidatApi";
import { Ban } from 'lucide-react';
import {
  AdvancedSearchButtonModalContainer,
  AllTags,
  ApplyButton,
  Bloc3,
  BlocShowJob,
  BlocTitle,
  BudgetWrapperDescript,
  Budgetdesc1,
  Budgetdesc2,
  DatePost,
  ModalBodyStyle,
  PreambleMessage,
  Sections2,
  StyleDescription,
  StyleI,
  StyledFormText,
  Tag,
  TitleJob,
} from "./ModalApply.style";

const ModalApply = (props) => {
  const {
    control,
    formState: { errors, isValid },
  } = props.methods;

  const [showApplySection, setShowApplySection] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const type = getTypeFromLocalStorage();
  const token = getAccessToken();
  const decodeToken = token ? jwtDecode(token) : null;
  const chatid = decodeToken ? decodeToken.chatid : null;

  const [sendMessageToChannel] = useAddMessageMutation();
  const [addProposal] = useAddProposalMutation();
  const [addAoProposal] = useAddProposalAOMutation();
  const [describLength, setDescribLength] = useState(0);

  const [completeProfil, setCompleteProfil] = useState(true);
  const [link, setLink] = useState();
  const URL = process.env.REACT_APP_FRONTED_URL;
  const [descriptionError, setDescriptionError] = useState("");
  const [priceError, setPriceError] = useState("");


  useEffect(() => {
    if (props.job.display) {
      setLink(`${URL}/shareJob?token=${props.job.display}&type=SHARETASK`);
    }
  }, [props.job.display]);

  const { data, errorCheck, isLoadingCheck } = useGetCheckProfilCompletQuery(
    decodeToken.id,
    {
      skip: type === "RECRUTER", // This will skip the query if type is 'recruter'
    }
  );

  useEffect(() => {
    if (type === "CANDIDAT" && data && !isLoadingCheck && !errorCheck) {
     // setCompleteProfil(data.bol_user_complete);
      setCompleteProfil(true);

    }
  }, []);

  const [formData, setFormData] = useState({
    description: "",
    price: 0,
  });

  const handleChangePrice = (event) => {
    const { value } = event.target;

    setFormData((prevProposal) => ({
      ...prevProposal,
      price: value,
    }));

    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue) || parsedValue <= 0) {
      setPriceError("Price must be a positive number.");
    } else {
      setPriceError("");
    }
  };

  const handleChangeDescribe = (event) => {
    const { value } = event.target;
    setDescribLength(value.length);
    setFormData((prevProposal) => ({
      ...prevProposal,
      description: value,
    }));

    if (value.length > 200) {
      setDescriptionError("Description cannot exceed 200 characters.");
    } else {
      setDescriptionError("");
    }
  };

  async function sendManyCVSchannel({ topic, from }) {
    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        await sendMessageToChannel({
          topic: topic,
          from: from,
          name: selectedFiles[i].name,
          size: selectedFiles[i].size,
          type: selectedFiles[i].type,
          val: await fileToBase64(selectedFiles[i]),
        });
      }
    } catch (e) {
      console.error(
        "error au niveau la creation de la proposalEntreprise .",
        e
      );
    }
  }

  async function createProposalFunc(typeUser, JobType) {
    try {
      let requestproposal;
      setLoading(true);

      if (typeUser === "CANDIDAT" && JobType === "SHARETASK") {
        requestproposal = {
          projectId: props.job.id,
          userId: decodeToken.id,
          proposal_description: formData.description,
          price: formData.price,
        };
        await addProposal(requestproposal).unwrap(); // Handle promise
        await sendNotificationEmail(
          props.job.entreprise.email,
          "NOTIFICATION_NEW_PROPOSAL"
        );
        setShowSuccessModal(true);
      } else if (typeUser === "CANDIDAT" && JobType === "Contrat") {
        requestproposal = {
          appeloffreId: props.job.id,
          applierId: decodeToken.id,
          applierType: "CANDIDAT",
          proposal_description: formData.description,
        };
        await addAoProposal(requestproposal).unwrap(); // Handle promise
        await sendNotificationEmail(
          props.job.recruter.email,
          "NOTIFICATION_NEW_PROPOSAL"
        );

        setShowSuccessModal(true);
      } else if (typeUser === "RECRUTER" && JobType === "Contrat") {
        requestproposal = {
          appeloffreId: props.job.id,
          applierId: decodeToken.id,
          proposal_description: formData.description,
          applierType: "RECRUTER",
        };
        await addAoProposal(requestproposal).then((res) =>
          sendManyCVSchannelProposal(res.data)
        );
        await sendNotificationEmail(
          props.job.recruter.email,
          "NOTIFICATION_NEW_PROPOSAL"
        );
        setShowSuccessModal(true);
      } else if (typeUser === "RECRUTER" && JobType === "SHARETASK") {
        // generate URL of the job to share
      }
    } catch (e) {
      console.log("Error while creating the proposal.", e);
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
      setLoading(false);
    }
  }

  async function sendManyCVSchannelProposal(proposalCreated) {
    try {
      if (proposalCreated) {
        await sendManyCVSchannel({
          topic: proposalCreated.channelId,
          from: chatid,
        });
      }
    } catch (e) {
      console.log("Error while creating channels", e);
    }
  }

  const handleAlreadyAppliedSection = () => {
    props.closeModal();
  };

  const handleApplySection = () => {
    setShowApplySection(true);
  };

  const handleShareJob = () => {
    navigator.clipboard
      .writeText(`${URL}/shareJob?token=${props.job.display}&type=SHARETASK`)
      .then(() => {
        alert("Link of the job copied you can share it !");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleApplySubmit = () => {
    setShowApplySection(false);
    setShowSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    props.closeModal();
  };
  const RenderHeader = (
    <BlocTitle>
      {props.job.type === "SHARETASK" ? (
        <BudgetWrapperDescript>
          <Budgetdesc1> {"Budget : "}{props.job.price} {" euro"}</Budgetdesc1>
        </BudgetWrapperDescript>
      ) : (
        <BudgetWrapperDescript>
          <Budgetdesc1>Contrat</Budgetdesc1>
        </BudgetWrapperDescript>
      )}
       <TitleJob>{props.job.title} </TitleJob>
 
    </BlocTitle>
  );

  const RenderBodyModalApply = (
    <>
      {showApplySection ? (
        <FormProvider {...props.methods}>
          <form onSubmit={props.methods.handleSubmit(handleApplySubmit)}>
            {type === "CANDIDAT" && props.job.type === "SHARETASK" && (
              <>
                <StyledFormText> Décrivez vos compétences</StyledFormText>
                <GenericInput
                  inputObject={{
                    ...formConfig.description,
                    label: "description",
                  }}
                  onChange={handleChangeDescribe}
                  disabledForm={false}
                  control={control}
                />
                <p
                  style={{
                    color: describLength > 200 ? "red" : "black",
                    fontSize: "small",
                    textAlign: "right",
                    marginTop: "4px",
                  }}
                >
                  La description ne peut pas dépasser 200 caractères. {describLength}/200
                </p>
                {descriptionError && (
                  <p style={{ color: "red" }}>{descriptionError}</p>
                )}

                <Sections2>
                  <StyledFormText>
                    {" "}
                    Comment estimez-vous cette tâche en euros{" "}
                  </StyledFormText>
                  <GenericInput
                    inputObject={{
                      ...formConfig.price,
                      label: "price",
                    }}
                    onChange={handleChangePrice}
                    disabledForm={false}
                    control={control}
                  />
                  {priceError.length > 1 && (
                    <p style={{ color: "red" }}>{priceError}</p>
                  )}
                </Sections2>
              </>
            )}
            {type === "CANDIDAT" && props.job.type === "Contrat" && (
              <>
                <StyledFormText> Décrivez vos compétences </StyledFormText>
                <GenericInput
                  inputObject={{
                    ...formConfig.description,
                    label: "description",
                  }}
                  onChange={handleChangeDescribe}
                  disabledForm={false}
                  control={control}
                />
                <p
                  style={{
                    color: describLength > 200 ? "red" : "black",
                    fontSize: "small",
                    textAlign: "right",
                    marginTop: "4px",
                  }}
                >
                  La description ne peut pas dépasser 200 caractères. {describLength}/200
                </p>
                {descriptionError && (
                  <p style={{ color: "red" }}>{descriptionError}</p>
                )}
              </>
            )}
            {type === "RECRUTER" && props.job.type === "Contrat" && (
              <>
                <StyledFormText> Décrivez votre demande </StyledFormText>
                <GenericInput
                  inputObject={{
                    ...formConfig.description,
                    label: "description",
                  }}
                  onChange={handleChangeDescribe}
                  disabledForm={false}
                  control={control}
                />

                <p
                  style={{
                    color: describLength > 200 ? "red" : "black",
                    fontSize: "small",
                    textAlign: "right",
                    marginTop: "4px",
                  }}
                >
                  La description ne peut pas dépasser 200 caractères. {describLength}/200
                </p>
                {descriptionError && (
                  <p style={{ color: "red" }}>{descriptionError}</p>
                )}

                <Sections2>
                  <StyledFormText> CVs: </StyledFormText>
                  <GenericInput
                    inputObject={{
                      ...formConfig.cvs,
                      label: "cvs",
                    }}
                    disabledForm={false}
                    selectedFiles={selectedFiles} // Pass selected files to GenericInput
                    setSelectedFiles={setSelectedFiles} // Pass the setter to GenericInput
                  />
                </Sections2>
              </>
            )}
          </form>
        </FormProvider>
      ) : (
        <>
          <ModalBodyStyle>
            <StyleDescription>
              {" "}
              <DisplayRawHtml content={props.job.description} />{" "}
            </StyleDescription>
            <AllTags>
              {props.job.skills.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </AllTags>
            <Bloc3>
              <DatePost>
                {" "}
                Propositions:{" "}
                {props.job.proposal_count ||
                  (props.job.appeloffreProposals &&
                    props.job.appeloffreProposals.length) ||
                  (props.job.proposals && props.job.proposals.length) ||
                  0}
              </DatePost>
              <DatePost>
                Publié:{" "}
                {props.job.createdAt
                  ? new Date(props.job.createdAt).toDateString()
                  : "Date not available"}
              </DatePost>
              <StyleI>
              <MapPin size={20} style={{ paddingRight: "10px" }} /> {/* Using Lucide MapPin */}
                {props.job.location}
              </StyleI>
            </Bloc3>
          </ModalBodyStyle>
        </>
      )}
    </>
  );

  const RenderFooter = (
    <>
      {!showApplySection && (
        <>
          {props.canApply && (
            <ApplyButton onClick={handleAlreadyAppliedSection}>
              Déjà postulé
            </ApplyButton>
          )}
          {props.myOffer && (
            <ApplyButton onClick={handleAlreadyAppliedSection}>
              Fermer
            </ApplyButton>
          )}
          {!props.myOffer &&
            !props.canApply &&
            type === "CANDIDAT" &&
            props.job.type === "Contrat" && (
              <ApplyButton
                onClick={handleApplySection}
                disabled={
                  descriptionError !== "" ||
                  priceError !== "" ||
                  completeProfil === false
                }
              >
              {loading && <Spinner />}
           
          {completeProfil === false && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Ban />
          <div style={{ marginLeft: '10px' }}>
            <span>Vous devez compléter votre profil pour postuler</span>
          </div>
          </div>)}
                    Postulez
              </ApplyButton>
            )}
          {!props.myOffer &&
            !props.canApply &&
            type === "CANDIDAT" &&
            props.job.type === "SHARETASK" && (
              <ApplyButton
                onClick={handleApplySection}
                disabled={
                  descriptionError !== "" ||
                  priceError !== "" ||
                  completeProfil === false
                }
              >
             {loading && <Spinner />}
              {completeProfil === false ? ( // Show preamble when completeProfil is false
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Ban />
                  <div style={{ marginLeft: '10px' }}>
                    <span>Vous devez compléter votre profil pour postuler</span>
                  </div>
                </div>
             ): 
                  "Postulez" }
                </ApplyButton>
              )}

          {!props.myOffer &&
            !props.canApply &&
            type === "RECRUTER" &&
            props.job.type === "SHARETASK" && (
              <ApplyButton onClick={handleShareJob}>
                Copy the link and share this job
              </ApplyButton>
            )}
          {!props.myOffer &&
            !props.canApply &&
            type === "RECRUTER" &&
            props.job.type === "Contrat" && (
              <ApplyButton
                onClick={handleApplySection}
                disabled={descriptionError !== "" || priceError !== ""}
              >
              {loading && <Spinner />}
              Postulez
              </ApplyButton>
            )}
        </>
      )}
      {showApplySection && (
        <ApplyButton
          onClick={() => createProposalFunc(type, props.job.type)}
          disabled={descriptionError !== "" || priceError !== ""}
        >
       {loading && <Spinner />}

         Postulez
        </ApplyButton>
      )}
    </>
  );

  const RenderShowJob = () => {
    return (
      <BlocShowJob>
        <BlocTitle>
          <TitleJob>{props.job.title} :</TitleJob>
          {props.job.type === "SHARETASK" ? (
            <BudgetWrapperDescript>
              <Budgetdesc1>{props.job.price} euro</Budgetdesc1>
            </BudgetWrapperDescript>
          ) : (
            <BudgetWrapperDescript>
              <Budgetdesc2>Contrat</Budgetdesc2>
            </BudgetWrapperDescript>
          )}
        </BlocTitle>
        <ModalBodyStyle>
          <StyleDescription>
            <DisplayRawHtml content={props.job.project_description} />
          </StyleDescription>
          <AllTags>
            {props.job.skills.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </AllTags>
          <Bloc3>
            <DatePost>
              Offres Proposées :{" "}
              {props.job.proposal_count ||
                (props.job.appeloffreProposals &&
                  props.job.appeloffreProposals.length) ||
                (props.job.proposals && props.job.proposals.length) ||
                0}
            </DatePost>
            <DatePost>
              Posted:{" "}
              {props.job.createdAt
                ? new Date(props.job.createdAt).toDateString()
                : "Date not available"}
            </DatePost>
            <StyleI>
            <MapPin size={20} style={{ paddingRight: "10px" }} /> {/* Using Lucide MapPin */}
              {props.job.location}
            </StyleI>
          </Bloc3>
        </ModalBodyStyle>
      </BlocShowJob>
    );
  };

  return (
    <>
      <ModalComponent
        show={props.confirmShow && !showSuccessModal}
        closeModal={props.closeModal}
        body={RenderBodyModalApply}
        header={RenderHeader}
        footer={RenderFooter}
        bodyPadding={"15px 10px 0px 10px"}
        minWidth={"80vw"}
        Height={"90vh"}
        footerpaddingtop={"0"}
      />

      {showSuccessModal && (
        <ModalComponent
          show={showSuccessModal}
          closeModal={handleCloseSuccessModal}
          body={
            <div>Merci pour votre proposition ! Veuillez consulter la section des messages, un canal a été créé pour ce projet.</div>
          }
          header={<div>Submission Successful</div>}
          footer={
            <AdvancedSearchButtonModalContainer
              onClick={handleCloseSuccessModal}
            >
              Close
            </AdvancedSearchButtonModalContainer>
          }
          bodyPadding={"15px 10px"}
          minWidth={"40vw"}
        />
      )}

      {props.showJob && <RenderShowJob />}
    </>
  );
};

export default ModalApply;
