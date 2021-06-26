import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Image from 'next/image'

export default function Season1() {

    function dontWant() {
        setShowI(true)
        document.querySelector("#cant-touch").classList.add("hide")
        document.querySelector("h1").innerText = "KKKKKKKKKKKK"
        document.querySelector("h2").innerText = "COMO SE TIVESSE ESCOLHA NO MEU APP"

    }

    const [showI, setShowI] = useState(false)

    const i = <Image id="i" alt="" width="100%" height="100%" src="/3cda3aef-f126-439b-b79b-0a2ad046fb66.jpeg" className="centered" />

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="Oi, mama" content="Site da mama" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={"centered"}>

                <h1 className={"centered"} style={{ marginTop: "5rem" }}>
                    SEASON 1
                </h1>

                {showI ? i : null}

                <div className={"centered"} >
                    <h2></h2>
                    <Link href="/mari">
                        <a className={"centered"} style={{ color: "blue", display: "inline" }}>
                            &rarr; CLICA AQUI SE VOCÊ QUER ME PEGAR &larr;
                        </a>
                    </Link>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <Link href="#">
                        <a style={{ fontSize: "0.5rem" }} id="cant-touch" onClick={dontWant}>
                            clica aqui se não quer me pegar
                        </a>
                    </Link>
                </div>
            </main>

            <footer className={styles.footer}>
                <Image id="i" alt="" width="100%" height="100%" src="/woody.jpg" />
            </footer>
        </div>
    )
}