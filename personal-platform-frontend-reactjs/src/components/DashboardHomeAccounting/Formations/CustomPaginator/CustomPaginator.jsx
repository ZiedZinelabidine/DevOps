import { generateArray } from "../../../../utils/helpers/array.helpers.js";
import { StackStyle } from "../Formations.style";
const ScrollButton = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/scrollButton.svg`;
const ScrollButtonActive = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/scrollButtonActive.svg`;

function CustomPaginator({
  formationsLength,
  page,
  setPage,
  setAnimateDirection,
}) {
  const numberButton = formationsLength > 3 ? 3 : formationsLength;

  const nextPage = (value) => {
    setAnimateDirection("outLeft");
    setTimeout(() => {
      setPage(value);
      setAnimateDirection("inLeft");
    }, 100);
  };

  const prevPage = (value) => {
    setAnimateDirection("outRight");
    setTimeout(() => {
      setPage(value);
      setAnimateDirection("inRight");
    }, 100);
  };

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
        nextPage(page + 1);
      } else if (page === formationsLength && value === 1 && page !== 1) {
        prevPage(page - 2);
      } else if (page !== 1) {
        prevPage(page - 1);
      }
    } else {
      nextPage(value);
    }
  };

  return (
    <StackStyle
      direction={"row"}
      style={{ justifyContent: "center" }}
      spacing={1}
    >
      {generateArray(numberButton).map((value) => (
        <div
          style={{
            cursor: !getIsActiveButton(value + 1) ? "pointer" : undefined,
          }}
          key={value}
          onClick={() => {
            if (!getIsActiveButton(value + 1)) {
              handleOnChange(value + 1);
            }
          }}
        >
          {getIsActiveButton(value + 1) ? (
            <img src={ScrollButtonActive} alt="scroll-button" />
          ) : (
            <img src={ScrollButton} alt="scroll-button" />
          )}
        </div>
      ))}
    </StackStyle>
  );
}

export default CustomPaginator;
