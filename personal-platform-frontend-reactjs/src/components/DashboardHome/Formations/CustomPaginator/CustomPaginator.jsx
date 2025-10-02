import { generateArray } from "../../../../utils/helpers/array.helpers.js";
import { StackStyle } from "../Formations.style";
const ScrollButton = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/scrollButton.svg`;
const ScrollButtonActive = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/scrollButtonActive.svg`;

function CustomPaginator({
  formationsLength,
  page,
  setPage,
}) {
  const numberButton = formationsLength > 3 ? 3 : formationsLength;

  const getIsActiveButton = (value) => {
    if (page === value && formationsLength === numberButton) {
      return true;
    } else if (formationsLength > numberButton && page < 3 && page === value) {
      return true;
    } else if (
      formationsLength > numberButton &&
      page > 2 &&
      value === 2 &&
      page !== formationsLength
    ) {
      return true;
    } else if (page === formationsLength && value === 3) {
      return true;
    }
    return false;
  };

  const handleOnChange = (value) => {
    if (formationsLength > numberButton && page >= 2) {
      if (value === 3 && page !== formationsLength) {
        setPage(page + 1);
      } else if (page === formationsLength && value === 1 && page !== 1) {
        setPage(page - 2);
      } else if (page !== 1) {
        setPage(page - 1);
      }
    } else {
      setPage(value);
    }
  };

  return (
    <StackStyle
      direction={"row"}
      style={{ justifyContent: "center", gap: "8px" , paddingBottom : "50px"}}
      spacing={1}
    >
      {generateArray(numberButton).map((value) => (
        <div
          key={value}
          style={{
            cursor: !getIsActiveButton(value + 1) ? "pointer" : undefined,
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: getIsActiveButton(value + 1) ? "scale(1.2)" : "scale(1)",
          }}
          onClick={() => {
            if (!getIsActiveButton(value + 1)) {
              handleOnChange(value + 1);
            }
          }}
        >
          {getIsActiveButton(value + 1) ? (
            <img
              src={ScrollButtonActive}
              alt="scroll-button"
              style={{ transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" }}
            />
          ) : (
            <img
              src={ScrollButton}
              alt="scroll-button"
              style={{ transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" }}
            />
          )}
        </div>
      ))}
    </StackStyle>
  );
}

export default CustomPaginator;
