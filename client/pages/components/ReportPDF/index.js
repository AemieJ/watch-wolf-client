import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

import styles from './Report.module.css'
import RadialSeparators from "./RadialSeparators";
import { Card, Button } from "react-bootstrap"
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from "react"

export default function ReportPDF({ locale, result }) {
    const jsonRes = JSON.parse(result)
    const positive = (Math.round(jsonRes.sentiment.positiveScore * 1000) / 1000).toFixed(3);
    const negative = (Math.round(jsonRes.sentiment.negativeScore * 1000) / 1000).toFixed(3);
    const neutral = (Math.round(jsonRes.sentiment.neutralScore * 1000) / 1000).toFixed(3);
    const mixed = (Math.round(jsonRes.sentiment.mixedScore * 1000) / 1000).toFixed(3);

    const lists = jsonRes.entities

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                {
                    locale === "hi-HI" ? "भावना रिपोर्" : "Sentiment Report"
                }
            </h1>
            <p className={styles.description}>
                <i>
                    {
                        locale === "hi-HI" ? <>
                            यह रिपोर्ट पीडीएफ के विश्लेषण को प्रदर्शित करेगी।
                            <br />इस विश्लेषण से आप समझ सकते हैं कि इनपुट की भावना सकारात्मक है या नकारात्मक।
                            </> :
                            <>This report will showcase the analysis of the PDF. <br /> With this analysis, you can understand
                            whether the sentiment of the input is positive or negative.</>
                    }
                </i>
            </p>

            <div className={styles.reports}>
                <div className={styles.report_circular} style={{ width: 200, height: 200 }}>
                    <div>
                        <CircularProgressbarWithChildren
                            value={positive * 100}
                            text={`${positive}`}
                            strokeWidth={10}
                            styles={buildStyles({
                                pathColor: "#008000",
                                strokeLinecap: "butt",
                                textColor: "#008000"
                            })}
                        >
                            <RadialSeparators
                                count={12}
                                style={{
                                    background: "#fff",
                                    width: "2px",
                                    height: `${10}%`
                                }}
                            />
                        </CircularProgressbarWithChildren>
                    </div>
                    <p className={styles.report_text}>{
                    locale === "hi-HI" ? "सकारात्मक स्कोर" : "Positive Score"
                    }</p>
                </div>
                <div className={styles.report_circular} style={{ width: 200, height: 200 }}>
                    <div><CircularProgressbarWithChildren
                        value={negative * 100}
                        text={`${negative}`}
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: "#950002",
                            strokeLinecap: "butt",
                            textColor: "#950002"
                        })}
                    >
                        <RadialSeparators
                            count={12}
                            style={{
                                background: "#fff",
                                width: "2px",
                                height: `${10}%`
                            }}
                        />
                    </CircularProgressbarWithChildren></div>
                    <p className={styles.report_text}>{
                    locale === "hi-HI" ? "नकारात्मक स्कोर" : "Negative Score"
                    }</p>
                </div>
                <div className={styles.report_circular} style={{ width: 200, height: 200 }}>
                    <div><CircularProgressbarWithChildren
                        value={neutral * 100}
                        text={`${neutral}`}
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: "#083a61",
                            strokeLinecap: "butt",
                            textColor: "#083a61"
                        })}
                    >
                        <RadialSeparators
                            count={12}
                            style={{
                                background: "#fff",
                                width: "2px",
                                height: `${10}%`
                            }}
                        />
                    </CircularProgressbarWithChildren></div>
                    <p className={styles.report_text}>{
                    locale === "hi-HI" ? "तटस्थ स्कोर" : "Neutral Score" 
                    }</p>
                </div>
                <div className={styles.report_circular} style={{ width: 200, height: 200 }}>
                    <div><CircularProgressbarWithChildren
                        value={mixed * 100}
                        text={`${mixed}`}
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: "#ff8000",
                            strokeLinecap: "butt",
                            textColor: "#ff8000"
                        })}
                    >
                        <RadialSeparators
                            count={12}
                            style={{
                                background: "#fff",
                                width: "2px",
                                height: `${10}%`
                            }}
                        />
                    </CircularProgressbarWithChildren></div>
                    <p className={styles.report_text}>{
                    locale === "hi-HI" ? "मिश्रित स्कोर" : "Mixed Score"
                    }</p>
                </div>
            </div>

            <h1 className={styles.title}>
                {
                    locale === "hi-HI" ? "संस्थाओं की रिपोर्ट" : "Entities Report"
                }
            </h1>
            <p className={styles.description}>
                <i>
                    {
                        locale === "hi-HI" ? <>
                            यह रिपोर्ट पीडीएफ के विश्लेषण को प्रदर्शित करेगी।
                            <br />इस विश्लेषण के साथ, आप विशेष पीडीएफ की संस्थाओं को समझ सकते हैं।
                            </> :
                            <>This report will showcase the analysis of the PDF. <br /> With this analysis,
                            you can understand the entities of the particular PDF.</>
                    }
                </i>
            </p>
            
            <div className={styles.entity_sec}>
            {
                lists.map(function(elm, idx) {
                    return <Card className={styles.card}>
                    <Card.Header className={styles.card_header}>Entity - {idx + 1}</Card.Header>
                    <Card.Body>
                      <div className={styles.card_row}>
                    <Card.Title className={styles.title}>{
                        locale === "hi-HI" ? "मूलपाठ" : "Text"
                }: &nbsp;</Card.Title>
                      <Card.Text>
                        {
                            locale === "hi-HI" ? elm.text :
                            (elm.text.toLowerCase())[0].toUpperCase() + (elm.text.toLowerCase()).slice(1)
                        }
                      </Card.Text>
                      </div>

                      <div className={styles.card_row}>
                      <Card.Title className={styles.title}>{
                          locale === "hi-HI" ? "टाइप" : "Type"
                      }: &nbsp;</Card.Title>
                      <Card.Text>
                        {
                            (elm.type.toLowerCase())[0].toUpperCase() + (elm.type.toLowerCase()).slice(1)
                        }
                      </Card.Text>
                      </div>

                    <div className={styles.card_row}>
                    <Card.Title className={styles.title}>{
                        locale === "hi-HI" ? "अंक" : "Score"
                    }: &nbsp;</Card.Title>
                      <Card.Text>
                        {(Math.round(elm.score * 1000) / 1000).toFixed(3)}
                      </Card.Text>
                    </div>
                    </Card.Body>
                  </Card>
                })
            }
            </div>
        </main>
    );
}