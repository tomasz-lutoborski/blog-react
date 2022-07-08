import styles from "./Navbar.module.css";
import Navigation from "./Navigation";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>logo</div>
        <div className={styles.navbarNavigation}>
          <Navigation />
        </div>
        <div className={styles.navbarContact}>contact</div>
      </nav>
    </>
  );
}

export default Navbar;