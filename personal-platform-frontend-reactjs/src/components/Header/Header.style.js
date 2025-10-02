import styled from "styled-components";

export const RootStyle = styled.div`
  padding-top: 15px;
 // margin-bottom: 15px;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: flex-start;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 20;
  width: 100%;
  padding-inline: ${(props) => (props.isLoggedIn ? "8%" : undefined)};
  background-color: ${(props) =>
    props.scrolling
      ? props.active === "FREELANCERS"
        ? "black"
        : "white"
      : "black"};
  position: ${(props) => (props.scrolling ? "fixed" : "unset")};
  height: ${(props) => (props.scrolling ? "auto" : "auto")};
  padding-left: 1.875em;
  padding-right: 5em;
  padding-bottom: 10px;

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
    width: 50px;
    padding-left: 2px;
    border-radius: 50px;
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

export const ButtonAboutUs = styled.button`
  width: 110px;
  height: 46px;
  margin-right: 30px;
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

export const LanguageSelect = styled.select`
  min-width: 120px;
  height: 40px;
  background-color: transparent;
  color: #000;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 0 24px 0 12px;
  appearance: none;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;

  &:hover {
    border-color: #000;
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    border-color: #000;
  }

  option {
    background-color: #fff;
    color: #000;
    padding: 8px;
  }
`;

