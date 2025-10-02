import { StackStyle } from "../HomeSliderContent.style";
import SliderCard from "../SliderCard/SliderCard";
import { BoxStyle, TitleStyle, TypographyStyle } from "./ThirdSlider.style";

function ThirdSlider({
  title,
  text,
  icon,
  style,
  isReverse,
  isColumn,
  isRight,
  alignSelf,
  isIcon,
}) {
  return (
    <SliderCard
      style={{
        alignSelf: alignSelf ?? "start",
        borderRadius: "18.36px",
        borderRight: isRight ? "5px solid #2684FF" : undefined,
        borderLeft: isRight ? "none" : undefined,
        ...style,
      }}
      borderColor={"#2684FF"}
    >
      <StackStyle
        style={{ alignItems: "center" }}
        spacing={3}
        direction={isColumn ? "column" : "row"}
      >
        {isIcon ? (
          <img src={icon} alt={`${text} icon`} />
        ) : (
          <BoxStyle>
            <img src={icon} alt={`${text} icon`} />
          </BoxStyle>
        )}

        <StackStyle
          spacing={0.75}
          style={{
            flexDirection: isReverse ? "column-reverse" : "column",
            alignItems: isColumn ? "center" : undefined,
          }}
        >
          <TitleStyle>{title}</TitleStyle>
          <TypographyStyle>{text}</TypographyStyle>
        </StackStyle>
      </StackStyle>
    </SliderCard>
  );
}

export default ThirdSlider;
