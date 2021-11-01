import React from "react";
import loginStyle from "../styles/Login.module.css";
import { FaTimes } from "react-icons/fa";

const LoginBox = ({ isOpened }) => {
  return (
    <div className={loginStyle.background}>
      <div className={loginStyle.container}>
        <button className={loginStyle.closed} onClick={() => isOpened(false)}>
          <FaTimes />
        </button>
        <div className={loginStyle.header}>
          <h3>HIGHER</h3>
          <p>더 높은 곳을 향하는</p>
          <p>커리어 플랫폼 하이어!</p>
          <span>커리어 성장과 행복을 위한 여정 </span>
          <br />
          <span>지금 하이어에서 시작하세요</span>
        </div>
        <form className={loginStyle.form}>
          <div>
            <input type="text" placeholder="ID" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <div>
            <button type="submit">로그인</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginBox;
