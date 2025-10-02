import { CustomAvatarStyle } from "../../../CustomAvatar/CustomAvatar.style";
import {
  DateStyle,
  StackStyle,
  TextStyle,
  TypographyStyle,
} from "./Project.style";
const VerticalDotIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/dot-vertical.svg`;
const avatar1 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/small-user-avatar1.webp`;
const avatar2 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/small-user-avatar2.webp`;
const avatar3 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/small-user-avatar3.webp`;

function Project() {
  return (
    <>
      <StackStyle spacing={0.5}>
        <StackStyle
          direction={"row"}
          spacing={2.5}
          style={{ justifyContent: "space-between" }}
        >
          <TypographyStyle>Project Schedule Management</TypographyStyle>
          <img src={VerticalDotIcon} alt="vertical-dot" />
        </StackStyle>

        <DateStyle>Jan 31 - Feb 4</DateStyle>
      </StackStyle>
      <StackStyle direction={"row"} style={{ justifyContent: "space-between" }}>
        <TextStyle>Days Remaining: 4</TextStyle>
        <StackStyle margin={-2} direction={"row"}>
          <CustomAvatarStyle
            src={avatar1}
            size={"20px"}
            roundedCircle
            alt="user-avatar1"
          />
          <CustomAvatarStyle
            src={avatar2}
            size={"20px"}
            roundedCircle
            alt="user-avatar2"
          />
          <CustomAvatarStyle
            src={avatar3}
            size={"20px"}
            roundedCircle
            alt="user-avatar3"
          />
        </StackStyle>
      </StackStyle>
    </>
  );
}

export default Project;
