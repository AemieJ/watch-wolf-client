import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

import { useRouter } from "next/router"
import styles from '../styles/Home.module.css'
import homePosts from "./assets/home.json"
import HomeCard from "../components/HomeCard"

export default function Home(props) {
  const { locale, locales, asPath } = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>Watch Wolf</title>
        <meta name="description" content="Watch wolf helps to understand sentiment of text, pdf, images and tweets" />
        <link rel="icon" href="/favicon.ico" />
        <style>
@import url(&quot;https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap&quot;);
</style>
      </Head>

      <main className={styles.main}>
        <div className={styles.navbar}>
          {
            locales.map((l, i) => {
              return <span
                key={i}
                className={l === locale ? styles.selected : ""}
              >
                <Link
                  href={asPath}
                  locale={l}
                >
                  {
                    l == "hi-HI" ? "हिन्दी" : "English"
                  }
                </Link>
              </span>
            })
          }
        </div>

        <h1 className={styles.title}>
          {
            locale === "hi-HI" ? "वॉच वुल्फ 🐺" : "Watch Wolf 🐺"
          }
        </h1>

        <p className={styles.description}>
          <i>
            {
              locale === "hi-HI" ? "छवियों और पीडीएफ से पाठ की भावना का विश्लेषण करें हिंदी और अंग्रेजी भाषा" :
                "Analyze the sentiment of the text from images and PDF in Hindi and English Language"
            }
          </i>
        </p>

        <div className={styles.grid}>
          {
            homePosts.home
              .filter(p => p.locale == locale)
              .map((post, i) => {
                return <HomeCard
                  key={i}
                  homeCard={post}
                />
              })
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Twelfth-Hour"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created  with  ❣️  by  the &nbsp;
          <b>Twelfth Hour</b>&nbsp;
           team
        </a>
      </footer>
    </div>
  )
}


export async function getStaticProps(context) {
  return {
    props: {
      context
    },
  };
}