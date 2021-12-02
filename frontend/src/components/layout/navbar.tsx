import { destroyCookie } from 'nookies';
import styles from '../../styles/components/navbar.module.css';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  function onClickExit(e: any) {
    destroyCookie(null, 'TOKEN_JWT');
    router.push('/');
    e.preventDefault();
  }

  return (
    <nav className={styles.navbar}>
      <a href="#" className={styles.navbar__logo}>
        Logo
      </a>

      <div className={styles.navbar__items}>
        <ul className={styles.navbar__item}>
          <li className={styles.navbar__link}>
            <button type="button" onClick={(e) => onClickExit(e)}>
              Sair
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
