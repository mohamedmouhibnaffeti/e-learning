"use server"

import CourseDetails from '@/components/Courses/CourseDetails'
import prisma from '@/lib/util/db'
import { getParams } from '@/lib/util/params'
import { headers } from 'next/headers' 

async function CoursePage() {
    const headerlist = headers()
    const pathname = headerlist.get("x-current-path")
    const params: URLSearchParams = getParams(pathname)
    const id = params.get("id") as string
    
    const course = await prisma.course.findUnique({where: {id: id}, include: {creator: true,lessons: {include: {quiz: true, chapters: true}}}}) as any
    
    if(!course){
        return null
    }

    return (
        <div className="w-full h-full md:px-8 sm:px-4 px-2 max-w-[1400px] mx-auto mb-8">
            <h1 className="md:text-base text-sm mt-4"> <a href="/courses" className="no-underline"> Courses </a> &gt; <span className="text-purple-500"> Course Details </span> </h1>
            <CourseDetails course={course} />
        </div>
    )
}

export default CoursePage