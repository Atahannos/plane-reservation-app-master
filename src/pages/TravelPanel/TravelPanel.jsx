import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginComponent } from "../../components/LoginComponent/LoginComponent";
import { SignupComponent } from "../../components/SignupComponent/SignupComponent";
import { ProfileComponent } from "../../components/ProfileComponent/ProfileComponent";
import { planeType1 } from "../../data/planeType1";
import { planeType2 } from "../../data/planeType2";
import { newTravelDataChecker } from "../../helper/dataChecker";
import { addTravel } from "../../store/travel";
import "./TravelPanel.css";

const TravelPanel = () => {
  const [userData, setuserData] = useState({
    userName: "",
    password: "",
    loveFlying: "",
    webExamScore: "",
  });

  const [login, setLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  const [travelDetail, setTravelDetail] = useState({
    id: 0,
    planeType: 0,
    price: "",
    company: "Türk Hava Yolları",
    from: "İstanbul",
    duration: "",
    plate: "",
    hour: "",
    to: "Roma",
    date: "",
    seats: [],
  });

  const comppanies = [
    { value: "Türk Hava Yolları", name: "Türk Hava Yolları" },
    { value: "A Jet", name: "A Jet" },
    { value: "Pegasus", name: "Pegasus" },
  ];

  const cities = [
    { value: "İstanbul", name: "İstanbul Havalimanı" },
    { value: "New York", name: "New York Havalimanı (JFK)" },
    { value: "Roma", name: "Roma Havalimanı (Fuimicino)" },
    { value: "Katar", name: "Hamad Havalimanı" },
    { value: "Moskova", name: "Zhukovsky Havalimanı" },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = () => {
    let data = travelDetail;
    if (newTravelDataChecker(data) === false) {
      data.id = Math.random();
      data.price = Number(data.price);
      if (travelDetail.planeType === 1) {
        data.seats = planeType1;
      } else {
        data.seats = planeType2;
      }
      dispatch(addTravel({ travel: data }));

      console.log(travelDetail);
      alert("Sefer başarılı biçimde oluşturuldu.");
      navigate("/");
    } else {
      alert("Lütfen Alanların Tam Dolu Olduğundan Emin Olunuz.");
    }
  };

  const onLoginClick = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (user) =>
        user.userName === userData.userName &&
        user.password === userData.password
    );
    if (user) {
      setLogin(true);
    } else {
      alert("Kullanıcı Adı veya Şifre Hatalı.");
    }
  };

  const onSignupClick = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = storedUsers.some(
      (user) => user.userName === userData.userName
    );
    if (userExists) {
      alert("Bu kullanıcı adı zaten alınmış.");
    } else {
      storedUsers.push(userData);
      localStorage.setItem("users", JSON.stringify(storedUsers));
      alert("Kayıt başarılı. Profil oluşturma ekranına yönlendiriliyorsunuz.");
      setIsSignup(false);
      setIsProfile(true);
    }
  };

  const onProfileSubmit = () => {
    alert("Profil başarıyla oluşturuldu. Şimdi giriş yapabilirsiniz.");
    setIsProfile(false);
  };

  const onChangeTravelHandler = (e) => {
    setTravelDetail((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  const onChangeUserHandler = (e) => {
    setuserData((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div>
      {login ? (
        <div>
          <div className="travel-panel-back-btn-wrapper">
            <button className="travel-panel-back-btn" onClick={() => navigate("/")}>
              ⤾
            </button>
          </div>
          <div className="purchase-page-customer">
            <h3>Seyahat Oluşturma Paneli</h3>
            <div className="input-row">
              <input
                className="travel-select"
                type="number"
                name="price"
                placeholder="Tutar (₺)"
                value={travelDetail.price}
                onChange={(e) => onChangeTravelHandler(e)}
              />
              <select
                className="travel-select"
                name="company"
                placeholder="Şirket İsmi"
                value={travelDetail.company}
                onChange={(e) => onChangeTravelHandler(e)}
              >
                {comppanies.map((x, index) => (
                  <option value={x.value} key={index}>
                    {x.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-row">
              <select
                className="travel-select"
                name="from"
                placeholder="Nereden"
                value={travelDetail.from}
                onChange={(e) => onChangeTravelHandler(e)}
              >
                {cities
                  .filter((x) => x.value !== travelDetail.to)
                  .map((x, index) => (
                    <option value={x.value} key={index}>
                      {x.name}
                    </option>
                  ))}
              </select>
              <select
                name="to"
                className="travel-select"
                placeholder="Nereye"
                value={travelDetail.to}
                onChange={(e) => onChangeTravelHandler(e)}
              >
                {cities
                  .filter((x) => x.value !== travelDetail.from)
                  .map((x, index) => (
                    <option value={x.value} key={index}>
                      {x.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="input-row">
              <input
                type="text"
                className="travel-select"
                name="duration"
                placeholder="Seyehat Süresi (Dk)"
                value={travelDetail.duration}
                onChange={(e) => onChangeTravelHandler(e)}
              />
              <input
                className="travel-select"
                name="plate"
                placeholder="Uçak Modeli (*(Airbus A321 neo))"
                value={travelDetail.plate}
                onChange={(e) => onChangeTravelHandler(e)}
              />
            </div>
            <div className="input-row">
              <input
                type="text"
                className="travel-select"
                name="hour"
                placeholder="Saat (*(21.30))"
                value={travelDetail.hour}
                onChange={(e) => onChangeTravelHandler(e)}
              />
              <select
                name="planeType"
                className="travel-select"
                value={travelDetail.planeType}
                onChange={(e) => onChangeTravelHandler(e)}
              >
                <option value={1}>Uçak Tip:1 (98 Yolcu)</option>
                <option value={2}>Uçak Tip:2 (92 Yolcu)</option>
              </select>
            </div>
            <div className="input-row">
              <input
                type="date"
                className="travel-select"
                name="date"
                placeholder="Tarih (gg.aa.yyyy)"
                value={travelDetail.date}
                onChange={(e) => onChangeTravelHandler(e)}
              />
            </div>
            <button className="travel-btn" onClick={onClick}>
              Sefer Oluştur
            </button>
          </div>
        </div>
      ) : isProfile ? (
        <ProfileComponent
          userData={userData}
          onChangeUserHandler={onChangeUserHandler}
          onProfileSubmit={onProfileSubmit}
        />
      ) : isSignup ? (
        <SignupComponent
          userData={userData}
          onChangeUserHandler={onChangeUserHandler}
          onSignupClick={onSignupClick}
          toggleForm={toggleForm}
        />
      ) : (
        <LoginComponent
          userData={userData}
          onChangeUserHandler={onChangeUserHandler}
          onLoginClick={onLoginClick}
          toggleForm={toggleForm}
        />
      )}
    </div>
  );
};

export default TravelPanel;
