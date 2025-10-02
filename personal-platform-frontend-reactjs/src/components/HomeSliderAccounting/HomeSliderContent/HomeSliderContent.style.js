import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const ContainerStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-inline: 4%;
  padding-top: 150px;
  opacity: ${({ index, currentIndex }) => (index === currentIndex ? 1 : 0)};
  transition: opacity 3s ease-in-out;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  z-index: ${({ zIndex }) => zIndex};

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const StackStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  gap: ${(props) => props.spacing * 8}px;
  width: ${(props) => props.width};

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const ImageStyle = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
  border-radius: 10px;
  align-self: end;
  max-width: 800px;
  max-height: 700px;
  @media (max-width: 768px) {
    max-height: 300px;
  }
`;

export const TitleStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: #14171f;
  margin: 0px;
`;

export const BoxStyle = styled.div`
  display: flex;
  padding: 5px 8px 5px 8px;
  border-radius: ${(props) => props.radius};
  background: ${(props) => props.background};
  align-items: center;
  justify-content: center;

  p {
    font-family: Inter, sans-serif;
    font-size: 10px;
    font-weight: 800;
    line-height: 16px;
    text-align: center;
    color: ${(props) => props.color};
    margin-bottom: 0px;
  }
`;

export const TypographyStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 10px;
  font-weight: 800;
  line-height: 16px;
  text-align: left;
  color: #2684ff;
  margin-bottom: 0px;
`;

export const ImageBackground = styled.div`
  align-self: center;
  width: 440px;
  height: 100%;
  border-radius: 1000px 1000px 1000px 10px;
  background: #2684ff;
  box-shadow: 10px 10px 18px 0px #00000026;
`;

export const StyledHomeContentContainer = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;
