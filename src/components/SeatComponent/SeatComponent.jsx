import React from "react";
import "./SeatComponent.css";
const SeatComponent = (props) => {
  const { reserved, selected, passenger, number } = props.data;

  const colorByGender = () => {
    if (passenger.gender == "male") {
      return "#77c9d4";
    } else if (passenger.gender == "female") {
      return "#f294dc";
    }
  };

  const color = () => {
    if (reserved == 1 && selected == 0) {
      return colorByGender();
    } else if (reserved == 0 && selected == 1) {
      return "#51bd5a";
    } else if (reserved == 0 && selected == 0) {
      return "#f7f7f7";
    }
  };

  return (
    <div
      onClick={props.onClick}
      className="seat-component__wrapper"
      style={{
        backgroundColor: color(),
        cursor: reserved ? "not-allowed" : "pointer",
      }}
    >
      <p className="seat-component__number">{number}</p>
    </div>
  );
};

export default SeatComponent;