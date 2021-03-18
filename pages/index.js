import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ list }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cine Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Cine Next - Filmes em Destaque</h1>

        <Link href="/busca">Ir para Busca</Link>

        <ul>
          {list.map((item) => (
            <li>
              <a href={`/movie/${item.id}`}>
                <>
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    width="150"
                  />
                  <br />
                  {item.title}
                </>
              </a>
            </li>
          ))}
        </ul>
        <a href="/sobre">Sobre</a>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/trending");
  const json = await res.json();

  return {
    props: {
      list: json.list,
    },
  };
}
