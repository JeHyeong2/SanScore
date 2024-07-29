'use client'
import { useEffect, useState } from "react"
import styels from "../../../../styles/manage.module.css"


export default function Manage(){

    let [data,setData] = useState([])
    
    useEffect(()=>{
        console.log(data)
    },[data])

    return(
        <main className={styels.mainbox}>
            점수주는창
            <button onClick={()=>{
                fetch("/api/score")
                .then(readstreamdata=>readstreamdata.json()).then(json=>{
                    setData(json)
                    console.log(json)})
                .catch((e)=>{
                    console.log(e)
                })
            }}>정보줘</button>
        </main>
    )
}