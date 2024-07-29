import { connectDB } from "@/util/database";

export default async function handler(request,response){

   
        const db =(await connectDB).db("sanscore")
        let result = await db.collection("team").find().toArray()
        return response.status(200).json(result)
 
}