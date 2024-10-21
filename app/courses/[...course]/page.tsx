"use client"
import Image from 'next/image'
import React, { useState } from 'react'

import image from "../../../components/Images/Courses/webdev.jpg"
import mentor from "../../../components/Images/mentors/mentor1.jpg"
import { BookIcon, BookOpenIcon, ChartNoAxesColumnIncreasingIcon, CheckCheckIcon, Clock10Icon, EarthIcon, FileText, LibraryIcon, PlayCircleIcon, PlayIcon, ShieldOff, Tally2Icon, UserIcon } from 'lucide-react'
import SmallStarsComponent from '@/components/Rating/SmallStars'
import GraySeperator from '@/components/Seperators/GraySeperator'
import { LightningBoltIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import CircularProgress from '@/components/Progress/CircularProgress'

function CoursePage() {
    const [payed, setPayed] = useState(false)
    const [started, setStarted] = useState(false)
    return (
        <div className="w-full h-full md:px-8 sm:px-4 px-2 max-w-[1400px] mx-auto mb-8">
            <h1 className="md:text-base text-sm mt-4"> <a href="/courses" className="no-underline"> Courses </a> &gt; <span className="text-purple-500"> Course Details </span> </h1>
            <div className="flex flex-wrap mt-8 max-md:gap-8">
                <div className="lg:w-8/12 w-full">
                    <div className="w-full lg:h-[30rem]">
                        <Image src={image} alt='' className="w-full rounded-xl h-full object-cover" />
                    </div>
                    {
                        payed && !started && 
                            <div className="w-full flex sm:justify-end">
                                <button onClick={() => setStarted(true)} className="flex items-center gap-1 justify-center py-2 px-4 justify-self-end sm:w-fit w-full text-white bg-black hover:bg-black/90 active:bg-black/85 transition-all duration-150 mt-3 rounded-lg"> <LightningBoltIcon className="-translate-y-px" /> Start Now </button>
                            </div>
                    }
                    <h1 className="max-md:text-lg text-xl max-sm:text-sm self-start text-black font-semibold max-w-full truncate mt-6"> Web Development Fundamentals for Beginners </h1>
                    <p className="text-sm max-sm:text-xs text-gray-600 mt-3">
                        Le lorem ipsum est, en imprimerie,
                        une suite de mots sans signification utilisée à titre provisoireen imprimerie,
                        une suite de mots sans signification utilisée à titre provisoire
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
                    <p className="text-sm max-sm:text-xs text-gray-600 mt-3">
                        Le lorem ipsum est, en imprimerie,
                        une suite de mots sans signification utilisée à titre provisoireen imprimerie,
                        une suite de mots sans signification utilisée à titre provisoireLe lorem ipsum est, en imprimerie,
                        une suite de mots sans signification utilisée à titre provisoireen imprimerie,
                        une suite de mots sans signification utilisée à titre provisoireLe lorem ipsum est, en imprimerie,
                        une suite de mots sans signification utilisée à titre provisoireen imprimerie,
                        une suite de mots sans signification utilisée à titre provisoireLe lorem ipsum est, en imprimerie,
                        une suite de mots sans signification utilisée à titre provisoireen imprimerie,
                        une suite de mots sans signification utilisée à titre provisoireLe lorem ipsum est, en imprimerie,
                        une suite de mots sans signification utilisée à titre provisoireen imprimerie,
                        une suite de mots sans signification utilisée à titre provisoire
                    </p>
                    <h4 className="lg:text-xl md:text-lg text-base mt-8"> Course Content </h4>
                    <div className="flex lg:gap-6 md:gap-4 gap-2 flex-wrap items-center text-gray-400 md:text-sm text-xs mt-6 font-medium">
                        <div className="flex gap-1 items-center">
                            <BookOpenIcon className="w-5 h-5 -translate-y-px" />
                            <span> 24 Sections </span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <BookIcon className="w-5 h-5 -translate-y-px" />
                            <span> 490 Lectures </span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <Clock10Icon className="w-5 h-5 -translate-y-px" />
                            <span> 75 hours total length </span>
                        </div>
                    </div>
                    <Accordion type="single" collapsible className="mt-3">
                        <AccordionItem value="Week1">
                            <AccordionTrigger className="font-medium lg:text-lg"><div className="flex gap-2 items-center"> <CircularProgress percentage={100} /> Week 1 - Beginner - Introduction to Web Development </div></AccordionTrigger>
                            <AccordionContent className="pl-4 md:text-base flex flex-col gap-5">
                                
                                <div className={`w-full flex justify-between items-center ${true ? "text-violet-600 cursor-default" : "hover:text-violet-500 transition-all duration-150 cursor-pointer group"}`}>
                                    <div className="flex gap-1 items-center">
                                        <FileText className={`-translate-y-px w-5 h-5 ${true ? "text-violet-600 cursor-default" : "text-gray-500 group-hover:text-violet-500 transition-all duration-150"}`} />
                                        <span> Read before you start </span>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <span className={`${true ? "text-violet-600" : "text-gray-400"}`}> 4min </span>
                                        {
                                            true &&
                                                <CheckCheckIcon className="w-5 h-5 text-violet-600" />
                                        }
                                    </div>
                                </div>
                                
                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Introduction to Virtual DOM </span>
                                    </div>
                                    <span className="text-gray-400"> 27min </span>
                                </div>

                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Introduction to HTML </span>
                                    </div>
                                    <span className="text-gray-400"> 27min </span>
                                </div>

                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Introduction to CSS </span>
                                    </div>
                                    <span className="text-gray-400"> 27min </span>
                                </div>

                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <FileText className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Major terms of the section </span>
                                    </div>
                                    <span className="text-gray-400"> 4min </span>
                                </div>

                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <QuestionMarkCircledIcon className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Practice knowledge </span>
                                    </div>
                                    <span className="text-gray-400"> 30min </span>
                                </div>

                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="Week2">
                            <AccordionTrigger className="font-medium lg:text-lg"><div className="flex gap-2 items-center"> <CircularProgress percentage={80} /> Week 2 - Beginner - Introduction to HTML </div></AccordionTrigger>
                            <AccordionContent className="pl-4 md:text-base flex flex-col gap-5">
                                
                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <FileText className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Read before you start </span>
                                    </div>
                                    <span className="text-gray-400"> 4min </span>
                                </div>
                                
                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Introduction to HTML </span>
                                    </div>
                                    <span className="text-gray-400"> 27min </span>
                                </div>

                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Introduction to HTML Documents </span>
                                    </div>
                                    <span className="text-gray-400"> 27min </span>
                                </div>

                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Introduction to CSS </span>
                                    </div>
                                    <span className="text-gray-400"> 27min </span>
                                </div>

                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <FileText className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Major terms of the section </span>
                                    </div>
                                    <span className="text-gray-400"> 4min </span>
                                </div>

                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <QuestionMarkCircledIcon className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Practice knowledge </span>
                                    </div>
                                    <span className="text-gray-400"> 30min </span>
                                </div>

                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="Week3">
                            <AccordionTrigger className="font-medium lg:text-lg"><div className="flex gap-2 items-center"> <CircularProgress percentage={40} /> Week 3 - Beginner - Introduction to CSS </div></AccordionTrigger>
                            <AccordionContent className="pl-4 md:text-base flex flex-col gap-5">
                                
                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <FileText className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Read before you start </span>
                                    </div>
                                    <span className="text-gray-400"> 4min </span>
                                </div>
                                
                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Introduction to HTML </span>
                                    </div>
                                    <span className="text-gray-400"> 27min </span>
                                </div>

                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Introduction to HTML Documents </span>
                                    </div>
                                    <span className="text-gray-400"> 27min </span>
                                </div>

                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Introduction to CSS </span>
                                    </div>
                                    <span className="text-gray-400"> 27min </span>
                                </div>

                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <FileText className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Major terms of the section </span>
                                    </div>
                                    <span className="text-gray-400"> 4min </span>
                                </div>

                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <QuestionMarkCircledIcon className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Practice knowledge </span>
                                    </div>
                                    <span className="text-gray-400"> 30min </span>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="Week4">
                            <AccordionTrigger className="font-medium lg:text-lg"><div className="flex gap-2 items-center"> <CircularProgress percentage={20} /> Week 4 - Beginner - Introduction to Javascript </div></AccordionTrigger>
                            <AccordionContent className="pl-4 md:text-base flex flex-col gap-5">
                                
                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <FileText className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Read before you start </span>
                                    </div>
                                    <span className="text-gray-400"> 4min </span>
                                </div>
                                
                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Introduction to HTML </span>
                                    </div>
                                    <span className="text-gray-400"> 27min </span>
                                </div>

                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Introduction to HTML Documents </span>
                                    </div>
                                    <span className="text-gray-400"> 27min </span>
                                </div>

                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Introduction to CSS </span>
                                    </div>
                                    <span className="text-gray-400"> 27min </span>
                                </div>

                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <FileText className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Major terms of the section </span>
                                    </div>
                                    <span className="text-gray-400"> 4min </span>
                                </div>

                                <div className="w-full flex justify-between items-center hover:text-violet-500 transition-all duration-150 cursor-pointer group">
                                    <div className="flex gap-1 items-center">
                                        <QuestionMarkCircledIcon className="-translate-y-px w-5 h-5 text-gray-500 group-hover:text-violet-500 transition-all duration-150" />
                                        <span> Practice knowledge </span>
                                    </div>
                                    <span className="text-gray-400"> 30min </span>
                                </div>

                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                {
                    !payed && (
                        <div className="lg:w-1/3 w-full">
                            <div className="md:mx-8 mx-2 bg-purple-400/30 flex flex-col justify-center items-center py-6 rounded-xl px-6">
                                <h4 className="lg:text-xl md:text-lg font-semibold text-purple-600"> 95.10 TND </h4>
                                
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
                                    <span className="text-gray-600/70"> 1hr 15 mins </span>
                                </div>
                                
                                <GraySeperator classname="mt-5" />
                                
                                <div className="flex w-full justify-between items-center mt-5 text-sm">
                                    <div className="flex items-center gap-1">
                                        <LibraryIcon className="text-purple-600 h-4 w-4 -translate-y-px" />
                                        <span className="text-gray-600"> Lessons </span>
                                    </div>
                                    <span className="text-gray-600/70"> 35 </span>
                                </div>
                                
                                <GraySeperator classname="mt-5" />
                                
                                <div className="flex w-full justify-between items-center mt-5 text-sm">
                                    <div className="flex items-center gap-1">
                                        <ChartNoAxesColumnIncreasingIcon className="text-purple-600 h-4 w-4 -translate-y-px" />
                                        <span className="text-gray-600"> Level </span>
                                    </div>
                                    <span className="text-gray-600/70"> Advanced </span>
                                </div>
                                
                                <GraySeperator classname="mt-5" />
                                
                                <div className="flex w-full justify-between items-center mt-5 text-sm">
                                    <div className="flex items-center gap-1">
                                        <EarthIcon className="text-purple-600 h-4 w-4 -translate-y-px" />
                                        <span className="text-gray-600"> Language </span>
                                    </div>
                                    <span className="text-gray-600/70"> English </span>
                                </div>
                                
                                <GraySeperator classname="mt-5" />

                                <button onClick={()=>setPayed(true)} className="py-3 bg-purple-500 text-white hover:bg-purple-500/90 active:bg-purple-600 px-4 w-fit max-sm:w-full mt-7 rounded-lg transition-all duration-150">
                                    Enroll Now
                                </button>

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
        </div>
    )
}

export default CoursePage