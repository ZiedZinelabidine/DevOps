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
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-inline: 4%;
  transition: visibility 0s 0.01s, opacity 0.1s ease, transform 0.3s ease;
  visibility:  visible;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
  }
`;

export const StackStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  gap: ${(props) => props.spacing * 8}px;
  width: ${(props) => props.width};

  @media (max-width: 1280px) {
    top: ${(props) => props.top} !important;
  }

  @media (max-width: 1024px) {
    width: 100% !important;
    align-items: center;
    text-align: center;

    &:first-child {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column; // Stack items vertically on smaller screens
    gap: ${(props) => props.spacing * 4}px; // Reduce gap on smaller screens
  }

  @media (max-width: 480px) {
    display: none;
    gap: ${(props) =>
      props.spacing * 2}px; // Further reduce gap on very small screens
  }
`;

export const ImageStyle = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
  border-radius: 10px;
  align-self: end;
  max-width: 800px;
  max-height: 600px;

  @media (max-width: 1440px) {
    width: ${(props) => !props.hide && "500px"};
    height: ${(props) => !props.hide && "400px"};
    visibility: ${(props) => (props.hide ? "hidden" : "visible")};
  }

  @media (max-width: 1024px) {
    display: none; // Hide image on tablets
  }

  @media (max-width: 768px) {
    width: ${(props) => !props.hide && "350px"}; // Set width for small screens
    height: ${(props) =>
      !props.hide && "300px"}; // Set height for small screens
  }

  @media (max-width: 480px) {
    width: ${(props) =>
      !props.hide && "250px"}; // Further adjust size for mobile
    height: ${(props) => !props.hide && "200px"};
    border-radius: 5px; // Smaller border radius for mobile
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
  @media (max-width: 768px) {
    font-size: 12px;
  }
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
  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

export const ImageBackground = styled.div`
  align-self: center;
  width: 440px;
  height: 100%;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const StyledHomeContentContainer = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 220px;
  left: 80px;
  display: flex;
  gap: 1rem;
  z-index: 1000;

  @media (max-width: 1280px) {
    bottom: -100px;
  }

  @media (max-width: 1024px) {
    position: relative;
    bottom: 100px;
    left: auto;
    width: 100%;
    justify-content: center;
    margin-top: 40px;
    padding: 0 20px;
    /* flex-direction: column;
    align-items: center; */
  }
  @media (max-width: 480px) {
    bottom: 0;
  }
`;

export const ButtonStyle = styled.button`
  width: 320px;
  height: 75px;
  padding: 15px 29px;
  border-radius: 5px;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24.2px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 100%;
    height: 60px;
    font-size: 18px;
  }

  /* Default styling for "Get Started" button */
  ${(props) =>
    !props.isServices &&
    `
    background: ${props.active === "FREELANCERS" ? "#FFFFFF" : "#14171f"};
    color: ${props.active === "FREELANCERS" ? "#14171f" : "#FFFFFF"};
    border: none;
  `}

  /* Special styling for Services button */
  ${(props) =>
    props.isServices &&
    `
    background: ${props.active === "FREELANCERS" ? "black" : "white"};
    border: 1px solid ${props.active === "FREELANCERS" ? "white" : "black"};
    color: ${props.active === "FREELANCERS" ? "white" : "black"};
  `}

  &:hover {
    transform: translateY(-2px);
  }

  img {
    margin-left: 50px;
    object-fit: contain;

    /* Make white arrow bigger */
    ${(props) =>
      ((props.active === "FREELANCERS" && props.isServices) ||
        (props.active !== "FREELANCERS" && !props.isServices)) &&
      `
      width: 48px !important;
      height: 48px !important;
    `}

    /* Keep black arrow at original size */
    ${(props) =>
      ((props.active === "FREELANCERS" && !props.isServices) ||
        (props.active !== "FREELANCERS" && props.isServices)) &&
      `
      width: 24px !important;
      height: 24px !important;
    `}

    @media (max-width: 1024px) {
      width: 20px !important;
      height: 20px !important;
      margin-left: 20px;
    }
  }
`;

export const ButtonText = styled.span`
  text-align: center;
  font-size: 25px;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;
