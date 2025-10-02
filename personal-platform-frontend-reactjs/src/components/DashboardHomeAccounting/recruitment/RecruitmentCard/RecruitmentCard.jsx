import {
  ContainerStyle,
  ImageStyle,
  RootStyle,
  TypographyStyle,
} from "./RecruitmentCard.style";
const image = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/recImage.png`;

function RecruitmentCard({ message }) {
  return (
    <RootStyle>
      <ContainerStyle>
        <TypographyStyle>{message}</TypographyStyle>
        <ImageStyle src={image}></ImageStyle>
      </ContainerStyle>
    </RootStyle>
  );
}

export default RecruitmentCard;
