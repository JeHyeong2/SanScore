'use client'

import { useState } from "react"
import Image from "next/image"
import plus from "../public/plus.svg"
import minus from "../public/minus.svg"
import styles from "../styles/addScore.module.css"
import { useRouter } from "next/navigation"

export default function AddScore({curNum,refresh,curName}){

    const router = useRouter()
    const [scoreDescription,setScoreDescription] = useState("")
    const [score,setScore] = useState(100)

    const onChangeDescript = (e)=>{
        let description = e.target.value
        setScoreDescription(description)
    }

    const onChangeScore = (e)=>{
        let score = Number(e.target.value)
        if(score < 0){
            score = 0
        }else if(isNaN(score)){
            score = 0
        }
        setScore(score)
        
    }


    return(
  
            <div className={styles.mainBox}>
                <div>
                <p style={{fontSize:"1.7rem",marginBottom:"5vh",fontWeight:"bold"}}>{curName} 팀</p>    
                </div>
                
                <p style={{margin:"0",fontSize:"1.2rem"}}>점수</p>
                <div className={styles.iconBox}>
                    <Image className={styles.minusIcon} src={minus}
                        onClick={()=>{
                        let tmp = score - 100
                        if(tmp < 0){
                            tmp = 0
                        }
                    setScore(tmp)}}/>
                
                    <input className={styles.pointInput} onChange={onChangeScore} value={score} placeholder={score}/>
                
                    <Image className={styles.plusIcon} src={plus} 
                    onClick={()=>{
                    let tmp = score + 100 
                    setScore(tmp)}}/>
                </div>

                <div className={styles.descriptionBox}>
                    <p style={{margin:"1rem",fontSize:"1.2rem"}}>점수상세</p>
                    
                    <input className={styles.descriptionInput} onChange={onChangeDescript} value={scoreDescription} placeholder="내용을 입력하세요."/>

                </div>



                <div className={styles.btnBox}>
                    
                    
                    <button
                    className={styles.minusBtn}
                    onClick={()=>{

                        if(score > 0){

                            fetch("/api/score",{
                                method:"POST",
                                body:JSON.stringify({
                                    teamNum:curNum,
                                    info:{  description:scoreDescription,
                                            get:false,
                                            score:score}    
                                })
                            }).then(()=>{
                                refresh()
                                let a = ""
                                setScoreDescription(a)
                                setScore(100)
                                alert("점수가 반영되었습니다.")
                            }).catch((e)=>{
                                console.log(e)
                            })

                        }else{
                            alert("점수를 입력해주세요.")
                        }
                        
                    }}
                    >감점</button>
                    <button
                    className={styles.plusBtn}
                    onClick={()=>{

                        if(score >0){

                            fetch("/api/score",{
                                method:"POST",
                                body:JSON.stringify({
                                    teamNum:curNum,
                                    info:{  description:scoreDescription,
                                            get:true,
                                            score:score}    
                                })
                            }).then(()=>{
                                refresh()
                                let a = ""
                                setScoreDescription(a)
                                setScore(100)
                                alert("점수가 반영되었습니다.")
                           }).catch((e)=>{
                                console.log(e)
                            })

                        }else{
                            alert("점수를 입력해주세요")
                        }
                        
                    }}>추가</button>
                </div>
            </div>
            
        

    )
}