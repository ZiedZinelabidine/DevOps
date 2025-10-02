import { Modal } from "react-bootstrap"; // Ensure you have react-bootstrap installed
import {
  OptionCard,
  OptionContainer,
  StyledModalBody,
} from "./ModalShowChoiceAccounting.style";

const ModalShowChoiceAccounting = (props) => {
  const handleChoice = (choice) => {
    console.log(`You selected: ${choice}`);

    if (choice === "All Accounting Jobs") {
      window.location.href = `/projects`;
    }

    if (choice === "My Working Folders") {
      window.location.href = `/projects`;
    }
  };

  return (
    <Modal show={props.show} onHide={props.onHide} centered={true} size="lg">
      <StyledModalBody>
        <OptionContainer>
          <OptionCard onClick={() => handleChoice("Jobs")}>
            <h3>All Accounting Jobs</h3>
          </OptionCard>
          <OptionCard onClick={() => handleChoice("ItGalaxy Contactor")}>
            <h3>My Working Folders</h3>
          </OptionCard>
        </OptionContainer>
      </StyledModalBody>
    </Modal>
  );
};

export default ModalShowChoiceAccounting;
