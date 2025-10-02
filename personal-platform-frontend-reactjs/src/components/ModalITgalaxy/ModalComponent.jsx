import Modal from "react-bootstrap/Modal";
import { StyledModal } from "./ModalComponent.style";

function ModalComponent({
  show,
  header,
  body,
  footer,
  closeModal,
  bodyPadding,
  borderShadow,
  borderRadius,
  bodyColor,
  headerColor,
  footerColor,
  minWidth,
  Width,
  Height,
  headerpaddingtop,
  footerpaddingtop,
  footerpaddingbottom,
}) {
  return (
    <StyledModal
      size="lg"
      centered
      show={show}
      onHide={closeModal}
      animation={true}
      padding={bodyPadding}
      borderShadow={borderShadow}
      borderRadius={borderRadius}
      bodyColor={bodyColor}
      headerColor={headerColor}
      footerColor={footerColor}
      minWidth={minWidth}
      Width={Width}
      Height={Height}
      headerpaddingtop={headerpaddingtop}
      footerpaddingtop={footerpaddingtop}
      footerpaddingbottom={footerpaddingbottom}
    >
      <Modal.Header>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>{footer}</Modal.Footer>
    </StyledModal>
  );
}

export default ModalComponent;
