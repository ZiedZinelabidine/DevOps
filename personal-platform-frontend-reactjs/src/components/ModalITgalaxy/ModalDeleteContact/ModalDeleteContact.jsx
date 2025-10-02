import ModalComponent from "../ModalComponent";
import {
  BackButton,
  HeaderStyle,
  HeaderText,
  TextDelete,
} from "./ModalDeleteContact.style";
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

const ModalDeleteContact = ({ footer, handleShowModal, showModalDelete }) => {
  const handelCloseModal = () => {
    handleShowModal(false);
  };

  const RenderBodyDelete = (
    <TextDelete>Are you sure about deleting ?</TextDelete>
  );

  const RenderHeaderDelete = (
    <HeaderStyle>
      <BackButton onClick={handelCloseModal}>
        <img src={Vector} style={{ width: "0.83vw" }} alt="vector" />
      </BackButton>
      <HeaderText> Delete contact </HeaderText>
    </HeaderStyle>
  );

  return (
    <>
      <ModalComponent
        show={showModalDelete}
        closeModal={handleShowModal}
        body={RenderBodyDelete}
        header={RenderHeaderDelete}
        footer={footer}
        bodyPadding={"15px 10px 0px 10px"}
        minWidth={"56vw"}
        footerpaddingtop={"0"}
        footerpaddingbottom={"0"}
        minHeight={"10vh"}
      />
    </>
  );
};

export default ModalDeleteContact;
