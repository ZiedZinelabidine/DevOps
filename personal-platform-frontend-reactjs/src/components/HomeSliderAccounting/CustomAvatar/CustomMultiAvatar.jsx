import { generateArray } from "../../../utils/helpers/array.helpers";
import { BoxStyle, CustomAvatarStyle, StackStyle } from "./CustomAvatar.style";
const image = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/people/imageAvatar.png`;

function CustomMultiAvatar({ avatarNumber, maxAvatar = 7, size = "40px" }) {
  return (
    <StackStyle direction={"row"}>
      {generateArray(maxAvatar - 1).map((value) => (
        <CustomAvatarStyle
          key={value}
          style={{ marginLeft: value ? "-10px" : 0 }}
          src={image}
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
