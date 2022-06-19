import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import LoginCard from "../components/LoginCard"
import TweetCard from "../components/TweetCard"

export default function Text(props) {
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
        <title>Watch Wolf: Tweet Report</title>
        <meta name="description" content="Watch wolf helps to understand sentiment of text, pdf, images and tweets" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    {isAuth ? (
         <TweetCard locale={locale} />
    ) : (
        <LoginCard locale={locale} service="text" />
    )} </>;
}

export async function getStaticProps(context) {
    return {
        props: {
            context,
        },
    };
}