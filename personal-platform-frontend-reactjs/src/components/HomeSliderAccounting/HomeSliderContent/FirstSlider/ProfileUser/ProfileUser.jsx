import { CustomAvatarStyle } from "../../../CustomAvatar/CustomAvatar.style";
import {
  BoxStyle,
  ButtonStyle,
  RootStyle,
  StackStyle,
  TitleStyle,
  TypographyStyle,
} from "./ProfileUser.style";
const avatarLarge = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/large-user-avatar1.webp`;
function ProfileUser() {
  return (
    <RootStyle>
      <StackStyle direction={"row"} spacing={0.5}>
        <CustomAvatarStyle
          src={avatarLarge}
          size={"77px"}
          alt="large-user-avatar"
        />
        <StackStyle spacing={0.5}>
          <StackStyle direction={"row"} spacing={1}>
            <TitleStyle>Skaylar Workman</TitleStyle>
            <BoxStyle>
              <p>AVAILABLE</p>
            </BoxStyle>
          </StackStyle>
          <TypographyStyle>Full Stack Engineer, DevOps, AWS</TypographyStyle>
          <StackStyle style={{ paddingTop: "10px", width: "100%" }}>
            <ButtonStyle>Get in touch</ButtonStyle>
          </StackStyle>
        </StackStyle>
      </StackStyle>
    </RootStyle>
  );
}

export default ProfileUser;
