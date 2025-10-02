import { useEffect, useState } from "react";
import CustomText from "../CustomText/CustomText";
import LandingCard from "./LandingCard/LandingCard";
import { LANDING } from "./LandingContent.constants";
import {
  ColumnStyle,
  Container,
  GridItem,
  IconStyle,
  RootStyle,
} from "./LandingContent.style";
const LandingIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/landingIcon.webp`;

function LandingContent() {
  const splitIntoColumns = (arr, numColumns) => {
    return Array.from({ length: numColumns }, (_, colIndex) =>
      arr.filter((_, i) => i % numColumns === colIndex)
    );
  };

  const [columns, setColumns] = useState(() => splitIntoColumns(LANDING, 3));

  useEffect(() => {
    const updateColumns = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 900) {
        setColumns(splitIntoColumns(LANDING, 1));
      } else if (screenWidth <= 1200) {
        setColumns(splitIntoColumns(LANDING, 2));
      } else {
        setColumns(splitIntoColumns(LANDING, 3));
      }
    };

    window.addEventListener("resize", updateColumns);
    updateColumns();

    return () => window.removeEventListener("resize", updateColumns);
  }, [LANDING]);

  return (
    <RootStyle>
      <CustomText
        headingText={"What our customers say"}
        subHeadingText={"Testimonials"}
        supportingText={`Here, we showcase the voices of real people who have transformed their experiences with our product/service.`}
      />
      <Container>
        {columns.map((column, columnIndex) => (
          <ColumnStyle key={columnIndex}>
            {column.map((testimonial, index) => (
              <GridItem key={index}>
                <LandingCard
                  content={testimonial.content}
                  user={testimonial.user}
                />
              </GridItem>
            ))}
          </ColumnStyle>
        ))}
      </Container>
      <IconStyle>
        <img src={LandingIcon} alt="Landing Icon" />
      </IconStyle>
    </RootStyle>
  );
}

export default LandingContent;
