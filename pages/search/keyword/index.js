import { useRouter } from "next/router";
import React from "react";
import { JobCard } from "../../../components/JobCard";
import NoResult from "../../../components/Search/NoResult";
import db from "../../../lib/databaseConnection";
import JobList from "../../../model/JobList";
import cardStyle from "../../../styles/Card.module.css";
import resultStyle from "../../../styles/Result.module.css";

export async function getServerSideProps({ query }) {
  await db.connectToDatabase();
  const joblist = await JobList.find({ position: query.keyword }).lean();
  const jobs = JSON.stringify(joblist);
  const data = JSON.parse(jobs);
  await db.disconnectToDatabase();
  return {
    props: { data },
  };
}

const keyword = ({ data }) => {
  const { query } = useRouter();
  return (
    <div className={resultStyle.container}>
      <div className={resultStyle.headerContainer}>
        <h2> " {query.keyword} " </h2>
      </div>
      <div className={resultStyle.resultContainer}>
        <span>{data.length} 개의 검색결과</span>
      </div>
      <div className={cardStyle.cardsContainer}>
        {data &&
          data.map((job) => {
            return (
              <>
                <JobCard jobs={job} key={job._id} />
              </>
            );
          })}
        {data.length === 0 && <NoResult />}
      </div>
    </div>
  );
};

export default keyword;
