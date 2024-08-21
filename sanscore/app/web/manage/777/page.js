'use client'
import { useEffect, useRef, useState } from "react"
import styels from "../../../../styles/manage.module.css"
import ScoreList from "@/components/scoreList"
import AddScore from "@/components/addScore"
import { useRouter } from "next/navigation"
export default function Manage(){

    let [data,setData] = useState([])
    let [curS,setCurS] = useState(1)
    let [load,setLoad] = useState(false)
    let [change,setChange] = useState(false)
    let [curN,setCurN] = useState('불사조')

    const curName = (name)=>{
        setCurN(name)
    }
    const changed = ()=>{
        let go = !change
        setChange(go)
    }
    const curNum = (num)=>{
        setCurS(num)
    }

    const addRef = useRef();
    const listRef = useRef();
;
    useEffect(()=>{
        const getInfo = ()=>{
            fetch("/api/score")
            .then(readstreamdata=>readstreamdata.json())
            .then(json=>{setData(json)})
            .then(()=>{
                addRef && listRef ? setLoad(true) : ""
            })
            .catch((e)=>{console.log(e)})
        }
        getInfo()

    },[curS,change,curN])



    return(
        <main>
            {load ? <div className={styels.mainbox}>
            <AddScore ref={addRef} curNum ={curS} curName={curN} refresh={changed}/>
            <ScoreList ref={listRef} info ={data} curNum ={curNum} curName={curName}/>
            </div> : 
            <div>
                <p>...Loading</p>
            </div>
           }
            
           
        </main>
    )
}