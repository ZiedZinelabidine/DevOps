import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import { useState } from "react";
import ModalComponent from "../ModalComponent";
import {
  CardProjectText,
  CardStatusProjectText,
  TitreColum,
} from "./ModalShowProposalAO.style";

const ModalShowProposalAO = (props) => {
  // State to control the description visibility
  const [isExpanded, setIsExpanded] = useState(false);
  const [isProposalExpanded, setIsProposalExpanded] = useState(false);
  

  const toggleProposalDescription = () => {
    setIsProposalExpanded(!isProposalExpanded);
  };

  const RenderHeader = (
    <CardStatusProjectText>
      {props.type === "RECRUTER" ? (
        <ImageProfilCard
          type={"recruter"}
          id={props.proposal?.applier?.id}
          typeimg={"cercel"}
        />
      ) : (
        <ImageProfilCard
          type={props?.proposal?.applier?.type.toLowerCase()}
          id={props?.proposal?.recruter?.id}
          typeimg={"cercel"}
        />
      )}
 
      <div style={{ paddingLeft: "15px", marginRight: "10px" }}>
        {props.type === "RECRUTER"
          ? props?.proposal?.applier?.name +
            " " +
            props?.proposal?.applier?.first_name
          : props?.proposal?.recruter?.name +
            " " +
            props?.proposal?.recruter?.first_name}
      </div>
    </CardStatusProjectText>
  );

  const RenderBodyModalApply = (
    <>
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

export default ModalShowProposalAO;
