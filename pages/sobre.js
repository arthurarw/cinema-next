import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function About({ author }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cine Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Cine Next - Sobre</h1>

        <p>
          O sistema foi feito em live para demonstrar os primeiros passos com o
          framework Next.js
        </p>

        <hr />
        <p>Autor: {author}</p>

        <a href="/">Home</a>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      author: "Arthur",
    },
  };
}
