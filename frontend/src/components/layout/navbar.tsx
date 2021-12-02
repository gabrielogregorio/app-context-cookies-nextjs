import styles from '../../styles/components/navbar.module.css';
import { destroyCookie } from 'nookies';
import { useRouter } from 'next/router';
import { useThemeContext } from '../../core/contexts/ThemeContext';
import { defineThemeCookies } from '../../core/services/cookie';
import { cookiesNames } from '../../core/types/cookies';
import { themeNamesEnum } from '../../core/types/themes';

const DAYS_EXPIRE_THEME_TOKEN = 300;

export default function Navbar() {
  const { theme, setTheme } = useThemeContext();

  const router = useRouter();
  function onClickExit(e: any) {
    destroyCookie(null, cookiesNames.TOKEN_JWT);
    router.push('/');
    e.preventDefault();
  }

  const handleClickTheme = () => {
    if (theme === themeNamesEnum.DARK) {
      defineThemeCookies(
        cookiesNames.USER_THEME,
        themeNamesEnum.LIGHT,
        DAYS_EXPIRE_THEME_TOKEN,
      );
      setTheme(themeNamesEnum.LIGHT);
      return;
    }
    defineThemeCookies(
      cookiesNames.USER_THEME,
      themeNamesEnum.DARK,
      DAYS_EXPIRE_THEME_TOKEN,
    );
    setTheme(themeNamesEnum.DARK);
  };

  return (
    <nav className={styles.navbar}>
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
