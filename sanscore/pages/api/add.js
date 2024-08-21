import { connectDB } from "@/util/database";



export default async function handler(rq,rs){

    console.log(rq.body)
    let body = {"team_name" : rq.body.username,"team_num":rq.body.usernum,"score_description":[],"team_score":0}
    const db = (await connectDB).db("sanscore")
    let result = db.collection("team").insertOne(body)
    return rs.status(200).redirect("/write")
}   