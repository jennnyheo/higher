import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import bannerStyle from "../styles/Home.module.css";
import LoginBox from "../components/LoginBox";

import SubBanner from "../components/Main/SubBanner";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false); // login modal

  return (
    <div>
      <Head>
        <title>myblog</title>
      </Head>
      <Image
        src="https://res.cloudinary.com/jenniecloud/image/upload/v1635225316/images/banner3_tlge4q.png"
        alt="banner"
        width={1600}
        height={600}
      />
      <div className={bannerStyle.BannerContainer}>
        <h2 className={bannerStyle.Bannertitle}>
          현직자, 신입 모두가 사랑하는
        </h2>
        <h2 className={bannerStyle.Bannersubtitle}>HIGHER</h2>
        <p className={bannerStyle.Bannerdescri}>
          지금 바로 higher와 함께 여정을 시작하세요
        </p>
        <button
          className={bannerStyle.Bannerbutton}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          지금 시작하기
        </button>
      </div>
      {isOpen && <LoginBox isOpened={setIsOpen} />}
      <SubBanner />
      <div className={bannerStyle.bottom}>
        <Image
          src="https://res.cloudinary.com/jenniecloud/image/upload/v1636392492/images/al-soot-yRjLihK35Yw-unsplash_lm0cay.jpg"
          width={1400}
          height={500}
          alt="banner"
        />
        <div>
          <span>
            커리어 성장과 행복을 위한 여정,
            <br />
            지금 HIGHER에서 시작하세요.
          </span>
          <p>
            200만 직장인과 10,000개 기업이 <br />
            원티드와 커리어 여정을 함께합니다.
          </p>
          <button
            className={bannerStyle.Bannerbutton}
            onClick={() => {
              setIsOpen(true);
              window.scrollTo(0, 0);
            }}
          >
            지금 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
