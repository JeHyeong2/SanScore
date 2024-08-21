'use client'
import styles from "../styles/scorelist.module.css"
import { useEffect, useState } from "react"



export default function ScoreList({info,curNum,curName}){
    const [selected,setSelected] = useState(1);

    useEffect(()=>{


    },[selected])


    return(
        <div className={styles.scoreBox}>
            <p>조를 선택하세요</p>
            {info.map((el,i)=>{
                return(
                    <div onClick={()=>{
                        setSelected(el.team_num)
                        curNum(el.team_num)
                        curName(el.team_name)
                    }} className={styles.listBox} key={i} id={el.team_num}
                    style={{backgroundColor : selected == el.team_num ? "#4865FF":"white",color:selected == el.team_num ? "white":"black", borderRadius:"8px"}}
                    >
                        <p> {el.team_name} 팀</p>
                        <p> {el.team_score} 점</p>
                    </div>
                )
            })}
        </div>
    )
}