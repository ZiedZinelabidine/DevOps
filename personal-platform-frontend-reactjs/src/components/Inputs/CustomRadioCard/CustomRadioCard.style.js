import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: auto;
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 185.71px;
  height: 86.03px;
  gap: 0px;
  border-radius: 5px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
`;

export const Label = styled.label`
  display: block;
  align-items: center;
  margin-left: 5px;
  font-size: 20px;
`;
