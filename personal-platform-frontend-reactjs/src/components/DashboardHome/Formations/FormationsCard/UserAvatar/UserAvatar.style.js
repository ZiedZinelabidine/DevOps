import { Image } from "react-bootstrap";
import styled from "styled-components";

export const CustomAvatarStyle = styled(Image)`
  width: 40px;
  height: 40px;
`;

export const NameStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #101828;
  margin-bottom: 0;
`;

export const SubtitleStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #667085;
  margin-bottom: 0;
`;

export const PriceStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 31.47px;
  text-align: right;
  color: #2684ff;
`;
