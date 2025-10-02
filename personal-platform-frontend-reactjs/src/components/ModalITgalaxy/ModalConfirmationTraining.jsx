import React from "react";
import { Button } from "react-bootstrap";
import ModalComponent from "./ModalComponent";

const ModalConfirmationTraining = (props) => {
  return (
    <ModalComponent
      show={props.confirmShow}
      header={"Confirmation Création Formation"}
      body={
        <div>
          <h1>Voulez vous confirmer la création de votre formation</h1>
        </div>
      }
      footer={
        <React.Fragment>
          <Button variant="secondary" onClick={props.onCancel}>
            Annuler
          </Button>
          <Button variant="primary" onClick={props.onSubmit}>
            Valider
          </Button>
        </React.Fragment>
      }
    />
  );
};
export default ModalConfirmationTraining;
