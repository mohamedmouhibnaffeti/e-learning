"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { BriefcaseBusiness, ChevronRightIcon, GraduationCap, MailIcon, MapPin } from 'lucide-react'
import { Skeleton } from '../ui/skeleton'
interface MentorCardProps {
    image: any,
    email: string,
    name: string,
    jobTitle: string,
    jobLocation: string,
    courses: number,
    bio: string
}

function MentorCard({image, name, email, jobTitle, jobLocation,courses, bio}: MentorCardProps) {
    const router = useRouter() 
    return (
        <div className="group flex flex-col items-center rounded-lg gap-3 md:pb-3 border-2 w-full h-full min-w-64">
            <div className="relative overflow-hidden w-full sm:h-[10rem] h-[13rem]">
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
                <h1 className="font-semibold text-lg text-gray-800 break-words"> {name} </h1>
                <p className="text-gray-700 py-2 truncate">
                    {bio} dzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfedzdoiezhfoezfe
                </p>
                <p className="text-gray-700 text-sm mt-2 flex items-center gap-2"> <BriefcaseBusiness className="w-5 h-5"/> {jobTitle} </p>
                <p className="text-gray-700 text-sm flex items-center gap-2 py-1"> <MapPin className="w-5 h-5" /> {jobLocation} </p>
                <p className="text-gray-700 text-sm flex items-center gap-2 py-1"> <MailIcon className="w-5 h-5" /> {email} </p>
            </div>
            <button onClick={()=>router.push("/mentors/mentor")} className="flex md:hidden bg-black text-white w-full py-3 active:bg-black/80 transition-all duration-100 delay-75 justify-center items-center rounded-b-lg"> <span>Visit Mentor</span> </button>
        </div>
    )
}

export default MentorCard