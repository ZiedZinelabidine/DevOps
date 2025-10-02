import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { getURL } from "../../../../../redux/api/uploads/uploadSlice";
import { useGetUserByIdQuery } from "../../../../../redux/api/users/userApi";
import { StackStyle } from "../../Formations.style";
import { NameStyle, PriceStyle, SubtitleStyle } from "./UserAvatar.style";

function UserAvatar({ user, userId, price, type }) {
  const intl = useIntl();
  const { data: userData } = useGetUserByIdQuery({ role: "CANDIDAT", id: userId });
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState(null);

  useEffect(() => {
    if (userId) {
      getUrl();
    }
  }, [userId]);

  const getUrl = async () => {
    try {
      const url = await dispatch(
        getURL({
          location: `candidats/${userId}/image/`,
        })
      );

      if (
        url?.Contents &&
        Array.isArray(url.Contents) &&
        url.Contents.length > 0
      ) {
        const extractedFileName = url.Contents[0].Key.split("/").pop();
        setFileName(extractedFileName);
      } else {
        console.warn("No valid image found for user:", userId);
      }
    } catch (error) {
      console.error("Error fetching URL:", error);
    }
  };

  const displayUser = userData?.data[0];
  const jobTitle = displayUser?.jobId ? intl.formatMessage({ id: displayUser.jobId }) : "";

  return (
    <StackStyle direction="row" style={{ justifyContent: "space-between" }}>
      <StackStyle direction="row" spacing={1}>
        {!(type === "MARKETPLACE" || type === "MARKETPLACEPRODUCT") && (
          <ImageProfilCard id={userId} type={"candidats"} typeimg={"cercel"} />
        )}
        <StackStyle>
          <NameStyle>
            {displayUser?.first_name} {displayUser?.name}
          </NameStyle>
          <SubtitleStyle>{jobTitle}</SubtitleStyle>
        </StackStyle>
      </StackStyle>
      {price && (
        <PriceStyle>
          {price} {type === "MARKETPLACE" ? "DT" : "EURO"}
        </PriceStyle>
      )}
    </StackStyle>
  );
}

export default UserAvatar;
