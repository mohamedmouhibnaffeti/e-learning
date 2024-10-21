import Image from 'next/image'
import React from 'react'

import image from "../../../components/Images/Courses/webdev.jpg"
import mentor from "../../../components/Images/mentors/mentor1.jpg"
import { ChartNoAxesColumnIncreasingIcon, Clock10Icon, EarthIcon, LibraryIcon, ShieldOff, Tally2Icon, UserIcon } from 'lucide-react'
import SmallStarsComponent from '@/components/Rating/SmallStars'
import GraySeperator from '@/components/Seperators/GraySeperator'

function CoursePage() {
  return (
    <div className="w-full h-full md:px-8 sm:px-4 px-2 max-w-[1400px] mx-auto lg:mb-16 lg:pb-32">
        <h1 className="md:text-base text-sm mt-4"> Courses &gt; <span className="text-purple-500"> Course Details </span> </h1>
        <div className="flex flex-wrap mt-8 max-md:gap-8">
            <div className="lg:w-8/12 w-full">
                <div className="w-full lg:h-[30rem]">
                    <Image src={image} alt='' className="w-full rounded-xl h-full object-cover" />
                </div>
                <h1 className="max-md:text-lg text-xl max-sm:text-sm self-start text-black font-semibold max-w-full truncate mt-6"> Web Development Fundamentals for Beginners </h1>
                <p className="text-sm max-sm:text-xs text-gray-600 mt-3">
                    Le lorem ipsum est, en imprimerie,
                    une suite de mots sans signification utilisée à titre provisoireen imprimerie,
                    une suite de mots sans signification utilisée à titre provisoire
                </p>
                <div className="flex w-full justify-between items-center flex-wrap mt-6 gap-4">
                    <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex gap-1 items-center">
                            <div className="w-12 h-12">
                                <Image src={mentor} alt='' className="w-full rounded-full h-full object-cover" />
                            </div>
                            <span className="text-black font-medium max-md:text-sm"> Dane Shadow </span>
                        </div>
                        <span className="text-purple-500 text-sm flex gap-2 items-center"> <Tally2Icon className="text-gray-500" /> 4700 Enrolled Students </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-sm">
                            4.7
                        </span>
                        <SmallStarsComponent />
                        <span className="text-xs text-gray-500 underline">
                            (4600 Ratings)
                        </span>
                    </div>
                </div>
                <h4 className="lg:text-xl md:text-lg text-base mt-8"> Description </h4>
                <p className="text-sm max-sm:text-xs text-gray-600 mt-3">
                    Le lorem ipsum est, en imprimerie,
                    une suite de mots sans signification utilisée à titre provisoireen imprimerie,
                    une suite de mots sans signification utilisée à titre provisoireLe lorem ipsum est, en imprimerie,
                    une suite de mots sans signification utilisée à titre provisoireen imprimerie,
                    une suite de mots sans signification utilisée à titre provisoireLe lorem ipsum est, en imprimerie,
                    une suite de mots sans signification utilisée à titre provisoireen imprimerie,
                    une suite de mots sans signification utilisée à titre provisoireLe lorem ipsum est, en imprimerie,
                    une suite de mots sans signification utilisée à titre provisoireen imprimerie,
                    une suite de mots sans signification utilisée à titre provisoireLe lorem ipsum est, en imprimerie,
                    une suite de mots sans signification utilisée à titre provisoireen imprimerie,
                    une suite de mots sans signification utilisée à titre provisoire
                </p>
            </div>
            <div className="lg:w-1/3 w-full">
                <div className="md:mx-8 mx-2 bg-purple-400/30 flex flex-col justify-center items-center py-6 rounded-xl px-6">
                    <h4 className="lg:text-xl md:text-lg font-semibold text-purple-600"> 95.10 TND </h4>
                    
                    <GraySeperator classname="mt-5" />
                
                    <div className="flex w-full justify-between items-center mt-5 text-sm">
                        <div className="flex items-center gap-1">
                            <UserIcon className="text-purple-600 h-4 w-4 -translate-y-px" />
                            <span className="text-gray-600"> Instructor </span>
                        </div>
                        <span className="text-gray-600/70"> John Shadow </span>
                    </div>
                
                    <GraySeperator classname="mt-5" />
                    
                    <div className="flex w-full justify-between items-center mt-5 text-sm">
                        <div className="flex items-center gap-1">
                            <Clock10Icon className="text-purple-600 h-4 w-4 -translate-y-px" />
                            <span className="text-gray-600"> Duration </span>
                        </div>
                        <span className="text-gray-600/70"> 1hr 15 mins </span>
                    </div>
                    
                    <GraySeperator classname="mt-5" />
                    
                    <div className="flex w-full justify-between items-center mt-5 text-sm">
                        <div className="flex items-center gap-1">
                            <LibraryIcon className="text-purple-600 h-4 w-4 -translate-y-px" />
                            <span className="text-gray-600"> Lessons </span>
                        </div>
                        <span className="text-gray-600/70"> 35 </span>
                    </div>
                    
                    <GraySeperator classname="mt-5" />
                    
                    <div className="flex w-full justify-between items-center mt-5 text-sm">
                        <div className="flex items-center gap-1">
                            <ChartNoAxesColumnIncreasingIcon className="text-purple-600 h-4 w-4 -translate-y-px" />
                            <span className="text-gray-600"> Level </span>
                        </div>
                        <span className="text-gray-600/70"> Advanced </span>
                    </div>
                    
                    <GraySeperator classname="mt-5" />
                    
                    <div className="flex w-full justify-between items-center mt-5 text-sm">
                        <div className="flex items-center gap-1">
                            <EarthIcon className="text-purple-600 h-4 w-4 -translate-y-px" />
                            <span className="text-gray-600"> Language </span>
                        </div>
                        <span className="text-gray-600/70"> English </span>
                    </div>
                    
                    <GraySeperator classname="mt-5" />

                    <button className="py-3 bg-purple-500 text-white hover:bg-purple-500/90 active:bg-purple-600 px-4 w-fit max-sm:w-full mt-7 rounded-lg transition-all duration-150">
                        Enroll Now
                    </button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CoursePage