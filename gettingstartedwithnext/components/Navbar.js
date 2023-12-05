import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <h1>Listing App</h1>
      </div>

      <div className={styles.linksContainer}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/list">
          Listing
        </Link>
        <Link className={styles.link} href="/aboutus">
          About App
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
