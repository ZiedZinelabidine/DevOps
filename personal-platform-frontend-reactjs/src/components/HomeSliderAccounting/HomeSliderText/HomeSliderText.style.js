import styled from "styled-components";

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.spacing * 8}px;
  padding-inline: 1%;
`;

export const StackStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  gap: ${(props) => props.spacing * 8}px;
  overflow: auto;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.active === "FREELANCERS" ? "#14171f" : "#FFFFFF")};
`;

export const TitleStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 58px;
  font-weight: 800;
  line-height: 58px;
  text-align: left;
  color: ${(props) => (props.active === "FREELANCERS" ? "#FFFFFF" : "#14171f")};
`;

export const TypographyStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  text-align: left;
  color: ${(props) => (props.active === "FREELANCERS" ? "#FFFFFF" : "#14171f")};
`;

export const ButtonStyle = styled.button`
  width: 275px;
  height: 75px;
  padding: 15px 29px 15px 29px;
  gap: 20px;
  border-radius: 5px;

  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24.2px;
  text-align: left;
  background: ${(props) =>
    props.active === "FREELANCERS" ? "#FFFFFF" : "#14171f"};
`;
