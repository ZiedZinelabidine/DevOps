import { RootStyle } from "./SliderCard.style";

const SliderCard = ({ borderColor, style, children }) => {
  return (
    <RootStyle style={{ ...style }} borderColor={borderColor}>
      {children}
    </RootStyle>
  );
};

export default SliderCard;
