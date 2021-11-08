import Link from "next/link";
import { useContext, useState } from "react";
import navStyle from "../styles/Header.module.css";
import LoginBox from "./LoginBox";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import { Store } from "../Store";
import Cookies from "js-cookie";

function Nav() {
  const [isOpened, setIsOpened] = useState(false); //login modal
  const [moblieNav, setMoblieNav] = useState(false);

  const [isLogoutOpen, setIsLogoutOpen] = useState(false); //logout menu show & hidden
  const router = useRouter();
  const { state, dispatch } = useContext(Store);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("userInfo");
    router.push("/");
  };
  const { userInfo } = state;

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
            <Link href="/career">
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
          {userInfo ? (
            <>
              <li
                onClick={() => {
                  setIsLogoutOpen((prev) => (prev ? false : true));
                }}
              >
                {userInfo.name} 님
              </li>
              <ul className={navStyle.submenu}>
                {isLogoutOpen && (
                  <>
                    <li onClick={logoutHandler}>로그아웃</li>
                    <li>마이페이지</li>
                  </>
                )}
              </ul>
            </>
          ) : (
            <li
              onClick={() => {
                setIsOpened(true);
              }}
            >
              로그인/회원가입
            </li>
          )}
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
              {userInfo ? (
                <>
                  <li>{userInfo.name}</li>
                </>
              ) : (
                <ul>
                  <li
                    onClick={() => {
                      setIsOpened(true);
                    }}
                  >
                    로그인/회원가입
                  </li>
                </ul>
              )}
            </ul>
          )}
        </div>
      </nav>

      {isOpened && <LoginBox isOpened={setIsOpened} />}
    </div>
  );
}

export default Nav;
