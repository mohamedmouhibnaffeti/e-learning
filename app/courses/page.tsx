"use client"
import CourseCard from '@/components/Cards/CourseCard'
import ProductsFiltersSideBar from '@/components/sidebars/CoursesFilterSidebar'
import SmallLoader3Points from '@/components/loaders/SmallLoader3Points'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import React from 'react'

import ui from "../../components/Images/Courses/UI.png"
import sport from "../../components/Images/Courses/sports.png"
import entr from "../../components/Images/Courses/entr.png"
import guitar from "../../components/Images/Courses/guitar.png"
import ionic from "../../components/Images/Courses/ionic.png"
import marketing from "../../components/Images/Courses/marketing.png"
import mobile from "../../components/Images/Courses/mobile.png"
import python from "../../components/Images/Courses/python.png"
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
function CoursesPage() {
  return (
    <div className="w-full h-full flex mb-16">
      <ProductsFiltersSideBar className='w-80 md:flex flex-col hidden min-h-screen border-r dark:border-r-gray-400 border-r-infinity-border px-4' inputClassName='' setExpanded={() => {}} getNeonsByFilter={()=>{}} />
      <div className="w-full h-full md:px-8 sm:px-4 px-2 max-w-[1980px] pt-[2rem]">
        <div className="justify-between items-center gap-2 md:flex hidden">
            {
                true ? (
                    <p className="font-medium">
                        <span>
                            Courses :
                        </span>
                        <span> {[0].length} </span> / {12}
                    </p>
                )
                :
                <SmallLoader3Points />
            }
            <div className="flex gap-2 items-center">
                <span className="font-medium">
                    Trier Par:
                </span>
                <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none px-4 py-2 rounded-md border-2 focus:border-infinity-purple shadow-md font-medium text-sm dark:text-gray-400 dark:hover:border-infinity-dark_purple text-infinity-text_secondary_2"> --Choisir un Filtre </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className="cursor-pointer px-6" onSelect={()=>{}} >Date de Création</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer px-6" onSelect={()=>{}} >Nombre de Commandes</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer px-6" onSelect={()=>{}} >Prix</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
        <div className="justify-between items-center gap-2 md:hidden flex">
            <button onClick={()=>{}} className="outline-none px-4 py-2 rounded-md border-2 focus:border-infinity-purple shadow-md font-medium text-sm dark:text-gray-400 dark:hover:border-infinity-dark_purple text-infinity-text_secondary_2"> Filtres </button>
            <div className="flex gap-2 items-center">
                <span className="font-medium">
                    Trier Par:
                </span>
                <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none px-4 py-2 rounded-md border-2 focus:border-infinity-purple shadow-md font-medium text-sm dark:text-gray-400 dark:hover:border-infinity-dark_purple text-infinity-text_secondary_2"> --Choisir un filtre </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className="cursor-pointer px-6" onSelect={()=>{}} >Date de Création</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer px-6" onSelect={()=>{}} >Nombre de Commandes</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer px-6" onSelect={()=>{}} >Prix</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 w-full max-w-[1980px] xl:px-16 lg:px-12 md:px-8 px-4">
            {
                courses.map((course, index) => {
                    return(
                        <CoursesPageCourseCard image={course.image} title={course.title} lessons={course.lessons} difficulty={course.difficulty} users={course.users} />
                    )
                })   
            }
        </div>
      </div>
    </div>
  )
}

export default CoursesPage