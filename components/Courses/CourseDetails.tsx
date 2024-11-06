"use client"
import React, { useLayoutEffect, useState } from 'react'
import Image from 'next/image'
import mentor from "@/components/Images/mentors/mentor1.jpg"
import { BookIcon, BookOpenIcon, ChartNoAxesColumnIncreasingIcon, CheckCheckIcon, Clock10Icon, EarthIcon, FileText, LibraryIcon, PlayCircleIcon, PlayIcon, ShieldOff, Tally2Icon, UserIcon } from 'lucide-react'
import SmallStarsComponent from '@/components/Rating/SmallStars'
import GraySeperator from '@/components/Seperators/GraySeperator'
import { LightningBoltIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'

import CourseAccordion from '@/components/Accordions/CourseAccordion'
import { ExtendedCourseWithLessons } from '../pages/CoursesPageMentor'
import {Course, Lesson, Chapter, Quiz} from '@prisma/client'
import axios from 'axios'

export type ExtendedCourseWithLessonsAndChaptersAndQuiz = Course & {
    lessons: Array<Lesson & {
        chapters: Chapter[],
        quiz: Quiz
    }>
};

function CourseDetails({course}: {course: ExtendedCourseWithLessonsAndChaptersAndQuiz}) {
    const [payed, setPayed] = useState(false)
    const [started, setStarted] = useState(false)
    const lessonsNumber = course.lessons.length
    const chaptersNumber = course.lessons.reduce((acc, lesson) => acc + lesson.chapters.length, 0)
    const totalDuration = course.lessons.reduce((acc, lesson) => {
        const lessonDuration = lesson.chapters.reduce((chapterAcc, chapter) => chapterAcc + chapter.duration, 0);
        return acc + lessonDuration;
    }, 0);
    const [image, setImage] = useState<string>()
    const getCourseThumbnail = async() => {
        const response = await axios.post("/api/courses/getcoursethumbnail", {courseID: course.id})
        const {ImageData} = response.data
        setImage(ImageData)
    }

    useLayoutEffect(()=>{
        getCourseThumbnail()
    }, [course.id])
      return (
    <div className="flex flex-wrap mt-8 max-md:gap-8">
        <div className="lg:w-8/12 w-full">
            {
                image? (
                    <div className="w-full lg:h-[30rem]">
                        <Image src={image as string} alt='' width={100} height={100} className="w-full rounded-xl h-full object-cover" />
                    </div>
                ):
                (
                    <div className="w-full lg:h-[30rem] bg-gray-100 flex items-center justify-center rounded-xl">
                        <FileText className="w-12 h-12 text-gray-400" />
                    </div>
                )
            }
            {
                payed && !started && 
                    <div className="w-full flex sm:justify-end">
                        <button onClick={() => setStarted(true)} className="flex items-center gap-1 justify-center py-2 px-4 justify-self-end sm:w-fit w-full text-white bg-black hover:bg-black/90 active:bg-black/85 transition-all duration-150 mt-3 rounded-lg"> <LightningBoltIcon className="-translate-y-px" /> Start Now </button>
                    </div>
            }
            <h1 className="max-md:text-lg text-xl max-sm:text-sm self-start text-black font-semibold max-w-full truncate mt-6"> {course.title} </h1>
            <p className="text-sm max-sm:text-xs font-semi text-gray-700 mt-3 capitalize">
                Level: {course.difficulty}
            </p>
            <div className="flex w-full justify-between items-center flex-wrap mt-6 gap-4">
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex gap-1 items-center">
                        <div className="w-12 h-12">
                            <Image src={mentor} alt='' className="w-full rounded-full h-full object-cover" />
                        </div>
                        <span className="text-black font-medium max-md:text-sm"> Dane Shadow </span>
                    </div>
                    <span className="text-purple-500 text-sm flex gap-2 items-center"> <Tally2Icon className="text-gray-500" /> 4700 Enrolled Students </span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-sm">
                        4.7
                    </span>
                    <SmallStarsComponent />
                    <span className="text-xs text-gray-500 underline">
                        (4600 Ratings)
                    </span>
                </div>
            </div>
            <h4 className="lg:text-xl md:text-lg text-base mt-8"> Description </h4>
            <p className="text-sm max-sm:text-xs text-gray-600 mt-3 break-words">
                {course.description}
            </p>
            <h4 className="lg:text-xl md:text-lg text-base mt-8"> Course Content </h4>
            <div className="flex lg:gap-6 md:gap-4 gap-2 flex-wrap items-center text-gray-400 md:text-sm text-xs mt-6 font-medium">
                <div className="flex gap-1 items-center">
                    <BookOpenIcon className="w-5 h-5 -translate-y-px" />
                    <span> {lessonsNumber} Lessons </span>
                </div>
                <div className="flex gap-1 items-center">
                    <BookIcon className="w-5 h-5 -translate-y-px" />
                    <span> {chaptersNumber} Chapters </span>
                </div>
                <div className="flex gap-1 items-center">
                    <Clock10Icon className="w-5 h-5 -translate-y-px" />
                    <span> {totalDuration} hours total length </span>
                </div>
            </div>
            <CourseAccordion />
        </div>
        {
            !payed && (
                <div className="lg:w-1/3 w-full">
                    <div className="md:mx-8 mx-2 bg-purple-400/30 flex flex-col justify-center items-center py-6 rounded-xl px-6">
                        <h4 className="lg:text-xl md:text-lg font-semibold text-purple-600"> {course.price} TND </h4>
                        
                        <GraySeperator classname="mt-5" />
                    
                        <div className="flex w-full justify-between items-center mt-5 text-sm">
                            <div className="flex items-center gap-1">
                                <UserIcon className="text-purple-600 h-4 w-4 -translate-y-px" />
                                <span className="text-gray-600"> Instructor </span>
                            </div>
                            <span className="text-gray-600/70"> John Shadow </span>
                        </div>
                    
                        <GraySeperator classname="mt-5" />
                        
                        <div className="flex w-full justify-between items-center mt-5 text-sm">
                            <div className="flex items-center gap-1">
                                <Clock10Icon className="text-purple-600 h-4 w-4 -translate-y-px" />
                                <span className="text-gray-600"> Duration </span>
                            </div>
                            <span className="text-gray-600/70"> {totalDuration} </span>
                        </div>
                        
                        <GraySeperator classname="mt-5" />
                        
                        <div className="flex w-full justify-between items-center mt-5 text-sm">
                            <div className="flex items-center gap-1">
                                <LibraryIcon className="text-purple-600 h-4 w-4 -translate-y-px" />
                                <span className="text-gray-600"> Lessons </span>
                            </div>
                            <span className="text-gray-600/70"> {lessonsNumber} </span>
                        </div>
                        
                        <GraySeperator classname="mt-5" />
                        
                        <div className="flex w-full justify-between items-center mt-5 text-sm">
                            <div className="flex items-center gap-1">
                                <ChartNoAxesColumnIncreasingIcon className="text-purple-600 h-4 w-4 -translate-y-px" />
                                <span className="text-gray-600"> Level </span>
                            </div>
                            <span className="text-gray-600/70"> {course.difficulty} </span>
                        </div>
                        
                        <GraySeperator classname="mt-5" />
                        
                        <div className="flex w-full justify-between items-center mt-5 text-sm">
                            <div className="flex items-center gap-1">
                                <EarthIcon className="text-purple-600 h-4 w-4 -translate-y-px" />
                                <span className="text-gray-600"> Language </span>
                            </div>
                            <span className="text-gray-600/70"> {course.language} </span>
                        </div>
                        
                        <GraySeperator classname="mt-5" />

                        <a href="/confirm-paiement" className="py-3 bg-purple-500 text-white hover:bg-purple-500/90 active:bg-purple-600 px-4 w-fit max-sm:w-full mt-7 rounded-lg transition-all duration-150">
                            Enroll Now
                        </a>

                    </div>
                </div>
            )
        }
        {
            true && (
                <div className="lg:w-1/3 w-full px-4">
                    <iframe
                        className="w-full aspect-video self-stretch md:min-h-96 rounded-xl"
                        src="https://www.youtube.com/embed/1FLYZdxsteo"
                        frameBorder="0"
                        title="Product Overview Video"
                        aria-hidden="true"
                    />
                    <button className="w-full py-3 bg-black text-white font-medium mt-3 rounded-lg flex gap-2 items-center justify-center hover:bg-black/90 active:bg-black/85 transition-all duration-150">
                        Mark as Finished
                        <CheckCheckIcon />
                    </button>
                </div>
            )
        }
    </div>
  )
}

export default CourseDetails