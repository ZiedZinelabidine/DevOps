import {
  BoxStyle,
  StackStyle,
  TypographyStyle,
} from "../../HomeSliderContent.style";
const FilePresentIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/file-present.svg`;

function AddAuth() {
  return (
    <StackStyle
      style={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
      direction={"row"}
    >
      <StackStyle spacing={1} direction={"row"}>
        <BoxStyle radius={"5px"} background={"#22C55E1A"} color={"#16A34A"}>
          <p>Done</p>
        </BoxStyle>
        <BoxStyle radius={"5px"} background={"#A855F71A"} color={"#9333EA"}>
          <p>To Verify</p>
        </BoxStyle>
      </StackStyle>
      <StackStyle
        direction={"row"}
        style={{ alignItems: "center" }}
        spacing={1}
      >
        {FilePresentIcon}
        <TypographyStyle>4</TypographyStyle>
      </StackStyle>
    </StackStyle>
  );
}

export default AddAuth;
