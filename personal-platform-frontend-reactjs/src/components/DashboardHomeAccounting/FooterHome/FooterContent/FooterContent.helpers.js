const TiktokIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/tiktokIcon.svg`;
const XIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/XIcon.svg`;
const InstagramIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/instagramIcon.svg`;
const LinkedInIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/linkedInIcon.svg`;
const YoutubeIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/youtubeIcon.svg`;
const PinterestIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/pinterestIcon.svg`;

export const getSocialMediaIcon = (id) => {
  switch (id) {
    case 1:
      return TiktokIcon;
    case 2:
      return XIcon;
    case 3:
      return InstagramIcon;
    case 4:
      return LinkedInIcon;
    case 5:
      return YoutubeIcon;
    case 6:
      return PinterestIcon;
    default:
      return null;
  }
};
