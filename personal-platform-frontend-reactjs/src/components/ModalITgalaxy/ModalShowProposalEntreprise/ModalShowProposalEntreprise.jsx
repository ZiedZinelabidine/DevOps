import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import { useState } from "react";
import ModalComponent from "../ModalComponent";
import {
  CardProjectText,
  CardStatusProject,
  CardStatusProjectText,
  TitreColum,
  Budgetdesc1
} from "./ModalShowProposalEntreprise.style";

const ModalShowProposalEntreprise = (props) => {
  // State to control the description visibility
  const [isExpanded, setIsExpanded] = useState(false);
  const [isProposalExpanded, setIsProposalExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleProposalDescription = () => {
    setIsProposalExpanded(!isProposalExpanded);
  };

  const RenderHeader = (
    <CardStatusProjectText>
      <div
        style={{
          color: "black",
          fontWeight: "501",
          marginLeft: "auto",
        }}
      >

       <Budgetdesc1>  {`Budget: ${props.proposal.price} euro`} </Budgetdesc1>
      </div>
      <div style={{ paddingLeft: "15px", marginRight: "10px" }}>
        {props.type === "ENTREPRISE"
          ? props.proposal.user.name + " " + props.proposal.user.first_name
          : props.proposal?.project?.title}
      </div>

    </CardStatusProjectText>
  );

  const RenderBodyModalApply = (
    <>
      <CardStatusProject status={props.proposal.status}>
        Status : {props.proposal.status}
      </CardStatusProject>

      <TitreColum> The Proposal Description:</TitreColum>
      <CardProjectText>{props.proposal.proposal_description}</CardProjectText>
    </>
  );

  return (
    <>
      <ModalComponent
        show={props.confirmShow}
        closeModal={props.closeModal}
        body={RenderBodyModalApply}
        footer={props.footer}
        header={RenderHeader}
        bodyPadding={"0px 0px 0px 0px"}
        minWidth={"50%"}
        Height={"80vh"}
        footerpaddingbottom={"1px"}
        headerpaddingtop={"10px"}
        footerpaddingtop={"0"}
      />
    </>
  );
};

export default ModalShowProposalEntreprise;
