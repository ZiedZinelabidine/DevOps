import { StyledLabel } from "components/DashboardTrainingComponnents/TrainerComponnents/TrainerForm/TraininerForm.style";
import VideoUploadFile from "components/DashboardTrainingComponnents/TrainerComponnents/VideoUpload/VideoUploadFile.jsx";
import { VideoPreview } from "components/DashboardTrainingComponnents/TrainerComponnents/VideoUpload/VideoUploadFile.style.js";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import GenericInput from "../../Inputs/GenericInput/GenericInput.jsx";
import { formConfig } from "./ShowModalVideo.constants.js";

import {
  addVideoTraining,
  editVideoTraining,
} from "../../../redux/slice/TrainingCreation/trainingCreationSlice.js";

const ShowModalVideo = ({
  show,
  closeModal,
  setShow,
  isEdit,
  selectedVideo,
  onSave,
}) => {
  const dispatch = useDispatch();
  const [showprofils, setshowprofils] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [videoUrl, setVideoURL] = useState("");
  const [videoFile, setVideoFile] = useState("");

  const reciveVideoURl = (data) => {
    setVideoURL(data);
  };
  const reciveVideoFile = (data) => {
    setVideoFile(data);
  };
  const formMethods = useForm({
    mode: "onChange",
    shouldFocusError: true,
  });

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      if (!file || !(file instanceof Blob)) {
        return reject(new TypeError("Parameter must be a valid Blob or File."));
      }

      const reader = new FileReader();
      reader.readAsDataURL(file); // This will read the file as a base64 string

      reader.onload = () => {
        // Resolve with the Base64 string
        resolve(reader.result); // Now reader.result contains the Base64 data URL
      };

      reader.onerror = (error) => {
        reject(error); // Reject if there's an error
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const base64URL = await fileToBase64(videoFile);

    // Create object URL for video preview
    const videoPreviewUrl =
      videoUrl ||
      (videoFile ? URL.createObjectURL(videoFile) : selectedVideo?.videoUrl);

    const videoData = !isEdit
      ? {
          ...formMethods.getValues(),
          videoUrl: videoPreviewUrl,
          title: formMethods.getValues("titleVideo"),
          base64URL,
          videoFile: videoFile
            ? {
                path: videoFile?.path,
                lastModified: videoFile?.lastModified,
                lastModifiedDate: videoFile?.lastModifiedDate.toISOString(),
                name: videoFile?.name,
                size: videoFile?.size,
                type: videoFile?.type,
                webkitRelativePath: videoFile?.webkitRelativePath,
              }
            : null,
        }
      : {
          ...formMethods.getValues(),
          videoUrl: selectedVideo?.videoUrl,
          title: formMethods.getValues("titleVideo"),
          base64URL,
          videoFile: videoFile
            ? {
                path: videoFile?.path,
                lastModified: videoFile?.lastModified,
                lastModifiedDate: videoFile?.lastModifiedDate.toISOString(),
                name: videoFile?.name,
                size: videoFile?.size,
                type: videoFile?.type,
                webkitRelativePath: videoFile?.webkitRelativePath,
              }
            : selectedVideo?.videoFile,
        };

    // Call onSave with the video data
    onSave(videoData);

    // Dispatch to Redux based on whether we're editing or adding
    !isEdit
      ? dispatch(addVideoTraining(videoData))
      : dispatch(editVideoTraining(videoData));

    setShow(false);
  };

  return (
    <Modal show={show} onHide={closeModal} centered>
      <Modal.Header>
        <Modal.Title>{isEdit ? "Update video" : "Add new video"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormProvider {...formMethods}>
          <StyledLabel>Video title</StyledLabel>
          <GenericInput
            inputObject={{
              ...formConfig.title,
            }}
            disabledForm={false}
          />
          {isEdit && (
            <div onClick={() => setIsDeleted(true)} icon="fa fa-trash"></div>
          )}
          <StyledLabel>Upload Video</StyledLabel>
          {!selectedVideo?.videoUrl || isDeleted ? (
            <VideoUploadFile
              sendVideoUrlToParent={reciveVideoURl}
              sendVideoFileToParent={reciveVideoFile}
            />
          ) : (
            <VideoPreview src={selectedVideo?.videoUrl} controls />
          )}
        </FormProvider>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Annuler
        </Button>
        <Button
          variant="primary"
          disabled={!formMethods.getValues("titleVideo") && !videoUrl}
          onClick={handleSubmit}
        >
          Valider
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ShowModalVideo;
