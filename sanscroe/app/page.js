import styles from "./page.module.css";
import Image from "next/image";
import sanscore from "../public/Title.svg"
import background from "../public/background.svg"
import teamBox from "../public/teamBox.png"

const arr = [{"팀":1,"점수":100},{"팀":2,"점수":100},{"팀":3,"점수":100},{"팀":4,"점수":100}]



export default async function Home() {


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
            <p>ㅎㅎ</p>
          </div>

        </div>
       

        <p style={{fontSize:"1.5rem"}}>산스 하계 체육대회</p>
      
      
      </div>
      
    
        
   
    </div>
  );
}
