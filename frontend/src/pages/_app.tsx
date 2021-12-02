import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeContext } from '../core/contexts/ThemeContext';
import { useState } from 'react';
import { parseCookies } from 'nookies';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>(parseCookies().USER_THEME || '');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export async function getServerSideProps(context: any) {
  const cookies = parseCookies(context);

  return {
    props: {
      USER_THEME: cookies.USER_THEME || 'DARK',
    },
  };
}

export default MyApp;
