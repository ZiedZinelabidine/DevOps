import { Button } from "react-bootstrap";
import styled from "styled-components";

export const TypeJob = styled.div`
  font-family: Inter, sans-serif;
  font-size: 24px;
  color: #14171f;
  line-height: 30.86px;
  padding-left: 740px;
`;

export const StyleDescription = styled.div`
  font-family: serif;
  font-size: 15px;
  padding-bottom: 40px;
  max-widht: 100px;
  white-space: pre-wrap; /* Preserve line breaks and whitespace */
`;

export const StyleHeader = styled.div`
  display: flex;
`;

export const ModalBodyStyle = styled.div`
  padding-bottom: 20px;
  height: auto;
  max-height: 800px; /* Maximum height for the body */
`;

export const AdvancedSearchButtonModalContainer = styled.button`
  position: fixed;
  margin-left: 780px;
  background-color: black;
  color: white;
  height: 46px;
  width: 200px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;
`;

export const AllTags = styled.span`
  display: flex;
  margin-left: 50px;
  gap: 8px;
  flexwrap: wrap;
`;

export const Tag = styled.div`
  width: 113px;
  height: 34px;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #14171f;
  color: white;
  justify-content: center;
  font-family: Inter, sans-serif;
  font-size: 12px;
  text-align: center;
`;

export const Bloc3 = styled.div`
  display: flex;
  padding-top: 7px;
  margin-left: 500px;
`;

export const DatePost = styled.div`
  margin-left: 20px;
  margin-right: 70px;
  justify-content: center;
  font-size: 12px;
  color: #2684ff;
  font-weight: 600;
  margin-top: 8px;
  font-style: italic;
`;

export const StyleI = styled.div`
  color: #2684ff;
  font-size: 12px;
  margin-top: 8px;

  .icon {
    padding-right: 10px;
  }
`;

export const BlocTitle = styled.div`
  display: flex;
  align-items: center; /* Center align vertically */
  width: 100%; /* Ensure it uses the full width of its container */
  padding: 10px; /* Add padding around the BlocTitle */
  justify-content: space-between; /* Use space-between to push elements apart */
`;

export const TitleJob = styled.p`
  font-family: Inter, sans-serif;
  font-size: 24px;
  color: #14171f;
  font-weight: 600;
  line-height: 30.86px;
  padding-right: 20px;
  padding-left: 20px;

  /* Prevents text from wrapping to the next line */
  overflow: hidden; /* Hides overflow */
  white-space: nowrap; /* Prevent text from wrapping */
  text-overflow: ellipsis; /* Allows truncated text with "..." */
`;

export const BudgetWrapperDescript = styled.div`
  flex-shrink: 0; /* Prevent the container from shrinking */
  display: flex;
  justify-content: flex-end; /* Aligns content to the end */
`;

export const Budgetdesc1 = styled.p`
  font-family: Inter, sans-serif;
  right: 0;
  font-size: 24px;
  color: #989898;
  font-weight: 600;
  line-height: 30.86px;
`;

export const Budgetdesc2 = styled.p`
  font-family: Inter, sans-serif;
  right: 0;
  font-size: 24px;
  color: #989898;
  font-weight: 600;
  line-height: 30.86px;
`;

export const RightButtonContainer = styled(Button)`
  float: right;
  background-color: black;
  height: 4vh;
  margin-top: 2%;
  margin-bottom: 20px;

  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border-radius: 10px;
  font-weight: bold;
  font-family: Inter, sans-serif;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const StyledFormText = styled.div`
  font-family: Inter, sans-serif;
  right: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 30.86px;
`;

export const Sections2 = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;
`;

export const ApplyButton = styled.button`
  background-color: black;
  color: white;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;

  &:hover {
    background-color: green;
  }
`;

export const PreambleMessage = styled.p`
  color: red; // Text color
  font-size: 16px; // Font size
  margin: 10px 0; // Margin above and below
  font-weight: bold; // Make the text bold
  line-height: 1.5; // Line height for readability
  background-color: #ffe6e6; // Optional: a light red background to emphasize importance
  padding: 10px; // Padding around the text
  border-radius: 5px; // Rounded corners for the background
  border: 1px solid red; // Optional: border to make it stand out
  margin-left: 70px;
`;
