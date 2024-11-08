import React, { useEffect, useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import CircularProgress from '@/components/Progress/CircularProgress'
import { LightningBoltIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import { BookIcon, BookOpenIcon, CaptionsIcon, ChartNoAxesColumnIncreasingIcon, CheckCheckIcon, Clock10Icon, EarthIcon, FileText, LibraryIcon, PlayCircleIcon, PlayIcon, ShieldOff, Tally2Icon, UserIcon } from 'lucide-react'
import { Chapter, Lesson, Question, Quiz } from '@prisma/client'
import { toast } from 'sonner'
import { AnswerQuiz } from '@/app/actions/CourseActions/Quiz'

type extendedLessonWithChapters = Lesson & { chapters: Chapter[], quiz: Quiz & {questions: Question[]}, }

interface QuizState {
    lessonID: string;
    isOpen: boolean;
    questionResponses: { questionID: string; answer: string }[];
}

function CourseAccordion({userid, lessons, finishedchapters, startChapter}: {userid: string, lessons: extendedLessonWithChapters[], finishedchapters: {chapterID: string}[], startChapter: (chapterID: string, video: string) => void}) {
    const [quizState, setQuizState] = useState<QuizState | null>(null)
    const handleOpenQuizButtonClick = (questions: Question[], lessonID: string) => {
        setQuizState((prevState) => {
            const isOpen = prevState?.lessonID === lessonID ? !prevState.isOpen : true; // Toggle if the same lesson, otherwise open
            return {
                lessonID,
                isOpen,
                questionResponses: questions.map(question => ({ questionID: question.id, answer: "" }))
            };
        });
    };
    const handleAnswerChange = (questionID: string, answer: string) => {
        setQuizState((prevState) => {
            if (!prevState) return null
            return {
                ...prevState,
                questionResponses: prevState.questionResponses.map((response) =>
                    response.questionID === questionID
                        ? { ...response, answer }
                        : response
                ),
            };
        });
    };
    useEffect(()=> {
        console.log({quizState})
    }, [quizState])
    if(!finishedchapters) return null
  return (
    <Accordion type="single" collapsible className="mt-3">


        {
            lessons.map((lesson, index) => {
                const percentage = lesson.chapters.length > 0 
                ? Math.floor(
                    (finishedchapters
                      .filter(finished => lesson.chapters.map(chapter => chapter.id).includes(finished.chapterID))
                      .reduce((totalScore, finished) => {
                        const finishedChapter = lesson.chapters.find(chapter => chapter.id === finished.chapterID);
                        return finishedChapter ? totalScore + finishedChapter.score : totalScore;
                      }, 0) 
                      / lesson.chapters.reduce((totalScore, chapter) => totalScore + chapter.score, 0)) * 100
                  )
                : 0;
                return(
                    <AccordionItem key={index} value={`Week${index}`}>
                        <AccordionTrigger className="font-medium lg:text-lg"><div className="flex gap-2 items-center"> <CircularProgress percentage={percentage} /> Week 1 - Beginner - Introduction to Web Development </div></AccordionTrigger>
                        <AccordionContent className="pl-4 md:text-base flex flex-col gap-5">
                            

                            {lesson.chapters.map((chapter: Chapter, index: any) => {
                            const existing = finishedchapters.some(finished => finished.chapterID === chapter.id);
                            return(
                                    <div aria-disabled={existing} onClick={() => !existing && startChapter(chapter.id, chapter.videoUrl)} className={`w-full flex justify-between items-center ${existing ? "text-violet-600 cursor-default" : "hover:text-violet-500 transition-all duration-150 cursor-pointer group"}`}>
                                        <div className="flex gap-1 items-center">
                                            <PlayCircleIcon className={`-translate-y-px w-5 h-5 ${existing ? "text-violet-600 cursor-default" : "text-gray-500 group-hover:text-violet-500 transition-all duration-150"}`} />
                                            <span> {chapter.title} </span>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <span className={`${existing ? "text-violet-600" : "text-gray-400"}`}> {chapter.duration} hrs </span>
                                            {
                                                existing &&
                                                    <CheckCheckIcon className="w-5 h-5 text-violet-600" />
                                            }
                                        </div>
                                    </div>
                                )
                            })}

                            <div onClick={()=>handleOpenQuizButtonClick(lesson.quiz.questions, lesson.id)} className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                <div className="flex gap-1 items-center">
                                    <QuestionMarkCircledIcon className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                    <span> Practice knowledge </span>
                                </div>
                                {
                                    false &&
                                        <CheckCheckIcon className="w-5 h-5 text-violet-600" />
                                }
                            </div>

                            {
                                quizState?.isOpen && quizState.lessonID === lesson.id &&
                                <form action={
                                    async(formdata: FormData) => {
                                        try{
                                            formdata.append('userid',userid)
                                            formdata.append('quizid', lesson.quiz.id)
                                            quizState.questionResponses.forEach(response => {
                                                formdata.append('responses', JSON.stringify(response))
                                            })
                                            const response = await AnswerQuiz(formdata)
                                            if(!response){
                                                toast("Failed to submit quiz", {
                                                    description: "Please try again",
                                                    action: {
                                                        label: "Retry",
                                                        onClick: () => {}
                                                    }  
                                                })
                                            }
                                            if(response === true){
                                                toast("Quiz Submitted", {
                                                    description: "You've successfully answered the quiz",
                                                    action: {
                                                        label: "OK",
                                                        onClick: () => {}
                                                    }
                                                })
                                                window.location.reload()
                                            }
                                        }catch(err){
                                            toast("Failed to submit quiz", {
                                                description: "An internal error has occured please try again",
                                                action: {
                                                    label: "Retry",
                                                    onClick: () => {}
                                                }  
                                            })
                                        }
                                    }
                                }
                                className="flex flex-col gap-4"
                                >
                                {
                                    lesson.quiz.questions.map((question, index) => {
                                        return (
                                        <div key={question.id} className="w-full flex flex-col gap-2 pl-4 text-gray-500">
                                            <div className="w-full flex gap-2 items-center">
                                            <span className="text-gray-500">{index + 1} - </span>
                                            <span>{question.content}</span>
                                            </div>
                                            <div className="relative w-full">
                                            <input
                                                type="text"
                                                value={quizState.questionResponses.find(response => response.questionID === question.id)?.answer}
                                                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                                                className="outline-none peer focus:border-blue-500 text-sm border-2 rounded-xl h-[2.6rem] pl-10 focus:caret-indigo-500 w-full"
                                            />
                                            <CaptionsIcon className="top-0 translate-y-[11px] translate-x-2 absolute w-[1.2rem] h-[1.2rem] peer-focus:text-blue-500 transition-all duration-100" />
                                            </div>
                                        </div>
                                        );
                                    })
                                }
                                <button type='submit' className="self-end bg-blue-600 hover:bg-blue-600/90 active:bg-blue-700 w-fit h-fit px-8 py-2 rounded-lg text-white">
                                    Submit
                                </button>
                                </form>
                            }

                            

                        </AccordionContent>
                    </AccordionItem>
                )
            })
        }
    </Accordion>
  )
}

export default CourseAccordion