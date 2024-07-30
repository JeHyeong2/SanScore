'use client'
import { useRef } from "react"
import { useEffect } from "react";

export default function Loading(){
    const loadRef = useRef();
    useEffect(()=>{
        loadRef.current?.showModal()
    },[])
    return(
            <dialog
            style={{width:"40vw",textAlign:"center"}}
            ref={loadRef}>
            <p> 로딩중입니다.</p>
           
            </dialog>
      
    )
}