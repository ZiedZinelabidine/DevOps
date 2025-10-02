import CustomAutoComplete from "components/Inputs/CustomAutoComplete/CustomAutoComplete";
import PropTypes from "prop-types"; // Import PropTypes
import { useState } from "react";

import { SearchWrapper } from "./SearchBarAdvanced.style";

const SearchBarAdvanced = ({
  setIsFocused,
  fullWidth,
  active,
  width,
  isMobile,
  isFocused,
  handleChange,
}) => {
  const backgroundColor =
    active === "ENTREPRISES" ? "rgba(220, 220, 220, 0.35)" : "white";
  const [searchType, setSearchType] = useState("Training");

  return (
    <SearchWrapper fullWidth={fullWidth}>
      <CustomAutoComplete
        isMobile={isMobile}
        setIsFocused={setIsFocused}
        active={active}
        searchType={searchType}
        recieveSkills={(e) => handleChange && handleChange(e)}
        redirect={true}
        border="1px solid transparent "
        placeholder="Cherchez with skills..."
        padding="0px"
        radius="6px"
        height={"46px"}
        width={
          width ? width : isFocused ? "260px" : isMobile ? "176px" : "330px"
        }
        backgroundColor={backgroundColor}
      />
    </SearchWrapper>
  );
};

// Define PropTypes
SearchBarAdvanced.propTypes = {
  searchType: PropTypes.string.isRequired,
};

export default SearchBarAdvanced;
