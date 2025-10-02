import { Modal } from "react-bootstrap"; // Ensure you have react-bootstrap installed
import {
  OptionCard,
  OptionContainer,
  StyledModalBody,
} from "./ModalShowChoiceCandidat.style";

const ModalShowChoiceCandidat = (props) => {
  const handleChoice = (choice) => {
    console.log(`You selected: ${choice}`);

    if (choice === "Trouver un projet") {
      window.location.href = `/projects`;
    }
    if (choice === "Trouver un contrat") {
      window.location.href = `/contracts`;
    }
    if (choice === "Marketplace") {
      window.location.href = `/marketplace`;
    }
  };

  return (
    <Modal show={props.show} onHide={props.onHide} centered={true} >
      <StyledModalBody>
        <OptionContainer>
          <OptionCard onClick={() => handleChoice("Trouver un projet")}>
            <h3>Trouver un projet</h3>
          </OptionCard>
          <OptionCard onClick={() => handleChoice("Trouver un contrat")}>
            <h3>Trouver un contrat</h3>
          </OptionCard>
          <OptionCard onClick={() => handleChoice("Marketplace")}>
            <h3>Marketplace</h3>
          </OptionCard>
        </OptionContainer>
      </StyledModalBody>
    </Modal>
  );
};

export default ModalShowChoiceCandidat;
