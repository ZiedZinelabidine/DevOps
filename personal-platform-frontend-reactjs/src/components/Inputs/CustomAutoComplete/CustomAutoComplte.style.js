import styled from "styled-components";

export const CustomAutoCompleteContainer = styled.div`
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
export const TopContainer = styled.div`
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  background-color: ${({ redirect }) => (redirect ? "transparent" : "white")};
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  width: "100%";
  border-radius: ${({ radius }) => radius};
  &:focus-within {
    background-color: transparent;
  }
`;
export const ListContainer = styled.div`
  position: relative;
`;
export const SelectedElementContainer = styled.span`
  background-color: transparent;
  border-radius: 0.375rem;
  border: 1px solid black;
  padding: 0.25rem;
  &:focus {
    background-color: transparent;
    border: 1px solid black;
  }
`;
export const DeleteSelectedElementContainer = styled.span`
  padding: 0.25rem;
  cursor: pointer;
`;

export const InputContainer = styled.input`
  outline: none;
  flex: 1;
  min-width: 150px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  &:focus {
    background-color: #edf2f7;
  }
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => width};
  border-radius: ${({ radius }) => radius};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  margin: 0;
  overflow: hidden;
`;
export const StyledUl = styled.ul`
  position: absolute;
  width: 100%;
  background-color: white;
  margin-top: 0.25rem;
  box-shadow: none;
  max-height: 20rem;
  overflow: auto;
  padding: 0;
  z-index: 10;
  display: ${({ isOpen, itemsLength }) =>
    !(isOpen && itemsLength) ? "none" : "block"};
`;
export const ListItem = styled.li`
  padding: 0.5rem 0.75rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border: ${({ highlighted }) =>
    highlighted ? "1px solid transparent" : "none"};
  background-color: "transparent";
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  display: flex;
  flex-direction: column;
`;
