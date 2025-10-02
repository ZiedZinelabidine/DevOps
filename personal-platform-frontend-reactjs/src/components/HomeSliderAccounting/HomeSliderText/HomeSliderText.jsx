import { useNavigate } from "react-router-dom";
import {
  ButtonStyle,
  RootStyle,
  StackStyle,
  TitleStyle,
  TypographyStyle,
} from "./HomeSliderText.style";
const ArrowUpRight = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/akar-icons-arrow-up-right.svg`;
const ArrowUpRightBlack = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/akar-icons-arrow-up-right-black.svg`;

function HomeSliderText({ title, text, buttonLabel, buttonUrl, active }) {
  const navigate = useNavigate();

  return (
    <RootStyle>
      <TitleStyle active={active}>{title}</TitleStyle>
      <TypographyStyle active={active}>{text}</TypographyStyle>
      <ButtonStyle
        // icon={active==='FREELANCERS' ? ArrowUpRightBlack :ArrowUpRightBlack}
        onClick={() => navigate("/signupAccounting")}
        active={active}
      >
        <StackStyle
          direction={"row"}
          style={{ justifyContent: "space-between" }}
          active={active}
        >
          {"Get Started"}
          {active === "FREELANCERS" ? (
            <img src={ArrowUpRightBlack} />
          ) : (
            <img src={ArrowUpRight} />
          )}
        </StackStyle>
      </ButtonStyle>
    </RootStyle>
  );
}

export default HomeSliderText;
