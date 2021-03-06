import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

import styles from "./Service.module.css"
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap"
import { useState } from "react"
import ReportText from '../ReportText'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { client } from '../../config/client';
import { getMailLink } from "../mailTo";

export default function ServiceCard({ locale }) {
    const home = locale === "hi-HI" ? `/hi-HI` : `/`;
    const [result, setResult] = useState("")
    const [resultParse, setResultParse] = useState(null)
    const [clicked, setClicked] = useState(false)
    const [text, setText] = useState("");

    const RESPONSE_TYPE = {
        TEXT: "Text",
        PDF: "PDF",
        IMAGE: "Image",
        TWEET: "Tweet"
    }


    const generateReport = async (e) => {
        e.preventDefault();
        setClicked(true)
        // TODO: required to integrate with backend 
        if (text.length === 0) {
            setClicked(false);
            setText("")

            let err = locale === "hi-HI" ? "कृपया एक पाठ दर्ज करें। टेक्स्ट खाली नहीं हो सकता." :
                "Please enter a text. Text cannot be empty.";
            toast(err,
                {
                    closeOnClick: true,
                    autoClose: 10000
                });
        } else {
            const res = await fetch(`${client}/api/generateText`, {
                method: "POST",
                body: JSON.stringify({
                    "base64": localStorage.getItem("encode"),
                    "text": text
                })
            })

            const { data, err } = await res.json();
            let result = "";
            if (err) {
                toast(err, {
                    closeOnClick: true,
                    autoClose: 10000
                });
            } else {
                let res1 = JSON.parse(data)
                console.log(res1['status'])
                if (res1['status'] === undefined) {
                    console.log(res1)
                    result = data;
                    setResult(result);
                    setResultParse(res1)
                }

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
                        locale === "hi-HI" ? "वॉच वुल्फ 🐺: पाठ रिपोर्ट" : "Watch Wolf 🐺: Text Report"
                    }
                </h1>

                <p className={styles.description}>
                    <i>
                        {
                            locale === "hi-HI" ? <>
                                छवियों और पीडीएफ से हिंदी और अंग्रेजी भाषा में पाठ की भावना का विश्लेषण करें।
                            <br />टेक्स्ट इनपुट करके सेंटीमेंट रिपोर्ट तैयार की जा सकती है। नीचे सादा पाठ दर्ज करें।
                            </> :
                                <>Analyze the sentiment of the text from images and PDF in Hindi and English Language.
                                <br />Sentiment report can be generated by inputting the text. Enter the plain text below.
                                </>
                        }
                    </i>
                </p>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={8}
                            className={styles.form_text}
                            value={text}
                            onChange={(e) => { setText(e.target.value) }}
                            disabled={clicked}
                        />
                    </Form.Group>
                </Form>
                <br />
                <div className={styles.submit_btn_grp}>
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
                    {
                        result.length !== 0 ? <a variant="primary"
                        type="submit"
                        className={`${styles.submit} ${styles.mail}`}
                        href={getMailLink(
                            RESPONSE_TYPE.TEXT,
                            text,
                            [resultParse.sentiment.positiveScore, resultParse.sentiment.negativeScore, Number(resultParse.sentiment.neutralScore) + Number(resultParse.sentiment.mixedScore)],
                            resultParse.languageCode,
                            resultParse.entities
                        )}
                    >
                        {locale === "hi-HI" ? "मेल रिपोर्ट" : "Mail Report"}
                    </a> : <></>
                    }
                    
                </div>

                {
                    result.length === 0 ?
                        (clicked ? <div>
                            <img src="/loader.gif" alt="loader" className={styles.loader} />
                        </div> : <></>
                        ) :
                        <ReportText locale={locale} result={result} />
                }
            </main>

            <ToastContainer
                autoClose={10000}
                closeOnClick />
        </div>
    );
}