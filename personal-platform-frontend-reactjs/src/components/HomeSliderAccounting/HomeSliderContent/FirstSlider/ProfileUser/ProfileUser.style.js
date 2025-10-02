import styled from "styled-components";

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StackStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction ?? "column"};
  gap: ${(props) => props.spacing * 8}px;
  overflow: auto;
`;

export const TitleStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 29.05px;
  text-align: left;
  color: #14171f;
  margin-bottom: 0px;
`;

export const TypographyStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  text-align: left;
  color: #14171f;
  margin-bottom: 0px;
`;

export const BoxStyle = styled.div`
  display: flex;
  padding: 5px 8px 5px 8px;
  border-radius: 16px;
  background: #22c55e1a;
  align-items: center;
  justify-content: center;

  p {
    font-family: Inter, sans-serif;
    font-size: 8px;
    font-weight: 800;
    line-height: 12px;
    text-align: center;
    color: #16a34a;
    margin-bottom: 0px;
  }
`;

export const ButtonStyle = styled.button`
  width: 100px;
  height: 31px;
  padding: 8px 12px 8px 12px;
  gap: 10px;
  border-radius: 40px;
  background: #14171f;
  align-self: end;

  font-family: Inter, sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 14.52px;
  text-align: left;
  color: #ffffff;
`;
