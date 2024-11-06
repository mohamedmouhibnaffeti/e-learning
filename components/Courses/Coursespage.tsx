"use client"
import CourseCard from '@/components/Cards/CourseCard'
import ProductsFiltersSideBar from '@/components/sidebars/CoursesFilterSidebar'
import SmallLoader3Points from '@/components/loaders/SmallLoader3Points'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import React, { useContext, useEffect, useState } from 'react'

import ui from "../../components/Images/Courses/UI.png"
import sport from "../../components/Images/Courses/sports.png"
import entr from "../../components/Images/Courses/entr.png"
import guitar from "../../components/Images/Courses/guitar.png"
import ionic from "../../components/Images/Courses/ionic.png"
import marketing from "../../components/Images/Courses/marketing.png"
import mobile from "../../components/Images/Courses/mobile.png"
import python from "../../components/Images/Courses/python.png"
import CoursesPageCourseCard from '@/components/Cards/CoursesPageCourseCard'
import CourseRecommendationModal from '@/components/Modals/CourseRecommendationModal'
import { CourseContext } from '@/app/context/CourseContext'
import axios from 'axios'
import { toast } from 'sonner'
import SearchAnimation from '../Animations/SearchAnimation'

function Coursespage({courses}: {courses: any}) {
    const { courseCategory, courseLanguages, courseLevel, courseDuration, selectedPriceRange } = useContext(CourseContext)
    
    const [selectedCourses, setSelectedCourses] = useState<any>(courses)
    
    const getCoursesbyFilter = async() => {
        try {
            const response = await axios.post("/api/courses/getCourseByFilter", {
              courseCategory,
              courseLanguages,
              courseLevel,
              courseDuration,
              selectedPriceRange
            });
        
            if (response.status !== 200) {
              toast("Sorry", {
                description: "An internal error has occurred",
                action: {
                  label: "Retry",
                  onClick: () => {},
                },
              });
            } else {
              const data = response.data as any
              setSelectedCourses(data.courses)
            }
          } catch (error) {
            console.error(error)
            toast("Sorry", {
              description: "An error occurred while fetching courses.",
              action: {
                label: "Retry",
                onClick: () => {},
              },
            });
          }
    }

    const [thumbnails, setThumbnails] = useState<Array<{CourseID: string; data: string}>>([])
    const getThumbnails = async() => {
        const response = await axios.post("/api/courses/getcoursesthumbnails", {
            courseIDs: Array.from(courses.map((course: any) => course.id))
        })
        const {ImagesData} = response.data
        setThumbnails(prev => ImagesData)
    }

    useEffect(()=>{
        getThumbnails()
    }, [selectedCourses])

    console.log(selectedCourses)
  return (
    <div className="w-full h-full flex mb-16">
      <ProductsFiltersSideBar getCoursesbyFilter={getCoursesbyFilter} className='w-80 md:flex flex-col hidden min-h-screen border-r dark:border-r-gray-400 border-r-infinity-border px-4' inputClassName='' setExpanded={() => {}} />
      <div className="w-full h-full md:px-8 sm:px-4 px-2 max-w-[1980px] pt-[2rem]">
        <div className="justify-between items-center gap-2 md:flex hidden">
            {
                true ? (
                    <p className="font-medium">
                        <span>
                            Courses :
                        </span>
                        <span> {courses.length} </span>
                    </p>
                )
                :
                <SmallLoader3Points />
            }
            {
              /*
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
              */
            }
        </div>
        <div className="justify-between items-center gap-2 md:hidden flex">
            <button onClick={()=>{}} className="outline-none px-4 py-2 rounded-md border-2 focus:border-infinity-purple shadow-md font-medium text-sm dark:text-gray-400 dark:hover:border-infinity-dark_purple text-infinity-text_secondary_2"> Filtres </button>
            {
              /*
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
              */
            }
        </div>
        {
          selectedCourses.length === 0 || !courses ?
            <div className="w-full flex flex-col gap-3 justify-center items-center">
              <SearchAnimation />
              <p className="mx-8 text-center">
                The provided filters don't match with any available courses in our platform <br /> <span className="font-semibold text-red-600">Please Try Again with other filters</span>
              </p>
            </div>
          :
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 w-full max-w-[1980px] xl:px-16 lg:px-12 md:px-8 px-4">
              {
                  selectedCourses.map((course: any, index: number) => {
                      const courseImage = thumbnails.find((thumbnail) => thumbnail.CourseID === course.id)?.data
                      return(
                          <CoursesPageCourseCard id={course.id} key={index} image={courseImage} price={course.price} title={course.title} lessons={course.lessons.length} difficulty={course.difficulty} description={course.description} users={course.users} />
                      )
                  })   
              }
          </div>
        }
      </div>
    </div>
  )
}

export default Coursespage