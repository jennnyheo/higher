import Link from "next/link";
import Image from "next/image";
import cardStyle from "../../styles/Card.module.css";

export const JobCard = ({ jobs }) => {
  return (
    <div>
      <div className={cardStyle.cardContainer}>
        <Link href={`/search/${jobs._id}`}>
          <a>
            <Image src={jobs.url} alt="companyphoto" width={250} height={180} />

            <span className={cardStyle.title}>{jobs.title}</span>
            <span>{jobs.company}</span>
            <div className={cardStyle.container}>
              <span className={cardStyle.category}>{jobs.category[0]}</span>
              <span className={cardStyle.experiment}>
                {jobs.experiment === 0 ? "신입" : "신입/경력"}
              </span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};
