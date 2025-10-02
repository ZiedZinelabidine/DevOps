import { useEffect, useState } from "react";
import { Col, Form, Modal, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fileToBase64 } from "utils/fileConvertion";
import { getURL, s3Upload } from "../../../../redux/api/uploads/uploadSlice";
import { InputContainer, StyledSubmitEditProfileButton } from "./styled"; // Assuming you have styled components available

const EditCVProfileCandidat = ({
  data,
  editModalProfileCVOpen,
  onSaveChanges,
  onClose,
}) => {
  const { register, handleSubmit, setValue } = useForm();
  const [previewCV, setPreviewCV] = useState(); // State to hold the preview image URL
  const [selectedFile, setSelectedFile] = useState(null); // State to hold the selected file
  const [error, setError] = useState(""); // State to hold error messages
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); // Loading state

  const getUrlData = async () => {
    const url = await dispatch(
      getURL({
        location: `candidats/${data.id}/profil/cv`,
      })
    );
    if (url.Contents) {
      setPreviewCV(
        `${process.env.REACT_APP_S3_URL}/` +
          url?.Contents?.map((url) => `${url?.Key}`)[0]
      );
    }
  };

  useEffect(() => {
    getUrlData();
  }, []);

  // Handle changes to the file input
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setError(""); // Reset error state

    if (file) {
      // Check if the file name contains '#'
      if (file.name.includes("#")) {
        setError(
          "The file name cannot contain '#'. Please rename the file and try again."
        );
        setPreviewCV(null); // Reset preview if there's an error
        setSelectedFile(null); // Reset selected file
        return; // Exit the function
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewCV(reader.result); // Set preview image URL
      };
      reader.readAsDataURL(file);
      setSelectedFile(file); // Set selected file
    } else {
      console.error("No file selected or the selected file is invalid");
      setError("No file selected or the selected file is invalid."); // Set error message
    }
  };

  const onSubmit = async () => {
    if (selectedFile) {

      try {  
        setLoading(true);
        const formData = new FormData();
        formData.append("profileCV", selectedFile);
        await dispatch(
          s3Upload({
            file: selectedFile,
            type: "cv/",
            base64URL: previewCV,
            location: `candidats/${data?.id}/profil/`,
            onepart: true,        
          })
        );
        getUrlData();
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
      show={editModalProfileCVOpen}
      onHide={onClose}
      size="xl"
      centered={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit CV</Modal.Title>
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
                }}
              >
                {previewCV && (
                  <iframe
                    src={previewCV}
                    width="100%"
                    height="800px" // Adjust height as needed
                    title="CV Preview"
                    style={{ border: "none" }}
                  />
                )}
              </InputContainer>
            </Col>
            <Col md={12}>
              <Form.Group controlId="profileImage">
                <Form.Label>Choose your CV</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleFileChange}
                  accept="application/pdf" // Correct accept attribute for PDF files
                />
                {error && <p style={{ color: "red" }}>{error}</p>}{" "}
                {/* Display error message */}
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

export default EditCVProfileCandidat;
