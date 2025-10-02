import {
  RootStyle,
  TitleStyle,
  TypographyStyle,
} from "./HomeSliderText.style";

function HomeSliderText({ title, text, active }) {
  return (
    <RootStyle>
      <TitleStyle active={active}>{text}</TitleStyle>
    </RootStyle>
  );
}

export default HomeSliderText;
