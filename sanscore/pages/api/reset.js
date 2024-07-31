import { connectDB } from "@/util/database";



export default async function handler(rq,rs){
    const db = (await connectDB).db("sanscore")
    let result = db.collection("team")

}   