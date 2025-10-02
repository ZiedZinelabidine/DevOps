import PropTypes from "prop-types";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: contain;
  opacity: ${(props) => (props.isLoaded ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const LoadingPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  opacity: ${(props) => (props.isLoaded ? 0 : 1)};
  transition: opacity 0.3s ease-in-out;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const OptimizedBackground = ({ src, alt = "Background Image", children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    // Add loading="eager" for LCP images
    img.loading = "eager";

    // Add fetchpriority="high" for critical images
    img.fetchPriority = "high";

    img.onload = () => {
      setIsLoaded(true);
      // Report LCP timing
      if (window.performance && window.performance.mark) {
        window.performance.mark("background-loaded");
      }
    };

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <BackgroundContainer>
      <LoadingPlaceholder isLoaded={isLoaded} />
      <BackgroundImage
        src={src}
        isLoaded={isLoaded}
        role="img"
        aria-label={alt}
      />
      {children}
    </BackgroundContainer>
  );
};

OptimizedBackground.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  children: PropTypes.node,
};

export default memo(OptimizedBackground);
