import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearTempStyle from "../styles/SearchTemplate.module.css";

const SearchTemplate = ({ item }) => {
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
                <span>{category}</span>
              </>
            );
          })}
        </div>

        <div className={SearTempStyle.tagContainer}>
          {item.tags.map((tag) => {
            return (
              <>
                <span>#{tag}</span>
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
