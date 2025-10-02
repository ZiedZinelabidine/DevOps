import { useState } from "react";
import PrimaryButtunComponant from "../../PrimaryButtunComponant";
import ModalComponent from "../ModalComponent";

import { StyledPaymentFormContainer } from "./ValidateCandidateModalProduct.style";

const ValidateCandidateModalProduct = ({
  showModalPaiement,
  setShowModalPaiement,
  handleShowModal,
  price,
}) => {
  const [payClicked, setPayClicked] = useState(false);

  const RenderBodyPaiement = (
    <StyledPaymentFormContainer></StyledPaymentFormContainer>
  );

  const RenderFooter = (
    <PrimaryButtunComponant
      borderBtn={"none"}
      colorBtn={"blue"}
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

export default ValidateCandidateModalProduct;
