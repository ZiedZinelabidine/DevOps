import { Button } from "react-bootstrap";
import styled from "styled-components";
const FilterIconSVG = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/filter.svg`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #202124;
  width: 100%;
  max-width: 100%; /* Prevents any max width constraints */
  padding-left: 20px;
  padding-right: 20px;
`;

export const FilterContainer = styled.div`
  display: none;
  @media (min-width: 767px) {
    display: flex;
    background-color: white;
    padding: 15px;
    // height: "100vh",
  }
`;

export const StyledHr = styled.hr`
    border: none;
    height: 2px; /* Adjust height as needed */
    background-color: white; /* Set the color to white */
    color: white;
    margin-top: 15px;
`;


export const ProfilSelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 21px;
  background-color: rgb(255, 255, 255);
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyleProposalDone = styled.div`
  display: inline-flex; /* Align icon and text in a row */
  align-items: center; /* Center items vertically */
  //background-color: black; /* Green background */
  color: white; /* Text color */
  padding: 8px 12px; /* Padding around the text */
  margin-top: 10px;
  border-radius: 5px; /* Rounded corners */
  font-size: 17px; /* Font size */
  font-weight: bold; /* Make text bold */
 
  i {
    margin-right: 5px; /* Space between icon and text */
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
  width: 100%;
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
  width: 100%;
  max-width: 100%; /* Prevents any max width constraints */
  min-height: 100vh;

`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 767px) {
    padding-left: 20px;
    width: 75%;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
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

export const ProfilImgCircle = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 149px;
`;

export const ContainerProfileSelected = styled.div`
  display: flex;
  position: relative;
`;
export const DeleteProfileSelected = styled.div`
  position: absolute;
  right: 0;
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  flex-direction: row;
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
  margin-top: 1.5%;
  margin-bottom: 2%;
  padding-inline: 10px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const SearchFilter = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 42px;
  display: flex;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const AllTags = styled.span`
  display: flex;
  margin-left: 50px;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  width: 113px;
  height: 34px;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  justify-content: center;
  font-family: Inter, sans-serif;
  font-size: 12px;
  text-align: center;
  font-weight: 700;
`;

export const TagLocation = styled.div`
  width: 113px;
  height: 25px;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
  color: black;
  justify-content: center;
  font-family: Inter, sans-serif;
  font-size: 11px;
`;

export const DatePost = styled.div`
  margin-left: 20px;
  margin-right: 70px;
  justify-content: center;
  font-size: 15px;
  color: #2684ff;
  font-weight: 600;
  margin-top: 8px;
  font-style: italic;
`;

export const StyleI = styled.div`
  color: #2684ff;
  font-size: 15px;
  margin-top: 8px;

  .icon {
    padding-right: 10px;
  }
`;

export const Bloc2 = styled.div`
  display: flex; /* Use flexbox for alignment */
  // Remove or keep the below line based on your requirement
  //flex-direction: column; /* Arrange its children vertically or remove to keep them in a row */
  padding-top: 30px;
  padding-bottom: 30px;
  margin-left: auto; /* Automatically adjust left margin */
  margin-right: 0; /* Align to right */
  height: 40px; /* Set a fixed height to match StyleProposalDone */
  justify-content: flex-end; /* Align items to the end (right) */
  align-items: center; /* Center vertically */
  font-weight: normal; /* Text styling */
`;

export const BlocTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TitleJob = styled.p`
  padding-top: 10px;
  font-family: Inter, sans-serif;
  font-size: 24px;
  color: white;
  font-weight: 600;
  line-height: 30.86px;
  margin-right: auto; /* Ensures it stays on the left */

`;

export const DescriptionJob = styled.p`
  font-family: Inter, sans-serif;
  font-size: 18px;
  color: white;
  font-weight: 500;
  line-height: 25.2px;
  padding-bottom: 30px;
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
  border-radius: 15px;
  flex: 1;
  min-width: 200px;
  height: 37px;

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
    padding: 0;
  }
`;

export const SearchIconInput = styled.i`
  position: absolute;
  left: 10px;
  top: 50%;
  border: none;
  transform: translateY(-50%);
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 6px 15px 6px 30px;
  border: 1px solid #ccc;
  border-radius: 15px;
  background: #f5f5f5;
  box-sizing: border-box;
`;

export const SearchButton = styled.button`
  padding: 0px;
  background-color: #203442;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  height: 50px;
  @media (min-width: 767px) {
    padding: 8px 12px;
  }
`;

export const CardContainer = styled.div`
  background: white;
  /* max-width: 300px; */
  /* max-height: 550px; */
  padding: 16px;
  border-radius: 15px;
  position: relative;
  margin: 10px;
  width: 296px;
  height: 480px;
`;

export const ButtonSelectProfils = styled.button`
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 8px 16px;
  border: none;
  background-color: #203442;
  border-color: #203442;
  border-radius: 20px;
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
  margin-top: 10px;
  min-height: 707px;
`;
export const NotFoundTextStyle = styled.div`
  font-size: 40px;
  font-weight: 501;
  font-family: serif;
  text-align: center;
  color: white;
`;

export const CardFirstBloc = styled.div`
  position: relative;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
`;

export const ImageProfileCard = styled.img`
  object-fit: cover;
  height: 100%;
  border-radius: 10px;
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5% 0;
  align-items: flex-start;
  width: 100%;
  height: 100hv;
`;
export const TitleContent = styled.span`
  font-size: 16px;
  width: 100%;
  /* height: 60px; */
  white-space: nowrap; // Prevent text from wrapping
  overflow: hidden; // Hide overflowing text
  text-overflow: ellipsis; // Add ellipsis for overflowing text
  font-weight: 500;
`;

export const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  padding: 4px 12px;
  background-color: #203442;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 40px;
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
  align-items: center;
`;
export const StarImg = styled.img`
  width: 94px;
`;
export const CompetenceArea = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;
export const CompetenceLabel = styled.span`
  padding: 3px;
  border-radius: 18px;
  font-size: 11px;
  width: auto;
  text-align: center;
  margin: 0 0px;
  margin-right: 0.5rem;
`;

export const SpanPrice = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

export const SpanTax = styled.span`
  font-size: 12px;
  color: #a9a9a9;
`;
export const SpanJour = styled.span`
  font-size: 14px;
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

export const ListingJobs = styled.div`
  background: #202124;
  width: 100%;
  min-height: 100vh;
  padding-left: 10px;
  padding-right: 10px;
  overflow-y: scroll; // This enables vertical scrolling
  overflow-x: hidden; // This enables vertical scrolling
`;

export const RightButtonContainer = styled(Button)`
  margin-left: 75%;
  margin-right: 40px;
  background-color: black;
  height: 40px;
  width: 150px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  gap: 15px;
`;

export const StyledIConHiring = styled.img`
  height: 46px;
  width: 80px;
  margin-left: 380px;
`;

export const CardJobs = styled.div`
  margin-top: 60px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const CardJob = styled.div`
  margin-top: 60px;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 1px solid white;
  cursor: pointer;
  background-color: ${({ canApply }) =>
    canApply ? "#111827" : "transparent"}; // Change background color here

  &:hover {
    color: black;
    border: none;
    background-color: #111827; // Keep hover background color

  }
`;

export const AdvancedSearchButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  height: 50px;
  margin-top: 1%;

  ${props => props.variant === 'primary' && `
    background: #4F46E5;
    color: white;
    border: none;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

    &:hover {
      background: #4338CA;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
  `}

  ${props => props.variant === 'secondary' && `
    background: #111827;
    color: white;
    border: 1px solid #374151;

    &:hover {
      background: #1F2937;
    }
  `}
`;

export const NewJobButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  height: 50px;
  margin-top: 1%;

  ${props => props.variant === 'primary' && `
    background: #4F46E5;
    color: white;
    border: none;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

    &:hover {
      background: #4338CA;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
  `}

  ${props => props.variant === 'secondary' && `
    background: #111827;
    color: white;
    border: 1px solid #374151;

    &:hover {
      background: #1F2937;
    }
  `}
`;

export const AdvancedSearchButtonModalContainer = styled.button`
  position: fixed;
  margin-left: 820px;
  background-color: black;
  color: white;
  height: 46px;
  width: 250px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const AdvancedSearchClearButtonModalContainer = styled.button`
  background-color: black;
  color: white;
  height: 46px;
  width: 200px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const SearchInputModalContainer = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: 40px;
`;

export const styleButtonFooter = styled.div`
  display: flex;
`;

export const ViewLabelJobs = styled.div`
  color: rgba(38, 132, 255, 1);
  padding: 24px;
  width: auto;
  font-family: Inter, sans-serif;
  height: 70px;
  border-bottom: 3px solid rgba(38, 132, 255, 1);
  cursor: pointer;

  &:hover {
    opacity: 0.8; // Optional hover effect
  }
`;
export const ViewLabelMyJobs = styled.div`
  color: white;
  width: auto;
  padding: 24px;
  font-family: Inter, sans-serif;
  height: 70px;
  border-bottom: 3px solid white;
  cursor: pointer;

  &:hover {
    opacity: 0.8; // Optional hover effect
  }
`;

export const JobLabelsContainer = styled.div`
  display: flex;
  gap: 10px; // Space between buttons, adjust as needed
`;

export const StyleLineCount = styled.div`
  display: flex;
`;

export const StyleJobsCount = styled.div`
  display: flex;
  font-family: Inter, sans-serif;
  padding-top: 24px;
  width: auto;

`;

export const StyleCount = styled.div`
  font-weight: bold;
  display: flex;
  padding-right: 10px;
  color: white;

`;

export const StyleCount1 = styled.div`
  display: flex;
  border-bottom: 3px solid rgba(38, 132, 255, 1);
  font-family: Inter, sans-serif;
  height: 40px;
  margin-left: 400px;
  color: white;

`;

export const StyleLineOne = styled.div`
  display: flex;
`;

export const Bloc3 = styled.div`
  display: flex;
  padding-top: 7px;
  margin-left: 500px;
`;

export const Budget = styled.p`
  font-family: Inter, sans-serif;
  right: 0;
  font-size: 24px;
  color: white;
  font-weight: 600;
  line-height: 30.86px;
`;

export const BudgetWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const ButtonMoreLess = styled.div`
  color: black;
  border: none;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
`;

export const BudgetWrapperDescript = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end; /* Aligns content to the end */
`;

export const Budgetdesc1 = styled.p`
  font-family: Inter, sans-serif;
  right: 0;
  font-size: 24px;
  padding-left: 450px;
  color: #989898;
  font-weight: 600;
  line-height: 30.86px;
`;

export const Budgetdesc2 = styled.p`
  font-family: Inter, sans-serif;
  right: 0;
  font-size: 24px;
  padding-left: 650px;
  color: #989898;
  font-weight: 600;
  line-height: 30.86px;
`;

export const Bloc = styled.div`
  display: flex; /* Correcting the missing colon */
  align-items: center; /* Center items vertically if needed */
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  margin-right: 20px;
  margin-top: 30px;
`;
