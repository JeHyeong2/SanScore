'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function TeamDetail(){
    const router = useRouter()
    useEffect(()=>{

        router.back()

    },[])
    return(
    <div>
        <p> 돌아가세요!</p>
    </div>
    )
}