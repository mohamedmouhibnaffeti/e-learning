import React from 'react'

import ui from "../../components/Images/Courses/UI.png"
import sport from "../../components/Images/Courses/sports.png"
import entr from "../../components/Images/Courses/entr.png"
import guitar from "../../components/Images/Courses/guitar.png"
import ionic from "../../components/Images/Courses/ionic.png"
import marketing from "../../components/Images/Courses/marketing.png"
import mobile from "../../components/Images/Courses/mobile.png"
import python from "../../components/Images/Courses/python.png"
import CourseRecommendationModal from '@/components/Modals/CourseRecommendationModal'
import Coursespage from '@/components/Courses/Coursespage'
import prisma from '@/lib/util/db'
import { getServerSession } from 'next-auth'
import AuthOptions from '@/lib/util/AuthOptions'
import { User } from '@prisma/client'
import CourseProvider from '../context/CourseContext'



const courses = [
  {
    image: ui, 
    title: "Graphic Design Masterclass - Photoshop & Illustrator", 
    lessons: 7, 
    users: 85, 
    difficulty: "MEDIUM"
  },
  {
    image: sport, 
    title: "Artificial Intelligence - From Zero to Hero", 
    lessons: 15, 
    users: 250, 
    difficulty: "HARD"
  },
  {
    image: python, 
    title: "Cybersecurity Fundamentals - Protect Your Data", 
    lessons: 9, 
    users: 180, 
    difficulty: "MEDIUM"
  },
  {
    image: ionic, 
    title: "Digital Marketing - SEO, SEM & Social Media Strategies", 
    lessons: 5, 
    users: 110, 
    difficulty: "EASY"
  },
  {
    image: mobile, 
    title: "Learn Figma - UI/UX Design Essentials", 
    lessons: 6, 
    users: 99, 
    difficulty: "HARD"
  },
  {
    image: guitar, 
    title: "Master Web Development with React & Next.js", 
    lessons: 10, 
    users: 150, 
    difficulty: "MEDIUM"
  },
  {
    image: entr, 
    title: "Data Science Bootcamp - Python & Machine Learning", 
    lessons: 12, 
    users: 200, 
    difficulty: "HARD"
  },
  {
    image: marketing, 
    title: "Mobile App Development with Flutter", 
    lessons: 8, 
    users: 120, 
    difficulty: "EASY"
  }
]


async function CoursesPage() {
  const session = await getServerSession(AuthOptions)
  console.log(session)
  const user = await prisma.user.findUnique({where: {email_provider: {email: session?.user?.email as string, provider: session?.user?.provider as string}}}) as User
  console.log(user?.preferredCategories?.length === 0)
  return (
    <CourseProvider>
      {
        (user?.preferredLanguages?.length === 0 && user?.preferredCategories?.length === 0) && false && <CourseRecommendationModal />
      }
      <Coursespage courses={courses} />
    </CourseProvider>
  )
}

export default CoursesPage