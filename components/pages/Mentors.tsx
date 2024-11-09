"use client"
import React from 'react'
import MentorCard from '@/components/Cards/MentorsPageMentorCard'


function MentorsComponent({mentors}: {mentors: any}) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 w-full max-w-[1980px]">
        {
            mentors.map((mentor: any, index: number) => {
                return(
                    <MentorCard key={index} image={mentor.image} name={mentor.name} email={mentor.email} jobTitle={mentor.jobTitle} jobLocation={mentor.jobLocation} courses={mentor.courses} />
                )
            })   
        }
    </div>
  )
}

export default MentorsComponent