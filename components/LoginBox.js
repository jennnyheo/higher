import loginStyle from "../styles/Login.module.css";
import { FaTimes } from "react-icons/fa";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import cookie from "react-cookies";
import { Store } from "../Store";

const LoginBox = ({ isOpened }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { redirect } = router.query;
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/user/login", { email, password });
      dispatch({ type: "USER_LOGIN", payload: data });
      // Cookies.set("userInfo", data);
      cookie.save("userInfo", data);
      console.log(email);
      alert("로그인 되었습니다");
      router.push(redirect || "/");
      isOpened(false);
    } catch (error) {
      alert(error.response.data ? error.response.data : error.message);
    }
  };
  const goToRegister = (e) => {
    e.preventDefault();
    alert("회원가입으로 이동하시겠습니까? ");
    isOpened(false);
    router.push("/register");
  };

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
        <form className={loginStyle.form} onSubmit={submitHandler}>
          <div>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">로그인</button>
          </div>
          <p className={loginStyle.goToRegister}>
            <span onClick={goToRegister}>아직 회원이 아니라면</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginBox;
