import { Modal } from "react-bootstrap"; // Ensure you have react-bootstrap installed
import {
  OptionCard,
  OptionContainer,
  StyledModalBody,
} from "./ModalShowChoiceCompany.style";

const ModalShowChoiceCompany = (props) => {
  const handleChoice = (choice) => {
    console.log(`You selected: ${choice}`);

    if (choice === "Choice your Freelancers") {
      window.location.href = `/projects?composeyourTeam=true`;
    }
    if (choice === "Share Your Project") {
      window.location.href = `/projects?shareTasks=true`;
    }
    if (choice === "ItGalaxy As Service") {
      window.location.href = `/projects?itgalaxyaservice=true`;
    }
    if (choice === "Marketplace") {
      window.location.href = `/marketplace`;
    }
  };

  return (
    <Modal show={props.show} onHide={props.onHide} centered={true} >
      <StyledModalBody>
        <OptionContainer>
          <OptionCard onClick={() => handleChoice("Choice your Freelancers")}>
            <h3>Choice your Freelancers</h3>
          </OptionCard>
          <OptionCard onClick={() => handleChoice("Share Your Project")}>
            <h3>Share Your Project</h3>
          </OptionCard>
          <OptionCard onClick={() => handleChoice("ItGalaxy As Service")}>
            <h3>ItGalaxy As Service</h3>
          </OptionCard>
          {!props.project && (
          <OptionCard onClick={() => handleChoice("Marketplace")}>
            <h3>Marketplace</h3>
          </OptionCard> )}
        </OptionContainer>
      </StyledModalBody>
    </Modal>
  );
};

export default ModalShowChoiceCompany;
