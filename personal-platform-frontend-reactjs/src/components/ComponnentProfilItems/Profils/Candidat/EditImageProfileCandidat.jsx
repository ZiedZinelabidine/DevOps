import { useEffect, useState } from "react";
import { Col, Form, Modal, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUpdatePhotoMutation } from "../../../../redux/api/api-chat-mongodb/api-chat-mongodbAPI";
import { getURL, s3Upload } from "../../../../redux/api/uploads/uploadSlice";
import { fileToBase64 } from "../../../../utils/fileConvertion";
import {
  InputContainer,
  StyledLeftSideBarImage,
  StyledProfilImgCircle,
  StyledSubmitEditProfileButton,
} from "./styled";

const photoavatar = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/photoavatar.png`;

const EditImageProfilCandidat = ({
  data,
  editModalProfilePictureOpen,
  onClose,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit } = useForm();

  const [imageUrl, setImageUrl] = useState(null);
  const [previewImage, setPreviewImage] = useState(photoavatar);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [updatePhoto] = useUpdatePhotoMutation();

  useEffect(() => {
    fetchImageUrl();
  }, [data?.id]);

  const fetchImageUrl = async () => {
    try {
      const url = await dispatch(
        getURL({
          location: `candidats/${data?.id}/profil/img-profil/`,
        })
      );

      if (url.Contents && url.Contents.length > 0 && url.Contents[0].Key) {
        setPreviewImage(process.env.REACT_APP_URL_BUCKET + url.Contents[0].Key);
      } else {
        setPreviewImage(photoavatar);
      }
    } catch (error) {
      console.error("Error fetching image URL:", error);
      setPreviewImage(photoavatar);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageUrl(
        process.env.REACT_APP_URL_BUCKET +
          `candidats/${data?.id}/profil/img-profil/` +
          file.name
      );

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
  };

  const onSubmit = async () => {
    if (selectedFile) {
      setLoading(true);
      try {
        await dispatch(
          s3Upload({
            file: selectedFile,
            type: "img-profil/",
            location: `candidats/${data?.id}/profil/`,
          })
        );
        await updatePhoto({ _id: data?.chatid, newPhotoRef: imageUrl });
      } catch (error) {
        console.error(
          "Error during upload or updating photo reference:",
          error
        );
      } finally {
        setLoading(false);
        onClose();
        window.location.href = `/profil`;
      }
    } else {
      console.warn("No file selected for upload");
    }
  };

  return (
    <Modal
      show={editModalProfilePictureOpen}
      onHide={onClose}
      size="s"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={12}>
              <InputContainer
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  paddingTop: "10px",
                }}
              >
                <StyledLeftSideBarImage style={{ position: "relative" }}>
                  <StyledProfilImgCircle src={previewImage} />
                </StyledLeftSideBarImage>
              </InputContainer>
            </Col>
            <Col md={12}>
              <Form.Group controlId="profileImage">
                <Form.Control
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </Form.Group>
            </Col>
          </Row>
          <StyledSubmitEditProfileButton
            variant="primary"
            type="submit"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            {loading ? (
              <>
                <Spinner animation="border" size="sm" />{" "}
                {/* Spinner for loading indicator */}
                <span style={{ marginLeft: "5px" }}>Updating...</span>
              </>
            ) : (
              "Save Changes"
            )}
          </StyledSubmitEditProfileButton>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditImageProfilCandidat;
