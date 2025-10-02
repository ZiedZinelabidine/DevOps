import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { generateArray } from "../../../../utils/helpers/array.helpers";
import {
  SHOPIFY_SKILLS,
  SHOPIFY_PROJECTS,
  SHOPIFY_FORMATIONS,
  SHOPIFY_BLOGS,
  SHOPIFY_Q1,
  SHOPIFY_Q2,
} from "./FooterContent.constants";
import { getSocialMediaIcon } from "./FooterContent.helpers";
import {
  DividerStyle,
  RootStyle,
  StackStyle,
  TextStyle,
  TypographyStyle,
} from "./FooterContent.style";

function FooterContentSY() {
  const intl = useIntl();
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024;

  const TermOrPrivacy = () => (
    <StackStyle>
      <TypographyStyle
        style={{
          lineHeight: "20px",
          letterSpacing: "0.15px",
          marginBottom: 0,
          display: "flex",
          gap: "8px",
        }}
      >
        <Link
          to="/termsofservice"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {intl.formatMessage({ id: "footer.terms.service" })}
        </Link>
        •
        <Link
          to="/useragreement"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {intl.formatMessage({ id: "footer.terms.agreement" })}
        </Link>
        •
        <Link
          to="/privacypolicy"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {intl.formatMessage({ id: "footer.terms.privacy" })}
        </Link>
      </TypographyStyle>
    </StackStyle>
  );

  const SocialMedia = () => (
    <StackStyle
      direction={"row"}
      spacing={1.5}
      isMobile={isMobile}
      width={"100%"}
    >
      {generateArray(7).map((value) => (
        <div key={value} style={{ cursor: "pointer" }}>
          {getSocialMediaIcon(value)}
        </div>
      ))}
    </StackStyle>
  );

  const TermsOrSocialMedia = () => (
    <StackStyle
      direction={isMobile ? "column" : "row"}
      style={{
        width: "100%",
        justifyContent: isMobile ? "center" : "space-between",
        alignItems: "center",
      }}
    >
      {isMobile ? (
        <SocialMedia />
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
      <StackStyle spacing={6} width={"100%"} style={{ padding: isTablet ? "5% 2%" : "5%" }}>
        <StackStyle spacing={4}>
          <StackStyle
            direction={"row"}
            width={"100%"}
            spacing={3}
            style={{
              flexWrap: isTablet ? 'wrap' : 'nowrap',
              justifyContent: isTablet ? 'center' : 'space-between',
              gap: isTablet ? '2rem' : '3rem'
            }}
          >
            {[
              { title: "SHOPIFY Skills", items: SHOPIFY_SKILLS },
              { title: "SHOPIFY Projets", items: SHOPIFY_PROJECTS },
              { title: "Formations SHOPIFY", items: SHOPIFY_FORMATIONS },
              { title: "Blogs SHOPIFY", items: SHOPIFY_BLOGS },
              { title: "Questions communes par les SHOPIFY", items: SHOPIFY_Q1 },
              { title: "Questions communes par les SHOPIFY", items: SHOPIFY_Q2 }
            ].map((section, index) => (
              <StackStyle
                key={index}
                width={isTablet ? '45%' : '15%'}
                spacing={1.5}
                style={{
                  minWidth: isTablet ? '280px' : 'auto',
                  marginBottom: isTablet ? '2rem' : 0
                }}
              >
                <TextStyle>
                  {typeof section.title === 'string' ? section.title : intl.formatMessage({ id: section.title })}
                </TextStyle>
                {section.items.map((value, idx) => (
                  <TypographyStyle key={idx} style={{ fontWeight: 500 }}>
                    {typeof value === 'string' ? value : intl.formatMessage({ id: value })}
                  </TypographyStyle>
                ))}
              </StackStyle>
            ))}
          </StackStyle>
        </StackStyle>

        <StackStyle
          direction={isTablet ? "column" : "row"}
          spacing={2}
          keepRowOnMobile
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            gap: isTablet ? '2rem' : '1rem'
          }}
        >
          <TermsOrSocialMedia />
        </StackStyle>
      </StackStyle>
    </RootStyle>
  );
}

export default FooterContentSY;
