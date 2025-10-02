import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 0.375rem 0.75rem 100px;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  resize: vertical;
  /* height: 150px; */

  &::placeholder {
    color: #ced4da;
  }

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: none;
  }
`;
