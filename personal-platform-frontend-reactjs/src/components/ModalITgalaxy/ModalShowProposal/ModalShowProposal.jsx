import { useState } from "react";
import ModalComponent from "../ModalComponent";
import {
  CardStatusProject,
  CardStatusProjectText,
  TitreColum,
} from "./ModalShowProposal.style";

const ModalShowProposal = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isProposalExpanded, setIsProposalExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleProposalDescription = () => {
    setIsProposalExpanded(!isProposalExpanded);
  };

  const RenderBodyModalApply = (
    <>
      <CardStatusProject status={props.proposal.status}>
        {props.proposal.status}
        <CardStatusProjectText>
          <div>This project is currently under discussion.</div>
          <div>The payment has not yet been made.</div>
        </CardStatusProjectText>
      </CardStatusProject>

      <TitreColum> Project Title:</TitreColum>
      <CardStatusProjectText>
        {props.proposal.project.title}
      </CardStatusProjectText>

      <TitreColum> Project Description:</TitreColum>
      <CardStatusProjectText>
        {isExpanded
          ? props.proposal.project.project_description
          : `${props.proposal.project.project_description.substring(
              0,
              100
            )}...`}
        {/* Show 'See More' or 'See Less' based on the state */}
        <div
          style={{
            color: "#C8C8C8",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
          onClick={toggleDescription}
        >
          <span>{isExpanded ? "See Less" : "See More"}</span>
          <i
            className={`fa ${isExpanded ? "fa-chevron-up" : "fa-chevron-down"}`}
            style={{ marginLeft: "5px" }}
          ></i>
        </div>
      </CardStatusProjectText>

      <TitreColum> Your Proposal Description:</TitreColum>
      <CardStatusProjectText>
        {isProposalExpanded
          ? props.proposal.proposal_description
          : `${props.proposal.proposal_description.substring(0, 100)}...`}
        <div
          style={{
            color: "#C8C8C8",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
          onClick={toggleProposalDescription}
        >
          <span>{isProposalExpanded ? "See Less" : "See More"}</span>
          <i
            className={`fa ${
              isProposalExpanded ? "fa-chevron-up" : "fa-chevron-down"
            }`}
            style={{ marginLeft: "5px" }}
          ></i>
        </div>
      </CardStatusProjectText>

      <TitreColum> Your Proposal Price:</TitreColum>
      <CardStatusProjectText>{props.proposal.price}</CardStatusProjectText>
    </>
  );

  return (
    <>
      <ModalComponent
        show={props.confirmShow}
        closeModal={props.closeModal}
        body={RenderBodyModalApply}
        bodyPadding={"0px 0px 0px 0px"}
        minWidth={"696px"}
        footerpaddingbottom={"0"}
        headerpaddingtop={"0"}
        Height={""}
      />
    </>
  );
};

export default ModalShowProposal;
