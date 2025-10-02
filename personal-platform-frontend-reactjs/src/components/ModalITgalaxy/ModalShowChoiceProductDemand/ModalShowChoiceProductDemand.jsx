import { Modal } from "react-bootstrap"; // Ensure you have react-bootstrap installed
import {
  OptionCard,
  OptionContainer,
  StyledModalBody,
} from "./ModalShowChoiceProductDemand.style";

const ModalShowChoiceProductDemand = (props) => {

  return (
    <Modal show={props.show} onHide={props.onHide} centered={true} >
      <StyledModalBody>
        <OptionContainer>
          <OptionCard onClick={() => props.handelModalDemandShareProduct()}>
            <h3>Partagez votre SaaS dans notre Marketplace</h3>
          </OptionCard>
          <OptionCard onClick={() => props.handelModalCustomProduct()}>
            <h3>Custom product for your need</h3>
          </OptionCard>
        </OptionContainer>
      </StyledModalBody>
    </Modal>
  );
};

export default ModalShowChoiceProductDemand;
