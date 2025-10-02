import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding-top: 10px;
  padding-left: 4%;
  overflow-y: scroll;
  scrollbar-width: none;
  min-height: 100vh;
  width: 100%;
  background: #202124;
`;

export const ListingJobs = styled.div`
  background: #202124;
  width: 100%;
  margin-top: 10px;
  min-height: 100vh;
  padding-left: 10px;
  overflow-x: hidden; // This enables vertical scrolling
`;

export const StyledHr = styled.hr`
    border: none;
    height: 2px; /* Adjust height as needed */
    background-color: white; /* Set the color to white */
    color: white;
    margin-top: 2%;
`;



export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 1.5%;
  padding-inline: 10px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
`;


export const ContainerWrapper = styled.div`
  display: flex;
  width: 93%;
`;

export const SearchInputContainer = styled.div`
  position: relative;
  border-radius: 15px;
  width: 100%;
  height: 37px;

  @media (min-width: 767px) and (max-width: 1023px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 70%;
  }
`;

export const SearchIconInput = styled.i`
  position: absolute;
  left: 10px;
  top: 50%;
  border: none;
  transform: translateY(-50%);
`;

export const SearchFilter = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 50px;
  display: flex;
  margin-top: 10px;

  @media (max-width: 767px) {
    width: 100%;
  }

`;

export const CardContainers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  min-height: 707px;

  @media (min-width: 767px) {
    justify-content: flex-start;
  }
`;
export const NotFoundTextStyle = styled.div`
  font-size: 40px;
  font-weight: 501;
  font-family: serif;
  text-align: center;
  justify-content: center;
  padding-left: 25%;
  color: white;

`;
export const StyleLineCount = styled.div`
  display: flex;
`;

export const JobLabelsContainer = styled.div`
  display: flex;
  gap: 10px; // Space between buttons, adjust as needed
`;

export const ViewLabelJobs = styled.div`
  color: rgba(38, 132, 255, 1);
  padding: 24px;
  font-family: Inter, sans-serif;
  height: 70px;
  border-bottom: 3px solid rgba(38, 132, 255, 1);
  width: auto;
  cursor: pointer;

  &:hover {
    opacity: 0.8; // Optional hover effect
  }
`;

export const ViewLabelMyJobs = styled.div`
  color: white;
  padding: 24px;
  font-family: Inter, sans-serif;
  height: 70px;
  border-bottom: 3px solid white;
  width: auto;
  cursor: pointer;

  &:hover {
    opacity: 0.8; // Optional hover effect
  }
`;

export const CardProject = styled.div`
  box-shadow: 10px 10px 0px 0px #3f464f;
  height: 150px;
  width: 330px;
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded corners */
  padding: 16px; /* Inner spacing */
  margin: 16px; /* Outer spacing */
  margin-top: 50px;
  transition: transform 0.3s; /* Smooth transition for hover effect */

  align-items: center; /* Center align items */
  margin: 20px; /* Optional: Outer spacing for the container */

  &:hover {
    transform: scale(1.05); /* Slightly scale up on hover */
    cursor: pointer;
  }
`;

export const CardProjectTitle = styled.div`
  font-family: Inter, sans-serif;
  font-weight: 501;
  color: white;
`;

export const DatePost = styled.div`
  color: #c8c8c8;
  font-family: Inter, sans-serif;
  padding-top: 30px;
  margin-bottom: 20px;
`;

export const StyleAllProjects = styled.div``;

export const AllCard = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;



export const AddNewJobButtonstyle = styled.button`
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