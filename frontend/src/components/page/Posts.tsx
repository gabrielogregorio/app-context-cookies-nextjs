import { postType } from '../../core/types/posts';
import { Post } from '../widgets/Post';
import styles from '../../styles/components/posts.module.css';

interface postsInterface {
  posts: postType[];
}

export function Posts({ posts }: postsInterface) {
  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}
