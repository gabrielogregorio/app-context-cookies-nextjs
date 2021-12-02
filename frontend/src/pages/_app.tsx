import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeContext } from '../core/contexts/ThemeContext';
import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { themeNamesEnum } from '../core/types/themes';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>('');

  useEffect(() => {
    setTheme(parseCookies().USER_THEME ?? '');
  }, []);

  return (
    <div className={`app ${theme === themeNamesEnum.DARK ? 'dark' : ''}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </div>
  );
}

export default MyApp;
