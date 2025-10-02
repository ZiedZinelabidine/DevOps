import { useEffect, useState } from "react";
import {
  HOME_SLIDER_COMPANY_CONTENTS,
  HOME_SLIDER_FREELANCE_CONTENTS,
} from "./HomeSlider.constants";
import { RootStyle } from "./HomeSlider.style";
import HomeSliderContent from "./HomeSliderContent/HomeSliderContent";

const HomeSlider = ({ active, setActive }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousIndex(currentIndex);
      setCurrentIndex((prevIndex) => {
        const newIndex =
          prevIndex + 1 !== contentArray.length ? prevIndex + 1 : 0;
        return newIndex;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const toggleSwitch = () => {
    setActive(active === "ENTREPRISES" ? "FREELANCERS" : "ENTREPRISES");
  };

  const contentArray =
    active === "FREELANCERS"
      ? HOME_SLIDER_FREELANCE_CONTENTS
      : HOME_SLIDER_COMPANY_CONTENTS;

  return (
    <RootStyle>
      {contentArray.map((content, index) => (
        <HomeSliderContent
          key={index}
          index={index}
          content={content}
          active={active}
          isVisible={index === currentIndex || index === previousIndex}
          zIndex={5}
          currentIndex={currentIndex}
          prevIndex={previousIndex}
        />
      ))}
    </RootStyle>
  );
};

export default HomeSlider;
