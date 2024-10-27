import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import CircularProgress from '@/components/Progress/CircularProgress'
import { LightningBoltIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import { BookIcon, BookOpenIcon, ChartNoAxesColumnIncreasingIcon, CheckCheckIcon, Clock10Icon, EarthIcon, FileText, LibraryIcon, PlayCircleIcon, PlayIcon, ShieldOff, Tally2Icon, UserIcon } from 'lucide-react'

function CourseAccordion() {
  return (
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
  )
}

export default CourseAccordion