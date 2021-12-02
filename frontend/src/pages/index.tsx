import type { NextPage } from 'next';
import Head from 'next/head';
import { setCookie } from 'nookies';
import { useState } from 'react';
import Button from '../components/elements/button';
import Input from '../components/elements/input';
import { daysInSeconds } from '../core/helpers/daysInSeconds';
import Api from '../core/services/api';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { cookiesNames } from '../core/types/cookies';

const Home: NextPage = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  function handleSubmit(event: any) {
    Api.post('/login', {
      password,
      email,
    })
      .then((res) => {
        setCookie(null, cookiesNames.TOKEN_JWT, res.data.token, {
          maxAge: daysInSeconds(1),
          path: '/', // disponível a partir de
        });
        router.push('/home');
      })
      .catch(() => {});
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Você precisa fazer login</h1>

      <p>admin admin e confirma</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          type="text"
          name="email"
          label="Digite seu email"
          value={email}
          setValue={setEmail}
        />

        <Input
          type="password"
          name="password"
          label="Digite sua senha"
          value={password}
          setValue={setPassword}
        />

        <Button type="submit">Fazer Login</Button>
      </form>
    </div>
  );
};

export default Home;
