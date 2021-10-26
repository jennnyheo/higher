import { Axios } from "axios";
import React from "react";

const index = ({ jobs, error }) => {
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <ul>
        {jobs.map((job) => {
          <li>{job.company}</li>;
        })}
      </ul>
    </div>
  );
};

export default index;

index.getInitialProps = async (ctx) => {
  try {
    const res = await Axios.get("http://localhost:3000/api/sample");
    const jobs = res.data;
    return { jobs };
  } catch (error) {
    return { error };
  }
};
