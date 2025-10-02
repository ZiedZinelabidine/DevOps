import {
  HeadingStyle,
  StackStyle,
  SubHeadingStyle,
  SupportingTextStyle,
} from "./CustomText.style";

function CustomText({ subHeadingText, headingText, supportingText }) {
  return (
    <StackStyle spacing={2.5}>
      <SubHeadingStyle>{subHeadingText}</SubHeadingStyle>
      <HeadingStyle>{headingText}</HeadingStyle>
      <SupportingTextStyle>{supportingText}</SupportingTextStyle>
    </StackStyle>
  );
}

export default CustomText;
