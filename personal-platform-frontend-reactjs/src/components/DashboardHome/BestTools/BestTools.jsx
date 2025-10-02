import { memo, useMemo } from "react";
import { useIntl } from "react-intl";
import { BEST_TOOLS } from "./BestTools.constants";
import { getToolIcon } from "./BestTools.helpers";
import {
  Container,
  CustomBox,
  CustomTypography,
  RowStack,
  SubTitleStyle,
  TitleStyle,
} from "./BestTools.style";
import { Helmet } from "react-helmet";

// Define the icon path using an environment variable
const RightArrowIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/rightArrow.svg`;

function BestTools({ active, isMobile }) {
  const intl = useIntl();

  const applicationsData = [
    {
      title: "Github",
      expertNumber: 269,
    },
    {
      title: "Gitlab",
      expertNumber: 269,
    },
    {
      title: "Jira",
      expertNumber: 269,
    },
    {
      title: "Spline",
      expertNumber: 269,
    },
    {
      title: "Webflow",
      expertNumber: 269,
    },
    {
      title: "Figma",
      expertNumber: 269,
    },
  ];

  const toolsList = useMemo(
    () =>
      applicationsData?.map((tool, index) => (
        <CustomBox
          key={tool.title}
          style={{ gap: "6px" }}
          isMobile={isMobile}
          as="article" // Semantic HTML for each tool representation
          aria-labelledby={`tool-title-${index}`} // Accessibility improvement
        >
          {getToolIcon(tool.icon ? tool.icon : BEST_TOOLS[index].icon)}
          <div style={{ paddingTop: "24px" }}>
            <TitleStyle id={`tool-title-${index}`}>{tool.title}</TitleStyle>
            <RowStack style={{ gap: "14px" }}>
              <SubTitleStyle>
                {intl.formatMessage(
                  { id: "best_tools.true_experts" },
                  { number: tool.expertNumber }
                )}
              </SubTitleStyle>
              <img src={RightArrowIcon} alt="right-arrow" />
            </RowStack>
          </div>
        </CustomBox>
      )),
    [applicationsData, isMobile, intl]
  );

  return (
    <Container as="section" aria-label="Best Tools">
      <Helmet>
        <title> {intl.formatMessage({ id: "best_tools.title" })}</title>
        <meta
          name="description"
          content= {intl.formatMessage({ id: "best_tools.desc" })}
        />
      </Helmet>
      <CustomTypography active={active} as="h1">
        {intl.formatMessage({ id: "best_tools.heading" })}
      </CustomTypography>
      <RowStack isMobile={isMobile}>{toolsList}</RowStack>
    </Container>
  );
}

export default memo(BestTools);