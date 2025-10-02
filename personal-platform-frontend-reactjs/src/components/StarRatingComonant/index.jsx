import { generateArray } from "../../utils/helpers/array.helpers";
import { Star } from 'lucide-react'; // Import the Star icon from Lucide

const StarRating = ({
  count,
  value,
  inactiveColor = "#ddd",
  size = 24,
  activeColor = "#f00",
  onChange,
}) => {
  const handleChange = (value) => {
    onChange?.(value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {generateArray(count).map((_, i) => {
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: i < value ? activeColor : inactiveColor,
                width: size,
                height: size,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => handleChange(i + 1)} // Move the onClick here for clarity
            >
              <Star size={size} color={i < value ? activeColor : inactiveColor} /> {/* Using the Lucide Star icon */}
            </span>
          </div>
        );
      })}
      <span style={{ fontSize: 12, color: "#717171", marginLeft: 5 }}>
        {" "}
        ({value}){" "}
      </span>
    </div>
  );
};

export default StarRating;