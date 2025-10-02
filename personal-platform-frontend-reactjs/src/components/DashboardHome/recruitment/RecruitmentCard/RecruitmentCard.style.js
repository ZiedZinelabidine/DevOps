import styled from "styled-components";

export const RootStyle = styled.div`
  display: flex;
  width: 160px;
  height: 200px;
  border-radius: 12px;
  background: rgba(223, 223, 223, 0.1);
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 288px;
  height: 233px;
  gap: 11px;
`;

export const TypographyStyle = styled.p`
  padding-top: 60px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 17.6px;
  letter-spacing: -1px;
  text-align: center;
`;

export const ImageStyle = styled.div`
  width: 37.01px;
  height: 40px;
  margin-left: 50px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
`;
