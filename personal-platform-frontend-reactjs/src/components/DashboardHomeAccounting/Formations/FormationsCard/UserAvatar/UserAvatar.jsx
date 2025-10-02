import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getURL } from "../../../../../redux/api/uploads/uploadSlice";
import { useGetUserByIdQuery } from "../../../../../redux/api/users/userApi";
import { StackStyle } from "../../Formations.style";
import {
  CustomAvatarStyle,
  NameStyle,
  PriceStyle,
  SubtitleStyle,
} from "./UserAvatar.style";

function UserAvatar({ userId, price, user: userData }) {
  const { data } = useGetUserByIdQuery(userId);
  const user = userData ?? data?.data;
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState();

  useEffect(() => {
    getUrl();
  }, []);

  const getUrl = async () => {
    const url = await dispatch(
      getURL({
        location: `candidats/${userId}/image/`,
      })
    );
    url.Contents &&
      setFileName(
        url.Contents[0].Key.split("/")[
          url?.Contents[0].Key.split("/").length - 1
        ]
      );
  };
  return (
    <StackStyle direction={"row"} style={{ justifyContent: "space-between" }}>
      <StackStyle direction={"row"} spacing={1}>
        <CustomAvatarStyle
          src={
            user?.image ??
            `https://itgalaxy-staging.s3.eu-west-1.amazonaws.com/candidats/${userId}/image/${fileName}`
          }
          roundedCircle
          alt="rounded-circle"
        />
        <StackStyle>
          <NameStyle>{`${user?.first_name} ${user?.name}`}</NameStyle>
          <SubtitleStyle>{user?.job}</SubtitleStyle>
        </StackStyle>
      </StackStyle>
      <PriceStyle>${price}</PriceStyle>
    </StackStyle>
  );
}

export default UserAvatar;
