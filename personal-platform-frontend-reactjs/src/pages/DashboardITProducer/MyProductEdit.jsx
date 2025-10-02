import ChapterDetails from "components/ChapterDetails/ChapterDetails";
import ChaptersCard from "components/ChaptersCard/ChaptersCard";
import SideBar from "components/SideBar/sideBar";
import VideoPlayer from "components/VideoPlayer/VideoPlayer";
import { getTokenFromLocalStorage } from "core/helpers/storage";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useDeleteTrainingMutation, useGetMyProductQuery } from "../../redux/api/training/trainingApi";
import { deleteVideo, getURL } from "../../redux/api/uploads/uploadSlice";
import MyProductEditForm from "./MyProductEditForm";
import {
  BackButton,
  EditProductEye,
  EditProductPencil,
  EditProductTrash,
  StyledApplicationDetailContainer,
  StyledApplicationDetailContentContainer,
  TitleContainer,
  TitleContainer1,
  TitleContainerChapters,
  ButtonContainerDelete,
  DeleteProposalButton,
  AcceptProposalButton
} from "./Style";
import { Pencil, Trash2, Eye } from 'lucide-react';
import ModalDeleteMyProduct from "components/ModalITgalaxy/ModalDeleteMyProduct/ModalDeleteMyProduct";
import toast from "react-hot-toast";

const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

const MyProductEdit = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("token");
  const edit = queryParams.get("edit");
  const tokenUser = getTokenFromLocalStorage();
  const [loadingVideo, setLoadingVideo] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const decodedToken = tokenUser ? jwtDecode(tokenUser) : null;
  const userId = decodedToken ? decodedToken.id : null;
  const role = decodedToken ? decodedToken.role : null;
  const [deleteProduct] = useDeleteTrainingMutation();

  const dispatch = useDispatch();
  const [videoDisplayUrl, setVideoDisplayUrl] = useState();
  const [chapter, setChapter] = useState();
  const [support, setSupport] = useState();
  const [editProduct, setEditProduct] = useState(false);
  const [titleModule, setTitleModule] = useState();

  const {
    data: product,
    error,
    isLoading,
  } = useGetMyProductQuery({ token, userId });

  const handleBackButton = () => {
    window.history.back();
  };

  const deleteProductFunction = async () => {

    try {
      await deleteProduct({
        token: token,
        userId: userId

      }).unwrap(); // Ensure unwrap() is called correctly


      toast.success("Product was deleted", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      if (product?.data.type === 'APPLICATION') {
        await deleteVideo(`products/applications/${product?.data?.id}`);

      } else {
        await deleteVideo(`products/videos_trainings/${product?.data?.id}`);

      }

      window.location.href = `/producer`;
    } catch (e) {
      console.log(e);
    }
  };


  const handleEditProductForm = () => {
    setEditProduct(true);
  };

  const handleViewProduct = () => {
    window.location.href = `/itgalaxyProductDetails/${token}`;
  };

  const handleTrash = () => {
    setShowDeleteModal(true);
  };

  const handleCloseTrash = () => {
    setShowDeleteModal(false);
  };

  useEffect(() => {
    const fetchFirstVideoUrl = async () => {
      if (!isLoading && product && product?.data) {
        try {
          setLoadingVideo(true);
          const chapters = product?.data?.chapters;
          setChapter(chapters[1]);
          let pathVideos, pathSupport;

          if (product?.data.type === "APPLICATION") {
            pathVideos = `products/applications/${product?.data.id}/chapters/1/videos/1/`;
            pathSupport = `products/applications/${product?.data.id}/chapters/1/support/`;
          } else {
            pathVideos = `products/videos_trainings/${product.data.id}/chapters/1/videos/1/`;
            pathSupport = `products/videos_trainings/${product?.id}/chapters/1/support/`;
          }

          const url = await dispatch(getURL({ location: pathVideos }));
          if (url?.Contents && url.Contents.length > 0) {
            setVideoDisplayUrl(process.env.REACT_APP_URL_BUCKET + url.Contents[0].Key);
          } else {
            console.error("No videos found in this chapter.");
          }

          const urlSupport = await dispatch(getURL({ location: pathSupport }));
          if (urlSupport?.Contents && urlSupport.Contents.length > 0) {
            setSupport(process.env.REACT_APP_URL_BUCKET + urlSupport.Contents[0].Key);
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
  }, [product, isLoading]); // Add product and isLoading to the dependency array

  return (
    <>
      {showDeleteModal && (
        <ModalDeleteMyProduct
          handleShowModal={() => setShowDeleteModal(false)} // close modal
          showModalDelete={showDeleteModal}
          footer={
            <ButtonContainerDelete>
              <DeleteProposalButton onClick={handleCloseTrash}>
                Cancel{" "}
              </DeleteProposalButton>
              <AcceptProposalButton onClick={deleteProductFunction}>
                Yes, i am sure
              </AcceptProposalButton>
            </ButtonContainerDelete>
          }
        />
      )}

      {!editProduct ? (
        <StyledApplicationDetailContainer>
          <SideBar
            path={"/producer"}
            isLoggedIn={true}
            role={decodedToken?.role}
            id={decodedToken?.id}
          />
          <StyledApplicationDetailContentContainer>
            <BackButton onClick={handleBackButton}>
              <img src={Vector} style={{ width: "0.83vw" }} alt="Back" />
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
                  {product?.data?.title}
                </p>
              </TitleContainer>
              {!edit ? (
                <TitleContainerChapters>
                  <p
                    style={{
                      fontWeight: "501",
                      color: "black",
                      fontFamily: "Inter",
                      margin: 0,
                      fontSize: "35px",
                    }}
                  >
                    {"Chapters"}
                  </p>
                </TitleContainerChapters>
              ) : (
                <>
                  <EditProductEye onClick={handleViewProduct}>
                    <Eye color="white" size={40} />
                  </EditProductEye>

                  <EditProductPencil onClick={handleEditProductForm}>
                    <Pencil color="white" size={40} />
                  </EditProductPencil>

                  <EditProductTrash onClick={handleTrash}>
                    <Trash2 color="white" size={40} />
                  </EditProductTrash>
                </>
              )}
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
                <ChapterDetails
                  chapter={chapter}
                  support={support}
                  titleModule={titleModule}
                />
              </div>
              <ChaptersCard
                data={product?.data}
                setChapter={setChapter}
                setSupport={setSupport}
                setVideoDisplayUrl={setVideoDisplayUrl}
                setTitleModule={setTitleModule}
              />
            </div>
          </StyledApplicationDetailContentContainer>
        </StyledApplicationDetailContainer>
      ) : (
        <MyProductEditForm
          setTrainerForm={setEditProduct}
          isEdit={true}
          data={product?.data}
        />
      )}
    </>
  );
};

export default MyProductEdit;
