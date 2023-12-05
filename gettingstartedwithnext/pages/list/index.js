import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return {
    props: { items: data },
  };
};

const List = ({ items }) => {
  return (
    <div className="itemsPage">
      <>GET ITEMNS</>
      <div className="listContainer">
        {items.map((item) => {
          return (
            <Link href={`/list/${item.id}`} className="listItem" key={item.id}>
              <span> {item.name} </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default List;
