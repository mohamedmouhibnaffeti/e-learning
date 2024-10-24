import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

import mentor1 from "../../components/Images/mentors/mentor1.jpg"
import mentor2 from "../../components/Images/mentors/mentor2.jpg"
import mentor3 from "../../components/Images/mentors/mentor3.jpg"
import mentor4 from "../../components/Images/mentors/mentor4.jpg"
import MentorCard from '@/components/Cards/MentorsPageMentorCard'

const mentors = [
    {
        name: "Mouhib Naffeti",
        email: "mouhib@gmail.com",
        jobTitle: "Full Stack Developer",
        jobLocation: "Sousse, Tunisia",
        image: mentor1,
        courses: 4
    },
    {
        name: "Amira Ben Ali",
        email: "amira.benali@yahoo.com",
        jobTitle: "Data Scientist",
        jobLocation: "Tunis, Tunisia",
        image: mentor2,
        courses: 22
    },
    {
        name: "Sami Bouaziz",
        email: "sami.bouaziz@outlook.com",
        jobTitle: "UI/UX Designer",
        jobLocation: "Monastir, Tunisia",
        image: mentor3,
        courses: 15
    },
    {
        name: "Yasmine Kacem",
        email: "yasmine.kacem@gmail.com",
        jobTitle: "Machine Learning Engineer",
        jobLocation: "Gabes, Tunisia",
        image: mentor4,
        courses: 45
    },
    {
        name: "Mouhib Naffeti",
        email: "mouhib@gmail.com",
        jobTitle: "Full Stack Developer",
        jobLocation: "Sousse, Tunisia",
        image: mentor1,
        courses: 4
    },
    {
        name: "Amira Ben Ali",
        email: "amira.benali@yahoo.com",
        jobTitle: "Data Scientist",
        jobLocation: "Tunis, Tunisia",
        image: mentor2,
        courses: 22
    },
    {
        name: "Sami Bouaziz",
        email: "sami.bouaziz@outlook.com",
        jobTitle: "UI/UX Designer",
        jobLocation: "Monastir, Tunisia",
        image: mentor3,
        courses: 15
    },
    {
        name: "Yasmine Kacem",
        email: "yasmine.kacem@gmail.com",
        jobTitle: "Machine Learning Engineer",
        jobLocation: "Gabes, Tunisia",
        image: mentor4,
        courses: 45
    },
]

function Mentors() {
  return (
    <div className="max-w-[1200px] flex flex-col mx-auto mt-16 xl:px-16 lg:px-12 md:px-8 px-4">
        <h1 className="self-center text-4xl max-sm:text-xl font-bold leading-relaxed tracking-wide"> Our Best Mentors </h1>
        <div className="relative md:max-w-[300px]">
            <Input className="" placeholder="ex. John Doe"/>
            <SearchIcon className="absolute right-2 top-0 translate-y-2 w-5 h-5 hover:text-violet-600 transition-all duration-150 cursor-pointer" />
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 w-full max-w-[1980px]">
            {
                mentors.map((mentor, index) => {
                    return(
                        <MentorCard image={mentor.image} name={mentor.name} email={mentor.email} jobTitle={mentor.jobTitle} jobLocation={mentor.jobLocation} courses={mentor.courses} />
                    )
                })   
            }
        </div>
    </div>
  )
}

export default Mentors