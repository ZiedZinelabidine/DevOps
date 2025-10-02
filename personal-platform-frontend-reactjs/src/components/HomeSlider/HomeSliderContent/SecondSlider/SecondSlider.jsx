import { BoxStyle, StackStyle, TitleStyle } from "../HomeSliderContent.style";
const VerticalDotIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/dot-vertical.svg`;

function SecondSlider({ isTask, title, children }) {
  return (
    <StackStyle spacing={1.5}>
      <StackStyle
        style={{ alignItems: "center" }}
        spacing={isTask ? 15 : 3}
        direction={"row"}
      >
        <StackStyle spacing={1.5} direction={"row"}>
          <TitleStyle>{title}</TitleStyle>
          {isTask && (
            <BoxStyle
              radius={"16px"}
              background={"#EC48991A"}
              color={"#DB2777"}
            >
              <p>3</p>
            </BoxStyle>
          )}
        </StackStyle>
        <img src={VerticalDotIcon} />
      </StackStyle>
      {!!children && children}
    </StackStyle>
  );
}

export default SecondSlider;
