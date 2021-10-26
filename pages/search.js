import React from "react";
import HeadInfo from "../components/HeadInfo";
import { JobCard } from "../components/JobCard";
import cardStyle from "../styles/Card.module.css";
import searchStyle from "../styles/Search.module.css";
import Image from "next/image";

export default function search({ jobs }) {
  return (
    <div className={searchStyle.container}>
      <HeadInfo title="검색페이지 입니다." />

      <h3>반갑습니다 당신의 꿈을 위해 HIGHER 하세요</h3>

      <div>
        <ul className={searchStyle.menus}>
          <li>
            <Image
              src="https://res.cloudinary.com/jenniecloud/image/upload/v1635225321/images/searchmenus/webdeveloper_rgo6bs.jpg"
              width={150}
              height={100}
              alt="photo"
            />
            <span>웹 개발자</span>
          </li>
          <li>
            <Image
              src="https://res.cloudinary.com/jenniecloud/image/upload/v1635225325/images/searchmenus/frontend2_n85iln.jpg"
              width={150}
              height={100}
              alt="photo"
            />
            <span>프론트 엔드</span>
          </li>
          <li>
            <Image
              src="https://res.cloudinary.com/jenniecloud/image/upload/v1635225329/images/searchmenus/backend_ccvi97.jpg"
              width={150}
              height={100}
              alt="photo"
            />
            <span>백엔드</span>
          </li>
          <li>
            <Image
              src="https://res.cloudinary.com/jenniecloud/image/upload/v1635225327/images/searchmenus/security_e6pz8s.jpg"
              width={150}
              height={100}
              alt="photo"
            />
            <span>정보보안</span>
          </li>
          <li>
            <Image
              src="https://res.cloudinary.com/jenniecloud/image/upload/v1635225320/images/searchmenus/fontend_bf6owh.jpg"
              width={150}
              height={100}
              alt="photo"
            />
            <span>게임</span>
          </li>
          <li>
            <Image
              src="https://res.cloudinary.com/jenniecloud/image/upload/v1635226358/images/searchmenus/firmbee-com-gcsNOsPEXfs-unsplash_qmpfo4.jpg"
              width={150}
              height={100}
              alt="photo"
            />
            <span>웹 기획</span>
          </li>
        </ul>
      </div>
      <h2>전체</h2>
      <div className={cardStyle.cardsContainer}>
        {jobs.map((job) => {
          return (
            <>
              <JobCard jobs={job} key={job._id} />
            </>
          );
        })}
      </div>
    </div>
  );
}

search.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/sample");
  const data = await res.json();
  // const data = await res.json();
  return { jobs: data };
};
