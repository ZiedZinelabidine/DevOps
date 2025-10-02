import { CustomAvatarStyle, NameStyle, StackStyle } from "./UserAvatar.style";

function UserAvatar({ user }) {
  return (
    <StackStyle direction={"row"} spacing={1} alignItems={"center"}>
      <CustomAvatarStyle src={user.photo} alt="avatar" roundedCircle />
      <StackStyle>
        <NameStyle>{user.firstName}</NameStyle>
        <NameStyle>{user.lastName}</NameStyle>
      </StackStyle>
    </StackStyle>
  );
}

export default UserAvatar;
