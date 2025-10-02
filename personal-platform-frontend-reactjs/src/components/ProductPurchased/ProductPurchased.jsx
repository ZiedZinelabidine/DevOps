import ChapterDetails from "components/ChapterDetails/ChapterDetails";
import ChaptersCard from "components/ChaptersCard/ChaptersCard";
import SideBar from "components/SideBar/sideBar";
import VideoPlayer from "components/VideoPlayer/VideoPlayer";
import { getTokenFromLocalStorage } from "core/helpers/storage";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetTrainingPurchasedQuery } from "../../redux/api/training/trainingApi";
import { getURL } from "../../redux/api/uploads/uploadSlice";
import {
  BackButton,
  StyledApplicationDetailContainer,
  StyledApplicationDetailContentContainer,
  TitleContainer,
  TitleContainer1,
  TitleContainerChapters,
} from "./ProductPurchased.style";
import { MessageSquare } from 'lucide-react';
import CommentModal from "components/ModalITgalaxy/CommentModal/CommentModal"; // Assuming this is the correct path

const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

const ProductPurchased = () => {
  const { token } = useParams();
  const tokenUser = getTokenFromLocalStorage();
  const [loadingVideo, setLoadingVideo] = useState(false);
  const decodedToken = tokenUser ? jwtDecode(tokenUser) : null;
  const id = decodedToken?.id || null; // Improved optional chaining
  const role = decodedToken?.role || null;
  const username = decodedToken.username ? decodedToken.username :  decodedToken.name + " " + decodedToken.first_name ;
  const dispatch = useDispatch();

  const [videoDisplayUrl, setVideoDisplayUrl] = useState();
  const [chapter, setChapter] = useState();
  const [support, setSupport] = useState();
  const [showModalComment, setShowModalComment] = useState(false);

  const { data: product, error, isLoading } = useGetTrainingPurchasedQuery({ token, id, role });


  const handleBackButton = () => {
    window.history.back();
  };

  const handleModalComment = () => {
    setShowModalComment(true);
  };

  const handleCloseModalComment = () => {
    setShowModalComment(false);
  };

  useEffect(() => {
    const fetchFirstVideoUrl = async () => {
      if (!isLoading && product) {
        try {
          setLoadingVideo(true);
          const chapters = product?.chapters;
          if (chapters) setChapter(chapters[1]); // Avoid potential undefined error

          let pathSupport, pathVideo;

          if (product.type === "APPLICATION") {
            pathSupport = `products/applications/${product.id}/chapters/1/support/`;
            pathVideo = `products/applications/${product.id}/chapters/1/videos/1/`;
          } else {
            pathSupport = `products/videos_trainings/${product.id}/chapters/1/support/`;
            pathVideo = `products/videos_trainings/${product.id}/chapters/1/videos/1/`;
          }

          const url = await dispatch(getURL({ location: pathVideo }));

          if (url?.Contents?.length > 0) {
            setVideoDisplayUrl(process.env.REACT_APP_URL_BUCKET + url.Contents[0].Key);
          } else {
            console.error("No videos found in this chapter.");
          }

          const urlSupport = await dispatch(getURL({ location: pathSupport }));

          if (urlSupport?.Contents?.length > 0) {
            setSupport(process.env.REACT_APP_URL_BUCKET + urlSupport.Contents[0].Key); // Use urlSupport instead of url
          } else {
            console.error("No Support found in this chapter.");
          }
        } catch (error) {
          console.error("Error fetching video URL:", error);
        } finally {
          setLoadingVideo(false);
        }
      }
    };
    fetchFirstVideoUrl();
  }, [product, isLoading, dispatch]); // Adding dispatch to the dependency array

  return (
<StyledApplicationDetailContainer>
      <SideBar
        path={""}
        isLoggedIn={true}
        role={decodedToken?.role}
        id={decodedToken?.id}
      />
      <StyledApplicationDetailContentContainer>
        <BackButton onClick={handleBackButton}>
          <img src={Vector} style={{ width: "0.83vw" }} alt="vector" />
        </BackButton>
        <TitleContainer1>
          <TitleContainer>
            <p
              style={{
                fontWeight: "501",
                color: "black",
                fontFamily: "Inter",
                margin: 0,
                fontSize: "35px",
              }}
            >
              {product?.title}
            </p>
          </TitleContainer>
          <TitleContainerChapters onClick={handleModalComment}>
            <p
              style={{
                fontWeight: "501",
                color: "white",
                fontFamily: "Inter",
                margin: 0,
                fontSize: "20px",
                cursor: "pointer",

              }}      
            >
              <MessageSquare size={24} color="white" /> 
              {" Add a Comment"}
            </p>
          </TitleContainerChapters>
        </TitleContainer1>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <VideoPlayer src={videoDisplayUrl} loading={loadingVideo} />
            <ChapterDetails chapter={chapter} support={support} />
          </div>
          <ChaptersCard
            data={product}
            setChapter={setChapter}
            setSupport={setSupport}
            setVideoDisplayUrl={setVideoDisplayUrl}
          />
        </div>
      </StyledApplicationDetailContentContainer>
      {showModalComment && (
        <CommentModal userId={product.userId} email={product.user.email} commentedId={id} CommentedType={role} commentedUserName={username} workId={product?.id} workType={"PRODUCT"} showModal={showModalComment} handleShowModal={handleCloseModalComment} />
      )}
    </StyledApplicationDetailContainer>
  );
};

export default ProductPurchased;