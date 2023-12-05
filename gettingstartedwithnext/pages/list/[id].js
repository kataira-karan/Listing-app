export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((item) => {
    return { params: { id: item.id.toString() } };
  });

  console.log(paths);
  return {
    paths: [...paths],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  console.log("fetching a user");
  const id = context.params.id;
  console.log(id);
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  console.log(res);
  const data = await res.json();

  return {
    props: { item: data },
  };
};

const Details = ({ item }) => {
  return (
    <div className="detailsPage">
      <h3>Details </h3>
      <span>{item.name} </span>
      <span>{item.username} </span>
      <span>{item.email} </span>
      <span>{item.phone} </span>
    </div>
  );
};

export default Details;
