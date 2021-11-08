import Head from "next/head";
import SearchTemplate from "../../components/Search/SearchTemplate";

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:3000/api/search/${id}`);
  const data = await res.json();
  console.log(data);
  return { props: { job: data } };
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/search");
  const data = await res.json();

  const paths = data.map((job) => {
    return {
      params: { id: job._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
const Detail = ({ job }) => {
  return (
    <div>
      <Head>
        <title></title>
      </Head>

      <SearchTemplate item={job} />
    </div>
  );
};

export default Detail;
