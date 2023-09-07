import { API_BASE_URL } from "..";

export default function Tour({ data }) {
  console.log(data);
  return <h1>{data.id}</h1>;
}

export async function getServerSideProps(context) {
  const queryId = context.query.id;
  const res = await fetch(`${API_BASE_URL}/${queryId}`);
  const data = await res.json();

  return {
    props: { data },
  };
}
