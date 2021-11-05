import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useState, useEffect } from "react";
import { Store } from "../Store";
import loginStyle from "../styles/Login.module.css";
import cookie from "react-cookies";

const register = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { redirect } = router.query;
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const registerSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("비밀번호를 확인해주세요!");
    }
    try {
      await axios.post("api/user/register", {
        email,
        name,
        password,
      });
      alert("가입을 축하합니다. 메인 페이지로 이동합니다.");
      router.push(redirect || "/");
    } catch (error) {
      alert(error.response.data ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <div>
        <div className={loginStyle.registerHeader}>
          <h2>회원가입</h2>
        </div>
        <div className={loginStyle.header}>
          <h3>HIGHER</h3>

          <p>더 높은 곳을 향하는</p>
          <p>커리어 플랫폼 하이어!</p>

          <span>커리어 성장과 행복을 위한 여정 </span>
          <br />
          <span>지금 하이어에서 시작하세요</span>
        </div>
        <form className={loginStyle.form} onSubmit={registerSubmitHandler}>
          <div>
            <input
              type="text"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              id="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">회원가입</button>
          </div>
          <p className={loginStyle.goToRegister}></p>
        </form>
      </div>
    </div>
  );
};

export default register;
