import CustomMultiAvatar from "../../../CustomAvatar/CustomMultiAvatar";
import {
  BoxStyle,
  StackStyle,
  TypographyStyle,
} from "../../HomeSliderContent.style";
const TaskIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/check-task.svg`;

function Organization() {
  return (
    <StackStyle spacing={1.5}>
      <StackStyle spacing={1} direction={"row"}>
        <BoxStyle radius={"5px"} background={"#EC48991A"} color={"#DB2777"}>
          <p>Development</p>
        </BoxStyle>
        <BoxStyle radius={"5px"} background={"#2684FF1A"} color={"#2684FF"}>
          <p>Design</p>
        </BoxStyle>
      </StackStyle>
      <StackStyle style={{ justifyContent: "space-between" }} direction={"row"}>
        <CustomMultiAvatar avatarNumber={15} maxAvatar={3} size={"32px"} />
        <StackStyle
          direction={"row"}
          style={{ alignItems: "center" }}
          spacing={1}
        >
          {TaskIcon}
          <TypographyStyle>1</TypographyStyle>
        </StackStyle>
      </StackStyle>
    </StackStyle>
  );
}

export default Organization;
