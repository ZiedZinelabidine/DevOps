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
  color: white
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #d0d5dd99;
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  background: black;
  @media (min-width: 767px) {
    width: 100%;
  }
`;

export const BackButton = styled.button`
  position: absolute; /* or fixed, depending on your needs */
  top: 0;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 20px;

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
  background: black;
  position: relative;
  flex-direction: row;
  border: 1px solid #d0d5dd99;
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 10px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
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
  flex: 1;
  min-width: 200px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const SearchButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
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
  padding: 6px 15px 6px 30px;
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

export const CardContainer = styled.div`
  background-color: #111827;
  padding: 8px;
  border-radius: 15px;
  position: relative;
  margin: 5px;
  width: ${props => (props.fullWidth ? '100%' : 'calc(25% - 10px)')}; // Conditional width
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  box-sizing: border-box;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: ${props => (props.fullWidth ? '100%' : 'calc(50% - 20px)')}; // Adjust for medium screens
  }

  @media (max-width: 767px) {
    width: 100%; // Full width for small screens
    min-width: unset;
    margin: 10px 0;
  }

  &:hover {
    border: 1px solid #6366f1;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%; // Adjust according to your layout
  height: auto; // Ensure it adjusts to the content
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
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
  margin-top: 10px;
  min-height: 707px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 767px) {
    justify-content: center;
    padding: 10px 0;
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
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const StyledCandidateName = styled.h4`
  font-size: 16px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  line-height: 19px;
  padding-top: 10px;
  padding-left: 10px;
  color: white;
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
  font-size: 13px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  line-height: 10px;
  width: 150px;

  margin: 0;
`;

export const StyledHorizontalDiv = styled.div`
  display: flex;
  justify-content: space-between; // This spreads the items out
  align-items: center; // Center items vertically
  gap: 15px; // Space between items
  width: 100%; // Ensure it takes the full width of its parent
`;

export const StyledAddresseContainer = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`;

export const ContentCard = styled.div`
  display: flex;
  justify-content: center; // Center align items horizontally
  flex-direction: column; // Stack items vertically
  align-items: center; // Center items vertically
  margin: 5% 0; // Adjust margin if need be
  width: 100%;
  overflow: hidden; // Prevent overflow
`;

export const TitleContent = styled.span`
  font-size: 16px;
  width: 100%;
  /* height: 60px; */
  white-space: nowrap; // Prevent text from wrapping
  overflow: hidden; // Hide overflowing text
  text-overflow: ellipsis; // Add ellipsis for overflowing text
  font-weight: 500;
  padding-bottom: 40px;
  padding-top: 10px;

`;


export const ButtonCard = styled.div`
  width: 40%;
  padding: 0;
  margin: 0;
`;

export const TextFooterCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TextFooterFirstBlocCard = styled.p`
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 31.47px;
  text-align: right;
  color: #2684ff;
 `;



export const ProfilButton = styled.div`
  padding-left: 7px;
  color: white;
  color: gray;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 13px;
    padding: 7px;
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

export const CompetenceAreaS = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-top: 30px;
`;
export const CompetenceAreaL = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin: 10px 0;
`;

export const CompetenceLabel = styled.span`
  padding: 3px;
  border-radius: 18px;
  font-size: 11px;
  width: auto;
  text-align: center;
  margin: 0 0px;
  margin-right: 0.1rem;
  border: 1px solid #203442;
  padding-inline: 12px;
  background: white;
  color: black;
  font-weight: 501;

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

export const StyledFilterIcon = styled.img.attrs({
  src: FilterIconSVG,
})`
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
  border: 1px solid #d0d5dd99;
  background: white;
  box-sizing: border-box;
  padding-left: 20px;
  background: black;

  @media (max-width: 1200px) {
    padding: 0 1%;
  }

`;

export const NotFoundTextStyle = styled.div`
  font-size: 40px;
  font-weight: 501;
  font-family: serif;
  text-align: center;
  color: white;
  
`;


export const AdvancedSearchButtonContainerResetFilter = styled.button`
  background: rgba(228, 98, 111, 1);
  height: 50px;
  min-width: 150px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  border: none;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: red;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const AdvancedSearchButtonContainer = styled.button`
  margin-right: 10px;
  background-color:rgb(22, 33, 58);
  height: 50px;
  min-width: 150px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  border: 1px solid #6366f1;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: green;
  }

  @media (max-width: 767px) {
    margin-right: 0;
    width: 100%;
  }
`;

export const SubmitButtonContainer = styled.button`
  background: green;
  color: white;
  height: 46px;
  width: 200px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  gap: 15px;

  &:hover {
    background: green;
    cursor: pointer;
  }
`;

export const AddProposalContainer = styled.button`
  margin-right: 30px;
  background-color: black;
  height: 60px;
  width: 100%;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  gap: 15px;

  &:hover {
    background: green;
    cursor: pointer;
  }
`;

export const ProfilAvatarContainerValidation = styled.div`
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  gap: 20px;
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

export const StarContainer = styled.div`
  display: flex;
`;

export const CompetenceLabelLanguages = styled.span`
  padding: 3px;
  border-radius: 18px;
  font-size: 11px;
  width: auto;
  text-align: center;
  margin: 0 0px;
  margin-right: 0.5rem;
  padding-inline: 12px;
  background: black;
  color: white;
  font-weight: 700;
`;

export const LabelJob = styled.div`
  text-align: center;
  align-items: center;
  margin-top: 30px;
  font-weight: 700;
  font-size: 18px;
  color: white;

`;
