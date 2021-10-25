import Image from "next/image";
import React from "react";
import Head from "next/head";
import banner3 from "../images/banner3.png";
import bannerStyle from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>myblog</title>
      </Head>
      <Image src={banner3} alt="banner" />
      <div className={bannerStyle.BannerContainer}>
        <h2 className={bannerStyle.Bannertitle}>
          현직자, 신입 모두가 사랑하는
        </h2>
        <h2 className={bannerStyle.Bannersubtitle}>HIGHER</h2>
        <p className={bannerStyle.Bannerdescri}>
          지금 바로 higher와 함께 여정을 시작하세요
        </p>
        <button className={bannerStyle.Bannerbutton}>지금 시작하기</button>
      </div>
    </div>
  );
}
