import { useRouter } from "next/router";
import React from "react";
import db from "../../lib/databaseConnection";
import Filter from "../../components/Career/Filter";
import Career from "../../model/Career";
import careerStyle from "../../styles/Career.module.css";
import CareerCard from "../../components/Career/CareerCard";

export async function getServerSideProps({ query }) {
  await db.connectToDatabase();
  const careerList = await Career.find({ tags: query.category });

  const careers = JSON.stringify(careerList);
  const data = JSON.parse(careers);
  await db.disconnectToDatabase();

  return {
    props: { data },
  };
}
const category = ({ data }) => {
  const { query } = useRouter();

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
      <div className={careerStyle.filterCategory}>
        <span>적용 카테고리 </span>
        <button> {query.category}</button>
      </div>
      <div className={careerStyle.cardContainer}>
        {data.map((item) => {
          return (
            <>
              <CareerCard career={item} key={item._id} />
            </>
          );
        })}
        {data.length < 1 ? "OOPS NOT RESULT FOR NOW!" : ""}
      </div>
    </div>
  );
};

export default category;
