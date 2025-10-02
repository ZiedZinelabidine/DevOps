import { generateArray } from "../../../utils/helpers/array.helpers";
import { BoxStyle, CustomAvatarStyle, StackStyle } from "./CustomAvatar.style";

function CustomMultiAvatar({ avatarNumber, maxAvatar = 7, size = "40px" }) {
  return (
    <StackStyle direction={"row"}>
      {generateArray(maxAvatar - 1).map((value) => (
        <CustomAvatarStyle
          key={value}
          style={{ marginLeft: value ? "-10px" : 0 }}
          src={`${
            process.env.REACT_APP_CDN_ITGALAXY
          }/assets/images-webp/small-user-avatar${value + 1}.webp`}
          size={size}
          roundedCircle
          alt="rounded-circle"
        />
      ))}
      {avatarNumber > 8 && <BoxStyle size={size}>+{avatarNumber - 7}</BoxStyle>}
    </StackStyle>
  );
}

export default CustomMultiAvatar;
