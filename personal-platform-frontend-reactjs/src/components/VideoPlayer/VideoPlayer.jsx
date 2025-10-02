import {
  FastForward,
  Maximize,
  Pause,
  Play,
  Rewind,
  Settings,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  margin: 20px auto;
`;

const VideoElement = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

const OverlayCenterPlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: none;
  border-radius: 4px;
  width: 60px;
  height: 60px;
  font-size: 32px;
  color: black;
  display: ${(props) => (props.isPlaying ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    color: white;
  }
`;

const ControlsOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  margin: 0 5px;
  position: relative;

  &:hover {
    color: #ccc;
  }
`;

const ProgressBar = styled.input`
  flex-grow: 1;
  appearance: none;
  height: 4px;
  background: #555;
  border-radius: 2px;
  margin: 0 10px;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }
`;

const TimeDisplay = styled.span`
  color: #fff;
  font-size: 0.9rem;
  margin: 0 10px;
`;

const PlaybackSpeedMenu = styled.div`
  position: absolute;
  bottom: 40px;
  right: 10px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 4px;
  padding: 10px;
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 1;
`;

const MenuItem = styled.div`
  color: white;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const VideoPlayer = ({ src, loading }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleProgressChange = (e) => {
    const time = (e.target.value / 100) * duration;
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const changePlaybackRate = (rate) => {
    videoRef.current.playbackRate = rate;
    setShowSpeedMenu(false); // Close speed menu after selection
  };

  return (
  src && (
    <VideoContainer>
      {loading && <Spinner />}

      <VideoElement
        ref={videoRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        controls={false} // Custom controls
      />
      <OverlayCenterPlayButton onClick={togglePlayPause} isPlaying={isPlaying}>
        <Play size={32} />
      </OverlayCenterPlayButton>
      <ControlsOverlay>
        <ControlButton onClick={() => console.log("Previous")}>
          <Rewind size={20} />
        </ControlButton>
        <ControlButton onClick={togglePlayPause}>
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </ControlButton>
        <ControlButton onClick={() => console.log("Next")}>
          <FastForward size={20} />
        </ControlButton>
        <ProgressBar
          type="range"
          min="0"
          max="100"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleProgressChange}
        />
        <TimeDisplay>
          {Math.floor(currentTime / 60)}:
          {Math.floor(currentTime % 60)
            .toString()
            .padStart(2, "0")}{" "}
          / {Math.floor(duration / 60)}:
          {Math.floor(duration % 60)
            .toString()
            .padStart(2, "0")}
        </TimeDisplay>
        <ControlButton onClick={toggleMute}>
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </ControlButton>
        <ControlButton onClick={toggleFullscreen}>
          <Maximize size={20} />
        </ControlButton>
        <ControlButton onClick={() => setShowSpeedMenu(!showSpeedMenu)}>
          <Settings size={20} />
          <PlaybackSpeedMenu show={showSpeedMenu}>
            <MenuItem onClick={() => changePlaybackRate(0.5)}>
              0.5x Speed
            </MenuItem>
            <MenuItem onClick={() => changePlaybackRate(1)}>
              1x Speed (Normal)
            </MenuItem>
            <MenuItem onClick={() => changePlaybackRate(1.5)}>
              1.5x Speed
            </MenuItem>
            <MenuItem onClick={() => changePlaybackRate(2)}>2x Speed</MenuItem>
          </PlaybackSpeedMenu>
        </ControlButton>
      </ControlsOverlay>
    </VideoContainer>
  )
);

};

export default VideoPlayer;
