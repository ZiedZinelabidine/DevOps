import { useIntl } from "react-intl";
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
  const intl = useIntl();

  return (
    <RootStyle>
      <StackStyle direction={"row"} spacing={0.5}>
        <CustomAvatarStyle
          src={avatarLarge}
          size={"77px"}
          alt="large-user-avata"
        />
        <StackStyle spacing={0.5}>
          <StackStyle direction={"row"} spacing={1}>
            <TitleStyle>
              {intl.formatMessage({ id: "profile.user.name" })}
            </TitleStyle>
            <BoxStyle>
              <p>{intl.formatMessage({ id: "profile.user.status" })}</p>
            </BoxStyle>
          </StackStyle>
          <TypographyStyle>
            {intl.formatMessage({ id: "profile.user.role" })}
          </TypographyStyle>
          <StackStyle style={{ paddingTop: "10px", width: "100%" }}>
            <ButtonStyle>
              {intl.formatMessage({ id: "profile.user.button" })}
            </ButtonStyle>
          </StackStyle>
        </StackStyle>
      </StackStyle>
    </RootStyle>
  );
}

export default ProfileUser;
