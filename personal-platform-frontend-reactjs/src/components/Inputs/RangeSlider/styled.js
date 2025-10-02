import styled from "styled-components";

export const RangeSliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
  border-radius: 15px;
  background: #e5e7eb;
  margin-top: 10px;
  cursor: pointer;

  .progress {
    position: absolute;
    left: ${(props) =>
      ((props.hour_rate_min - props.min) / (props.max - props.min)) * 100}%;
    right: ${(props) =>
      ((props.max - props.hour_rate_max) / (props.max - props.min)) * 100}%;
    height: 100%;
    border-radius: 15px;
    background: #9ba2b0;
  }

  input[type="range"] {
    position: absolute;
    width: 100%;
    height: 1px;
    -webkit-appearance: none;
    background: none;
    outline: none;
  }

  .range-min,
  .range-max { /* Corrected here to apply to both the handles */
    pointer-events: auto;
    -webkit-appearance: none;
    width: 20px; /* Slider thumb width */
    height: 20px; /* Slider thumb height */
    background: #373f51;
    border-radius: 20px;
    opacity: 1;
    transition: background 0.2s ease;
  }

  .range-min:hover,
  .range-max:hover {
    cursor: pointer;
  }
`;

export const InputsWrapperRange = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  .input-type-range-min-max {
    width: 60px;
    height: 50px;
    border-radius: 10px;
    text-align: center;
    border: 1.5px solid #9ba2b0;
    transition: all 0.2s ease;
  }

  .input-type-range-min-max:focus {
    border: 1.5px solid #373f51;
    background-color: white;
  }

  .input-type-range-min-max:hover {
    border: 1.5px solid #373f51;
    background-color: white;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
