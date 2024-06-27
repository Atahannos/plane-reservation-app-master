import React from "react";
import "./LoginComponent.css";

export const LoginComponent = (props) => {
  const { userName, password } = props.userData;
  const { onChangeUserHandler, onLoginClick, toggleForm } = props;

  return (
    <div className="login-div">
      <h1>Giriş Yap</h1>
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
      <button className="travel-btn" onClick={onLoginClick}>
        Giriş Yap
      </button>
      <p>
        Henüz hesabınız yok mu? <span onClick={toggleForm}>Kayıt Ol</span>
      </p>
    </div>
  );
};
