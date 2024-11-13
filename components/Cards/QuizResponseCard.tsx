import React from 'react'
import data from "./responsesdata.json"
import { BotIcon, ThumbsDown, ThumbsUp, User2Icon } from 'lucide-react'

function QuizResponseCard() {
  return (
    <div className="rounded-3xl bg-gray-50 border w-full p-4 items-center shadow-sm">
        <h1 className="text-lg font-bold font-sans text-center">
            {
                data[0].title
            }
        </h1>
        {
            data[0].Lessons.map((lesson, index) => (
                <div className={`${index !== lesson.Questions.length - 1 ? "border-b" : ""} pl-2 my-2 text-sm flex flex-col gap-2 py-2`}>
                    <p className="font-bold">
                        {lesson.title}
                    </p>
                    {
                        lesson.Questions.map((question) => {
                            return(
                                <div className="pl-2 flex flex-col gap-2">
                                    <p className="text-gray-700 font-sans flex items-center gap-1">
                                        <span className="w-1 h-1 rounded-full bg-black" />
                                        {
                                            question.title
                                        }
                                    </p>
                                    <div className="w-full flex justify-between items-center">
                                        <span className="text-[#637887] flex items-center gap-1">
                                            <User2Icon className="w-4 h-4 -translate-y-px" />
                                            {
                                                question.userResponse
                                            }
                                        </span>
                                        <span className="text-indigo-600 font-semibold whitespace-nowrap self-end">
                                            {
                                                question.modelEvaluation
                                            } / 15
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            ))
        }
        <div className="border-t flex justify-end gap-2 items-center text-gray-500 pt-4">
            <ThumbsUp className="w-5 h-5 active:-translate-y-1 transition-all duration-500 cursor-pointer" />
            <ThumbsDown className="w-5 h-5 active:translate-y-1 transition-all duration-500 cursor-pointer"/>
        </div>
    </div>
  )
}

export default QuizResponseCard