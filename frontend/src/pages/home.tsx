import { parseCookies } from 'nookies';
import { useEffect, useState } from 'react';
import LoggedUserTemplate from '../components/templates/loggedUser';
import { SetThemeCookies } from '../core/services/cookie';
import Api from '../core/services/api';
import usePosts from '../core/hooks/usePosts';
import { Loading } from '../components/elements/loading';

export default function Home(props: any) {
  const [theme, setTheme] = useState<string>(props.USER_THEME);
  const { posts, loading, error } = usePosts();

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
    <LoggedUserTemplate theme={theme}>
      <h1>Home Page</h1>

      <p>Theme {theme}</p>

      {loading !== 'finish' ? <Loading /> : null}

      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.id}</h2>
          <p>{post.title}</p>
        </div>
      ))}

      <button onClick={() => handleClickTheme()} type="button">
        Trocar Tema
      </button>
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
    props: {
      USER_THEME: cookies.USER_THEME || 'DARK',
    },
  };
}
