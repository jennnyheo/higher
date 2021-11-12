import React from "react";
import Image from "next/image";
import Career from "../../model/Career";
import db from "../../lib/databaseConnection";
import router, { useRouter } from "next/router";
import careerStyle from "../../styles/Career.module.css";
import { FiX } from "react-icons/fi";

export async function getServerSideProps({ query }) {
  await db.connectToDatabase();
  const careerList = await Career.findById({
    _id: query.careerid,
  }).lean();
  const career = JSON.stringify(careerList);
  const data = JSON.parse(career);
  await db.disconnectToDatabase();
  return {
    props: { data },
  };
}
const CareerDetail = ({ data }) => {
  console.log(data);
  const { query } = useRouter();
  let credate = data.createdAt;
  let endate = data.endAt;
  const creDate = credate.substr(0, 10);
  const enDate = endate.substr(0, 10);

  return (
    <div className={careerStyle.detailContainer}>
      <div>
        <div className={careerStyle.detailTitle}>
          <button>{data.filter}</button>
          <span className={careerStyle.detailContainerTitle}>{data.title}</span>

          <span
            className={careerStyle.detailIcon}
            onClick={() => {
              router.back();
            }}
          >
            <FiX />
          </span>
        </div>
        <div className={careerStyle.detailHeader}>
          <div>
            <Image src={data.img} alt="image" width={760} height={420} />
          </div>
          <div>
            <h2>{data.title}</h2>
            <div className={careerStyle.detailTags}>
              {data.tags.map((item) => (
                <span>#{item}</span>
              ))}
              <div>
                <span>
                  일자 : {creDate} - {enDate}
                </span>
              </div>
              <div className={careerStyle.buttonContainer}>
                <button>더 많은 아티클 보러가기</button>
                <button>공유하기</button>
              </div>
            </div>
          </div>
        </div>
        <div className={careerStyle.contentContainer}>
          <span>{data.content}</span>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;
