'use client'

import { useState } from "react"




export default function add (){
    let [userNum,setUserNum] = useState()
    let [userName,setUserName] = useState()
    return(
        <div>
            <form method="POST" action="/api/add">
            <label>유저네임</label>
                <input type="text" name="username"></input>
                <br/>

            <label>유저넘버</label>
                <input type="text" name="usernum"></input>

                <button type="submit">제출</button>
            </form>
        </div>

    )
}