import styles from '../../styles/components/post.module.css';

interface PostInterface {
  title: string;
  body: string;
}

export function Post({ title, body }: PostInterface) {
  return (
    <div className={styles.post}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
