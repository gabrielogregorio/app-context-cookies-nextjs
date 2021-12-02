import React from 'react';
import Footer from '../layout/footer';
import Navbar from '../layout/navbar';
import styles from '../../styles/components/main.module.css';

interface LoggedUserInterface {
  children: any;
}

export default function LoggedUserTemplate({ children }: LoggedUserInterface) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
