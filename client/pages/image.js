import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import LoginCard from "../components/LoginCard"
import ImageCard from "../components/ImageCard"
import styles from "../components/ImageCard/Service.module.css"

export default function Images(props) {
    const { locale, locales, asPath } = useRouter()
    const [isAuth, setAuth] = useState(true)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const item = localStorage.getItem("auth")
            if (item === null || item === undefined) setAuth(false);
            if (item === "1") setAuth(true);
            if (item === "0") setAuth(false);
        }
    }, [])

    return <>
    <Head>
        <title>Watch Wolf: Image Report</title>
        <meta name="description" content="Watch wolf helps to understand sentiment of text, pdf, images and tweets" />
        <link rel="icon" href="/favicon.ico" />
        <style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap');
</style>
    </Head>
    {isAuth ? (
         <ImageCard locale={locale} />
    ) : (
        <LoginCard locale={locale} service="pdf" />
    )}
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
    </>;
}

export async function getStaticProps(context) {
    return {
        props: {
            context
        },
    };
}