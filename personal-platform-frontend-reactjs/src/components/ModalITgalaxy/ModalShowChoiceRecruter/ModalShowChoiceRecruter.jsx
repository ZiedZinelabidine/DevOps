import { Modal } from "react-bootstrap"; // Ensure you have react-bootstrap installed
import {
  OptionCard,
  OptionContainer,
  StyledModalBody,
} from "./ModalShowChoiceRecruter.style";

const ModalShowChoiceRecruter = (props) => {
  const handleChoice = (choice) => {
    console.log(`You selected: ${choice}`);

    if (choice === "Offres") {
      window.location.href = `/contracts`;
    }
    if (choice === "ItGalaxy Contactor") {
      window.location.href = `/itgalaxycontactor`;
    }
  };

  return (
    <Modal show={props.show} onHide={props.onHide} centered={true} size="lg">
      <StyledModalBody>
        <OptionContainer>
          <OptionCard onClick={() => handleChoice("Offres")}>
            <h3>Offres</h3>
          </OptionCard>
          <OptionCard onClick={() => handleChoice("ItGalaxy Contactor")}>
            <h3>ItGalaxy Contactor</h3>
          </OptionCard>
        </OptionContainer>
      </StyledModalBody>
    </Modal>
  );
};

export default ModalShowChoiceRecruter;
