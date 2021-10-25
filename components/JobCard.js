import Image from "next/image";
import React from "react";
import photo1 from "../images/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import cardStyle from "../styles/Card.module.css";

export const JobCard = ({ jobs }) => {
  return (
    <div className={cardStyle.cardContainer}>
      <Image src={photo1} alt="companyphoto" width={250} height={180} />
      <span className={cardStyle.title}>{jobs.title}</span>
      <div className={cardStyle.container}>
        <span className={cardStyle.category}>{jobs.category[0]}</span>
        <span className={cardStyle.experiment}>
          {(jobs.experiment = "0" ? "신입" : "경력")}
        </span>
      </div>
    </div>
  );
};
