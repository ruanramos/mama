import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Countdown() {


    const vaccineDay = new Date("Aug 23, 2021 00:00:00").getTime()

    const [coronavac, setCoronavac] = useState(vaccineDay + 1209600000 + 1814400000)
    const [astrazeneca, setAstrazeneca] = useState(vaccineDay + 7776000000 + 1209600000)
    const [pfizer, setPfizer] = useState(vaccineDay + 7776000000 + 1209600000)
    const [janssen, setJanssen] = useState(vaccineDay + 1209600000)

    const now = new Date().getTime()

    const [differenceInMillis, setDifferenceInMillis] = useState({
        coronavac: coronavac - now,
        janssen: janssen - now,
        pfizer: pfizer - now,
        astrazeneca: astrazeneca - now
    })

    const [diffAstra, setDiffAstra] = useState()
    const [diffCorona, setDiffCorona] = useState()
    const [diffJanssen, setDiffJanssen] = useState()
    const [diffPfizer, setDiffPfizer] = useState()

    useEffect(() => {
        const interval = setInterval(() => {
            const nowLocal = new Date().getTime();
            setDifferenceInMillis({
                coronavac: coronavac - nowLocal,
                janssen: janssen - nowLocal,
                pfizer: pfizer - nowLocal,
                astrazeneca: astrazeneca - nowLocal,
            })

            setDiffAstra(Math.floor(differenceInMillis['astrazeneca'] / (1000 * 60 * 60 * 24)) + "d "
                + Math.floor((differenceInMillis['astrazeneca'] % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + "h "
                + Math.floor((differenceInMillis['astrazeneca'] % (1000 * 60 * 60)) / (1000 * 60)) + "m "
                + Math.floor((differenceInMillis['astrazeneca'] % (1000 * 60)) / 1000) + "s ")

            setDiffCorona(Math.floor(differenceInMillis['coronavac'] / (1000 * 60 * 60 * 24)) + "d "
                + Math.floor((differenceInMillis['coronavac'] % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + "h "
                + Math.floor((differenceInMillis['coronavac'] % (1000 * 60 * 60)) / (1000 * 60)) + "m "
                + Math.floor((differenceInMillis['coronavac'] % (1000 * 60)) / 1000) + "s ")

            setDiffPfizer(Math.floor(differenceInMillis['pfizer'] / (1000 * 60 * 60 * 24)) + "d "
                + Math.floor((differenceInMillis['pfizer'] % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + "h "
                + Math.floor((differenceInMillis['pfizer'] % (1000 * 60 * 60)) / (1000 * 60)) + "m "
                + Math.floor((differenceInMillis['pfizer'] % (1000 * 60)) / 1000) + "s ")

            setDiffJanssen(Math.floor(differenceInMillis['janssen'] / (1000 * 60 * 60 * 24)) + "d "
                + Math.floor((differenceInMillis['janssen'] % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + "h "
                + Math.floor((differenceInMillis['janssen'] % (1000 * 60 * 60)) / (1000 * 60)) + "m "
                + Math.floor((differenceInMillis['janssen'] % (1000 * 60)) / 1000) + "s ")
        }, 1000);
        return () => clearInterval(interval);
    }, [astrazeneca, coronavac, differenceInMillis, janssen, pfizer, vaccineDay]);


    return (
        <>
            <h1 style={{ textAlign: "center" }}>A CURIOSIDADE NÃO MATOU O GATO PORQUE ELE É MUITO FOFO</h1>

            <Image alt="" width="700%" height="500%" src="https://www.rover.com/blog/wp-content/uploads/2019/04/cute-big-eyes-960x540-1.jpg" />
            <h2>
                <Link href="/">
                    <a>
                        VOLTA LÁ PRO COMEÇO &larr;
                    </a>
                </Link>
            </h2>

            <h2 style={{ textAlign: "center", "color": "hotpink" }}>DUDU ME PROMETEU DIA <div style={{ "color": "silver", textDecoration: "underline", fontSize: "70px" }}>{new Date("Aug 23, 2021 00:00:00").toDateString()}</div></h2>


            <h2>
                Faltam exatos <span style={{ "color": "Blue" }}>{diffAstra}</span>
                <span style={{ "color": "red" }}>pra gente se pegar</span> se eu tomar Astrazeneca
            </h2>
            <h2>
                Faltam exatos <span style={{ "color": "Blue" }}>{
                    diffCorona
                }</span> <span style={{ "color": "red" }}>pra gente se pegar</span> se eu tomar Coronavac
            </h2>
            <h2>
                Faltam exatos <span style={{ "color": "Blue" }}>{
                    diffPfizer
                } </span> <span style={{ "color": "red" }}>pra gente se pegar</span> se eu tomar Pfizer
            </h2>
            <h2>
                Faltam exatos <span style={{ "color": "Blue" }}>{
                    diffJanssen
                }</span> <span style={{ "color": "red" }}>pra gente se pegar</span> se eu tomar Janssen
            </h2>
            <h2>
                Faltam exatos <strong style={{ "color": "pink" }}>INFINITOS</strong> <span style={{ "color": "red" }}>pra gente se pegar</span> se eu tomar Covaxin
            </h2>


            <h1 style={{ textAlign: "center" }}>COM PRIMEIRA DOSE É LOGO ALI EU NUM VÔ GUENTÁ DUAS NÃO!!!! ME PEGA POR FAVOR</h1>
        </>
    )
}