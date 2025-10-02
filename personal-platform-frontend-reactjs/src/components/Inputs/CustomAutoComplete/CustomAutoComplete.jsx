import { useEffect, useState } from "react";
import styled from "styled-components";
import { skillsData } from "../../../data/skillData";

const AutoCompleteContainer = styled.div`
  width: 100%;
  position: relative;
`;

const InputWrapper = styled.div`
  width: ${(props) => props.width || "100%"};
  min-height: ${(props) => props.height || "46px"};
  padding: ${(props) => props.padding || "4px 8px"};
  border: ${(props) =>
    props.border || `1px solid ${props.error ? "#FF4D4F" : "#E0E0E0"}`};
  border-radius: ${(props) => props.radius || "4px"};
  background-color: ${(props) => props.backgroundColor || "white"};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  cursor: text;
  &:focus-within {
    background-color: ${(props) => (props.error ? "#FFF1F0" : "#edf2f7")};
    border-color: ${(props) => (props.error ? "#FF4D4F" : "#2684FF")};
    box-shadow: ${(props) =>
      props.error
        ? "0 0 0 2px rgba(255, 77, 79, 0.2)"
        : "0 0 0 2px rgba(38, 132, 255, 0.2)"};
  }
  ${(props) =>
    props.error &&
    `
    border-color: #FF4D4F;
    background-color: #FFF1F0;
  `}
`;

const SelectedItem = styled.div`
  background-color: #e2e8f0;
  border-radius: 4px;
  padding: 2px 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #4a5568;
  padding: 0;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    color: #2d3748;
  }
`;

const AutoCompleteInput = styled.input`
  border: none;
  outline: none;
  padding: 4px;
  flex: 1;
  min-width: 120px;
  background: transparent;
  font-size: 14px;
  &::placeholder {
    color: #a0aec0;
  }
`;

const SuggestionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  width: 100%;
  background-color: white;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const SuggestionItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${(props) => (props.isHighlighted ? "#F0F7FF" : "white")};

  &:hover {
    background-color: #f0f7ff;
  }
`;

const CustomAutoComplete = ({
  isMobile,
  setIsFocused,
  active,
  searchType,
  recieveSkills,
  redirect,
  border,
  placeholder,
  padding,
  radius,
  height,
  width,
  backgroundColor,
  error,
  selectedSkills: externalSelectedSkills,
  name,
  options,
  value,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState("");

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (externalSelectedSkills) {
      setSelectedSkills(externalSelectedSkills);
    }
  }, [externalSelectedSkills]);

  const filterSuggestions = (input) => {
    if (!input) return [];
    return skillsData.filter(
      (skill) =>
        skill.title.toLowerCase().includes(input.toLowerCase()) &&
        !selectedSkills.some((selected) => selected.id === skill.id)
    );
  };

  const handleKeyDown = (e) => {
    if (!suggestions.length) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prevIndex) =>
          prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < suggestions.length) {
          handleSelect(suggestions[highlightedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
      default:
        break;
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setHighlightedIndex(-1);

    const filtered = filterSuggestions(value);
    setSuggestions(filtered);
    setIsOpen(true);
    setIsFocused && setIsFocused(true);
  };

  const handleSelect = (suggestion) => {
    if (!selectedSkills.some((skill) => skill.id === suggestion.id)) {
      const newSelectedSkills = [...selectedSkills, suggestion];
      setSelectedSkills(newSelectedSkills);
      setInputValue("");
      setSuggestions([]);
      setIsOpen(false);
      setHighlightedIndex(-1);
      recieveSkills && recieveSkills(newSelectedSkills);
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    const newSelectedSkills = selectedSkills.filter(
      (skill) => skill.id !== skillToRemove.id
    );
    setSelectedSkills(newSelectedSkills);
    recieveSkills && recieveSkills(newSelectedSkills);
  };

  const handleFocus = () => {
    setIsFocused && setIsFocused(true);
    setIsOpen(true);
    setIsTouched(true);
  };

  const handleBlur = () => {
    // Delay closing to allow click events on suggestions
    setTimeout(() => {
      setIsFocused && setIsFocused(false);
      setIsOpen(false);
    }, 200);
  };

  return (
    <AutoCompleteContainer>
      <InputWrapper
        width={width}
        height={height}
        padding={padding}
        border={border}
        radius={radius}
        backgroundColor={backgroundColor}
        error={error}
        data-testid={`autocomplete-${name}`}
        onClick={() => setIsOpen(true)}
      >
        {selectedSkills.map((skill) => (
          <SelectedItem key={skill.id}>
            {skill.title}
            <RemoveButton
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveSkill(skill);
              }}
            >
              ×
            </RemoveButton>
          </SelectedItem>
        ))}
        <AutoCompleteInput
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={selectedSkills.length === 0 ? placeholder : ""}
        />
      </InputWrapper>
      <SuggestionsList isOpen={isOpen && suggestions.length > 0}>
        {suggestions.map((suggestion, index) => (
          <SuggestionItem
            key={suggestion.id}
            isHighlighted={index === highlightedIndex}
            onClick={() => handleSelect(suggestion)}
          >
            {suggestion.title}
          </SuggestionItem>
        ))}
      </SuggestionsList>
      {error && isTouched && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
          {error}
        </div>
      )}
    </AutoCompleteContainer>
  );
};

export default CustomAutoComplete;
