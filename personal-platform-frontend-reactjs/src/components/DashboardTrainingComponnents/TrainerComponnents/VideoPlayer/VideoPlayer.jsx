import { useRef, useState } from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  position: relative;
  max-width: 800px;
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
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 32px;
  color: white;
  display: ${(props) => (props.isPlaying ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
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

const OptionsMenu = styled.div`
  position: absolute;
  bottom: 40px;
  right: 0;
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

const BackButton = styled.div`
  color: white;
  padding: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [submenu, setSubmenu] = useState(null); // Track which submenu is open

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

  const toggleOptions = () => {
    // Reset submenu only if we are closing the menu
    if (showOptions) {
      setSubmenu(null);
    }
    setShowOptions(!showOptions);
  };

  const openSubmenu = (menu) => {
    setSubmenu(menu);
  };

  const changePlaybackRate = (rate) => {
    videoRef.current.playbackRate = rate;
    setShowOptions(false); // Close options menu after selection
    setSubmenu(null); // Reset submenu
  };

  const changeQuality = (qualitySrc) => {
    videoRef.current.src = qualitySrc; // Set the new quality source
    videoRef.current.load(); // Reload video to apply new source
    setShowOptions(false); // Close options menu after selection
    setSubmenu(null); // Reset submenu
  };

  return (
    <VideoContainer>
      <VideoElement
        ref={videoRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        controls={false} // Custom controls
      />
      <OverlayCenterPlayButton onClick={togglePlayPause} isPlaying={isPlaying}>
        ►
      </OverlayCenterPlayButton>
      <ControlsOverlay>
        <ControlButton onClick={() => console.log("Previous")}>
          ⏮️
        </ControlButton>
        <ControlButton onClick={togglePlayPause}>
          {isPlaying ? "❚❚" : "►"}
        </ControlButton>
        <ControlButton onClick={() => console.log("Next")}>⏭️</ControlButton>
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
          {isMuted ? "🔇" : "🔈"}
        </ControlButton>
        <ControlButton onClick={toggleFullscreen}>⛶</ControlButton>
        <ControlButton onClick={toggleOptions}>
          ⋮
          <OptionsMenu show={showOptions}>
            {submenu === null && (
              <>
                <MenuItem onClick={() => openSubmenu("speed")}>
                  Playback Speed
                </MenuItem>
                <MenuItem onClick={() => openSubmenu("quality")}>
                  Video Quality
                </MenuItem>
              </>
            )}
            {submenu === "speed" && (
              <>
                <BackButton onClick={() => setSubmenu(null)}>← Back</BackButton>
                <MenuItem onClick={() => changePlaybackRate(0.5)}>
                  0.5x Speed
                </MenuItem>
                <MenuItem onClick={() => changePlaybackRate(1)}>
                  1x Speed (Normal)
                </MenuItem>
                <MenuItem onClick={() => changePlaybackRate(1.5)}>
                  1.5x Speed
                </MenuItem>
                <MenuItem onClick={() => changePlaybackRate(2)}>
                  2x Speed
                </MenuItem>
              </>
            )}
            {submenu === "quality" && (
              <>
                <BackButton onClick={() => setSubmenu(null)}>← Back</BackButton>
                <MenuItem onClick={() => changeQuality("/path/to/480p.mp4")}>
                  480p Quality
                </MenuItem>
                <MenuItem onClick={() => changeQuality("/path/to/720p.mp4")}>
                  720p Quality
                </MenuItem>
                <MenuItem onClick={() => changeQuality("/path/to/1080p.mp4")}>
                  1080p Quality
                </MenuItem>
              </>
            )}
          </OptionsMenu>
        </ControlButton>
      </ControlsOverlay>
    </VideoContainer>
  );
};

export default VideoPlayer;
