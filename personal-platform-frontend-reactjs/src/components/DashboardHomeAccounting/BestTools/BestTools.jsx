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
const RightArrowIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/rightArrow.svg`;

function BestTools({ active, isMobile }) {
  // const {
  //   data: applicationsData,
  //   error: applicationsError,
  //   isLoading: applicationsLoading,
  // } = useGetTrainingsQuery(`?page=1&limit=6&type=APPLICATIONS`);
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
  return (
    <Container>
      <CustomTypography active={active}>
        Benefit from the expertise of the best in IT
      </CustomTypography>
      <RowStack isMobile={isMobile}>
        {applicationsData?.map((tool, index) => (
          <CustomBox key={index} style={{ gap: "6px" }} isMobile={isMobile}>
            {getToolIcon(tool.icon ? tool.icon : BEST_TOOLS[index].icon)}
            <div style={{ paddingTop: "24px" }}>
              <TitleStyle>{tool.title}</TitleStyle>
              <RowStack style={{ gap: "14px" }}>
                <SubTitleStyle>{tool.expertNumber} True Experts</SubTitleStyle>
                <img src={RightArrowIcon} alt="right-arrow" />
              </RowStack>
            </div>
          </CustomBox>
        ))}
      </RowStack>
    </Container>
  );
}

export default BestTools;
