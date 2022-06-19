import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import LoginCard from "./components/LoginCard"
import TextCard from "./components/TextCard"

export default function Text() {
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

    return isAuth ? (
         <TextCard locale={locale} />
    ) : (
        <LoginCard locale={locale} service="text" />
    );
}

export async function getStaticProps(context) {
    return {
        props: {
            context,
        },
    };
}