import { useCallback, useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import { useIntl } from "react-intl";
import CustomText from "../CustomText/CustomText";
import CustomPaginator from "../Formations/CustomPaginator/CustomPaginator";
import { RootStyle, StackStyle } from "./Recruitment.style";
import RecruitmentCard from "./RecruitmentCard/RecruitmentCard";

function Recruitment() {
  const intl = useIntl();
  const [page, setPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [showPaginator, setShowPaginator] = useState(false);

  const totalCards = 5;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth > 992) {
      setItemsPerPage(5);
      setShowPaginator(false);
    } else {
      setItemsPerPage(1);
      setShowPaginator(totalCards > 1);
    }
  }, [windowWidth]);

  const cards = useMemo(() => [
    { id: 1, message: "recruitment.card1" },
    { id: 2, message: "recruitment.card2" },
    { id: 3, message: "recruitment.card3" },
    { id: 4, message: "recruitment.card4" },
    { id: 5, message: "recruitment.card5" },
  ], []);

  const visibleCards = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return cards.slice(startIndex, startIndex + itemsPerPage);
  }, [cards, page, itemsPerPage]);

  const handlePageChange = useCallback((newPageNumber) => {
    setPage(newPageNumber);
  }, []);

  return (
    <RootStyle spacing={5}>
      <Helmet>
        <title>{intl.formatMessage({ id: "recruitment.seo.title", defaultMessage: "Opportunité de recrutement " })}</title>
        <meta
          name="description"
          content={intl.formatMessage({ id: "recruitment.seo.description", defaultMessage: "Explorez nos opportunités de recrutement et trouvez les talents adaptés à vos besoins." })}
        />
      </Helmet>
      <CustomText
        headingText={intl.formatMessage({ id: "recruitment.heading" })}
        subHeadingText={intl.formatMessage({ id: "recruitment.subheading" })}
        supportingText={intl.formatMessage({ id: "recruitment.supporting" })}
      />

      <StackStyle style={{ alignItems: "center" }} spacing={5}>
        <StackStyle
          direction={"row"}
          spacing={2}
        >
          {visibleCards.map((card) => (
            <RecruitmentCard
              key={card.id}
              message={intl.formatMessage({ id: card.message })}
            />
          ))}
        </StackStyle>

        {showPaginator && (
          <CustomPaginator
            formationsLength={Math.ceil(totalCards / itemsPerPage)}
            page={page}
            setPage={handlePageChange}
          />
        )}
      </StackStyle>
    </RootStyle>
  );
}

export default Recruitment;