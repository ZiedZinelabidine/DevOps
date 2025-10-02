import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import GenericInput from "../../Inputs/GenericInput/GenericInput";
import FooterContent from "./FooterContent/FooterContent";
import { formConfig } from "./FooterHome.constants";
import {
  FlexContainer,
  InputContainer,
  RootStyle,
  StackStyle,
  SubscribeButtonStyle,
  TalkButtonStyle,
  TitleStyle,
  TypographyStyle,
} from "./FooterHome.style";

function FooterHome() {
  const [inputValue, setInputValue] = useState("");

  const formMethods = useForm({
    mode: "onChange",
    shouldFocusError: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    formMethods.setValue(name, value);
    setInputValue(value);
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
            Sign up for early access & itGalaxy exclusives
          </TitleStyle>
          <TypographyStyle>
            By entering your email address and clicking subscribe, you consent
            to receive marketing emails, from or about itgalaxy See our Privacy
            Notice Privacy Notice for more details.
          </TypographyStyle>
        </StackStyle>
        <StackStyle
          spacing={2.5}
          width={isMobile ? "100%" : "40%"}
          style={{ padding: isMobile ? "10px" : "0px" }}
        >
          <FormProvider {...formMethods}>
            <InputContainer>
              <GenericInput
                inputObject={{
                  ...formConfig.email,
                  label: "",
                }}
                onChange={handleChange}
                disabledForm={false}
              />
            </InputContainer>

            <FlexContainer spacing={2.5} direction={"row"}>
              <TalkButtonStyle>Let’s talk</TalkButtonStyle>
              <SubscribeButtonStyle onClick={() => console.log(inputValue)}>
                Subscribe
              </SubscribeButtonStyle>
            </FlexContainer>
          </FormProvider>
        </StackStyle>
      </StackStyle>
      <FooterContent />
    </RootStyle>
  );
}

export default FooterHome;
