import React from 'react'
import Image from 'next/image'
import { BookMarkedIcon, ChevronRightIcon, User2Icon, ZapIcon } from 'lucide-react'
interface CourseCardProps {
    image: any
    title: string
    lessons: number
    users: number
    difficulty: string
  }
function CourseCard({image, title, lessons, users, difficulty}: CourseCardProps){
  return (
    <div className="w-[16rem] max-md:w-full p-2 flex flex-col items-center shadow-course-card rounded-lg gap-3">
        <Image src={image} alt='' className="object-cover w-full rounded-lg" />
        <h1 className="text-xs text-black font-bold max-w-full truncate"> {title} </h1>
        <div className="w-full flex justify-between">
            <div className="flex gap-[2px] items-center">
                <BookMarkedIcon className="text-neutral-400 w-4 h-4" />
                <span className="text-xxs text-neutral-600 font-semibold"> Lessons : {lessons} </span>
            </div>
            <div className="flex gap-[2px] items-center">
                <User2Icon className="text-neutral-400 fill-neutral-400 w-4 h-4" />
                <span className="text-xxs text-neutral-600 font-semibold"> Users : {users} </span>
            </div>
        </div>
        <div className="flex justify-between w-full items-center">
            <button className="flex items-center justify-center text-xs bg-violet-500 hover:bg-violet-500/95 group py-2 px-2 font-semibold rounded-md"> Start Course <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition duration-200" /> </button>
            <div className="flex items-center gap-1">
                <ZapIcon className="fill-yellow-400 text-yellow-400 w-4 h-4" />
                <span className="text-purple-900 font-semibold text-xxs"> {difficulty} </span>
            </div>
        </div>
    </div>
  )
}

export default CourseCard