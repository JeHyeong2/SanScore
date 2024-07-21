
import styles from "./page.module.css";
import Image from "next/image";
import sanscore from "../public/Title.svg"
import background from "../public/background.svg"
import teamBox from "../public/teamBox.png"
import { connectDB } from "@/util/database";
import Teams from "../components/teams";



export default async function Home() {
  

  const client = await connectDB
  const db = client.db("sanscore")
  const result = await db.collection("team").find().toArray()
  
  result.map((el)=>{
    el._id = JSON.stringify(el._id)
    el.score_description = JSON.stringify(el.score_description)
    return el
  })

  result.sort((a,b)=> {
    if(b.team_score === a.team_score){
      return Number(a.team_Num) - Number(b.team_Num)
    }
    return b.team_score - a.team_score})




  return (
    <div className={styles.background}>
      <Image
      src={background}
      layout="fill"
      objectFit="cover"
      objectPosition="right bottom"
      alt="배경"
      />


      <div className={styles.overlay}>

        <Image
        className={styles.title}
        src={sanscore}
        alt="타이틀"
        />

        <div className={styles.teamBox}>
          <Image
          layout="fill"
          src={teamBox}
          alt="팀박스"
          />

          <div className={styles.teamBoxItem}>
            {result.map((el,i)=>{
              return(
                <Teams key={i} props = {el}/>
              )
            })}
          </div>

        </div>
       
        <div className={styles.textBox}>
        <p style={{margin:"0"}}>산스 하계 체육대회
          <br/>
        <span style={{fontSize:"11.5px"}}>made by 7조 신제형</span>
        </p>

        </div>
       
       
        
      </div>
      
    
        
   
    </div>
  );
}
