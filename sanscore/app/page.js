import styles from "./page.module.css";
import Image from "next/image";
import sanscore from "../public/ogame_sans_logo.svg"
import background from "../public/background.svg"
import teamBox from "../public/teamBox.png"
import { connectDB } from "@/util/database";
import Teams from "../components/teams";
import bronze from"../public/bronze.svg"
import silver from "../public/silver.svg"
import gold from "../public/gold.svg"


export const revalidate = 300;

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
      {/* <Image
      src={background}
      layout="fill"
      objectFit="cover"
      objectPosition="right bottom"
      alt="배경"
      /> */}


      <div className={styles.overlay}>

        <Image
        className={styles.title}
        src={sanscore}
        alt="타이틀"
        />

        <div className={styles.teamBox}>
          {/* <Image
          layout="fill"
          src={teamBox}
          alt="팀박스"
          /> */}
          
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",maxWidth:"40vw"}}>

          <div style={{display:"flex", flexDirection:"column",alignItems:"center",minHeight:"45vh",justifyContent:"space-between"}}>
            <Image className={styles.sans5game} style={{maxWidth:"28vw",maxHeight:"28vh"}} src={bronze}></Image>              
            <div style={{background:"linear-gradient(to top,rgba(220, 197, 181, 0.5),rgba(189, 90, 20, 0.8))", minWidth:"12vw", position:"relative",borderRadius:"3px",fontSize:"3rem",margin:"0"}}>
                
                  <p style={{color:"white",backgroundColor:"rgb(0,0,0,0.5)"}} >{result[2].team_num}팀</p>
                  <p>{result[2].team_score}점</p>
   
            </div>
          </div>

          <div style={{marginBottom:"15vh",display:"flex", flexDirection:"column",alignItems:"center",minHeight:"45vh",justifyContent:"space-between" }}>
            <Image className={styles.sans5game} style={{position:"relative",maxWidth:"38vw",maxHeight:"38vh",bottom:"-4vh"}} src={gold}></Image>
            <div style={{background:"linear-gradient(to top,rgba(245, 229, 135, 0.6),rgba(217, 185, 2, 0.8))", minWidth:"12vw", position:"relative",borderRadius:"3px",fontSize:"3rem",margin:"0",paddingBottom:"5vh"}}>
                
                  <p style={{color:"white",backgroundColor:"rgb(0,0,0,0.5)"}}>{result[0].team_num}팀</p>
                  <p>{result[0].team_score}점</p>
             
                
            </div>
          </div>

          

          <div style={{display:"flex", flexDirection:"column",alignItems:"center",minHeight:"45vh",justifyContent:"space-between"}}>
            <Image className={styles.sans5game} style={{maxWidth:"28vw",maxHeight:"28vh",position:"relative",bottom:"1vh"}} src={silver}></Image>
            <div style={{background:"linear-gradient(to top,rgba(174, 174, 174, 0.5),rgba(217, 217, 217, 0.8))", minWidth:"12vw", position:"relative",borderRadius:"3px",fontSize:"3rem",margin:"0"}}>
                  <p style={{color:"white",backgroundColor:"rgb(0,0,0,0.5)"}}>{result[1].team_num}팀</p>
                  <p>{result[1].team_score}점</p>         
            </div>
        
        </div>
          
  
          
          
          </div>
          
          <div className={styles.teamBoxItem}>
            
            {result.map((el,i)=>{
              return(
                <Teams key={i} props = {el} num = {i}/>
              )
            })}
          </div>
       
        </div>
        
        {/* <p style={{zIndex:3, position:"absolute",bottom:"10%",textAlign:"center"}}>점수판은 랭킹은 30분단위로 갱신됩니다.</p>
        <div className={styles.textBox}>
        <p style={{margin:"0"}}>산스 하계 체육대회
          <br/>
        <span style={{fontSize:"11.5px"}}>made by 7조 신제형</span>
        </p>

        </div>
       
        */}
        
      </div>
      
    
        
   
    </div>
  );
}
