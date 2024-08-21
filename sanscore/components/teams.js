'use client'
import Link from "next/link"
import styles from "../styles/teams.module.css"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Teams(props){

    const p = props.props
    const router = useRouter()
    const rank = (num)=>{
        if(num=== 0 && p.team_score){
            return "7px outset #FFD66E;"
        }else if(num === 1 && p.team_score){
            return "7px outset #C1C1C1;"
        }else if(num=== 2 && p.team_score){
            return "7px outset #CAA17B;"
        }
        return "0.2rem solid #a6a4a4;"
    }
    return(
        <div className={styles.teamItem} style={{border : rank(props.num) }} onClick={()=>{
            router.push(`/detail/${p.team_num}`,{scroll:false})}
            } >
            <Image className={styles.teamimg} src={require(`/public/teamCharacter/${p.team_num}.png`)} alt="팀이미지"/>
            <p style={{wordSpacing:"-4px",minWidth:"32%"}}>{p.team_name}팀</p>
            {/* <p style={{minWidth:"23%"}}>{p.team_score}</p> */}
            {/* <p>점</p> */}
        </div>
    )
}