import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import Register from "../../Authentification/modals/register";
import FooterContent from "./FooterContent/FooterContent";
import FooterContentDevOps from "./FooterContent/FooterContentDevOps";
import FooterContentDesigner from "./FooterContent/FooterContentDesigner";
import {
  FlexContainer,
  RootStyle,
  StackStyle,
  SubscribeButtonStyle,
  TalkButtonStyle,
  TitleStyle,
  TypographyStyle,
} from "./FooterHome.style";
import FooterContentFrontend from "./FooterContent/FooterContentFrontend";
import FooterContentBackend from "./FooterContent/FooterContentBackend";
import FooterContentMobile from "./FooterContent/FooterContentMobile";
import FooterContentSEO from "./FooterContent/FooterContentSEO";
import FooterContentSY from "./FooterContent/FooterContentSY";
import FooterContentWP from "./FooterContent/FooterContentWP";

function FooterHome({page='default'}) {
  const intl = useIntl();
  const [openModalRegister, setOpenModalRegister] = useState(false);

  const formMethods = useForm({
    mode: "onChange",
    shouldFocusError: true,
  });


  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleModalCloseRegister = () => {
    setOpenModalRegister(false);
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <RootStyle>
      <StackStyle
        direction={isMobile ? "column" : "row"}
        style={{ justifyContent: "space-around" }}
      >
        <StackStyle
          width={isMobile ? "100%" : "40%"}
          style={{ padding: isMobile ? "10px" : "0px" }}
        >
          <TitleStyle>
            {intl.formatMessage({ id: "footer.title" })}
          </TitleStyle>
          <TypographyStyle>
            {intl.formatMessage({ id: "footer.description" })}
          </TypographyStyle>
        </StackStyle>
        <StackStyle
          spacing={2.5}
          width={isMobile ? "100%" : "40%"}
          style={{ padding: isMobile ? "10px" : "0px" }}
        >
          <FormProvider {...formMethods}>
             <FlexContainer spacing={2.5} direction={"row"}>
              <TalkButtonStyle 
                onClick={() => (window.location.href = 'https://itgalaxy.io/svc/app-as-service')}
                aria-label={intl.formatMessage({ id: "footer.buttons.talk" })} // Accessibility
              >
                {intl.formatMessage({ id: "footer.buttons.talk" })}
              </TalkButtonStyle>
              <SubscribeButtonStyle 
                onClick={() => (window.location.href = 'https://itgalaxy.io/svc/app-as-service')}
                aria-label={intl.formatMessage({ id: "footer.buttons.subscribe" })} // Accessibility
              >
                {intl.formatMessage({ id: "footer.buttons.subscribe" })}
              </SubscribeButtonStyle>
            </FlexContainer>
          </FormProvider>
        </StackStyle>
      </StackStyle>
      <FooterContent />
      {/*page === 'default' && (
      <FooterContent />)}
      {page === 'devops' && (
      <FooterContentDevOps />)}
     {page === 'design' && (
      <FooterContentDesigner />)}
      {page === 'frontend' && (
      <FooterContentFrontend />)}
       {page === 'backend' && (
      <FooterContentBackend />)}
      {page === 'mobile' && (
      <FooterContentMobile />)}
      {page === 'seo' && (
      <FooterContentSEO />)}
      {page === 'shopify' && (
      <FooterContentSY />)}
      {page === 'wordpress' && (
      <FooterContentWP />) */}

      <Register
        openModalRegister={openModalRegister}
        setOpenModalRegister={setOpenModalRegister}
        handleModalRegister={handleModalCloseRegister}
        proxy={"dashboard"}
      />
    </RootStyle>
  );
}

export default FooterHome;