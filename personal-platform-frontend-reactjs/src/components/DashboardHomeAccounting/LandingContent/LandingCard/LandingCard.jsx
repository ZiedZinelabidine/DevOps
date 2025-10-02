import { RootStyle, TextContentStyle } from "./LandingCard.style";
import UserAvatar from "./UserAvatar/UserAvatar";

function LandingCard({ user, content }) {
  return (
    <RootStyle>
      <UserAvatar user={user} />
      <TextContentStyle>{content}</TextContentStyle>
    </RootStyle>
  );
}

export default LandingCard;
