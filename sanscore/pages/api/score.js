import { connectDB } from "@/util/database";



export default async function handler(request,response){

        if(request.method === "GET"){
                const db =(await connectDB).db("sanscore")
                let result = await db.collection("team").find().toArray()
                return response.status(200).json(result)
                
        }else if(request.method ==="POST"){

                let body = JSON.parse(request.body)

                const db = (await connectDB).db("sanscore")
                let now = await db.collection("team").find({team_num:body.teamNum}).toArray()
               
                if(body.info.get){
                        let sendInfo = now.map((el)=>{
                                el.team_score += body.info.score
                                el.score_description.push(body.info)
                                return el
                        })
                        let result = await db.collection("team").updateOne({team_num :body.teamNum},{$set :{team_score:sendInfo[0].team_score , score_description:sendInfo[0].score_description}})
                }else{
                        let sendInfo = now.map((el)=>{
                                if(el.team_score - body.info.score > 0){
                                        el.team_score -= body.info.score
                                }else{
                                        el.team_score = 0
                                }
                                el.score_description.push(body.info)
                                return el
                        })
                        let result = await db.collection("team").updateOne({team_num :body.teamNum},{$set :{team_score:sendInfo[0].team_score , score_description:sendInfo[0].score_description}})
                }
                
                return response.status(200).redirect("/web/manage/777")
        }
        
 
}