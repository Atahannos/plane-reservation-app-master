import React from "react";
import TripDetails from "../TripDetails/TripDetails";

const List = (props) => {
  const { data } = props;

  return (
    <div>
      {data.map((trip, index) => {
        return <TripDetails data={trip} key={index} />;
      })}
    </div>
  );
};

export default List;
