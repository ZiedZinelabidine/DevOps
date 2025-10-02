
import { useIntl } from "react-intl";
import HomeSliderText from "../HomeSliderText/HomeSliderText";
import {
  ContainerStyle,
  ImageBackground,
  ImageStyle,
  StackStyle,
} from "./HomeSliderContent.style";
const FirstFreeLancerSliderImagePng = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/sliderHome4.png`;


const HomeSliderContent = () => {
    const intl = useIntl();
    const content =   {
      backgroundImage: FirstFreeLancerSliderImagePng,
      titleId: "slider.freelance.slide2_title",
      text: "Une plateforme pour mettre en oeuvre vos compétences",
      buttonLabelId: "slider.get_started",
      id: 1,
      buttonUrl: "/choix",
    };

    const { backgroundImage, title, text, id: contentId } = content;

    return (
      <>
        <ContainerStyle>
          <StackStyle width={"70%"}>
            <HomeSliderText title={title} text={text} active={"FREELANCERS"} />
          </StackStyle>
          <StackStyle width={"100%"}>
            <ImageStyle
              active={"FREELANCERS"}
              src={backgroundImage}
              alt="hero"
              style={{
                    opacity: 1 ,
                  }}
                  loading="eager"
            />
          </StackStyle>
        </ContainerStyle>
      </>
    );
  }
export default HomeSliderContent;
