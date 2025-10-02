const FirstEnterpriseSliderImage = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/enterprise-slider-image-1.webp`;
const SecondEnterpriseSliderImage = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/silderhome2.webp`;
const ThirdEnterpriseSliderImage = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/sliderhome3.webp`;
const FirstFreeLancerSliderImage = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/sliderHome4.webp`;
const SecondFreeLancerSliderImage = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/sliderHome5.webp`;
const ThirdFreeLancerSliderImage = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/sliderHome6.webp`;

export const HOME_SLIDER_COMPANY_CONTENTS = [
  {
    backgroundImage: FirstEnterpriseSliderImage,
    titleId: "slider_accounting.company.slide1_title",
    text: "",
    buttonLabelId: "Get Started",
    buttonUrl: "/signupAccounting",
    id: 1,
  },
  {
    backgroundImage: SecondEnterpriseSliderImage,
    titleId: "slider_accounting.company.slide2_title",
    text: "",
    buttonLabelId: "Get Started",
    id: 2,
    buttonUrl: "/signupAccounting",
  },
  {
    backgroundImage: ThirdEnterpriseSliderImage,
    titleId: "slider_accounting.company.slide3_title",
    text: "",
    buttonLabelId: "Get Started",
    id: 3,
    buttonUrl: "/signupAccounting",
  },
];

export const HOME_SLIDER_FREELANCE_CONTENTS = [
  {
    backgroundImage: FirstFreeLancerSliderImage,
    titleId: "slider_accounting.freelance.slide1_title",
    text: "",
    buttonLabelId: "Get Started",
    id: 4,
    buttonUrl: "/signupAccounting",
  },
  {
    backgroundImage: SecondFreeLancerSliderImage,
    titleId: "slider_accounting.freelance.slide2_title",
    text: "",
    buttonLabelId: "Get Started",
    id: 5,
    buttonUrl: "/signupAccounting",
  },
  {
    backgroundImage: ThirdFreeLancerSliderImage,
    titleId: "slider_accounting.freelance.slide3_title",
    text: "",
    buttonLabelId: "Get Started",
    id: 6,
    buttonUrl: "/signupAccounting",
  },
];
