import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

import styles from "./Service.module.css"
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap"
import { useState } from "react"
import ReportPDF from '../ReportPDF'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { client } from '../../../config/client';
import { server } from '../../../config/server'

export default function ServiceCard({ locale }) {
    const home = locale === "hi-HI" ? `/hi-HI` : `/`;
    const [result, setResult] = useState("")
    const [clicked, setClicked] = useState(false)
    const [file, setFile] = useState(null)

    const getBase64 = (file) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setFile(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
    
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
            
            // let body = new FormData()
            // body.append("file", file);
            // const res = await fetch(`${client}/api/generatePDF`, {
            //     method: "POST", 
            //     headers: {
            //         "Content-Type": "multipart/form-data"
            //     },
            //     body: JSON.stringify({
            //         "base64": localStorage.getItem("encode"),
            //         "formData": body
            //     })
            // })

            // const { data, err } = await res.json()

            let result = "";
            let jsonRes = {
                "languageCode": "en",
                "sentiment": {
                    "positiveScore": 0.20946373045444489,
                    "negativeScore": 6.742851692251861E-4,
                    "neutralScore": 0.7898232340812683,
                    "mixedScore": 3.8793106796219945E-5
                },
                "entities": [
                    {
                        "text": "Deutsche Bank of India",
                        "type": "ORGANIZATION",
                        "score": 0.9490169286727905
                    },
                    {
                        "text": "summer of 2022",
                        "type": "DATE",
                        "score": 0.8828208446502686
                    }
                ]
            }

            result = JSON.stringify(jsonRes);
            setResult(result);
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
                <input type="file" class="form-control" id="customFile"
                    type="file" accept="application/pdf"
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
                    result.length === 0 ? <></> :
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