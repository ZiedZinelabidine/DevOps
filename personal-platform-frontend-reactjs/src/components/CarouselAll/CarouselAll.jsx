import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarouselAll.css";
const ansible = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/ansible.png`;
const services = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/aws-services.png`;
const azure = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/azure-cloud.png`;
const gitlab = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/gitlab-logo.png`;
const googlecloud = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/googlecloud.png`;
const grafana = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/grafana.png`;
const helm = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/helm.png`;
const kube = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/kube.png`;
const litmus = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/litmus.png`;
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 8, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 6,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default function CarouselAll() {
  const sliderImageUrl = [
    //First image url
    {
      url: ansible,
    },
    {
      url: services,
    },
    //Second image url
    {
      url: azure,
    },
    //import bgheader `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/bgheader.jpg"
    {
      url: gitlab,
    },

    //Fourth image url

    {
      url: googlecloud,
    },
    {
      url: grafana,
    },
    {
      url: helm,
    },
    {
      url: kube,
    },
    ,
    {
      url: litmus,
    },
  ];
  return (
    <div className="custom-container">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img
                src={imageUrl.url}
                alt="logos"
                style={{ width: "70px", height: "auto" }}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
