import React from "react";
import CareerCard from "../components/Career/CareerCard";
import Filter from "../components/Career/Filter";
import careerStyle from "../styles/Career.module.css";
const career = ({ careers }) => {
  return (
    <div>
      <div className={careerStyle.banneContainer}>
        <span>채용 연계형 대규모 해커톤</span>
        <div className={careerStyle.banneText}>
          <span>GO,</span>
          <br />
          <span>GO FORWARD</span>
        </div>
        <h1>HIGHER</h1>
      </div>
      <Filter />
      <div className={careerStyle.cardContainer}>
        {careers.map((career) => {
          return (
            <>
              <CareerCard career={career} key={career._id} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default career;

career.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/career");
  const data = await res.json();
  console.log(data);
  return { careers: data };
};
