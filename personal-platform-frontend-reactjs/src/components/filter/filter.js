import { useState } from "react";
import MultiSelectCompoent from "../Inputs/CustomMultiSelectAutoComplet/multiSelect";
import {
  InputContainer,
  RetourButtonFilter,
  RetourButtonFilterContainer,
  SearchSubmitButton,
  StayledLabel,
  StayledLabelFilter,
  WrapperSidebar,
} from "./styled";
const ArrowLeftIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/leftArrow.svg`;

const Filter = ({
  filterMobile,
  setFilterMobile,
  setFilterSearch,
  filterSearch,
  refetch,
}) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);
  const [filterValues, setFilterValues] = useState({
    location: [],
    languages: [],
    skills: [],
    hourlyRate: {
      hour_rate_max: maxValue,
      hour_rate_min: minValue,
    },
  });

  const Data = [
    { value: "java", label: "java" },
    { value: "nodejs", label: "nodejs" },
    { value: "html", label: "html" },
  ];

  const DataLocation = [
    { value: "Tunisia", label: "Tunisia" },
    { value: "France", label: "France" },
    { value: "Belgique", label: "Belgique" },
  ];
  const DataLanguage = [
    { value: "francais", label: "francais" },
    { value: "arabe", label: "arabe" },
    { value: "anglais", label: "anglais" },
  ];

  const handleSearchClick = () => {
    let queryParams = "";

    if (filterValues?.skills?.length > 0) {
      queryParams += `&skills=${filterValues?.skills?.join(",")}`;
    }

    if (filterValues?.location?.length > 0) {
      queryParams += `&country_details=${filterValues?.location
        ?.map((loc) => loc.value)
        .join(",")}`;
    }

    if (filterValues?.languages?.length > 0) {
      queryParams += `&languages=${filterValues?.languages
        ?.map((lang) => lang.value)
        .join(",")}`;
    }

    if (filterValues?.hourlyRate?.hour_rate_max) {
      queryParams += `&hour_rate_max=${maxValue}`;
      queryParams += `&hour_rate_min=${minValue}`;
    }
    setFilterSearch(queryParams);
  };

  const handleSkillsChange = (selectedSkills) => {
    setFilterValues((prevFilters) => ({
      ...prevFilters,
      skills: selectedSkills.map((skill) => skill.value),
    }));
  };

  const handleLocationChange = (selectedLocation) => {
    setFilterValues((prevFilters) => ({
      ...prevFilters,
      location: selectedLocation.map((location) => ({
        value: location.value,
        label: location.label,
      })),
    }));
  };

  const handleLanguagesChange = (selectedLanguages) => {
    setFilterValues((prevFilters) => ({
      ...prevFilters,
      languages: selectedLanguages.map((language) => ({
        value: language.value,
        label: language.label,
      })),
    }));
  };

  const resetFilter = () => {
    setFilterSearch("");
  };

  return (
    <WrapperSidebar>
      <StayledLabelFilter>Filter</StayledLabelFilter>
      <hr />
      {filterMobile && (
        <RetourButtonFilterContainer onClick={() => setFilterMobile(false)}>
          <ArrowLeftIcon
            style={{
              marginRight: "8px",
              width: "18px",
              height: "18px",
            }}
          />
          <RetourButtonFilter onClick={() => setFilterMobile(false)}>
            Retour
          </RetourButtonFilter>
        </RetourButtonFilterContainer>
      )}

      <InputContainer>
        <StayledLabel>Skills</StayledLabel>
        <MultiSelectCompoent
          isMulti={true}
          options={Data}
          selectedOptions={filterValues?.skills.map((skill) => ({
            value: skill,
            label: skill,
          }))}
          onChange={handleSkillsChange}
        />
      </InputContainer>
      {/* <InputContainer>
        <StayledLabel>Daily rate</StayledLabel>
        <StyledRangeSlider
          min={0}
          max={1000}
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          defaultValue={[minValue, maxValue]}
        />
      </InputContainer> */}
      <InputContainer>
        <StayledLabel>Location</StayledLabel>
        <MultiSelectCompoent
          isMulti={true}
          options={DataLocation}
          selectedOptions={filterValues?.location}
          onChange={handleLocationChange}
        />
      </InputContainer>
      <InputContainer>
        <StayledLabel>Languages</StayledLabel>
        <MultiSelectCompoent
          isMulti={true}
          options={DataLanguage}
          selectedOptions={filterValues?.languages}
          onChange={handleLanguagesChange}
        />
      </InputContainer>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <SearchSubmitButton
          style={{ marginBottom: "20px" }}
          onClick={() => handleSearchClick()}
        >
          Search
        </SearchSubmitButton>
      </div>
    </WrapperSidebar>
  );
};

export default Filter;
