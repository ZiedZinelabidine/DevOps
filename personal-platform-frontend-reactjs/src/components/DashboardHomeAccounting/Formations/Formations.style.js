import styled from "styled-components";

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.spacing * 8}px;
  padding-inline: 5%;
`;

export const StackStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  gap: ${(props) => props.spacing * 8}px;
  overflow: auto;
`;

export const RowStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.spacing * 8}px;
  overflow: auto;
  padding: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    align-items: start;
    justify-content: start;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 53px; /* Space between grid items */
    padding-left: 2px;
    width: 100%; /* Ensure full width */
    height: 100%; /* Auto-height */
    margin: 0; /* Remove any margins */
    overflow-x: hidden; /* Prevent horizontal scrolling */
    overflow-y: hidden; /* Allow vertical scrolling */
  }
`;

export const ButtonStyle = styled.button`
  width: 178px;
  height: 40px;
  padding: 10px 16px 10px 16px;
  gap: 8px;
  border-radius: 8px;
  background-color: #f9fafb;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px 0px #1018280d;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: #101828;
  align-self: center;
`;
