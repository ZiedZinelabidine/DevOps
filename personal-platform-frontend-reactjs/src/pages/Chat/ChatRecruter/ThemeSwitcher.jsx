import styled from "styled-components";

const SwitcherContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 20px;
  font-family: Arial, sans-serif;
`;

const SwitcherText = styled.span`
  font-size: 12px;
  margin: 0 10px;
  user-select: none;
`;

const Switcher = styled.button`
  background: ${({ theme }) => (theme === "light" ? "#f0f0f0" : "#3a3a3a")};
  border-radius: 20px;
  width: 50px;
  height: 25px;
  border: 1px solid #c3c3c3;
  position: relative;
  cursor: pointer;
  outline: none;

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: ${({ theme }) => (theme === "light" ? "2px" : "24px")};
    width: 21px;
    height: 21px;
    background: ${({ theme }) => (theme === "light" ? "#a1a1a1" : "#a1a1a1")};
    border-radius: 50%;
    transition: 0.3s;
  }
`;

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <SwitcherContainer>
      <SwitcherText theme={theme} isActive={theme === "light"}>
        LIGHT
      </SwitcherText>
      <Switcher theme={theme} onClick={toggleTheme} />
      <SwitcherText theme={theme} isActive={theme === "dark"}>
        DARK
      </SwitcherText>
    </SwitcherContainer>
  );
};

export default ThemeSwitcher;
