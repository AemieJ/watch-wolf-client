import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

import styles from "./Service.module.css"
import { Navbar, Nav, Container, Form, Button, InputGroup, FormControl } from "react-bootstrap"
import { useState } from "react"
import ReportTweet from '../ReportTweet'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { client } from '../../config/client';

export default function ServiceCard({ locale }) {
    const home = locale === "hi-HI" ? `/hi-HI` : `/`;
    const [result, setResult] = useState("")
    const [clicked, setClicked] = useState(false)
    const [text, setText] = useState("")

    const generateReport = async(e) => {
        e.preventDefault()
        setClicked(true)
        // TODO: required to integrate with backend 
        if (text.length === 0) {
            setClicked(false);
            setText("")

            let err = locale === "hi-HI" ? "कृपया ट्वीट दर्ज करें। ट्वीट खाली नहीं हो सकता|" :
                "Please enter the tweet. Tweet cannot be empty.";
            toast(err,
                {
                    closeOnClick: true,
                    autoClose: 10000
                });
        } else {
            let tweetRegex = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/g;
            let found = text.match(tweetRegex);
            if (found !== null) {
                let list = text.split("/");
                let tweetID = list[list.length - 1];
                
                const res = await fetch(`${client}/api/generateTweet`, {
                    method: "POST", 
                    body: JSON.stringify({
                        "base64": localStorage.getItem("encode"),
                        "tweet": tweetID
                    })
                })

                const { data, err } = await res.json();
                console.log(data);

                let result = "";
                if (err) {
                    toast(err, {
                        closeOnClick: true,
                        autoClose: 10000
                    });
                } else {
                    let res1 = JSON.parse(data)
                    if (res1['status'] === undefined) {
                        console.log(res1)
                        result = data;
                        setResult(result);
                    }
                    
                }
            } else {
                setClicked(false);
                setText("")

                let err = locale === "hi-HI" ? "ट्वीट अमान्य है। एक वैध ट्वीट यूआरएल दर्ज करें" :
                    "Tweet is invalid. Enter a valid tweet URL";
                toast(err,
                    {
                        closeOnClick: true,
                        autoClose: 10000
                    });
            }
        }

    }

    const logout = async (e) => {
        e.preventDefault();

        const res = await fetch(`${client}/api/logout`, {
            method: "GET"
        }); 

        const { data, err } = await res.json(); 
        if (data !== null) {
            localStorage.setItem("auth", 0);
            localStorage.setItem("encode", "");
            window.location.href = `${client}/`;
        } else {
            let err = locale === "hi-HI" ? "लॉगआउट असफल" : "Logout unsuccessful"
            toast(err, {
                closeOnClick: true,
                autoClose: 10000
            });
        }
    }

    return (
        <div suppressHydrationWarning className={styles.container}>
            <Navbar bg="light" expand="lg" className={styles.nav}>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href={home} className={styles.nav_link}> {
                            locale === "hi-HI" ? "होमपेज" : "Homepage"
                        }</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link href={home} className={`${styles.nav_link} ${styles.nav_btn}`}
                            onClick={logout}
                        > {
                                locale === "hi-HI" ? "लॉग आउट" : "Logout"
                            }</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    {
                        locale === "hi-HI" ? "वॉच वुल्फ 🐺: ट्वीट रिपोर्ट" : "Watch Wolf 🐺: Tweet Report"
                    }
                </h1>

                <p className={styles.description}>
                    <i>
                        {
                            locale === "hi-HI" ? <>
                                हिंदी और अंग्रेजी भाषा में ट्वीट से पाठ की भावना का विश्लेषण करें।
                            <br />ट्वीट लिंक टाइप करके एक सेंटीमेंट रिपोर्ट तैयार की जा सकती है। नीचे दिए गए बॉक्स में लिंक डालें।
                            </> :
                                <>Analyze the sentiment of the text from tweets in Hindi and English Language.
                                <br />A sentiment report can be generated by typing the tweet URL. Input the URL in the below box.
                                </>
                        }
                    </i>
                </p>
                <InputGroup className={`mb-3 ${styles.input_grp}`}>
                    <InputGroup.Text id="basic-addon1">
                        {
                            locale === "hi-HI" ? "ट्वीट यूआरएल दर्ज करें" : "Enter Tweet URL"
                        }</InputGroup.Text>
                    <FormControl
                        placeholder={locale === "hi-HI" ? "ट्वीट यूआरएल" : "Tweet URL"}
                        aria-label={locale === "hi-HI" ? "ट्वीट यूआरएल" : "Tweet URL"}
                        aria-describedby="basic-addon1"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        disabled={clicked}
                    />
                </InputGroup>
                <br />
                <div>
                    <Button variant="primary"
                        type="submit"
                        className={styles.submit}
                        onClick={generateReport}
                    >
                        {locale === "hi-HI" ? "रिपोर्ट बनाओ" : "Generate Report"}
                    </Button>
                    <Button
                        type="submit"
                        className={`${styles.submit} ${styles.clear}`}
                        onClick={() => {
                            setClicked(false);
                            setResult("");
                            setText("");
                        }}
                    >
                        {locale === "hi-HI" ? "रिपोर्ट साफ़ करें" : "Clear Report"}
                    </Button>
                </div>

                {
                    result.length === 0 ? (clicked ? <strong style={{ marginTop: "2rem", color: "#950002" }}
                    >{locale === "hi-HI" ? "इस ट्वीट के लिए रिपोर्ट तैयार नहीं की जा सकती या अभी तक लोड नहीं की गई है।" : 
                    "Report for this tweet cannot be generated or hasn't been loaded yet."}</strong>: 
                    <></>
                    ) :
                        <>
                            <ReportTweet locale={locale} result={result} />
                        </>
                }
            </main>
            <ToastContainer
                autoClose={10000}
                closeOnClick />
        </div>
    );
}