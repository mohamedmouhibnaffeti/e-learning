import React from 'react'
import Image from 'next/image'
import mentorImage from "../../../components/Images/mentors/mentor3.jpg"
import { MapPinIcon } from 'lucide-react'
import ui from "../../../components/Images/Courses/UI.png"
import sport from "../../../components/Images/Courses/sports.png"
import entr from "../../../components/Images/Courses/entr.png"
import guitar from "../../../components/Images/Courses/guitar.png"
import ionic from "../../../components/Images/Courses/ionic.png"
import marketing from "../../../components/Images/Courses/marketing.png"
import mobile from "../../../components/Images/Courses/mobile.png"
import python from "../../../components/Images/Courses/python.png"
import CoursesPageCourseCard from '@/components/Cards/CoursesPageCourseCard'



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
function Mentor() {
  return (
    <div className="w-full h-full xl:px-16 lg:px-12 md:px-8 px-4 max-w-[1400px] mx-auto mb-8 flex flex-col">
        <div className="flex items-center max-sm:flex-col mt-12 gap-3">
            <div className="md:w-36 md:h-36 w-24 h-24">
                <Image src={mentorImage} alt='' className="object-cover w-full h-full rounded-full border-purple-500 border-2" />
            </div>
            <div className="flex flex-col">
                <p className="truncate font-semibold md:text-xl text-purple-900"> Mohamed Mouhib </p>
                <p className="truncate font-medium text-gray-500 max-md:text-sm"> contact.mohamednaffeti@gmail.com </p>
                <p className="md:text-sm text-xs text-gray-400 ml-1 mt-4"> Full Stack Developer | UI/UX Designer </p>
                <p className="md:text-sm text-xs text-gray-400 flex items-center gap-1"> <MapPinIcon className="md:w-5 md:h-5 w-4 h-4" /> Sousse, Tunisia </p>
            </div>
        </div>
        <h1 className="tracking-wider text-center font-semibold text-3xl max-sm:text-xl mt-12">
            My Courses
        </h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 w-full max-w-[1980px]">
            {
                courses.map((course, index) => {
                    return(
                        <CoursesPageCourseCard image={course.image} title={course.title} lessons={course.lessons} difficulty={course.difficulty} users={course.users} />
                    )
                })   
            }
        </div>
    </div>
  )
}

export default Mentor