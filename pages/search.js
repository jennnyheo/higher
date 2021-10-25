import HeadInfo from "../components/HeadInfo";
import axios from "axios";
import { JobCard } from "../components/JobCard";
import { connectToDatabase } from "../util/databaseConnection";

axios.get("http://localhost:3000/api/sample").then((response) => {
  console.log(response);
});

const search = ({ jobs }) => {
  return (
    <div>
      <HeadInfo title="검색페이지 입니다." />

      <h3>반갑습니다 당신의 꿈을 위해 HIGHER 하세요</h3>

      <div>
        <h2>전체</h2>
        <ul>
          <li>웹 개발자</li>
          <li>프론트 엔드</li>
          <li>백엔드</li>
          <li>정보보안</li>
          <li>게임</li>
          <li>웹 기획</li>
        </ul>
      </div>
      <div>
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
};
// search.getInitialProps = async () => {
//   const res = await fetch("http://localhost:3000/api/sample");
//   const data = JSON.parse(JSON.stringify(res));
//   // const data = await res.json();
//   return { jobs: data };
// };
search.getInitialProps = async () => {
  const { data } = await axios.get("http://localhost:3000/api/sample");

  return { jobs: data };
};

export default search;
