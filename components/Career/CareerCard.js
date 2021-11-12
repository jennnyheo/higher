import React from "react";
import Image from "next/image";
import Link from "next/link";
import careerStyle from "../../styles/Career.module.css";
const CareerCard = ({ career }) => {
  let stadate = career.startAt;
  let startAt = stadate.substr(0, 10);

  let enDate = career.endAt;
  let endAt = enDate.substr(0, 10);

  let today = new Date().toISOString().substr(0, 10);

  return (
    <div>
      <div className={careerStyle.card}>
        <Link href={`/career/career?careerid=${career._id}`}>
          <a>
            <Image src={career.img} width={250} height={180} alt={career.id} />
            <div className={careerStyle.categories}>
              {career.filter.map((filter) =>
                filter === "온라인" ? (
                  <button className={careerStyle.online}>{filter}</button>
                ) : filter === "커뮤니티" ? (
                  <button className={careerStyle.community}>{filter}</button>
                ) : (
                  <button className={careerStyle.article}>{filter}</button>
                )
              )}
            </div>
            <span className={careerStyle.title}>{career.title}</span>
            <div className={careerStyle.duration}>
              {today < endAt ? (
                <button className={careerStyle.still}> 진행중 </button>
              ) : (
                <button className={careerStyle.expired}> 만료 </button>
              )}
              <span>
                {startAt} - {endAt}
              </span>
            </div>
            <div className={careerStyle.tags}>
              {career.tags.map((item) => (
                <span>#{item}</span>
              ))}
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CareerCard;
