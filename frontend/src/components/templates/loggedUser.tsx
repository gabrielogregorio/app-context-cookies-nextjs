import React from 'react';
import Footer from '../layout/footer';
import Navbar from '../layout/navbar';
import styles from '../../styles/components/main.module.css';

interface LoggedUserInterface {
  children: any;
  theme: string;
}

export default function LoggedUserTemplate({
  children,
  theme,
}: LoggedUserInterface) {
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
