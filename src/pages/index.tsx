import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Camp In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        className={styles.Imagem}
        src="/images/profile.jpg"
        alt="Imagem de um livro"
        width={569}
        height={1024}
      />
    </div>
  );
}
