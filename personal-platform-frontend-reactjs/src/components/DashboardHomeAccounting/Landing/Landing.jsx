import { useIntl } from "react-intl";
import {
  ButtonStyle,
  ContainerStyle,
  IconStyle,
  ImageStyle,
  RootStyle,
  StackStyle,
  TitleStyle,
  TypographyStyle,
} from "./Landing.style";

const StarsIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Burst-pucker.svg`;
const BackgroundIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/background.svg`;
const gradientIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/gradient-glass.webp`;
const image = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/portrait-confident-bearded.png`;

function Landing() {
  const intl = useIntl();
  const isMobile = window.innerWidth <= 768;

  return (
    <RootStyle>
      <IconStyle top={0} right={20}>
        <img src={BackgroundIcon} alt="background" />
      </IconStyle>
      <ContainerStyle>
        <IconStyle top={5} right={73}>
          <img src={StarsIcon} alt="stars" />
         </IconStyle>
        <StackStyle>
          <TitleStyle>
           {intl.formatMessage({ id: "landing.title" })}
          </TitleStyle>
          <TypographyStyle>
            {intl.formatMessage({ id: "landing.description" })}
          </TypographyStyle>
          <ButtonStyle>
           {intl.formatMessage({ id: "landing.button" })}
          </ButtonStyle>
        </StackStyle>
        <ImageStyle src={image} isMobile={isMobile} alt="landing-image" />
        <IconStyle>
          <img src={gradientIcon} width="439px" height="356px" alt="gradient" />
        </IconStyle>
      </ContainerStyle>
    </RootStyle>
  );
}

export default Landing;
