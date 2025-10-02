import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAccessToken } from "../../../core/helpers/storage";
import { getURL } from "../../../redux/api/uploads/uploadSlice";
import { ContentFormContainer } from "../../CreateTraining/CreateTraining.style";

const SharedTrainingItem = ({ item }) => {
  const dispatch = useDispatch();
  const token = getAccessToken();
  const [fileName, setFileName] = useState();
  const decodeToken = token ? jwtDecode(token) : null;

  const getUrl = async () => {
    const url = await dispatch(
      getURL({
        location: `applications/${item.id}/image/`,
      })
    );
    url.Contents &&
      setFileName(
        url.Contents[0].Key.split("/")[
          url?.Contents[0].Key.split("/").length - 1
        ]
      );
  };
  useEffect(() => {
    getUrl();
  }, []);
  return (
    <div
      className={"container-fluid  d-flex justify-content-end "}
      id={"publicchanel"}
    >
      <div className="itemprofil" style={{ width: "100%" }}>
        <ContentFormContainer>
          <img
            style={{ border: "1px solid" }}
            width="450px"
            height="200px"
            src={
              item.type === "APPLICATIONS"
                ? `${process.env.REACT_APP_S3_URL}/applications/${item.id}/image/${fileName}`
                : item.type === "VIDEOSTRAINING"
                ? `${process.env.REACT_APP_S3_URL}/videos_training/${item.id}/image/${fileName}`
                : ``
            }
          />
          <div
            className="formulaire"
            style={{
              zIndex: 999,
              backgroundColor: "gray",
              borderRadius: "10px",
            }}
          >
            <div style={{ display: "inline-flex", width: "auto" }}>
              <div style={{ display: "inline-block" }}>
                <div style={{ justifyContent: "space-between" }}>
                  <h1 style={{ display: "inline-flex" }}>{item?.title}</h1>
                  <p>{item?.description}</p>
                </div>
              </div>
              <div style={{ float: "right" }}>
                <p>
                  {item?.price} {item?.currency}
                </p>
              </div>
            </div>
          </div>
        </ContentFormContainer>
      </div>
    </div>
  );
};
export default SharedTrainingItem;
