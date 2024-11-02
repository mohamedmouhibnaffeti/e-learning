"use server"

import MentorProfileSidebar from '@/components/sidebars/MentorProfileSidebar'
import React from 'react'
import ui from "@/components/Images/Courses/UI.png"
import sport from "@/components/Images/Courses/sports.png"
import entr from "@/components/Images/Courses/entr.png"
import guitar from "@/components/Images/Courses/guitar.png"
import ionic from "@/components/Images/Courses/ionic.png"
import marketing from "@/components/Images/Courses/marketing.png"
import mobile from "@/components/Images/Courses/mobile.png"
import python from "@/components/Images/Courses/python.png"
import MentorCourseCard from '@/components/Cards/MentorCourseCard'
import prisma from '@/lib/util/db'
import CoursesPageMentor from '@/components/pages/CoursesPageMentor'

async function MentorCourses() {
  const courses = await prisma.course.findMany({include: {lessons: true}})
  
  return (
    <div className="w-full mb-6 flex">
        <MentorProfileSidebar />
        <div className="w-full h-full max-md:p-2 p-12 bg-[#C0C0C0]/15">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 max-md:text-lg md:pl-8">
            My Courses
          </h1>
          <div className="w-full max-w-[1500px] mx-auto mt-4 flex flex-col gap-5">
            <CoursesPageMentor courses={courses} />
          </div>
        </div>
    </div>
  )
}

export default MentorCourses