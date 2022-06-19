import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

import styles from "./Service.module.css"
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap"
import { useState } from "react"
import ReportPDF from '../ReportPDF'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { client } from '../../config/client';

export default function ServiceCard({ locale }) {
    const home = locale === "hi-HI" ? `/hi-HI` : `/`;
    const [result, setResult] = useState("")
    const [clicked, setClicked] = useState(false)
    const [file, setFile] = useState(null)
    
    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
          const i = event.target.files[0];
    
          setFile(i);
        }
    };

    const generateReport = async (e) => {
        e.preventDefault();

        setClicked(true)
        // TODO: required to integrate with backend
        if (file === null) {
            setClicked(false);
            setFile(null)

            let err = locale === "hi-HI" ? "कृपया एक पीडीएफ संलग्न करें। अटैचमेंट खाली नहीं हो सकता|" :
                "Please attach a PDF. Attachment cannot be empty.";
            toast(err,
                {
                    closeOnClick: true,
                    autoClose: 10000
                });
        } else {
            let body = new FormData()
            body.append("file", file);
            console.log(file)
            const res = await fetch(`${client}/api/generatePDF`, {
                method: "POST",
                body
            })

            const { data, err } = await res.json()
            let result = "";
            if (err) {
                setFile(null);
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
                        locale === "hi-HI" ? "वुल्फ देखें 🐺: पीडीएफ रिपोर्ट" : "Watch Wolf 🐺: PDF Report"
                    }
                </h1>

                <p className={styles.description}>
                    <i>
                        {
                            locale === "hi-HI" ? <>
                                छवियों और पीडीएफ से हिंदी और अंग्रेजी भाषा में पाठ की भावना का विश्लेषण करें।
                            <br />पीडीएफ संलग्न करके सेंटीमेंट रिपोर्ट तैयार की जा सकती है। नीचे पीडीएफ संलग्न करें।
                            </> :
                                <>Analyze the sentiment of the text from images and PDF in Hindi and English Language.
                                <br />Sentiment report can be generated by attaching PDF. Attach the PDF below.
                                </>
                        }
                    </i>
                </p>
                <input type="file" className={"form-control"} id="customFile"
                    accept="application/pdf"
                    onChange={uploadToClient}
                    disabled={clicked}
                />
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
                            setFile(null);
                            document.querySelector("#customFile").value = null;
                        }}
                    >
                        {locale === "hi-HI" ? "रिपोर्ट साफ़ करें" : "Clear Report"}
                    </Button>
                </div>

                {
                    result.length === 0 ? (clicked ? <strong style={{ marginTop: "2rem", color: "#950002" }}
                    >{ locale === "hi-HI" ? "इस पीडीएफ के लिए रिपोर्ट तैयार नहीं की जा सकती है या अभी तक लोड नहीं की गई है।" : 
                    "Report for this PDF cannot be generated or hasn't been loaded yet."}</strong>: <></>
                    ) :
                        <>
                            <ReportPDF locale={locale} result={result} />
                        </>
                }
            </main>

            <ToastContainer
                autoClose={10000}
                closeOnClick />
        </div>
    );
}