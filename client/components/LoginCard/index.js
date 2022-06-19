import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { Form, Button, Navbar, Nav, Container } from "react-bootstrap"
import { useState } from "react"

import styles from "./Login.module.css"
import { client } from '../../config/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function LoginCard({ locale, service }) {
    const home = locale === "hi-HI" ? `/hi-HI` : `/`;
    const serviceLink = locale === "hi-HI" ? `/hi-HI/${service}` : `/${service}`
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const utf8_to_b64 = (str) => {
        return window.btoa(unescape(encodeURIComponent(str)));
    }

    const submitLogin = async(e) => {
        e.preventDefault();
        // TODO: to integrate with backend
        let flag = 1;
        let base64 = utf8_to_b64(`${name}:${password}`);

        const res = await fetch(`${client}/api/login`, {
            method: "post", 
            body: base64
        });

        const {data, err} = await res.json();
        
        if (data === null) flag = 0;
        if (flag) {
            localStorage.setItem("auth", 1);
            localStorage.setItem("encode", base64);
            window.location.href = serviceLink;
        }
        else {
            let err = locale === "hi-HI" ? "लॉगिन सफल नहीं रहा। पुनः प्रयास करें या होमपेज पर जाएं" : "Login hasn't been successful. Try again or go to homepage";
            toast(err,
                {
                    closeOnClick: true,
                    autoClose: 10000
                });
        }
    }

    return (
        <div className={styles.container}>
            <Navbar bg="light" expand="lg" className={styles.nav}>
                <Container>
                    <Nav className="me-auto">
                        {/* <Nav.Link href={serviceLink} className={styles.nav_link}>&larr; {
                            locale === "hi-HI" ? "सेवा पर वापस" : "Back to service"
                        }</Nav.Link> */}
                        <Nav.Link href={home} className={styles.nav_link}> {
                            locale === "hi-HI" ? "होमपेज" : "Homepage"
                        }</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    {
                        locale === "hi-HI" ? "वुल्फ देखें 🐺: लॉग इन करें" : "Watch Wolf 🐺: Login"
                    }
                </h1>

                <p className={styles.description}>
                    <i>
                        {
                            locale === "hi-HI" ? <>
                                छवियों और पीडीएफ से हिंदी और अंग्रेजी भाषा में पाठ की भावना का विश्लेषण करें।
                            <br />यह लॉगिन पेज है और किसी भी सुविधा को एक्सेस करने से पहले अधिकृत होना आवश्यक है।
                            </> :
                                <>Analyze the sentiment of the text from images and PDF in Hindi and English Language.
                                <br />This is the login page and one needs to be authorized before accessing any feature.
                                </>
                        }
                    </i>
                </p>

                <div className={styles.row}>
                    <div className={styles.card}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label
                                    className={styles.label}
                                >{locale === "hi-HI" ? "उपयोगकर्ता नाम" : "Username"}</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={e => { setName(e.target.value) }}
                                    placeholder={locale === "hi-HI" ? "उपयोगकर्ता नाम दर्ज करें" : "Enter Username"} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label
                                    className={styles.label}
                                >{locale === "hi-HI" ? "पासवर्ड" : "Password"}</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={e => { setPassword(e.target.value) }}
                                    placeholder={locale === "hi-HI" ? "पास वर्ड दर्ज करें" : "Enter Password"} />
                            </Form.Group>
                            <br />
                            <Button variant="primary"
                                type="submit"
                                className={styles.submit}
                                onClick={submitLogin}
                            >
                                {locale === "hi-HI" ? "प्रस्तुत करना" : "Submit"}
                            </Button>
                        </Form>
                    </div>
                    <div className={styles.img}>
                        <img src="/police.png" />
                    </div>
                </div>
            </main>
            <ToastContainer
                autoClose={10000}
                closeOnClick />
        </div>
    );
}