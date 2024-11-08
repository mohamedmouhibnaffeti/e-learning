"use server"

import prisma from "@/lib/util/db"

export async function AnswerQuiz (formdata: FormData): Promise<boolean> {
    try{
        const userid = formdata.get('userid') as string
        const responses = formdata.getAll('responses') as string[]
        console.log(responses)
        const formtattedResponses = responses.map(response => {
            return JSON.parse(response) as {questionID: string, answer: string}
        })
        console.log(formtattedResponses)
        const quizid = formdata.get('quizid') as string 
        const answeredQuiz = await prisma.answeredQuiz.create({
            data: {
                userID: userid,
                quizID: quizid,
                answeredQuestions: {
                    create: formtattedResponses.map((response) => {
                        return {
                            answer: response.answer,
                            questionID: response.questionID,
                            userID: userid,
                            quizID: quizid
                        };
                    })
                }
            },
        });

        if(!answeredQuiz) return false
        return true        
    }catch(err: any){
        console.log(err)
        console.log(err)
        return false
    }
}