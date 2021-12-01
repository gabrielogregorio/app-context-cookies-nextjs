import styles from "../../styles/components/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="#" className={styles.navbar__logo}>
        Logo
      </a>

      <div className={styles.navbar__items}>
        <ul className={styles.navbar__item}>
          <li className={styles.navbar__link}>
            <a href="#">Sair</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
