import { useThemeContext } from '../../core/contexts/ThemeContext';
import styles from '../../styles/components/post.module.css';

interface PostInterface {
  id: number;
  title: string;
  body: string;
}

export function Post({ id, title, body }: PostInterface) {
  const { theme } = useThemeContext();

  return (
    <div className={`${styles.post} ${theme === 'DARK' ? styles.dark : ''}`}>
      <h3>{title}</h3>
      <p>id = {body}</p>
    </div>
  );
}
