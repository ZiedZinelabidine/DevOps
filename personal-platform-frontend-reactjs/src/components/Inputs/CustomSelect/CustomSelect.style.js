import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  background-color: #111827;
  border: 1px solid #6366f1;
  background-clip: padding-box;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-top: 4px;

  &::placeholder {
    color: #ced4da;
  }

  &:focus {
    color: #495057;
    border-color: #6366f1;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: none;
  }
`;
