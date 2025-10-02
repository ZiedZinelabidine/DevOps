import styled from "styled-components";

export const RootStyle = styled.div`
  padding-top: 15px;
  margin-bottom: 15px;
  min-height: 100%;
  display: flex;
  align-self: center;
  align-items: flex-start;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 20;
  width: ${(props) => (props.isLoggedIn ? "95%" : "100%")};
  padding-inline: ${(props) => (props.isLoggedIn ? "8%" : undefined)};
  background-color: ${(props) =>
    props.scrolling
      ? props.active === "FREELANCERS"
        ? "black"
        : "white"
      : "transparent"};
  position: ${(props) => (props.scrolling ? "fixed" : "unset")};
  height: ${(props) => (props.scrolling ? "auto" : "0px")};
  padding-left: 9.875em;
  padding-right: 9.875em;

  @media (max-width: 768px) {
    width: ${(props) => (props.isFocused ? "100%" : "100%")};
    padding-inline: 0;
    transition: all 0.3s ease;
  }
`;

export const StackStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  gap: ${(props) => props.spacing * 8}px;
  width: ${(props) => props.width};
  @media (max-width: 768px) {
    padding-right: 24px;
  }
`;

export const ButtonInscription = styled.button`
  width: 110px;
  height: 46px;
  padding: 10px;
  border-radius: 5px;
  background: ${(props) =>
    props.active === "FREELANCERS" ? "#ffffff" : "#14171f"};
  text-align: center;

  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.94px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.active === "FREELANCERS" ? "#14171f" : "#ffffff")};
`;
export const Logo = styled.img`
  width: 208px;
  height: 40px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: ${(props) => (props.isFocused ? "none" : "block")};
    transition: all 0.3s ease;
    width: 75px;
    padding-left: 24px;
  }
`;
export const ButtonLogin = styled.button`
  width: 110px;
  height: 46px;
  padding: 10px;
  border-radius: 5px;
  background: ${(props) =>
    props.active === "FREELANCERS" ? "black" : "#ffffff"};
  text-align: center;
  border: 0.1rem solid;

  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.94px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.active === "FREELANCERS" ? "#ffffff" : "black")};
`;
