import { destroyCookie } from 'nookies';
import styles from '../../styles/components/navbar.module.css';
import { useRouter } from 'next/router';
import { useThemeContext } from '../../core/contexts/ThemeContext';
import { SetThemeCookies } from '../../core/services/cookie';

export default function Navbar() {
  const { theme, setTheme } = useThemeContext();

  const router = useRouter();
  function onClickExit(e: any) {
    destroyCookie(null, 'TOKEN_JWT');
    router.push('/');
    e.preventDefault();
  }

  const handleClickTheme = () => {
    if (theme === 'DARK') {
      SetThemeCookies('USER_THEME', 'LiGHT', 300);
      setTheme('LiGHT');
      return;
    }
    SetThemeCookies('USER_THEME', 'DARK', 300);
    setTheme('DARK');
  };

  return (
    <nav className={`${styles.navbar} ${theme === 'DARK' ? styles.dark : ''}`}>
      <a href="#" className={styles.navbar__logo}>
        Logomarca
      </a>

      <div className={styles.navbar__items}>
        <ul className={styles.navbar__item}>
          <li className={styles.navbar__link}>
            <button type="button" onClick={(e) => onClickExit(e)}>
              Sair
            </button>
          </li>

          <li className={styles.navbar__link}>
            <button onClick={() => handleClickTheme()} type="button">
              Trocar Tema
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
