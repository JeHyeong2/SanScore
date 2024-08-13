'use client'
import Link from "next/link"
import styles from "../styles/teams.module.css"
import { useRouter } from "next/navigation"


export default function Teams(props){

    const p = props.props 
    const router = useRouter()
    return(
        <div className={styles.teamItem} onClick={()=>{
            router.push(`/detail/${p.team_num}`,{scroll:false})}
            } >
            <p style={{wordSpacing:"-4px",minWidth:"32%"}}>{p.team_num} 조</p>
            <p style={{minWidth:"23%"}}>{p.team_score}</p>
            <p>점</p>
        </div>
    )
}