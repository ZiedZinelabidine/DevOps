import styled from "styled-components";
const FilterIconSVG = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/filter.svg`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: 100vh;
  background: #f5f5f5;
  align-items: center;
  /* background: #fff; */
  @media (min-width: 767px) {
    justify-content: space-evenly;
  }
`;

export const NotFoundTextStyle = styled.div`
  font-size: 40px;
  font-weight: 501;
  font-family: serif;
  text-align: center;
  padding-top: 10%;
  color: white;
`;



export const FilterContainer = styled.div`
  display: none;
  @media (min-width: 767px) {
    display: flex;
    background-color: white;
    padding: 15px;
    border-radius: 20px;
    // height: "100vh",
  }
`;

export const ProfilSelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 21px;
  background-color: rgb(255, 255, 255);
  border: 1px solid #d0d5dd99;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const ProfilAvatarContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const ProfilContainerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 767px) {
    width: 75%;
  }
`;

export const ProfilContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  @media (min-width: 767px) {
    width: 25%;
    padding-top: 0px;
  }
`;

export const ProfilContainerOfContainers = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProfilSelectionnerText = styled.div`
  width: 100%;
  display: flex;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  border: 1px solid #d0d5dd99;
  background: #202124;
  width: 100%;
`;

export const SecondContainer = styled.div`
  padding-top: 10px;
  min-height: 100%;
  overflow-y: scroll;
  background: #202124;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (min-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 850px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 15px 5px 15px;
  margin-left: 1%;
  @media (min-width: 768px) {
    padding: 5px 15px 5px 15px;
  }
`;
export const LogoImg = styled.img`
  max-width: 60px;
`;

export const ProfilImgSquare = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ContainerProfileSelected = styled.div`
  display: flex;
  position: relative;
`;
export const DeleteProfileSelected = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-radius: 6px 6px 0 0;
  padding: 10px;
  background-color: black;
  position: relative;
  flex-direction: row;
  border: 1px solid #d0d5dd99;
  @media (min-width: 767px) {
    padding-left: 21px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media (min-width: 767px) {
    width: 100%;
  }
`;

export const ResultSearchContainer = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  top: 80px;
  left: 0;
  z-index: 1;
  border-radius: 15px 0 0 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
export const SearchResultModal = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 15px 25px;
  overflow-y: scroll;
`;

export const ItemSearchResult = styled.div`
  margin-bottom: 5px;
  padding: 10px 15px;
  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;
export const SearchInputContainer = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: 767px) and (max-width: 1023px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
`;

export const SearchButtonContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  padding-right: 10px;
  padding-left: 10px;
  @media (min-width: 767px) and (max-width: 1023px) {
    width: 30%;
    padding-right: 20px;
    padding-left: 20px;
  }
  @media (min-width: 1024px) {
    width: 20%;
  }
`;

export const FilterButtonContainer = styled.div`
  display: flex;
  width: 15%;
  justify-content: center;
  @media (min-width: 767px) {
    display: none;
  }
`;

export const SearchIconInput = styled.i`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
export const SearchInput = styled.input`
  color: white;
  border: 1px solid #ccc;
  background-color: #111827;
  width: 100%;
  height: 50px;
  border-radius: 20px;
  padding: 6px 4rem 6px 30px;
  box-sizing: border-box;
`;

export const SearchButton = styled.button`
  padding: 0px;
  background-color: #14171f;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  height: 50px;
  &:hover {
    background-color: black;
  }
  @media (min-width: 767px) {
    padding: 8px 12px;
  }
`;

export const SearchIcon = styled.div`
position: absolute;
left: 1rem;
top: 50%;
transform: translateY(-50%);
color: rgba(255, 255, 255, 0.6);
pointer-events: none;
`;

export const CardContainer = styled.div`
  background-color: #111827;
  padding: 16px;
  border-radius: 15px;
  position: relative;
  margin: 10px;
  flex: 1 0 25%;
  width: 250px;
  height: 400px; // Fixed height
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d0d5dd99;
`;

export const ButtonSelectProfils = styled.button`
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 8px 16px;
  border: none;
  background-color: #14171f;
  border-color: #203442;
  border-radius: 20px;
  &:hover {
    background-color: black;
  }
  &:disabled {
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 8px 16px;
    border: none;
    background-color: #203442;
    border-color: #203442;
    border-radius: 20px;
  }
`;

export const CardContainers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;

  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`;

export const CardFirstBloc = styled.div`
  position: relative;
  //height: 250px;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
`;

export const ImageProfileCard = styled.img`
  object-fit: cover; // Ensure the image fits nicely
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;

export const StyledCandidateName = styled.h4`
  font-size: 16px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  line-height: 19px;
  padding-top: 10px;
`;

export const StyledCandidateDescription = styled.p`
  font-size: 12px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  line-height: 14px;
  color: #00000066;
`;

export const StyledReviewNumber = styled.p`
  font-size: 12px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  line-height: 18px;
  color: #aab9c5;
  margin: 0;
`;

export const StyledAddresseName = styled.p`
  font-size: 15px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  line-height: 10px;
  width: 150px;

  margin: 0;
`;

export const StyledHorizontalDiv = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding-left: 130px;
`;

export const StyledAddresseContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 10px;
`;

export const ContentCard = styled.div`
  display: flex;
  justify-content: center; // Center align items horizontally
  flex-direction: column; // Stack items vertically
  align-items: center; // Center items vertically
  margin: 1% 0; // Adjust margin if need be
  width: 100%;
`;

export const TitleContent = styled.span`
  font-size: 16px;
  width: 100%;
  text-align: center; // Center text
  white-space: nowrap; // Prevent text from wrapping
  overflow: hidden; // Hide overflowing text
  text-overflow: ellipsis; // Add ellipsis for overflowing text
  font-weight: 500;
`;

export const FooterCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ButtonCard = styled.div`
  width: 40%;
  padding: 0;
  margin: 0;
`;

export const TextFooterCard = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const TextFooterFirstBlocCard = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfilButton = styled.button`
  padding: 6px 20px; // Adjust padding for button
  background-color: black; // Set background to black
  color: white; // Set text color to white
  border: none;
  cursor: pointer;
  width: 100%; // Full width
  height: 45px;
  border-radius: 8px;
  transition: background-color 0.2s;
  font-weight: 501;

  &:hover {
    background-color: green; // Change to gray on hover
    color: white;
    font-weight: 501;

  }
`;

export const BoxContent = styled.div`
  background: rgb(255 255 255 / 66%);
  position: absolute;
  left: 10px;
  bottom: 10px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 175px;
  text-align: center;
`;

export const BoxExperience = styled.span`
  font-size: 13px;
  color: #919191;
`;
export const StarsBloc = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const StarImg = styled.img`
  width: 16px;
`;

export const CompetenceArea = styled.div`
  display: flex;
  justify-content: center; // Center the skills area
  flex-wrap: wrap; // Allow skills to wrap onto new lines
  margin: 0; // Reset margin
  width: 100%; // Ensures it takes the full width
  padding: 5px 0; // Add some padding for spacing
`;

export const CompetenceLabel = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  background-color: black; // Set background color to white
  color: white; // Set text color to black
  margin: 5px; // Maintain spacing between skill labels
  border: 1px solid #ccc; // Light gray border
  display: inline-block;
`;

export const SpanPrice = styled.span`
  font-weight: bold;
  font-size: 18px;
  font-weight: 501;
  font-family: Inter, sans-serif;
`;

export const SpanTax = styled.span`
  font-size: 10px;
  color: #a9a9a9;
`;
export const SpanJour = styled.span`
  font-size: 12px;
  color: black;
  font-family: Inter, sans-serif;
  font-weight: 400;
`;
export const StyledIConRemove = styled.img`
  width: 15px;
  margin-top: -10px;
  cursor: pointer;
`;
export const StyledButtonProfilContainerButton = styled.div`
  padding: 0px;
`;
export const StyledFilterIcon = styled(FilterIconSVG)`
  margin-right: 8px;
  width: 18px;
  height: 18px;
`;
export const StyledContainerFilterMobile = styled.div`
  width: 100%;
  background-color: white;
  padding: 10px;
  border-radius: 20px;
`;

export const StyledCandidatesCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #d0d5dd99;
  background-color: black;
`;

export const AdvancedSearchButtonContainer = styled.button`
  margin-right: 30px;
  background-color: black;
  height: 45px;
  margin-top: 2px;
  width: 250px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const SubmitButtonContainer = styled.button`
  background: green;
  color: white;
  height: 46px;
  width: 200px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;

  grap: 15px;

  &:hover {
    background: green; // Change background color on hover
    cursor: pointer; // Optional: Change cursor to pointer
  }
`;

export const AddProposalContainer = styled.button`
  margin-right: 10px;
  background-color: black;
  height: 60px;
  width: 100%;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  gap: 15px;
  &:hover {
    background: green; // Change background color on hover
    cursor: pointer; // Optional: Change cursor to pointer
  }
`;

export const ProfilAvatarContainerValidation = styled.div`
  padding-top: 20px;
  padding-left: 10px;
  width: 100%;
  display: flex;
  gap: 20px;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const TitleStyle = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const SearchFilter = styled.div`
  padding-left: 10px;
  width: 250px;
  display: flex;
  height: 41px;
`;

export const FilterStyle = styled.div`
  display: flex;
  width: 100%;
`;

export const StarContainer = styled.div`
  display: flex; // Align stars in a row
`;
export const CompetenceLabelLanguages  = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 501;
  background-color: white; // Set background color to white
  color: black; // Set text color to black
  margin: 5px; // Maintain spacing between skill labels
  border: 1px solid #ccc; // Light gray border
  display: inline-block;
`;