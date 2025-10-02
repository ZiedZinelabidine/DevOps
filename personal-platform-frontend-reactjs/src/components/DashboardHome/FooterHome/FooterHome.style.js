import styled from "styled-components";

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 821px;
  height: 100%;
  background:rgb(14, 15, 19);
  padding-top: 30px;

  @media (max-width: 1024px) {
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const StackStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  gap: ${(props) => props.spacing * 8}px;
  width: ${(props) => props.width};
  background:rgb(14, 15, 19);
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  gap: ${(props) => props.spacing * 8}px;
  width: ${(props) => props.width};

  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const InputContainer = styled.div`
  input {
    height: 51px;
    padding: 15px;
    border-radius: 5px;
    background: white !important;
    color: black !important;
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 16.8px;
    letter-spacing: 0.5px;
    text-align: left;

    & :placeholder {
      color: black !important;
    }
  }
`;

export const TitleStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 40px;
  font-weight: 800;
  line-height: 48px;
  text-align: left;
  color: #ffffff;
`;

export const TypographyStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  text-align: left;
  color: #8a8a8a;
`;

export const TalkButtonStyle = styled.button`
  width: 50%;
  height: 48px;
  padding: 17px 44px 17px 44px;
  gap: 10px;
  border-radius: 5px;
  border: 2px solid #ffffff;
  background: white;

  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.5px;
  text-align: center;
  color: black;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SubscribeButtonStyle = styled.button`
  width: 50%;
  height: 48px;
  padding: 17px 44px 17px 44px;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid #ffffff;
  background: #ffffff;

  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.5px;
  text-align: center;
  color: #14171f;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
