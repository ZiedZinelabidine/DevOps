import { generateArray } from "../../../../utils/helpers/array.helpers";
import {
  ABOUT_IT_GALAXY,
  COMPANY_ARRAY,
  CONTACT_ARRAY,
  HIRE_FREELANCERS_ARRAY,
} from "./FooterContent.constants";
import { getSocialMediaIcon } from "./FooterContent.helpers";
import {
  DividerStyle,
  RootStyle,
  StackStyle,
  TextStyle,
  TypographyStyle,
} from "./FooterContent.style";

function FooterContent() {
  const isMobile = window.innerWidth <= 768;

  const TermOrPrivacy = () => (
    <StackStyle>
      <TypographyStyle
        style={{
          lineHeight: "20px",
          letterSpacing: "0.15px",
          marginBottom: 0,
        }}
      >
        Terms of Use • Privacy Notice • Supply Chain Transparency • Privacy
        Rights Request Form • Purchase Terms • Accessibility Statement
      </TypographyStyle>
    </StackStyle>
  );

  const SocialMedia = () => (
    <StackStyle
      direction={"row"}
      spacing={1.5}
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      {generateArray(7).map((value) => (
        <div key={value} style={{ cursor: "pointer" }}>
          {getSocialMediaIcon(value)}
        </div>
      ))}
    </StackStyle>
  );

  const TermsOrSocialMedia = () => (
    <StackStyle direction={isMobile ? "column" : "row"}>
      {isMobile ? (
        <>
          <SocialMedia />
          <TermOrPrivacy />
        </>
      ) : (
        <>
          <TermOrPrivacy />
          <SocialMedia />
        </>
      )}
    </StackStyle>
  );

  return (
    <RootStyle>
      <DividerStyle />
      <StackStyle spacing={6} width={"100%"} style={{ paddingInline: "5%" }}>
        <StackStyle spacing={4.125}>
          {isMobile && (
            <StackStyle width={"100%"}>
              <TypographyStyle>{ABOUT_IT_GALAXY}</TypographyStyle>
            </StackStyle>
          )}
          <StackStyle direction={"row"} width={"100%"} spacing={3}>
            {!isMobile && (
              <StackStyle width={"55%"}>
                <TypographyStyle>{ABOUT_IT_GALAXY}</TypographyStyle>
              </StackStyle>
            )}
            <StackStyle width={isMobile ? "33%" : "15%"} spacing={1.5}>
              <TextStyle>HIRE FREELANCERS</TextStyle>
              {HIRE_FREELANCERS_ARRAY.map((value, index) => (
                <TypographyStyle key={index} style={{ fontWeight: 500 }}>
                  {value}
                </TypographyStyle>
              ))}
            </StackStyle>
            <StackStyle width={isMobile ? "33%" : "15%"} spacing={1.5}>
              <TextStyle>company</TextStyle>
              {COMPANY_ARRAY.map((value, index) => (
                <TypographyStyle key={index} style={{ fontWeight: 500 }}>
                  {value}
                </TypographyStyle>
              ))}
            </StackStyle>
            <StackStyle width={isMobile ? "33%" : "15%"} spacing={1.5}>
              <TextStyle>contact</TextStyle>
              {CONTACT_ARRAY.map((value, index) => (
                <TypographyStyle key={index} style={{ fontWeight: 500 }}>
                  {value}
                </TypographyStyle>
              ))}
            </StackStyle>
          </StackStyle>
        </StackStyle>

        <StackStyle
          direction={isMobile ? "column" : "row"}
          style={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <TermsOrSocialMedia />
        </StackStyle>
      </StackStyle>
    </RootStyle>
  );
}

export default FooterContent;
