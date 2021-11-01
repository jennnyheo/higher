import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import SearTempStyle from "../styles/SearchTemplate.module.css";

const SearchTemplate = ({ item }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=ba0ed208919b1403041b38efe9809fe8&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.load = () => {
      kakao.maps.load(() => {
        // let el = document.getElementById("map");
        let container = document.getElementById("map");
        let options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        // let map = new kakao.maps.Map(el, {
        //   center: new kakao.maps.LatLng(37.506502, 127.053617),
        // });
        new window.kakao.maps.Map(container, options);
      });
    };
  });

  return (
    <div className={SearTempStyle.pageContainer}>
      <div className={SearTempStyle.contContainer}>
        <Image src={item.url} alt="companyphoto" width={650} height={450} />
        <h2>{item.title}</h2>
        <p>경력사항 : {(item.experiment = "0" ? "신입" : "경력")}</p>

        <div className={SearTempStyle.cateContainer}>
          <p className={SearTempStyle.company}>{item.company}</p>
          {item.category.map((category) => {
            return (
              <>
                <span key={item._id}>{category}</span>
              </>
            );
          })}
        </div>

        <div className={SearTempStyle.tagContainer}>
          {item.tags.map((tag) => {
            return (
              <>
                <span key={item._id}>#{tag}</span>
              </>
            );
          })}
        </div>
        <div>
          <p>회사소개</p>
          <div>
            <span>{item.introduction}</span>
          </div>
          <div>
            <p>채용포지션</p>
            <span>{item.position}</span>
          </div>
          <div>
            <p>우리는 이런 사람을 원해요</p>
            <span>{item.description}</span>
          </div>
        </div>
        <section>
          <div className={SearTempStyle.divider}></div>
          <p>
            마감일 <span>상시</span>
          </p>
          <p>
            근무지역 <span>주소</span>
          </p>

          <div
            id="map"
            width={650}
            height={450}
            className={SearTempStyle.map}
          ></div>
        </section>
      </div>
      <section className={SearTempStyle.section}>
        <h3>채용보상금</h3>
        <div>
          <div>
            <p>추천인</p>
            <span>500,0000 원</span>
          </div>
          <div>
            <p>지원자</p>
            <span>500,0000 원</span>
          </div>
        </div>
        <section>
          <div className={SearTempStyle.bookmark}>
            <Link href="/">
              <a>북마크하기</a>
            </Link>
          </div>
          <div className={SearTempStyle.apply}>
            <Link href="/">
              <a>지원하기</a>
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SearchTemplate;
