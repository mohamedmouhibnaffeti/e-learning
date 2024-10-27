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
function MentorCourses() {
  return (
    <div className="w-full mb-6 flex">
        <MentorProfileSidebar />
        <div className="w-full h-full max-md:p-2 p-12 bg-[#C0C0C0]/15">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 max-md:text-lg md:pl-8">
            My Courses
          </h1>
          <div className="w-full max-w-[1500px] mx-auto mt-4 flex flex-col gap-5">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 w-full max-w-[1980px] xl:px-16 lg:px-12 md:px-8 px-4">
                {
                    courses.map((course, index) => {
                        return(
                            <MentorCourseCard image={course.image} title={course.title} lessons={course.lessons} difficulty={course.difficulty} users={course.users} />
                        )
                    })   
                }
            </div>
          </div>
        </div>
    </div>
  )
}

export default MentorCourses