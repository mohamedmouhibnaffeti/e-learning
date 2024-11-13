import QuizResponseCard from '@/components/Cards/QuizResponseCard'
import React from 'react'

function SubmissionsRoute() {
  return (
    <div className="max-w-[1500px] mx-auto mt-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 max-md:text-lg md:pl-8">
            Submissions
        </h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 my-4 px-4 w-full">
            <QuizResponseCard /> 
        </div>
    </div>
  )
}

export default SubmissionsRoute