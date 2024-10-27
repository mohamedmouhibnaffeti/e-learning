import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import CircularProgress from '@/components/Progress/CircularProgress'
import { LightningBoltIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import { BookIcon, BookOpenIcon, ChartNoAxesColumnIncreasingIcon, CheckCheckIcon, Clock10Icon, EarthIcon, FileText, LibraryIcon, PlayCircleIcon, PlayIcon, ShieldOff, Tally2Icon, UserIcon } from 'lucide-react'

function MentorEditCourseAccordion() {
  return (
    <Accordion type="single" collapsible className="mt-3 flex flex-col gap-3">
        <AccordionItem value="Week1">
            <AccordionTrigger className="font-medium lg:text-lg"><div className="flex gap-2 items-center"> Week 1 - Beginner - Introduction to Web Development </div></AccordionTrigger>
            <AccordionContent className="pl-4 md:text-base flex flex-col gap-5">
                
                <div className={`w-full flex justify-between items-center`}>
                    <div className="flex gap-1 items-center">
                        <FileText className={`-translate-y-px w-5 h-5 text-gray-500`} />
                        <span> Read before you start </span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className={`text-gray-400`}> 4min </span>
                    </div>
                </div>
                
                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500" />
                        <span> Introduction to Virtual DOM </span>
                    </div>
                    <span className="text-gray-400"> 27min </span>
                </div>

                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500" />
                        <span> Introduction to HTML </span>
                    </div>
                    <span className="text-gray-400"> 27min </span>
                </div>

                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500" />
                        <span> Introduction to CSS </span>
                    </div>
                    <span className="text-gray-400"> 27min </span>
                </div>

                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <FileText className="-translate-y-px w-5 h-5 text-gray-500" />
                        <span> Major terms of the section </span>
                    </div>
                    <span className="text-gray-400"> 4min </span>
                </div>

                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <QuestionMarkCircledIcon className="-translate-y-px w-5 h-5 text-gray-500" />
                        <span> Practice knowledge </span>
                    </div>
                    <span className="text-gray-400"> 30min </span>
                </div>
                <div className="flex justify-end gap-2 max-sm:justify-center w-full max-sm:flex-col-reverse">
                    <button className="max-sm:w-full w-fit h-fit py-2 px-4 bg-red-600 text-white hover:bg-red-500 active:bg-red-600 transition-all duration-150 rounded-lg"> Delete Lesson </button>
                    <button className="max-sm:w-full w-fit h-fit py-2 px-4 bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-600 transition-all duration-150 rounded-lg"> Edit Lesson </button>
                </div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="Week2">
            <AccordionTrigger className="font-medium lg:text-lg"><div className="flex gap-2 items-center"> Week 2 - Beginner - Introduction to HTML </div></AccordionTrigger>
            <AccordionContent className="pl-4 md:text-base flex flex-col gap-5">
                
                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <FileText className="-translate-y-px w-5 h-5 text-gray-500" />
                        <span> Read before you start </span>
                    </div>
                    <span className="text-gray-400"> 4min </span>
                </div>
                
                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500" />
                        <span> Introduction to HTML </span>
                    </div>
                    <span className="text-gray-400"> 27min </span>
                </div>

                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500" />
                        <span> Introduction to HTML Documents </span>
                    </div>
                    <span className="text-gray-400"> 27min </span>
                </div>

                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <PlayCircleIcon className="-translate-y-px w-5 h-5 text-gray-500" />
                        <span> Introduction to CSS </span>
                    </div>
                    <span className="text-gray-400"> 27min </span>
                </div>

                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <FileText className="-translate-y-px w-5 h-5 text-gray-500" />
                        <span> Major terms of the section </span>
                    </div>
                    <span className="text-gray-400"> 4min </span>
                </div>

                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <QuestionMarkCircledIcon className="-translate-y-px w-5 h-5 text-gray-500" />
                        <span> Practice knowledge </span>
                    </div>
                    <span className="text-gray-400"> 30min </span>
                </div>
                <div className="flex justify-end gap-2 max-sm:justify-center w-full max-sm:flex-col-reverse">
                    <button className="max-sm:w-full w-fit h-fit py-2 px-4 bg-red-600 text-white hover:bg-red-500 active:bg-red-600 transition-all duration-150 rounded-lg"> Delete Lesson </button>
                    <button className="max-sm:w-full w-fit h-fit py-2 px-4 bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-600 transition-all duration-150 rounded-lg"> Edit Lesson </button>
                </div>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
  )
}

export default MentorEditCourseAccordion