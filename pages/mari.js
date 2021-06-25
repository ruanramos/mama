import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Mari() {

    const onClick = (e) => {
        const a = v.toLowerCase() !== "fofoca" ? "ERROU MAS VOU DEIXAR PASSAR" : "ACERTOU MIZERÁVI!"
    }

    const [v, setV] = useState('')
    const [b, setB] = useState('red')

    useEffect(() => {
        document.querySelector("input").value = v
        setB(v.toLowerCase() !== "fofoca" ? "red" : "green")
        console.log(v)
    }, [v])

    return (
        <>
            <h1>CREDO QUE DELÍCIA</h1>
            <h2>
                <label htmlFor="i">DIGITE FOFOCA PARA UMA FOFOCA</label>
            </h2>
            <input onChange={(e) => setV(e.target.value)} style={{ marginLeft: "20px", borderWidth: "3px", "borderColor": b }} name="i" id="i" type="text" placeholder="fofoqueira do caralho kkkkkk"></input>
            <Link href="/countdown" >
                <a>
                    <button onClick={(e) => onClick(e)} style={{ marginLeft: "20px", "borderColor": b, borderWidth: "25px", fontSize: "50px" }}>ME CLICA QUE VEM FOFOCA</button>
                </a>
            </Link>
        </>
    )
}