import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found-page">
      <div className="container">
        <h1> Oppp...! </h1>
        <h2> Could not find the Page </h2>
        <span>
          {" "}
          Go back to the <Link href="/"> Home Page </Link>{" "}
        </span>
      </div>
    </div>
  );
};

export default NotFound;
