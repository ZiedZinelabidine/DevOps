import styled from "styled-components";

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const RadioOption = styled.div`
  width: 100%;
  position: relative;
  margin-right: 30px;
  padding-right: 10px;
`;

export const RadioLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  border: 1px solid ${(props) => (props.checked ? "#007BFF" : "#E0E0E0")};
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) => (props.checked ? "#F8FAFF" : "white")};
  transition: all 0.2s;

  &:hover {
    border-color: #007bff;
    background: #f8faff;
  }
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
`;

export const Subtitle = styled.span`
  font-size: 14px;
  color: #666;
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const CheckIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.checked ? "#007BFF" : "#E0E0E0")};
  background: ${(props) => (props.checked ? "#007BFF" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "";
    display: ${(props) => (props.checked ? "block" : "none")};
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: white;
  }
`;
