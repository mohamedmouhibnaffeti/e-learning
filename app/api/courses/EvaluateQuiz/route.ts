import axios from "axios"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try{
        const {quizid, responses, userid} = await req.json()
        const response = await axios.post("http://127.0.0.1:5000/Evaluation", {
            quizid, responses, userid
        })
        console.log(response.data)
        return NextResponse.json(response.data)
    }catch(err: any){
        console.log(err)
        return NextResponse.json({message: err.message}, {status: 500})
    }
}