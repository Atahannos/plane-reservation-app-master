import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PurchaseResult.css";
import { useNavigate } from "react-router-dom";
import TicketResult from "../../components/TicketResult/TicketResult";
const PurchaseResult = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    } else {
      setData(location.state);
    }
  }, [location.state]);

  return (
    <div className="purchase-result-root">
        <h1>Satın Alınan Biletler</h1>
      <div className="purchase-result-customer">
        <h1>Ödeme Bilgisi</h1><hr/>
        <h2>{`İsim: ${data?.name}`}</h2>
        <h2>{`Nereden - Nereye: ${data?.travel.from} - ${data?.travel.to}`}</h2>
        <h2>{`Bilet Tutarı: ${data?.travel.price}`}₺</h2>
        <h2>{`Uçak Numarası: ${data?.travel.company} - ${data?.travel.id}`}</h2>
      </div>

      <div className="purchase-result-informations">
        {data?.seats.map((x, index) => {
          return (
            <TicketResult key={index} seat={x}/>
          );
        })}
      </div>
      <button className="ticket-screen-back-btn" onClick={() => navigate("/")}>
        Anasayfaya Geri Dön
      </button>
    </div>
  );
};

export default PurchaseResult;
