import styled from "styled-components";
const fontFamily = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/TypoITgalaxy/FontITgalaxy`;

export const ContainerButtonHome = styled.div`
  display: flex;
  width: 450px;
`;
export const CustomButton = styled.button`
  ${fontFamily}
  margin: 0 auto;
`;
