import React from "react";
import { useNavigate } from "react-router-dom";
import TravelSelection from "../../components/TravelSelection/TravelSelection";

import "./HomePage.css";

const HomePage = () => {
  let navigate = useNavigate()
  return (
    <div className="home-div">
      <div className="admin-div" onClick={()=>navigate("/travelPanel")}>
        <img
          className="admin-img"
          src="https://i1.rgstatic.net/ii/profile.image/725236974645248-1549921377231_Q512/cem-Taskin.jpg"
        />
      </div>

      <div className="project-name-div">
        <h1 className="project-name">Uçak Bilet Uygulaması</h1>
      </div>

      <TravelSelection />

      {/* <div className="name-div">
        <span>Atahan Güne</span>
        <span>1211602022</span>
      </div> */}
    </div>
  );
};

export default HomePage;