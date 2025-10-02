import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import {
  FileInfo,
  StyledDropzone,
  VideoPreview,
} from "./VideoUploadFile.style";

const VideoUploadFile = (props) => {
  const [fileName, setFileName] = useState(null);
  const [videoURL, setVideoURL] = useState(null); // State for video URL
  const [file, setFile] = useState(null); // State for video URL
  const dispatch = useDispatch();
  const sendVideoUrl = () => {
    props.sendVideoUrlToParent(videoURL);
  };
  const sendVideoFile = () => {
    props.sendVideoFileToParent(file);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "video/*",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file.type.startsWith("video/")) {
        const reader = new FileReader();
        reader.onload = (e) => setVideoURL(e.target.result);
        reader.readAsDataURL(file);
        setFileName(file.name);
        setFile(file);
      } else {
        alert("Only video formats are allowed!");
      }
    },
  });

  useEffect(() => {
    sendVideoUrl();
  }, [videoURL]);
  useEffect(() => {
    sendVideoFile();
  }, [file]);
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <StyledDropzone isActive={isDragActive}>
        {videoURL ? (
          <VideoPreview src={videoURL} controls />
        ) : (
          <>
            Faites glisser et déposez une vidéo ici <br />
            ou cliquez pour parcourir
          </>
        )}
      </StyledDropzone>
      {fileName && <FileInfo>Uploaded: {fileName}</FileInfo>}
    </div>
  );
};

export default VideoUploadFile;
