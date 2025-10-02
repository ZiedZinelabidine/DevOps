import { Badge, Button, InputGroup } from "react-bootstrap";
import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;
  margin-left: 30px;
  width: "100% !important";
  min-width: "100px";
  @media (max-width: 768px) {
    width: 51% !important;
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  width: 50vw;
  border: 2px solid #e8e8e8;
  border-radius: 5px;
  background-color: white;
  z-index: 1000;
  padding: 20px;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  align-items: center;
  padding: 10px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: ${(props) => props.width || "50px"};
  height: ${(props) => props.height || "50px"};
  margin-right: ${(props) => props.marginRight || "0px"};
`;

export const CardDetails = styled.div`
  flex: 1;
`;

export const NameBadge = styled(Badge)`
  margin-left: 10px;
  background-color: #e5ffe3 !important;
  color: #008334;
  border-radius: 2px;
  font-size: 10px;
  line-height: 12px;
`;

export const RoleTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
`;

export const RoleTag = styled(Badge)`
  margin: 2px;
  background-color: white !important;
  border: 1px solid #e8eaee;
  border-radius: 4px;
  color: black;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  background-color: black;
  border: none;
  border-radius: 40px;
  &:hover {
    background-color: #333;
  }
  height: 31px;
  width: 94px;
  font-size: 12px;
  line-height: 14.5px;
`;

export const SuggestionsSection = styled.div`
  margin-top: 20px;
`;

export const SuggestionTitle = styled.h5`
  margin-bottom: 10px;
`;

export const SuggestionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const SuggestionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75px;
  margin: 5px;
`;

export const AdvancedSearchButton = styled.div`
  margin-top: 20px;
  border: none;
  color: #19b4fd;
  font-size: 21px;
  line-height: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    color: #0d8bea;
  }
`;

export const StyledInputGroup = styled(InputGroup)`
  width: 100% !important;
  & div {
    width: 100%;
  }
  & div > input {
    border-radius: "6px";
    background-color: "#f5f5f5";
    height: "46px";
    width: "100%";
  }
`;
