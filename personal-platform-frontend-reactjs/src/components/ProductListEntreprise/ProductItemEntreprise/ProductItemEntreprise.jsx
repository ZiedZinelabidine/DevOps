import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../../../core/helpers/storage";
import { getURL } from "../../../redux/api/uploads/uploadSlice";
import { addTypeProductTraining } from "../../../redux/slice/TrainingCreation/trainingCreationSlice";
import { getUrlDataEntreprise } from "../../../utils/getUrlData";
import Topbars from "../../Header/Topbars/Topbars";
import ValidateCandidateModalProduct from "../../ModalITgalaxy/ValidateCandidateModalProduct/ValidateCandidateModalProduct";
import { TopContainer } from "../productListEntreprise.styles";

export const ProductItemEntreprose = ({ item }) => {
  const dispatch = useDispatch();
  const token = getAccessToken();
  const [openModalRegister, setOpenModalRegister] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [creatorImage, setCreatorImage] = useState();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const getImageProfileFromS3 = async () => {
    const url = await dispatch(
      getURL({
        location: `candidats/${item.userId}/img-profil`,
      })
    );
    console.log("urlProfile", url);
    setCreatorImage(`${process.env.REACT_APP_S3_URL}/${url?.Contents[1].Key}`);
  };
  useEffect(() => {
    getImageProfileFromS3();
  }, [item]);

  useEffect(() => {
    getUrlDataEntreprise(item, setImageUrl, item.id, "image", dispatch);
  }, [imageUrl]);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <TopContainer className="itemprofil" id="Createprojet">
      <div style={{ display: "inline-flex", width: "10%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={imageUrl} width={120} height={100} alt="image-url" />
          <ReactStars count={5} edit={false} size={24} color="yellow" />
        </div>
        <div
          style={{
            marginLeft: "60%",
          }}
        >
          <p>{item?.title}</p>
          <p>{item?.description}</p>
          <b>
            {item.price}$-{item.duration}
          </b>
          {item.type === "APPLICATIONS" ? (
            <Button disabled style={{ backgroundColor: "red" }}>
              Application
            </Button>
          ) : item.type === "VIDEOSTRAINING" ? (
            <Button disabled style={{ backgroundColor: "blue" }}>
              Video Training
            </Button>
          ) : (
            <Button disabled style={{ backgroundColor: "green" }}>
              Formation par session
            </Button>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <img
          src={creatorImage}
          style={{ borderRadius: "15px" }}
          width={30}
          height={30}
          alt="creator-image"
        />

        <Button
          onClick={
            item.type === "APPLICATIONS"
              ? () => {
                  navigate(`/detailsAppEntreprise/${item.id}`);
                  dispatch(addTypeProductTraining("APPLICATIONS"));
                }
              : item.type === "VIDEOSTRAINING"
              ? () => {
                  navigate(`/detailsVideoTrainingEntreprise/${item.id}`);
                  dispatch(addTypeProductTraining("VIDEOSTRAINING"));
                }
              : () => {
                  navigate(`/detailsSessionTrainingEntreprise/${item.id}`);
                  dispatch(addTypeProductTraining("SESSIONTRAINING"));
                }
          }
        >
          Details
        </Button>
        <Button
          onClick={
            !token
              ? () => {
                  setOpenModalRegister(true);
                  setShowModal(false);
                }
              : () => {
                  setShowModal(true);
                }
          }
          style={{ marginLeft: "20%" }}
        >
          Buy
        </Button>
      </div>

      <ValidateCandidateModalProduct
        showModalPaiement={showModal}
        setShowModalPaiement={setShowModal}
        handleShowModal={handleShowModal}
        price={item.price}
      />
      {openModalRegister && (
        <Topbars openLogin={true} openRegister={false} loginToProducts={true} />
      )}
    </TopContainer>
  );
};
