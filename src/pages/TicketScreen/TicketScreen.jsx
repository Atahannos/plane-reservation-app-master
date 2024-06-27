import React, { useState } from "react";
import List from "../../components/List/List";
import "./TicketScreen.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const TicketScreen = () => {
  let navigate = useNavigate();
  const params = useParams();
  const travelData = useSelector((state) => state.travel.travels);
  const { from, to, date } = params;

  const [company, setCompany] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const applyFilter = (data) => {
    return data.filter((x) => {
      const companyMatch = company === "" ? true : x.company === company;
      const priceMatch =
        priceRange === ""
          ? true
          : (priceRange === "0-500" && x.price >= 0 && x.price <= 500) ||
            (priceRange === "500-1000" && x.price > 500 && x.price <= 1000) ||
            (priceRange === "1000-2000" && x.price > 1000 && x.price <= 2000) ||
            (priceRange === "2000-5000" && x.price > 2000 && x.price <= 5000);

      return companyMatch && priceMatch && x.from === from && x.to === to && x.date === date;
    });
  };

  const comppanies = [
    { value: "", name: "Seçim Yapınız.." },
    { value: "Türk Hava Yolları", name: "Türk Hava Yolları" },
    { value: "A Jet", name: "A Jet" },
    { value: "Pegasus", name: "Pegasus" },
  ];

  const priceRanges = [
    { value: "", name: "Fiyat Aralığı Seçiniz.." },
    { value: "0-500", name: "0-500" },
    { value: "500-1000", name: "500-1000" },
    { value: "1000-2000", name: "1000-2000" },
    { value: "2000-5000", name: "2000-5000" },
  ];

  const onClick = () => {
    console.log("data", travelData);
    navigate("/");
  };

  return (
    <div className="ticket-screen-div">
      <button className="ticket-screen-back-btn" onClick={() => onClick()}>
        Anasayfaya Geri Dön
      </button>
      <select
        className="travel-select"
        name="company"
        placeholder="Hava Yolu Şirketi"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      >
        {comppanies.map((x, index) => (
          <option value={x.value} key={index}>
            {x.name}
          </option>
        ))}
      </select>
      <select
        className="travel-select"
        name="priceRange"
        placeholder="Fiyat Aralığı"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
      >
        {priceRanges.map((x, index) => (
          <option value={x.value} key={index}>
            {x.name}
          </option>
        ))}
      </select>
      {applyFilter(travelData).length === 0 ? (
        <h2>Sefer Bulunamadı!</h2>
      ) : (
        <List data={applyFilter(travelData)} />
      )}
    </div>
  );
};

export default TicketScreen;
