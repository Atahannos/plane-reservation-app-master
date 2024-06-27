import React from "react";
import "./SignupComponent.css";

export const SignupComponent = (props) => {
  const { userName, password } = props.userData;
  const { onChangeUserHandler, onSignupClick, toggleForm } = props;

  return (
    <div className="signup-div">
      <h1>Kayıt Ol</h1>
      <input
        className="travel-select"
        name="userName"
        placeholder="Kullanıcı Adı"
        value={userName}
        onChange={onChangeUserHandler}
      />
      <input
        className="travel-select"
        type="password"
        name="password"
        placeholder="Şifre"
        value={password}
        onChange={onChangeUserHandler}
      />
      <button className="travel-btn" onClick={onSignupClick}>
        Kayıt Ol
      </button>
      <p>
        Zaten hesabınız var mı? <span onClick={toggleForm}>Giriş Yap</span>
      </p>
    </div>
  );
};
