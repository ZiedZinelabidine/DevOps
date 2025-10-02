import { InputsWrapperRange, RangeSliderContainer } from "./styled"; // Ensure the correct path is used

const StyledRangeSlider = ({
  min,
  max,
  hour_rate_min,
  hour_rate_max,
  setDailyRateMin,
  setDailyRateMax,
}) => {
  const handleChange = (e, type) => {
    const value = Number(e.target.value);

    if (type === "min") {
      // Ensure the min value does not exceed the max value
      if (value < hour_rate_max) {
        setDailyRateMin(value);
      }
    } else if (type === "max") {
      // Ensure the max value does not fall below the min value
      if (value > hour_rate_min) {
        setDailyRateMax(value);
      }
    }
  };

  return (
    <div>
      <RangeSliderContainer
        hour_rate_min={hour_rate_min}
        hour_rate_max={hour_rate_max}
        min={min}
        max={max}
      >
        <div className="progress" />
        <input
          className="range-min"
          type="range"
          min={min}
          max={max}
          step={1}
          value={hour_rate_min}
          onChange={(e) => handleChange(e, "min")}
        />
        <input
          className="range-max"
          type="range"
          min={min}
          max={max}
          step={1}
          value={hour_rate_max}
          onChange={(e) => handleChange(e, "max")}
        />
      </RangeSliderContainer>
      <InputsWrapperRange>
        <input
          className="input-type-range-min-max"
          type="number"
          min={min}
          max={max}
          value={hour_rate_min}
          onChange={(e) => handleChange(e, "min")}
        />
        <input
          className="input-type-range-min-max"
          type="number"
          min={min}
          max={max}
          value={hour_rate_max}
          onChange={(e) => handleChange(e, "max")}
        />
      </InputsWrapperRange>
    </div>
  );
};

export default StyledRangeSlider;
