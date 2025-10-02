import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getURL } from "../../../../redux/api/uploads/uploadSlice";
import { StyledLoaderContainer } from "../../styeldComponants";
import EditCVProfileAccounting from "./EditCVProfileAccounting";
import EditImageProfilAccounting from "./EditImageProfileAccounting";
import EditFormAccountingProfil from "./EditProfileAccounting";
import {
  CommentUser,
  CommentedStyle,
  CompetenceArea,
  FullScreenIcon,
  StarImg,
  StyleWithIcon,
  StyledAboutMeCard,
  StyledAboutMeText,
  StyledAvailableText,
  StyledBlackBackground,
  StyledComments,
  StyledCommentsContainer,
  StyledDot,
  StyledEditImageIcon,
  StyledEditProfileButton,
  StyledLeftSideBar,
  StyledLeftSideBarAvailable,
  StyledLeftSideBarContainer,
  StyledLeftSideBarImage,
  StyledLeftSideBarLightParagraph,
  StyledLeftSideBarLocationContainer,
  StyledLeftSideBarName,
  StyledLeftSideBarNameStyle,
  StyledLeftSideBarUSerOtherInfo,
  StyledLink,
  StyledPortfolioSectionContainer,
  StyledReadMoreButton,
  StyledReviewNumber,
  StyledRightSideBarContainer,
  StyledSideBarHeader,
  StyledSidebarContent,
  StyledViewAccountingProfil,
  StyledWebViewCard,
  TextComment,
  TitleProfile,
} from "./styled";
import { MapPin, Pencil , Maximize, Minimize} from 'lucide-react'; // Import the Pencil icon from Lucide

const etoile = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Star.png`;

const ViewAccountingProfil = ({ data, setDataUser, editProfil }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [isFullScreenExp, setIsFullScreenExp] = useState(false);
  const [isFullScreenCV, setIsFullScreenCV] = useState(false);
  const [editModalProfileCVOpen, setEditModalProfileCVOpen] = useState(false);
  const [editModalProfilePictureOpen, setEditModalProfilePictureOpen] =
    useState(false);
  const [previewCV, setPreviewCV] = useState(); // State to hold the preview image URL
  const [isExpanded, setIsExpanded] = useState(false);

  const dispatch = useDispatch();

  const getUrlData = async () => {
    const url = await dispatch(
      getURL({
        location: `accountings/${data.id}/profil/cv`,
      })
    );
    if (url.Contents) {
      setPreviewCV(
        `${process.env.REACT_APP_S3_URL}/` +
          url?.Contents?.map((url) => `${url?.Key}`)[0]
      );
    }
  };

  useEffect(() => {
    getUrlData();
  }, []);

  if (!data) {
    return (
      <StyledLoaderContainer>
        <Spinner style={{ width: "100px", height: "100px" }} />
      </StyledLoaderContainer>
    );
  }

  const toggleFullScreenExp = () => setIsFullScreenExp((prev) => !prev);
  const toggleFullScreenCV = () => setIsFullScreenCV((prev) => !prev);
  const toggleReadMore = () => setIsExpanded((prev) => !prev);

  const openEditModal = () => setEditModalOpen(true);
  const closeEditModal = () => setEditModalOpen(false);

  const openEditModalImage = () => setEditModalProfilePictureOpen(true);
  const closeEditModalImage = () => setEditModalProfilePictureOpen(false);

  const openEditModalCV = () => setEditModalProfileCVOpen(true);
  const closeEditModalCV = () => setEditModalProfileCVOpen(false);

  const handleSaveChanges = (updatedData) => {
    const newData = { ...data, ...updatedData };
    setDataUser(newData);
    closeEditModal();
  };

  const handleSaveChangesProfileImage = (updatedData) => {
    const newData = { ...data, ...updatedData };
    setDataUser(newData);
    closeEditModalImage();
  };

  const handleSaveChangesProfileCV = (updatedData) => {
    const newData = { ...data, ...updatedData };
    setDataUser(newData);
    closeEditModalCV();
  };

  const showReadMore = data?.profile_description?.length > 300;

  return (
    <StyledViewAccountingProfil>
      <StyledLeftSideBar
        isFullScreenCV={isFullScreenCV}
        isFullScreenExp={isFullScreenExp}
      >
        <StyledSideBarHeader>
          <StyledBlackBackground />
          <StyledSidebarContent>
            <StyledLeftSideBarImage style={{ position: "relative" }}>
              <ImageProfilCard
                id={data.id}
                type={"accountings"}
                typeimg={"profil"}
              />
              {editProfil && (
                <StyledEditImageIcon onClick={openEditModalImage}>
                  <Pencil size={16} color="black" />
                </StyledEditImageIcon>
              )}
            </StyledLeftSideBarImage>
          </StyledSidebarContent>
        </StyledSideBarHeader>

        <StyledLeftSideBarAvailable>
          <StyledDot isActive={data.status === "ACTIVE"} />
          <StyledAvailableText>
            {data.status === "ACTIVE" ? "AVAILABLE" : "UNAVAILABLE"}
          </StyledAvailableText>
        </StyledLeftSideBarAvailable>

        <StyledLeftSideBarName>
          <StyledLeftSideBarNameStyle>{data.name}</StyledLeftSideBarNameStyle>
        </StyledLeftSideBarName>
        <StyledLeftSideBarUSerOtherInfo>
          {editProfil && (
            <StyledLeftSideBarLightParagraph>
              {data.email}
            </StyledLeftSideBarLightParagraph>
          )}

          <StyledLeftSideBarLocationContainer>
          <MapPin size={20} style={{ paddingRight: "10px" }} /> {/* Using Lucide MapPin */}            <StyledLeftSideBarLightParagraph>
              {data.country_details}
            </StyledLeftSideBarLightParagraph>
          </StyledLeftSideBarLocationContainer>
        </StyledLeftSideBarUSerOtherInfo>

        <StyledLeftSideBarContainer>
          <StyledLink href={data.url} target="_blank" rel="noopener noreferrer">
            <span>
              <i className="fas fa-globe" style={{ paddingRight: "10px" }}></i>
              {data.url}
            </span>
            <i className="fas fa-external-link-alt"></i>
          </StyledLink>

          <hr style={{ borderTop: "1px solid", opacity: "1", width: "100%" }} />

          {editProfil && (
            <>
              <StyledEditProfileButton onClick={openEditModal}>
              <Pencil size={16} color="black" />
              </StyledEditProfileButton>
            </>
          )}
        </StyledLeftSideBarContainer>
      </StyledLeftSideBar>

      <StyledRightSideBarContainer>
        <StyledAboutMeCard
          isFullScreenCV={isFullScreenCV}
          isFullScreenExp={isFullScreenExp}
        >
          <TitleProfile>About Me</TitleProfile>
          <StyledAboutMeText isExpanded={isExpanded}>
            {isExpanded
              ? data.profile_description
              : data.profile_description
              ? `${data.profile_description.slice(0, 200)}${
                  data.profile_description.length > 200 ? "..." : ""
                }`
              : "No description available."}
          </StyledAboutMeText>

          {showReadMore && (
            <StyledReadMoreButton onClick={toggleReadMore}>
              {isExpanded ? "Read Less" : "Read More"}
              <i className={`fas fa-chevron-${isExpanded ? "up" : "down"}`} />
            </StyledReadMoreButton>
          )}
        </StyledAboutMeCard>

        <StyledPortfolioSectionContainer>
          <StyledWebViewCard
            isFullScreenCV={isFullScreenCV}
            className={isFullScreenExp ? "full-screen" : ""}
          >
            <StyleWithIcon>
              <TitleProfile>Curriculum Vitae</TitleProfile>
              <FullScreenIcon
                className={`fas ${
                  isFullScreenExp ? "fa-compress" : "fa-expand"
                }`}
                onClick={toggleFullScreenExp}
              />
              {editProfil && (
                <Pencil size={16} color="black" onClick={openEditModalCV} />
                
              )}
            </StyleWithIcon>
            <iframe
              src={previewCV}
              width="100%"
              height="100%" // Adjust height as needed
              title="CV Preview"
              style={{ border: "none", padding: 0, margin: 0 }}
            />
          </StyledWebViewCard>

          <StyledWebViewCard
            isFullScreenExp={isFullScreenExp}
            className={isFullScreenCV ? "full-screen" : ""}
          >
            <StyleWithIcon>
              <TitleProfile>ItGalaxy Experiences</TitleProfile>
              <FullScreenIcon
                className={`fas ${
                  isFullScreenExp ? "fa-compress" : "fa-expand"
                }`}
                onClick={toggleFullScreenExp}
              />
            </StyleWithIcon>

            <CompetenceArea>
              <StyledCommentsContainer>
                {data?.comments?.map((c) => (
                  <StyledComments key={c.id}>
                    <CommentedStyle>
                      <ImageProfilCard
                        id={c.commentedId}
                        type={"entreprises"}
                        typeimg={"Comment"}
                        alt="Profile"
                      />
                      <CommentUser>{c.commentedUserName}</CommentUser>
                    </CommentedStyle>
                    <TextComment>{c.comment_text}</TextComment>
                    <StyledReviewNumber>
                      {c.stars}/5
                      <StarImg src={etoile} alt="Star" />
                    </StyledReviewNumber>
                  </StyledComments>
                ))}
              </StyledCommentsContainer>
            </CompetenceArea>
          </StyledWebViewCard>
        </StyledPortfolioSectionContainer>
      </StyledRightSideBarContainer>

      {editModalOpen && (
        <EditFormAccountingProfil
          data={data}
          editModalOpen={editModalOpen}
          onSaveChanges={handleSaveChanges}
          onClose={closeEditModal}
        />
      )}

      {editModalProfilePictureOpen && (
        <EditImageProfilAccounting
          data={data}
          editModalProfilePictureOpen={editModalProfilePictureOpen}
          onSaveChanges={handleSaveChangesProfileImage}
          onClose={closeEditModalImage}
        />
      )}

      {editModalProfileCVOpen && (
        <EditCVProfileAccounting
          data={data}
          editModalProfileCVOpen={editModalProfileCVOpen}
          onSaveChanges={handleSaveChangesProfileCV}
          onClose={closeEditModalCV}
        />
      )}
    </StyledViewAccountingProfil>
  );
};

export default ViewAccountingProfil;
