import React from 'react';
import Footer from '../layout/footer';
import Navbar from '../layout/navbar';
import styles from '../../styles/components/main.module.css';
import { useThemeContext } from '../../core/contexts/ThemeContext';

interface LoggedUserInterface {
  children: any;
}

export default function LoggedUserTemplate({ children }: LoggedUserInterface) {
  const { theme } = useThemeContext();

  return (
    <>
      <Navbar />
      <main
        className={`${styles.main} ${theme === 'DARK' ? styles.dark : ''} `}>
        {children}
      </main>
      <Footer />
    </>
  );
}
