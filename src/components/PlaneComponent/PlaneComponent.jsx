import React, { useEffect, useState } from "react";

import PlaneLayout1 from "../PlaneLayout1/PlaneLayout1";
import PlaneLayout2 from "../PlaneLayout2/PlaneLayout2";
import AddPassengerComponent from "../AddPassengerComponent/AddPassengerComponent";
import SeatComponent from "../SeatComponent/SeatComponent";
import "./PlaneComponent.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PlaneComponent = (props) => {
  const { seats, planeType, travelId } = props;

  const navigate = useNavigate();

  //const travel = props.data;

  const selectedSeatData = useSelector(
    (state) => state.travel.selectedSeatData
  );

  const applySelection = () => {
    navigate("/purchase", {
      state: { travelId: travelId },
    });
  };

  return (
    <div>
      <div className="plane-component__wrapper">
        {planeType == 1 ? (
          <PlaneLayout1 travelId={travelId} />
        ) : (
          <PlaneLayout2 travelId={travelId} />
        )}
      </div>
      <div className="plane-component__buy_button__wrapper">
        {selectedSeatData.length > 0 ? (
          <button
            className="plane-component__buy__button"
            onClick={() => applySelection()}
          >
            Bilet Satın Al
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default PlaneComponent;
