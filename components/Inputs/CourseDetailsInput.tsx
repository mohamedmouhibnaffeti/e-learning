import { Link1Icon } from '@radix-ui/react-icons'
import { BoltIcon, CaptionsIcon, CircleDollarSignIcon, LanguagesIcon } from 'lucide-react'
import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Course, UpdateCourseDetail } from '@/types/types'

function CourseDetailsInput({course, changeCourseDetails}: {course: Course, changeCourseDetails: UpdateCourseDetail}) {
  return (
    <div className="grid gap-4 md:px-4 px-2">
        <div className="flex max-sm:flex-col gap-4 items-center w-full">
            <p className="whitespace-nowrap sm:w-[25%]">
                Course Title
            </p>
            <div className="relative w-full">
                <input
                value={course.title}
                onChange={(e) => changeCourseDetails("title", e.target.value)}
                type="text"
                className="outline-none peer focus:border-blue-500 text-sm border-2 rounded-xl h-[2.6rem] pl-10 focus:caret-indigo-500 w-full"
                />
                <CaptionsIcon className="top-0 translate-y-[11px] translate-x-2 absolute w-[1.2rem] h-[1.2rem] peer-focus:text-blue-500 transition-all duration-100" />
            </div>
        </div>
        <div className="flex max-sm:flex-col gap-4 items-center w-full">
            <p className="whitespace-nowrap sm:w-[25%]">
                Price
            </p>
            <div className="relative w-full">
                <input
                value={course.price}
                onChange={(e) => changeCourseDetails("price", e.target.value)}
                type="number"
                className="outline-none peer appearance-none no-arrows focus:border-blue-500 text-sm border-2 rounded-xl h-[2.6rem] pl-10 focus:caret-indigo-500 w-full"
                />
                <CircleDollarSignIcon className="top-0 translate-y-[11px] translate-x-2 absolute w-[1.2rem] h-[1.2rem] peer-focus:text-blue-500 transition-all duration-100" />
            </div>
        </div>
        <div className="flex max-sm:flex-col gap-4 items-center w-full">
            <p className="whitespace-nowrap sm:w-[25%]">
                Course Language
            </p>
            <div className="relative w-full">
                <input
                value={course.language}
                onChange={(e) => changeCourseDetails("language", e.target.value)}
                type="text"
                className="outline-none peer focus:border-blue-500 text-sm border-2 rounded-xl h-[2.6rem] pl-10 focus:caret-indigo-500 w-full"
                />
                <LanguagesIcon className="top-0 translate-y-[11px] translate-x-2 absolute w-[1.2rem] h-[1.2rem] peer-focus:text-blue-500 transition-all duration-100" />
            </div>
        </div>
        <div className="flex max-sm:flex-col max-sm:gap-4 items-center w-full">
            <p className="whitespace-nowrap sm:w-[22%]">
                Difficulty
            </p>
            <RadioGroup defaultValue={course.difficulty} onValueChange={(e) => changeCourseDetails("difficulty", e)} className="flex gap-2 items-center">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="beginner" id="r1" />
                    <Label htmlFor="r1">Beginner</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="intermediate" id="r2" />
                    <Label htmlFor="r2">Intermediate</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="advanced" id="r3" />
                    <Label htmlFor="r3">Advanced</Label>
                </div>
            </RadioGroup>
        </div>
    </div>
  )
}

export default CourseDetailsInput