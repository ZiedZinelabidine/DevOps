import styled from "styled-components";

export const StyledRadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 20px 0;
  min-height: 40px;
`;
export const StyledInput = styled.input`
  // padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  position: absolute;
  right: 4%;
  top: 10%;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  // Add a custom checkmark
  &:checked::before {
    content: "✓"; /* You can use any Unicode checkmark symbol */
    text-align: center;
    background-color: #009ff5;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: block;
    border: none;
    color: white;
  }
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
  padding: 10px;
  border: 1px solid black !important;
  height: 100%;
  border-radius: 10px;
  padding: 15px !important;
  min-width: 200px;
`;
