import styled from "styled-components";

export const RootStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-top: 400px;
`;

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 517px;
  background: #14171f;
  position: relative;
  align-items: center;

  @media (max-width: 1024px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const StackStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  gap: 24px;
  padding-left: 80px;
  justify-content: center;
  z-index: 11;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 20px;
  }
  @media (max-width: 768px) {
    padding: 20px;
    width: 74%;
  }
`;

export const TitleStyle = styled.p`
  width: 337px;
  font-family: Inter, sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 58.09px;
  text-align: left;
  color: #ffffff;
`;

export const TypographyStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 22px;
  font-weight: 300;
  line-height: 26.63px;
  text-align: left;
  color: #ffffff;
`;

export const ButtonStyle = styled.button`
  height: 40px;
  width: 22.5%;
  padding: 10px 16px 10px 16px;
  gap: 8px;
  border-radius: 5px;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px 0px #1018280d;
  background: #f9fafb;
  min-width: 135px;

  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: #14171f;
`;

export const ImageStyle = styled.img`
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  width: ${(props) => (props.isMobile ? "300px" : "639px")};
  height: ${(props) => (props.isMobile ? "50" : "675px")};
  position: absolute;
  bottom: 0;
  right: ${(props) => (props.isMobile ? "-3%" : "18%")};
  z-index: 10;
`;

export const IconStyle = styled.div`
  right: ${(props) => props.right ?? 1}%;
  top: ${(props) => props.top}%;
  position: absolute;
  z-index: 2;
`;
