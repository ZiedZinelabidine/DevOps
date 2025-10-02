import HomeSliderText from "../HomeSliderText/HomeSliderText";
import { getHomeContent } from "./HomeSliderContent.helpers";
import {
  ContainerStyle,
  ImageBackground,
  ImageStyle,
  StackStyle,
  StyledHomeContentContainer,
} from "./HomeSliderContent.style";

function HomeSliderContent({
  content,
  active,
  isVisible,
  zIndex,
  index,
  currentIndex,
}) {
  const {
    backgroundImage,
    title,
    text,
    buttonLabel,
    id: contentId,
    buttonUrl,
  } = content;
  return (
    <ContainerStyle
      isVisible={isVisible}
      zIndex={zIndex}
      index={index}
      currentIndex={currentIndex}
    >
      <StackStyle width={"40%"}>
        <HomeSliderText
          title={title}
          text={text}
          buttonLabel={buttonLabel}
          buttonUrl={buttonUrl}
          active={active}
        />
      </StackStyle>
      <StackStyle width={"60%"} style={{ position: "relative" }}>
        {contentId === 3 ? (
          <ImageBackground>
            <ImageStyle
              src={backgroundImage}
              alt="hero"
              style={{ marginLeft: "-37px" }}
            />
          </ImageBackground>
        ) : (
          <ImageStyle
            width={contentId !== 1 ? "auto" : "534px"}
            height={contentId !== 1 ? "auto" : "534px"}
            src={backgroundImage}
            alt="hero"
          />
        )}
        <StyledHomeContentContainer>
          {getHomeContent(contentId)}
        </StyledHomeContentContainer>
      </StackStyle>
    </ContainerStyle>
  );
}

export default HomeSliderContent;
