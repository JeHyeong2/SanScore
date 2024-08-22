"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import styles from "../../../../styles/modal.module.css"


export default function Modal({infomation}){

    let info = JSON.parse(infomation)
    const router = useRouter()
    const dialogRef = useRef(null)
    
    useEffect(()=>{
        dialogRef.current?.showModal()
    },[])
    
    const closeModal = (e)=>{
        e.target === dialogRef.current && router.back()
    }

    return(
        <dialog
        ref={dialogRef}
        onClick={closeModal}
        onClose={router.back}
        className={styles.modalBox}
        >
        
        <div>
            <p>{info.team_name}팀</p>
            <p> 총점 {info.team_score} 점</p>
            <p>상세내역</p>
            <div className={styles.descripBox}>
                {
                info.score_description!=null && info.score_description.length > 0  ?
                info.score_description.map((el,i)=>{
                    return(
                        <p key={i}>{el.get ? <span style={{color:"blue"}}>+</span> : <span style={{color:"red"}}>-</span>}  {el.score} {el.description}</p>
                    )
                })
            :""}
            </div>

        </div>

        <button className={styles.closeBtn} onClick={()=>{router.back({scroll:false})}} > 닫기 </button>

        </dialog>

    )
}