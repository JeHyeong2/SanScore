import Modal from "./modal"
import { connectDB } from "@/util/database"


export default async function TeamDetail (p){
   

    const client = await connectDB
    const db = client.db("sanscore")
    const result = await db.collection("team").find({team_num:p.params.teamnum}).toArray()
    let toJson = JSON.stringify(result[0])

    return(
    <Modal key={result.team_num} infomation = {toJson}/>
    )
}