import { useThemeContext } from '../../core/contexts/ThemeContext';
import styles from '../../styles/components/footer.module.css';

export default function Footer() {
  const { theme } = useThemeContext();

  return (
    <footer
      className={`${styles.footer} ${theme === 'DARK' ? styles.dark : ''}`}>
      <a href="https://github.com/gabrielogregorio">Feito pelo Gregório</a>
    </footer>
  );
}
