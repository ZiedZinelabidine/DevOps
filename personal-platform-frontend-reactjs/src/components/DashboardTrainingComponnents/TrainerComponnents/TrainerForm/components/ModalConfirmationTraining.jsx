import { Modal } from "react-bootstrap";
import styled from "styled-components";

const ModalConfirmationTraining = ({ confirmShow, onCancel, onSubmit }) => {
  return (
    <Modal show={confirmShow} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Training Creation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to create this training?</p>
      </Modal.Body>
      <Modal.Footer>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
        <ConfirmButton onClick={onSubmit}>Confirm</ConfirmButton>
      </Modal.Footer>
    </Modal>
  );
};

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 500;
`;

const CancelButton = styled(Button)`
  background-color: #f5f5f5;
  color: #666;
  margin-right: 8px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const ConfirmButton = styled(Button)`
  background-color: var(--PrimaryBlue);
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ModalConfirmationTraining;
