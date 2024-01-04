import React from "react";
import "./login.css";
import "../../../Data/Logo/login-background.png"

import { useState } from "react";
import isEmpty from "validator/lib/isEmpty";

const Login_form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [valmsg, setValmsg] = useState("");

  const onChangeEmail = (event) => {
    let value = event.target.value;
    setEmail(value);
  };
  const onChangePassWord = (event) => {
    let value = event.target.value;
    setPassWord(value);
  };
  const validateAll = () => {
    const msg = {};
    if (isEmpty(email)) {
      msg.email = "Please input your email";
    }
    if (isEmpty(password)) {
      msg.password = "Please input your password";
    }
    setValmsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const onSubmitLogin = () => {
    const isValid = validateAll();
    if (!isValid) return;
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    // const newUser = {
    //   email: email,
    //   password: password,
    // };
  };
  return (
    <div className="login">
      <form action="" className="login_form" onSubmit={onSubmitForm}>
        <h2>ĐĂNG NHẬP</h2>
        <div className="input-container ">
          <i className="fa fa-user icon" style={{ width: 22.5 }}></i>
          <input
            type="text"
            placeholder="Email..."
            className="input"
            name="username"
            value={email}
            onChange={onChangeEmail}
          />
          <p>{valmsg.email}</p>
        </div>
        <div className="input-container">
          <i className="fa fa-key icon"></i>
          <input
            type="password"
            placeholder="Mật khẩu..."
            className="input"
            name="password"
            value={password}
            onChange={onChangePassWord}
          />
          <p>{valmsg.password}</p>
        </div>
        <button className="btn-login" onClick={onSubmitLogin}>
          ĐĂNG NHẬP
        </button>

      </form>
    </div>
  );
};
export default Login_form;
