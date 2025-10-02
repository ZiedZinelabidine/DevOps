import { CustomButton } from "./styledComponant";

export default function PrimaryButtunComponant({
  titleBtn,
  colorTitleBtn,
  colorBtn,
  widthBtn,
  heightBtn,
  borderBtn,
  event,
  radius,
  sizeTitle,
}) {
  return (
    <CustomButton
      onClick={event}
      style={{
        color: colorTitleBtn,
        backgroundColor: colorBtn,
        width: widthBtn,
        height: heightBtn,
        border: borderBtn,
        borderRadius: radius,
        fontSize: sizeTitle,
      }}
    >
      {titleBtn}
    </CustomButton>
  );
}
