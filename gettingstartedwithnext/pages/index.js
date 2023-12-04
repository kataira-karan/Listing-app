import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.lines}> Listing App </span>
          <span className={styles.lines}> First NextJS Applicaiton </span>
        </div>

        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--X9Ev7eRd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ql92zpsre2li58mpjpsa.png"
          ></img>
        </div>
      </div>
    </div>
  );
}
