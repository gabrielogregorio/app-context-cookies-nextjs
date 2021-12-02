import { parseCookies } from 'nookies';
import LoggedUserTemplate from '../components/templates/loggedUser';
import Api from '../core/services/api';
import usePosts from '../core/hooks/usePosts';
import { Loading } from '../components/elements/loading';
import { useThemeContext } from '../core/contexts/ThemeContext';
import { Posts } from '../components/page/Posts';

export default function Home(props: any) {
  const { posts, loading, error } = usePosts();

  return (
    <LoggedUserTemplate>
      <h1>Home Page</h1>

      {loading !== 'finish' ? <Loading /> : null}

      <Posts posts={posts} />
    </LoggedUserTemplate>
  );
}

export async function getServerSideProps(context: any) {
  const cookies = parseCookies(context);
  const { TOKEN_JWT } = cookies;

  try {
    await Api.get('/auth', { headers: { Authorization: TOKEN_JWT ?? '' } });
  } catch (error: any) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
