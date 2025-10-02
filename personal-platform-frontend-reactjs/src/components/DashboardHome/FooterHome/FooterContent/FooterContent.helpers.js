const XIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/XIcon.svg`;
const LinkedInIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/linkedInIcon.svg`;


export const getSocialMediaIcon = (id, url) => {
  switch (id) {
    case 1:
      return (
        <a href={"https://x.com/ItgalaxyContact"} target="_blank" rel="noopener noreferrer">
          <img src={XIcon} alt="X" />
        </a>
      );
    case 2:
      return (
        <a href={"https://www.linkedin.com/company/https-itgalaxy-io"} target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn" />
        </a>
      );
    default:
      return null;
  }
};

