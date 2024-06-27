import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SeatComponent from "../SeatComponent/SeatComponent";
import "./PlaneLayout2.css";
import { selectDeselect } from "../../store/travel";

const PlaneLayout2 = (props) => {
  const { travelId } = props;

  const travel = useSelector((state) =>
    state.travel.travels.find((x) => x.id === travelId)
  );

  const dispatch = useDispatch();

  const onClick = (number) => (e) => {
    let clickedSeat = travel.seats.find((x) => x.number == number);
    console.log(clickedSeat);
    dispatch(selectDeselect({ clickedSeat, selectedTravel: travel }));
  };

  return (
    <div className="plane-component">
      <div className="plane-component__left">
        {travel.seats.slice(0, 46).map((seat, index) => (
          <SeatComponent
            onClick={onClick(seat.number)}
            key={index}
            data={seat}
          />
        ))}
      </div>
      <div className="plane-component__right">
        {travel.seats.slice(46, 92).map((seat, index) => (
          <SeatComponent
            onClick={onClick(seat.number)}
            key={index}
            data={seat}
          />
        ))}
      </div>
    </div>
  );
};

export default PlaneLayout2;
