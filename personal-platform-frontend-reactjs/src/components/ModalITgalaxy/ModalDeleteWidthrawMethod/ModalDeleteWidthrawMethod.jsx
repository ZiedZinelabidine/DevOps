import { useState } from "react";
import { Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDeleteWithdrawalMethodMutation } from "../../../redux/api/withdrawal/withdrawalApi";
import ModalComponent from "../ModalComponent";
import {
  CloseDeleteBankAccountButton,
  DeleteBankAccountButton,
  HeaderStyle,
  HeaderText,
  TextDelete,
} from "./ModalDeleteWidthrawMethod.style";

const ModalDeleteWidthrawMethod = (props) => {
  const [deleteWithdraw] = useDeleteWithdrawalMethodMutation();
  const [loading, setLoading] = useState(false);

  const handleDeleteWidthrawMethod = async () => {
    try {
      setLoading(true);
      await deleteWithdraw(props.id).unwrap(); // Assuming createWithdrawalMethod returns a promise.
      toast.success("delete Withdrawal Method Success", {
        position: "top-center",
        autoClose: 3000,
      });
      props.refetch();
      props.close();
    } catch (e) {
      console.error("Error creating withdrawal method:", e); // Log the error for debugging
    } finally {
      setLoading(false);
    }
  };

  const RenderBodyDelete = (
    <TextDelete>Are you sure about deleting this method widthraw ?</TextDelete>
  );

  const RenderHeaderDelete = (
    <>
      {loading && <Spinner />}
      <HeaderStyle>
        <HeaderText> Delete method widthraw </HeaderText>
      </HeaderStyle>
    </>
  );

  const RenderFotterDelete = (
    <>
      <CloseDeleteBankAccountButton onClick={props.close}>
        {" "}
        No{" "}
      </CloseDeleteBankAccountButton>
      <DeleteBankAccountButton onClick={handleDeleteWidthrawMethod}>
        {" "}
        Yes{" "}
      </DeleteBankAccountButton>
    </>
  );

  return (
    <ModalComponent
      show={props.show}
      closeModal={props.close}
      body={RenderBodyDelete}
      header={RenderHeaderDelete}
      footer={RenderFotterDelete}
      bodyPadding={"15px 10px 0px 10px"}
      minWidth={"56vw"}
      footerpaddingtop={"0"}
      footerpaddingbottom={"0"}
      minHeight={"10vh"}
    />
  );
};

export default ModalDeleteWidthrawMethod;
