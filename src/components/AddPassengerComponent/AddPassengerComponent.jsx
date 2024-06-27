import React from "react";
import "./AddPassengerComponent.css";
const AddPassengerComponent = (props) => {
  const { reserved, selected, gender, number } = props.data;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add-passenger__wrapper">
      <form onSubmit={handleSubmit} className="add-passenger__form">
        <div className="add-passenger__form__remove__btn__wrapper">
          <button
            onClick={props.onClick}
            className="add-passenger__form__remove__btn"
          >
            x
          </button>
        </div>
        <h3 style={{ color: "white" }}>Seçilen Koltuk No: {number}</h3>
        {/* <label for="fname">Isim</label> */}
        <input
          className="add-passenger__form__input"
          type="text"
          id="name"
          name="name"
          placeholder="Adınız.."
          onChange={(e) => props.onChange(e, number)}
        />

        {/* <label for="lname">Soyisim</label> */}
        <input
          type="text"
          className="add-passenger__form__input"
          id="surname"
          name="surname"
          placeholder="Soyadınız.."
          onChange={(e) => props.onChange(e, number)}
        />

        {/* <label for="lname">TC No</label> */}
        <input
          type="text"
          className="add-passenger__form__input"
          id="tcNo"
          name="tcNo"
          placeholder="TC Kimlik No.."
          onChange={(e) => props.onChange(e, number)}
        />

        {/* <label for="gender">Cinsiyet</label> */}
        <select
          className="add-passenger__form__input"
          id="gender"
          name="gender"
          onChange={(e) => props.onChange(e, number)}
        >
          <option value="none">Cinsiyet</option>
          <option value="male">Erkek</option>
          <option value="female">Kadın</option>
          <option value="none">Hamidiye Su Şişesi</option>
        </select>
      </form>
    </div>
  );
};

export default AddPassengerComponent;