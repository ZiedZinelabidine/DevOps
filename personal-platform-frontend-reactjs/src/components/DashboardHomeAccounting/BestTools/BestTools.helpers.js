const GitHubIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/githubIcon.svg`;
const GitLabIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/gitlabIcon.svg`;
const JiraIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/jiraIcon.svg`;
const SplineIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/splineIcon.svg`;
const WebflowIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/webflowIcon.svg`;
const FigmaIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/figmaIcon.svg`;

export const getToolIcon = (toolsId) => {
  switch (toolsId) {
    case 1:
      return <img src={GitHubIcon} alt="GitHub" />;
    case 2:
      return <img src={GitLabIcon} alt="GitLab" />;
    case 3:
      return <img src={JiraIcon} alt="Jira" />;
    case 4:
      return <img src={SplineIcon} alt="Spline" />;
    case 5:
      return <img src={WebflowIcon} alt="Webflow" />;
    case 6:
      return <img src={FigmaIcon} alt="Figma" />;
    default:
      return null;
  }
};
