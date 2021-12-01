import { parseCookies } from 'nookies';
import { useState } from 'react';
import LoggedUserTemplate from '../components/templates/loggedUser';
import { SetThemeCookies } from '../core/services/cookie';

export default function Homepage(props: any) {
  const [theme, setTheme] = useState<string>(props.USER_THEME);

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
      <h1>Home Page {props.msg}</h1>

      <p>Theme {theme}</p>

      <button onClick={() => handleClickTheme()} type="button">
        Trocar Tema
      </button>
    </LoggedUserTemplate>
  );
}

export async function getServerSideProps(context: any) {
  const cookies = parseCookies(context);

  return {
    props: {
      msg: 'teste',
      USER_THEME: cookies.USER_THEME || 'DARK',
    },
  };
}
