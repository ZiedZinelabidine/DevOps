import ShowModalVideo from "components/ModalITgalaxy/ShowModalVideo/ShowModalVideo";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FormProvider, useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  deleteVideo,
  getTitleVideo,
  getURL,
} from "../../../../redux/api/uploads/uploadSlice";
import { s3UrlToFile } from "../../../../utils/fileConvertion";
import {
  ContentFormContainer,
  FileInfo,
  PlusIcon,
  StyledDropzone,
  StyledGrid,
  VideoPreview,
  VideoWrapper,
  DeleteIcon,
} from "./VideoUpload.style";
import { Trash2 } from 'lucide-react';

/**
 * VideoUpload component
 *
 * Props:
 * - value: Array of video objects currently in the form (chapters[index].videos)
 * - onChange: Function to update the array of videos in the form
 * - inputObject: (Optional) object with fieldName or other metadata
 * - formMethods: form methods from react-hook-form's FormProvider
 */

const VideoUpload = ({
  id,
  index,
  edit,
  type,
  fieldName,
  setValue,
  formVideos,
}) => {
  const [fileName, setFileName] = useState(null);
  const [videoURL, setVideoURL] = useState(null);
  const [showModalVideo, setShowModalVideo] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [videosEdit, setVideosEdit] = useState([]);
  const dispatch = useDispatch();

  const formMethods = useFormContext({
    mode: "onChange",
  });

  const setUpVideos = async (index) => {
    let pathVideos;

    if (type === "VIDEOSTRAINING") {
      pathVideos = `products/videos_trainings/${id}/chapters/${index}/videos/`;
    } else {
      pathVideos = `products/applications/${id}/chapters/${index}/videos/`;
    }

    try {
      const listModules = await dispatch(getURL({ location: pathVideos }));

      return listModules.Contents || []; // Return an empty array if no contents are found
    } catch (error) {
      console.error("Error fetching data:", error);
      return []; // Return an empty array on error
    }
  };

  useEffect(() => {
    if (edit) {
      const fetchVideos = async () => {
        const updatedVideos = [];
        const videosModuleDetail = {}; // Initialize as an object

        // Fetch videos from the setup function
        const videosModule = await setUpVideos(index + 1);

        // Iterate through videos and process each videoModule
        videosModuleDetail[index] = await Promise.all(
          videosModule.map(async (obj, idx) => {
            const tags = await getTitleVideo(obj.Key);
            const title = tags || `Video ${idx}`;
            const pathVideo = `${process.env.REACT_APP_CDN_ITGALAXY}/${obj.Key}`;
          

            const parts = pathVideo.split("/");
            const name = parts[parts.length - 1];
            const videoUrltoFile = await s3UrlToFile(pathVideo, `${name}`);

            const videoFileObj = {
              path: videoUrltoFile?.file?.name,
              lastModified: videoUrltoFile?.file?.lastModified,
              lastModifiedDate:
                videoUrltoFile?.file?.lastModifiedDate.toISOString(),
              name: videoUrltoFile?.file?.name,
              size: videoUrltoFile?.file?.size,
              type: videoUrltoFile?.file?.type,
              webkitRelativePath: videoUrltoFile?.file?.webkitRelativePath,
            };

            const base64URL = videoUrltoFile.fileResult;

            const videoData = {
              videoUrl: pathVideo,
              title: title,
              titleVideo: title,
              base64URL,
              videoFile: videoFileObj,
            };
            updatedVideos.push(videoData);
            setValue(fieldName, updatedVideos); // update form data
          })
        );
      };
      fetchVideos();
    }
  }, [edit, index, setValue, fieldName]); // Add edit, index, setValue, and fieldName to the dependency array

  const handleSaveVideo = (videoData) => {
    // videoData should contain { titleVideo, descriptionVideo, videoFile, videoUrl, base64URL } etc.
    const updatedVideos = [...formVideos];

    if (isEdited && selectedVideoIndex !== null) {
      // Update existing video
      updatedVideos[selectedVideoIndex] = videoData;
    } else {
      // Add new video
      updatedVideos.push(videoData);
    }

    setValue(fieldName, updatedVideos); // update form data
    setShowModalVideo(false);
    setSelectedVideoIndex(null);
    setIsEdited(false);
  };

  const handleDeleteVideo = async (indexToDelete) => {

    const videoTodelete=formVideos[indexToDelete];
    const pathVideo = videoTodelete.videoUrl;
    const parts = pathVideo.split(`${process.env.REACT_APP_CDN_ITGALAXY}/`);
    const key = parts[1];

    await deleteVideo(key) ;

    const updatedVideos = formVideos.filter((_, index) => index !== indexToDelete);
    setValue(fieldName, updatedVideos); // update form data
  };

  const { isDragActive } = useDropzone({
    accept: ["video/*", "application/*"],
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file && (file.type.startsWith("video/") || file.type.startsWith("application/"))) {
        const reader = new FileReader();
        reader.onload = (e) => setVideoURL(e.target.result);
        reader.readAsDataURL(file);
        setFileName(file.name);
      } else {
        alert("Only video formats are allowed!");
      }
    },
  });

  return (
    <div>
      <FormProvider {...formMethods}>
        <small
          style={{ color: "#6c757d", marginBottom: "10px", display: "block" }}
        >
          Max 5 Videos per chapter, max size per video: 100MB.
        </small>
        <ContentFormContainer>
          <StyledGrid>
            {formVideos.map((video, index) => (
              <div key={index}>
                <VideoWrapper
                  className="ml-3"
                  onClick={() => {
                    setSelectedVideoIndex(index);
                    setShowModalVideo(true);
                    setIsEdited(true);
                  }}
                >
                  <VideoPreview src={video.videoUrl} controls />
                  <PlusIcon>
                    <div icon="fa fa-edit"></div>
                  </PlusIcon>
                  {/* Delete Button */}
                  <DeleteIcon onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering onClick for VideoWrapper
                    handleDeleteVideo(index); // Call delete function
                  }}>
                    <Trash2 color="white" size={16} /> {/* Lucide Trash Icon */}                  </DeleteIcon>
                </VideoWrapper>
              </div>
            ))}
            {formVideos.length < 5 && (
              <div className="col">
                <StyledDropzone
                  isActive={isDragActive}
                  onClick={() => {
                    setIsEdited(false);
                    setSelectedVideoIndex(null);
                    setShowModalVideo(true);
                  }}
                >
                  {videoURL ? (
                    <VideoPreview src={videoURL} controls />
                  ) : (
                    <div icon="fa fa-plus"></div>
                  )}
                </StyledDropzone>
              </div>
            )}

            {showModalVideo && (
              <ShowModalVideo
                isEdit={isEdited}
                selectedVideo={isEdited && selectedVideoIndex !== null ? formVideos[selectedVideoIndex] : null}
                show={showModalVideo}
                setShow={setShowModalVideo}
                closeModal={() => setShowModalVideo(false)}
                onSave={handleSaveVideo} // Callback to save the video
              />
            )}
          </StyledGrid>
        </ContentFormContainer>
      </FormProvider>

      {fileName && <FileInfo>Uploaded: {fileName}</FileInfo>}
    </div>
  );
};

export default VideoUpload;
          