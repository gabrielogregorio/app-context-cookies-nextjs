import { parseCookies } from 'nookies';
import { Loading } from '../components/elements/loading';
import { Posts } from '../components/page/Posts';
import Api from '../core/services/api';
import LoggedUserTemplate from '../components/templates/loggedUser';
import usePosts from '../core/hooks/usePosts';

export default function Home() {
  const { posts, loading, error } = usePosts();

  return (
    <LoggedUserTemplate>
      <h1>Home Page</h1>

      {loading !== 'finish' ? <Loading /> : null}

      {error ? <p>Erro ao buscar posts</p> : null}

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
