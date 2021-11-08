import React from "react";
import Filter from "../components/Search/Filter";
import HeadInfo from "../components/HeadInfo";
import { JobCard } from "../components/Search/JobCard";
import cardStyle from "../styles/Card.module.css";
import searchStyle from "../styles/Search.module.css";

export default function search({ jobs }) {
  return (
    <div className={searchStyle.container}>
      <HeadInfo title="검색페이지 입니다." />

      <h3>반갑습니다 당신의 꿈을 위해 HIGHER 하세요</h3>
      <Filter />
      <div className={searchStyle.contentsContainer}>
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
    </div>
  );
}

search.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/search");
  const data = await res.json();
  console.log(data);
  return { jobs: data };
};

// export async function getServerSideProps() {
//   await db.connectToDatabase();
//   const joblist = await JobList.find({});
//   await db.disconnectToDatabase();
//   return {
//     props: { jobs: joblist.map(db.convertDocToObj) },
//   };
// }
