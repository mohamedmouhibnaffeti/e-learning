"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ChevronRightIcon, GraduationCap, MapPin } from 'lucide-react'
import { Skeleton } from '../ui/skeleton'
interface MentorCardProps {
    image: any,
    email: string,
    name: string,
    jobTitle: string,
    jobLocation: string,
    courses: number
}

function MentorCard({image, name, email, jobTitle, jobLocation,courses}: MentorCardProps) {
    const router = useRouter() 
    return (
        <div className="group flex flex-col items-center rounded-lg gap-3 md:pb-3 border-2">
            <div className="relative overflow-hidden w-full h-[8rem]">
                {
                    image? (
                        <>
                            <Image src={image} alt='' width={100} height={100} className="object-cover w-full rounded-t-lg" />
                            <div className="absolute rounded-t-lg w-full h-full bg-black/40 hidden md:flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <button onClick={()=>router.push("/mentors/mentor")} className="flex items-center w-fit justify-center text-sm text-white bg-black hover:bg-black/80 transition-all duration-100 py-4 px-4 rounded-md">
                                    Visit Mentor
                                    <ChevronRightIcon className="w-4 h-4 transition duration-200" />
                                </button>
                            </div>
                        </>
                    )
                    :
                    (
                        <>
                            <Skeleton className="w-full h-full rounded-t-lg " />
                            <div className="absolute rounded-t-lg w-full h-full bg-black/40 hidden md:flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <button onClick={()=>router.push("/mentors/mentor")} className="flex items-center w-fit justify-center text-sm text-white bg-black hover:bg-black/80 transition-all duration-100 py-4 px-4 rounded-md">
                                    Visit Mentor
                                    <ChevronRightIcon className="w-4 h-4 transition duration-200" />
                                </button>
                            </div>
                        </>
                    )
                }
            </div>
            <div className="w-full px-2">
                <div className="max-w-full flex justify-between items-center">
                    <h1 className="font-semibold text-sm text-purple-900 truncate"> {name} </h1>
                    <p className="flex text-xs items-center gap-1"> {courses} <GraduationCap className="w-4 h-4" /> </p>
                </div>
                <p className="text-gray-400 text-xs ml-1 mt-2"> {jobTitle} </p>
                <p className="text-gray-400 text-xs flex items-center"> <MapPin className="w-4 h-4" /> {jobLocation} </p>
            </div>
            <button onClick={()=>router.push("/mentors/mentor")} className="flex md:hidden bg-black text-white w-full py-3 active:bg-black/80 transition-all duration-100 delay-75 justify-center items-center rounded-b-lg"> <span>Visit Mentor</span> </button>
        </div>
    )
}

export default MentorCard