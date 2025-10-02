// Spinner.js

const Spinner = () => {
  const spinnerStyle = {
    width: "40px",
    height: "40px",
    border: "5px solid #f3f3f3", // Light grey
    borderTop: "5px solid #3498db", // Blue
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000, // Make sure it appears above other content
  };

  return (
    <div style={overlayStyle}>
      <div style={spinnerStyle} />
    </div>
  );
};

export default Spinner;
