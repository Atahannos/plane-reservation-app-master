import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AddPassengerComponent from "../../components/AddPassengerComponent/AddPassengerComponent";
import {
  passengersDataChecker,
  purchaseDataChecker,
} from "../../helper/dataChecker";
import {
  selectDeselect,
  updatePassengerData,
  updatePassengerComponents,
  purchase,
} from "../../store/travel";
import "./PurchasePage.css";
const PurchasePage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [travelId, setTravelId] = useState();
  const travel = useSelector((state) =>
    state.travel.travels.find((x) => x.id === travelId)
  );
  const selectedSeatData = useSelector(
    (state) => state.travel.selectedSeatData
  );

  const [customerDetail, setCustomerDetail] = useState({
    name: "",
    surname: "",
    email: "",
    cardNumber: "",
    cvc: "",
    expireDate: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    } else {
      setTravelId(location.state.travelId);
    }
  }, [location.state]);

  const onDeleteClick = (number) => (e) => {
    const clickedSeat = selectedSeatData.find((item) => item.number === number);
    const tmpSelectedSeats = selectedSeatData.filter(
      (item) => item.number !== number
    );
    dispatch(
      updatePassengerComponents({
        seats: tmpSelectedSeats,
        clickedSeat,
        selectedTravel: travel,
      })
    );
    if (tmpSelectedSeats.length == 0) {
      navigate("/");
    }
  };

  const onPurchase = () => {
    const passengerCheckError = passengersDataChecker(selectedSeatData);
    const purchaseCheckError = purchaseDataChecker(
      customerDetail.name,
      customerDetail.surname,
      customerDetail.email,
      customerDetail.cardNumber,
      customerDetail.cvc,
      customerDetail.expireDate
    );

    if (passengerCheckError == false && purchaseCheckError == false) {
      alert(
        "Biletiniz Başarı ile Satın Alındı!\nLütfen: " +
          customerDetail.email +
          " isimli e-posta adresinizi kontrol ediniz. Hayırlı Yolculuklar!"
      );

      dispatch(
        purchase({
          seats: selectedSeatData,
          selectedTravel: travel,
        })
      );

      let data = {
        seats: selectedSeatData,
        travel: travel,
        name: customerDetail.name,
        surname: customerDetail.surname,
        email: customerDetail.email,
      };

      navigate("/purchaseResult", { state: data });
    } else {
      if (passengerCheckError == true) {
        alert(
          "Lütfen tüm alanları eksiksiz ve doğru olarak doldurun! \n\n- TC Numarası 11 karakter olmalı \n- Ad, Soyad ve Cinsiyet alanları boş bırakılmamalı"
        );
      }
      if (purchaseCheckError == true) {
        alert(
          "Lütfen ödemeyle alakalı bilgileri eksiksiz ve doğru olarak doldurun!"
        );
      }
    }
  };

  const onChangeCustomerHandler = (e) => {
    setCustomerDetail((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  const onChangePassenger = (e, number) => {
    const { name, value, checked } = e.target;
    dispatch(
      updatePassengerData({
        name,
        value,
        number,
      })
    );
  };

  return (
    <div className="purchase-page-div">
      <h2>Bilet Satış Onay Sayfası</h2>

      <div className="purchase-page-customer">
        <h2>Ödeme Bilgileri</h2>
        {travel && (
          <div className="purchase-page-info">
            <h3>
              {travel.from}-{travel.to}
            </h3>
            <h3>{travel.date}</h3>
            <h3>{travel.hour}</h3>
            <h3>{travel.company}</h3>
            <h3>Toplam Tutar: {travel.price * selectedSeatData.length}₺</h3>
          </div>
        )}
        <input
          className="travel-select"
          name="name"
          placeholder="İsim"
          value={customerDetail.name}
          onChange={(e) => onChangeCustomerHandler(e)}
        />
        <input
          className="travel-select"
          name="surname"
          placeholder="Soyisim"
          value={customerDetail.surname}
          onChange={(e) => onChangeCustomerHandler(e)}
        />

        <input
          className="travel-select"
          name="email"
          placeholder="E-mail"
          value={customerDetail.email}
          onChange={(e) => onChangeCustomerHandler(e)}
        />
        <input
          type="text"
          className="travel-select"
          name="cardNumber"
          placeholder="Kart Numarası"
          value={customerDetail.cardNumber}
          onChange={(e) => onChangeCustomerHandler(e)}
        />
        <input
          className="travel-select"
          name="expireDate"
          placeholder="Son Kullanım Tarihi"
          value={customerDetail.expireDate}
          onChange={(e) => onChangeCustomerHandler(e)}
        />
        <input
          className="travel-select"
          type="number"
          name="cvc"
          placeholder="CVC"
          value={customerDetail.cvc}
          onChange={(e) => onChangeCustomerHandler(e)}
        />
      </div>
      <div className="purchase-page-passenger-data">
        {selectedSeatData.map((tmp, index) => {
          return (
            <AddPassengerComponent
              onChange={onChangePassenger}
              onClick={onDeleteClick(tmp.number)}
              data={tmp}
              key={tmp.number}
            />
          );
        })}
      </div>
      <button className="travel-btn" onClick={() => onPurchase()}>
        Öde
      </button>
    </div>
  );
};

export default PurchasePage;
