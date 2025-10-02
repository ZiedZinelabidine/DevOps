import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardFreelancerComponant from "../../pages/HomePage/componants/CardFreelancerComponant";
import CardNewServiceComponant from "../../pages/HomePage/componants/CardNewServiceComponant";
import CardServiceComponant from "../../pages/HomePage/componants/CardServiceComponant";
import { freelancers, itemCarousel } from "../../pages/HomePage/data";
import "./CarouselSection.css";
const LeftArrowIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/LeftArrowIcon.svg`;
const RightArrowIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/RightArrowIcon.svg`;

const CarouselSection = ({ retrieveCardInfo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % freelancers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <img
        style={{ position: "absolute", right: 4 }}
        onClick={() => onClick()}
        src={RightArrowIcon}
        alt="previus item"
      />
    );
  };
  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <img
        style={{ position: "absolute", left: 0 }}
        onClick={() => onClick()}
        src={LeftArrowIcon}
        alt="next item"
      />
    );
  };

  return (
    <Carousel
      autoPlaySpeed={6000}
      centerMode={false}
      arrows={true}
      autoPlay={true}
      swipeable={true}
      draggable={true}
      showDots={false}
      infinite={true}
      partialVisible={false}
      itemClass="handle-item"
      className="shadow-drop-2-centered container"
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      }}
    >
      {itemCarousel.map((el, index) => (
        <div
          // style={{ border: '1px solid blue' }}
          key={el.id}
          // onMouseEnter={() => retrieveCardInfo(el)}
        >
          {el.kindCard === "freelancer" ? (
            <CardFreelancerComponant
              index={index}
              currentIndex={currentIndex}
              data={el.data}
              retrieveCardInfo={retrieveCardInfo}
            />
          ) : el.kindCard === "new service" ? (
            <CardNewServiceComponant
              index={index}
              currentIndex={currentIndex}
              data={el.data}
              retrieveCardInfo={retrieveCardInfo}
            />
          ) : (
            <CardServiceComponant
              index={index}
              currentIndex={currentIndex}
              data={el.data}
              retrieveCardInfo={retrieveCardInfo}
            />
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselSection;
