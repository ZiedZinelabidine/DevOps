import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../../../core/helpers/storage";
import { useAddTrainingMutation } from "../../../redux/api/training/trainingApi";

const ShowConfirmationTraining = ({ show, onValidate, onCancel }) => {
  const [saveTraining] = useAddTrainingMutation();
  const token = getAccessToken();
  const decodeToken = token ? jwtDecode(token) : null;
  const training = useSelector((state) => state.trainingCreation);
  const dispatch = useDispatch();
  const [openModalRegister, setOpenModalRegister] = useState(false);

  const handleModalRegister = () => {
    setOpenModalRegister(!openModalRegister);
  };

  const handleSubmit = async (e) => {
    onValidate();
    if (token) {
      const data = await saveTraining({
        type: training?.product_type,
        title: training?.details?.title,
        description: training?.details?.description,
        userId: decodeToken?.id,
        skills: training?.details?.skills.map((skill) => skill?.title),
        languages: "FRANCAIS",
        price: training?.price?.price,
        currency: training?.price?.currency,
        duration: training?.details?.nbDays,
        duration_type: "minute",
      });
    } else setOpenModalRegister(true);
  };

  return (
    <React.Fragment>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation Création Formation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h1>Voulez vous confirmer la création de votre formation</h1>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Valider
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};
export default ShowConfirmationTraining;
