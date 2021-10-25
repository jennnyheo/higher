/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import navStyle from "../styles/Header.module.css";
function Nav() {
  return (
    <div className={navStyle.navContainer}>
      <nav className={navStyle.nav}>
        <Link href="/">
          <div className={navStyle.logo}>
            <h1>HIGHER</h1>
          </div>
        </Link>
        <ul>
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
          <li>
            <Link href="">
              <a>로그인/회원가입</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
