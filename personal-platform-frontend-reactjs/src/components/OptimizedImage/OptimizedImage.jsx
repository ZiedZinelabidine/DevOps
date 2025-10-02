import PropTypes from "prop-types";
import { memo, useState } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #f0f0f0;
`;

const StyledPicture = styled.picture`
  width: 100%;
  height: 100%;
  display: block;
`;

const StyledImage = styled.img`
  width: 100%;
  object-fit: contain;
  display: block;
  opacity: ${props => props.isLoaded ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
`;

const BlurredPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  opacity: ${props => props.isLoaded ? 0 : 1};
  transition: opacity 0.3s ease-in-out;
`;

const OptimizedImage = ({
  src,
  webpSrc,
  fallbackSrc,
  alt,
  loading = "lazy",
  fetchPriority = "auto",
  sizes = "100vw",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    // Report LCP timing for important images
    if (fetchPriority === "high" && window.performance && window.performance.mark) {
      window.performance.mark("image-loaded");
    }
  };

  return (
    <ImageContainer>
      <BlurredPlaceholder isLoaded={isLoaded} />
      <StyledPicture>
        {webpSrc && (
          <source
            srcSet={webpSrc}
            type="image/webp"
            sizes={sizes}
          />
        )}
        <source
          srcSet={src}
          type="image/png"
          sizes={sizes}
        />
        <StyledImage
          src={fallbackSrc || src}
          alt={alt}
          loading={loading}
          fetchpriority={fetchPriority}
          onLoad={handleLoad}
          isLoaded={isLoaded}
          decoding="async"
          {...props}
        />
      </StyledPicture>
    </ImageContainer>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  webpSrc: PropTypes.string,
  fallbackSrc: PropTypes.string,
  alt: PropTypes.string.isRequired,
  loading: PropTypes.oneOf(["lazy", "eager"]),
  fetchPriority: PropTypes.oneOf(["high", "low", "auto"]),
  sizes: PropTypes.string,
};

export default memo(OptimizedImage);
