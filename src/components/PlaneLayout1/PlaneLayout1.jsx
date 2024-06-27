import React, { useEffect, useState } from "react";
import SeatComponent from "../SeatComponent/SeatComponent";
import { useDispatch, useSelector } from "react-redux";
import { selectDeselect } from "../../store/travel";
import "./PlaneLayout1.css";

const PlaneLayout1 = (props) => {
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
        {travel.seats.slice(0, 49).map((seat, index) => (
          <SeatComponent
            onClick={onClick(seat.number)}
            key={index}
            data={seat}
          />
        ))}
      </div>
      <div className="plane-component__right">
        {travel.seats.slice(49, 98).map((seat, index) => (
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

export default PlaneLayout1;
