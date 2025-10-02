import { generateArray } from "../../../../../utils/helpers/array.helpers";
import { StackStyle } from "../../Formations.style";
import { NumberStyle } from "./CustomStars.style";
import PropTypes from 'prop-types'; // Ensure to import PropTypes for validation

const starsIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/StarRating.svg`;

function CustomStars({ stars, starsTotal }) {
    return (
        <StackStyle direction={"row"} spacing={1.25}>
            <StackStyle direction={"row"} spacing={0.625}>
                <NumberStyle>{stars}</NumberStyle>
                {generateArray(5).map((value) => {
                    const isFilled = stars > value; // Determine if star is filled

                    return (
                        <img
                            key={value}
                            src={starsIcon}
                            alt={`Star rating ${value + 1}`}
                            style={{
                                width: "20px",
                                height: "20px",
                                opacity: isFilled ? 1 : 0.5, // Change opacity based on filled state
                            }}
                        />
                    );
                })}
            </StackStyle>
        </StackStyle>
    );
}

// Add prop type validation
CustomStars.propTypes = {
    stars: PropTypes.number.isRequired,
    starsTotal: PropTypes.number, // Optional if you want to control max display rating
};

export default CustomStars;