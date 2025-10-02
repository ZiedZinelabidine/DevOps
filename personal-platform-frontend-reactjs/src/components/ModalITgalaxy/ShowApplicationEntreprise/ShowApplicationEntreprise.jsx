import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetTrainingByTokenQuery } from "../../redux/api/training/trainingApi";
import { useGetUserByIdQuery } from "../../redux/api/users/userApi";
import { getUrlData } from "../../utils/getUrlData";
import ValidateCandidateModalProduct from "../ModalITgalaxy/ValidateCandidateModalProduct/ValidateCandidateModalProduct";
import SideBar from "../SideBar/sideBar";
export const ShowApplicationEntreprise = () => {
  const { token } = useParams();
  const [showModal, setShowModal] = useState(false);
  const { data, error, isLoading, refetch } = useGetTrainingByTokenQuery(token);
  const [videos, setVideos] = useState();
  const [presentation, setPresentation] = useState();
  const trainingTypeProduct = useSelector(
    (state) => state.trainingCreation.product_type
  );
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    getUrlData(trainingTypeProduct, setVideos, id, "video", dispatch, true);
    getUrlData(
      trainingTypeProduct,
      setPresentation,
      id,
      "exercice",
      dispatch,
      false
    );
  }, []);
  const {
    data: candidateData,
    isLoading: candidateDataIsLoading,
    error: candidateDataError,
  } = useGetUserByIdQuery(data?.data?.userId);
  useEffect(() => {
    console.log("videos", videos);
  }, [videos]);
  return (
    <div style={{ display: "inline-flex", width: "100%" }}>
      <SideBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "inline-block",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p>
              Nom du formateur:{candidateData?.data?.name}-
              {candidateData?.data?.first_name}
            </p>
            <Button onClick={() => setShowModal(true)}>
              Acheter maintentant
            </Button>
          </div>
          <p>Description de l'application:{data?.data?.description}</p>
          <p>Plan</p>
          <b>{presentation?.split("/")?.pop()}</b>
          <p>Appercu les videos qui a mis le formateur en marketing</p>
          {videos?.map((video) => (
            <video
              width={200}
              height={200}
              src={`${process.env.REACT_APP_S3_URL}/${video.videoUrl}`}
            />
          ))}
          <p>Commentaire</p>
        </div>
      </div>
      <ValidateCandidateModalProduct
        showModalPaiement={showModal}
        setShowModalPaiement={setShowModal}
        handleShowModal={handleShowModal}
        price={data?.data?.price}
      />
    </div>
  );
};
