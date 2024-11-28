import React from 'react'
import Image from 'next/image'
import { BookMarkedIcon, ChevronRightIcon, ChartColumnIncreasingIcon , LibraryBig, User2Icon, ZapIcon } from 'lucide-react'
import StarsComponent from '../Rating/StarsComponent'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Skeleton } from '../ui/skeleton'
interface CourseCardProps {
    image: any
    title: string
    lessons: number
    users: number
    difficulty: string
    price: number,
    id: string
  }
function CourseCard({image, title, lessons, users, difficulty, price, id}: CourseCardProps){
    const session  = useSession()
    const router = useRouter() 
    const sessionstatus = session.status
  return (
    <div className="w-[16rem] max-md:w-full p-3 flex flex-col items-center shadow-course-card rounded-lg gap-3">
        <div className="relative overflow-hidden w-full h-[10rem] ">
        {
                image ? (
                    <>
                        <Image width={100} height={100} src={image} alt='' className="object-cover w-full h-full rounded-lg" />
                    </>
                )
                :
                (
                    <>
                        <Skeleton className="w-full h-full rounded-t-lg" />
                    </>
                )
            }
        </div>
        <div className="flex w-full justify-between">
            <StarsComponent />
            <span className="text-sm font-semibold text-teal-500"> {price} TND </span>
        </div>
        <h1 className="text-xs self-start text-black font-bold max-w-full truncate"> {title} </h1>
        <div className="w-full flex justify-between">
            <div className="flex gap-[2px] items-center">
                <LibraryBig className="text-violet-400 w-4 h-4" />
                <span className="text-xxs text-neutral-600 font-semibold"> {lessons} Lesson </span>
            </div>
            <div className="flex gap-[2px] items-center">
                <ChartColumnIncreasingIcon className="text-red-400 w-4 h-4" />
                <span className="text-xxs text-neutral-600 font-semibold"> {difficulty} </span>
            </div>
            <div className="flex gap-[2px] items-center">
                <User2Icon className="text-orange-400 fill-orange-400 w-4 h-4" />
                <span className="text-xxs text-neutral-600 font-semibold"> {users} </span>
            </div>
        </div>
        <button onClick={()=>router.push(sessionstatus === "authenticated" ? `/courses/course?id=${id}` : "/auth/sign-in")} className="flex items-center justify-center text-xs text-white bg-violet-500 hover:bg-violet-500/95 group py-2 px-2 font-semibold rounded-md w-full mt-1"> Start Course <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition duration-200" /> </button>
    </div>
  )
}

export default CourseCard