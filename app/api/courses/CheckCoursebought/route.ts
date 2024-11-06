import { checkCoursebought } from "@/app/actions/CourseActions/BuyCourse";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try{
        const {courseid, userid} = await req.json()
        const response = await checkCoursebought(courseid, userid)
        if(response){
            return NextResponse.json({bougth: true}, {status: 200})
        }
        else{
            return NextResponse.json({bougth: false}, {status: 200})
        }
    }catch(err: any){
        console.log(err)
        return NextResponse.json({error: err.message}, {status: 500})
    }
}