import React, { useState } from "react";
import PlaneComponent from "../PlaneComponent/PlaneComponent";
import "./TripDetails.css";

const TripDetails = (props) => {
  const {
    planeType,
    id,
    company,
    price,
    duration,
    plate,
    from,
    to,
    hour,
    seats,
    date,
  } = props.data;

  const [expand, setExpand] = useState(false);

  return (
    <div className="trip-details__wrapper">
      <div className="trip-details__components">
        <div className="trip-details-company">
          <span className="trip-details-company-text">{company}</span>
          <span className="trip-details-company-text">Bilet Tutarı: {price}₺</span>
        </div>

        <div className="trip-details-row">
          <span className="trip-details-text">{date} / {hour}</span>
        </div>

        <div className="trip-details-row">
          <span className="trip-details-text">
            {from} {" - "} {to}
          </span>
          <span className="trip-details-text">{plate}</span>
        </div>

        <div className="trip-details-row">
          <span className="trip-details-text">Seyahat Süresi: {duration}</span>
          <span className="trip-details-text">
            Koltuk Sayısı: {planeType === 1 ? "98" : "92"}
          </span>
        </div>

        <div className="trip-details__col">
          <div style={{ display: expand ? "block" : "none" }}>
            <PlaneComponent seats={seats} planeType={planeType} travelId={id} />
          </div>
        </div>

        <h1
          className="trip-details-more"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {expand ? "▲" : "▼"}
        </h1>
      </div>
    </div>
  );
};

export default TripDetails;
