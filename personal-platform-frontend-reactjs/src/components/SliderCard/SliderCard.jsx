const SliderCard = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "32px",
        left: "-50%",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "10px",
        width: "fit-content",
        height: "115px",
        paddingVertical: "17px",
        paddingHorizontal: "31px",
        filter: "drop-shadow(5px 5px 10px black)",
      }}
    >
      <div>
        <h2>Project Schedule Management</h2>
        <p>Jan 31 - Feb 4</p>
      </div>
    </div>
  );
};

export default SliderCard;
