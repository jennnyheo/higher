import Link from "next/link";
import { useState } from "react";
import navStyle from "../styles/Header.module.css";
import LoginBox from "./LoginBox";
import { FaBars } from "react-icons/fa";

function Nav() {
  const [isOpened, setIsOpened] = useState(false); //login modal
  const [moblieNav, setMoblieNav] = useState(false);
  return (
    <div className={navStyle.navContainer}>
      <nav className={navStyle.nav}>
        <Link href="/">
          <a>
            <div className={navStyle.logo}>
              <h1>HIGHER</h1>
            </div>
          </a>
        </Link>
        <ul className={navStyle.lists}>
          <li>
            <Link href="/search">
              <a>탐색</a>
            </Link>
          </li>
          <li>
            <Link href="/careerUp">
              <a>커리어 성장</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>직문별 연봉</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>이력서</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>매치업</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>프리랜서</a>
            </Link>
          </li>
          <li
            onClick={() => {
              setIsOpened(true);
            }}
          >
            로그인/회원가입
          </li>
        </ul>
        <div className={navStyle.moblieNav}>
          <div
            className={navStyle.moblieNavBars}
            onClick={() => setMoblieNav((moblieNav) => !moblieNav)}
          >
            <FaBars />
          </div>
          {moblieNav && (
            <ul className={navStyle.moblieMenus}>
              <li>
                <Link href="/search">
                  <a>탐색</a>
                </Link>
              </li>
              <li>
                <Link href="/careerUp">
                  <a>커리어 성장</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>직문별 연봉</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>이력서</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>매치업</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>프리랜서</a>
                </Link>
              </li>
              <li
                onClick={() => {
                  setIsOpened(true);
                }}
              >
                로그인/회원가입
              </li>
            </ul>
          )}
        </div>
      </nav>

      {isOpened && <LoginBox isOpened={setIsOpened} />}
    </div>
  );
}

export default Nav;
