import styled from "styled-components";

export const WrapperSidebar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const StayledLabel = styled.label`
  font-size: 15px;
  font-weight: 501;
  color: #14171f;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const StayledLabelFilter = styled.label`
  font-size: 25px;
  font-weight: 501;
  color: #14171f;
  padding-top: 10px;
  padding-left: 15px;

  padding-bottom: 30px;
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 100%;
  margin: 0 auto;
  border-radius: 1px;
`;

export const RangeSlider = styled.div`
  position: relative;
  width: 714px;
  height: 10px;
  border-radius: 15px;
  background: linear-gradient(90deg, #5f822d 0%, #a5af33 100%);
`;

export const Progress = styled.div`
  position: absolute;
  left: 25%;
  right: 0%;
  height: 100%;
  border-radius: 15px;
  background: linear-gradient(90deg, #e4e7c1 0%, #d39892 100%);
`;

export const RangeInput = styled.input.attrs({
  type: "range",
})`
  position: absolute;
  width: 100%;
  height: 10px;
  -webkit-appearance: none;
  pointer-events: none;
  background: none;
  outline: none;
`;

export const InputContainer = styled.div`
  /* background-color: pink; */
  margin-bottom: 25px;
  width: 100%;
`;

export const RetourButtonFilter = styled.button`
  color: black;
  border: none;
  background-color: #fff;
  &:hover {
    color: black;
    border: none;
    background-color: #fff;
  }
`;

export const RetourButtonFilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;
  @media (min-width: 767px) {
    display: none;
  }
`;

export const SearchSubmitButton = styled.button`
  padding: 8px 12px;
  background-color: black;
  color: white;
  border: 2px solid black;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  height: 50px;
`;
