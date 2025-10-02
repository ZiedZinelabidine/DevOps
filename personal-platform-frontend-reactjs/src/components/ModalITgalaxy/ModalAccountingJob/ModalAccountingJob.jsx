import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import { useState } from "react";
import toast from "react-hot-toast";
import { priceAccountingJobsData } from "../../../data/priceAccountingJobsData"; // Adjust the import path as needed
import { useAddAccountingJobsMutation } from "../../../redux/api/accounting/accountingApi";
import ModalComponent from "../ModalComponent";
import {
  ApplyButton,
  ApplyButtonConfirmation,
  ApplyButtonDecline,
  BlocTitle,
  ButtonBlocConfirmation,
  CardJob,
  CardJobTitle,
  CardStatusProject,
  CardStatusProjectText,
  DatePost,
  StyleName,
  TitleJob,
  TitleJobConfirmation,
} from "./ModalAccountingJob.style";
import { MapPin } from 'lucide-react'; // Import the MapPin icon from Lucide
const ModalAccountingJob = (props) => {
  const [showModalValidation, setShowModalValidation] = useState(false);
  const [addAccountingJob] = useAddAccountingJobsMutation();

  const getPriceByLocation = (location) => {
    // Find the job data that matches the title
    const job = priceAccountingJobsData.find(
      (job) => job.title.toLowerCase() === location.toLowerCase()
    );

    // Return the price or a default value
    return job ? job.price : null; // Return null if location is not found
  };

  const handelCloseModals = () => {
    props.closeModal(false);
    setShowModalValidation(false);
  };

  const handleModalValidation = () => {
    setShowModalValidation(true);
  };

  const confirmTheAffection = async () => {
    try {
      await addAccountingJob({
        accountingFolderId: props.job.id,
        accountingFolderType: props.job.type,
        accountingId: props.id,
        price: props.job.price || 20,
      }).unwrap();

      toast.success("Folder affected to you", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      handelCloseModals();
    } catch (error) {
      toast.error(
        "An error occurred while affecting the folder: " + error.data.error,
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

  const RenderHeaderValidation = (
    <TitleJobConfirmation> Confirmation</TitleJobConfirmation>
  );

  const RenderBodyModalValidation = (
    <TitleJobConfirmation>
      {" "}
      Did you confirm the affection of this folder to you ?
    </TitleJobConfirmation>
  );

  const RenderFooterValidation = (
    <ButtonBlocConfirmation>
      <ApplyButtonDecline onClick={handelCloseModals}>Close</ApplyButtonDecline>
      <ApplyButtonConfirmation onClick={confirmTheAffection}>
        Accept
      </ApplyButtonConfirmation>
    </ButtonBlocConfirmation>
  );

  const RenderHeader = (
    <BlocTitle>
      {props.job.type === "REQUEST_COMPANY_CREATION" && (
        <TitleJob>
          {" "}
          Request Company Creation : {props.job.company_name}
        </TitleJob>
      )}
      {props.job.type === "COMPANY" && (
        <TitleJob> Company verification : {props.job.company_name} </TitleJob>
      )}

      {props.job.type === "COMPANY" && <TitleJob>Prix : 20$</TitleJob>}
      {props.job.type === "REQUEST_COMPANY_CREATION" && (
        <TitleJob>
          Prix: {getPriceByLocation(props.job.company_country)}
        </TitleJob>
      )}
      <TitleJob>
      <MapPin size={20} style={{ paddingRight: "10px" }} /> {/* Using Lucide MapPin */}
        {props.job.company_country}
      </TitleJob>
    </BlocTitle>
  );

  const RenderBodyModalApply = (
    <>
      <CardStatusProject status={props.job.status}>
        Tasks :
        {props.job.type === "COMPANY" && (
          <CardStatusProjectText>
            <div>1. Check all Files provided are valid.</div>
            <div>
              2. Support with client if files are not valid with the chat and
              continue the validation.
            </div>
          </CardStatusProjectText>
        )}
        {props.job.type === "REQUEST_COMPANY_CREATION" && (
          <CardStatusProjectText>
            <div>1. Check all Files provid are valid.</div>
            <div>
              2. Support with client if files are not valid with the chat and
              continue the validation.
            </div>
            <div>3. Do the administrative creation of the company .</div>
            <div>4. Send all the Company creted file .</div>
          </CardStatusProjectText>
        )}
      </CardStatusProject>

      <CardJob>
        <CardJobTitle>
          <ImageProfilCard
            type={props.job.user.type.toLowerCase() + "s"}
            id={props.job.user.id}
            typeimg={"cercel"}
          />{" "}
          <StyleName>
            {" "}
            {props.job.user.name} {props.job.user.first_name}{" "}
          </StyleName>
        </CardJobTitle>
        <DatePost>
          <span> Location : {props.job.company_country} </span>
          <span> Company name : {props.job.company_name}</span>
          <span> Type of company : {props.job.type_company} </span>

          <span>
            {" "}
            Created:{" "}
            {props.job.createdAt
              ? new Date(props.job.createdAt).toDateString()
              : "Date not available"}{" "}
          </span>
        </DatePost>
      </CardJob>
    </>
  );
  const RenderFooter = (
    <ApplyButton onClick={handleModalValidation}>
      Affect the folder to me
    </ApplyButton>
  );

  return (
    <>
      {!showModalValidation && (
        <ModalComponent
          header={RenderHeader}
          show={props.confirmShow}
          closeModal={props.closeModal}
          body={RenderBodyModalApply}
          bodyPadding={"0px 0px 0px 0px"}
          minWidth={"67vw"}
          Height={"55vh"}
          footer={RenderFooter}
          footerpaddingtop={"0"}
          footerpaddingbottom={"10px"}
          headerpaddingtop={"0"}
        />
      )}
      {showModalValidation && (
        <ModalComponent
          header={RenderHeaderValidation}
          show={showModalValidation}
          closeModal={handelCloseModals}
          body={RenderBodyModalValidation}
          bodyPadding={"0px 0px 0px 0px"}
          minWidth={"350px"}
          Height={"250px"}
          footer={RenderFooterValidation}
          footerpaddingtop={"0px"}
          footerpaddingbottom={"0px"}
          headerpaddingtop={"0"}
        />
      )}
    </>
  );
};

export default ModalAccountingJob;
