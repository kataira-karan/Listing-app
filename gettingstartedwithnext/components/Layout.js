import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.cover}>{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
