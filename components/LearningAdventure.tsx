"use client"
import React from 'react';
import HeroSection from './Hero';
import duo from "./Images/svg/Duolingo.svg"
import codeCov from "./Images/svg/codecov.svg"
import codePen from "./Images/svg/codepen.svg"
import cloud from "./Images/svg/googleCloud.svg"
import ibm from "./Images/svg/ibm.svg"
import magicLeap from "./Images/svg/magicLeap.svg"
import udemy from "./Images/svg/udemy.svg"
import userTesting from "./Images/svg/usertesting.svg"
import {Roboto_Condensed, Roboto_Mono} from "next/font/google"
import Image from 'next/image';
import HeroContent from './HeroContent';
import landing from "./Images/landing2.png"
import landing3 from "./Images/landing3.png"
import HeroDescriptionCard from './HeroDescriptionCard';
import SearchComponent from './SearchComponent';
import CourseCard from './CourseCard';

import ui from "./Images/Courses/UI.png"
import sport from "./Images/Courses/sports.png"
import entr from "./Images/Courses/entr.png"
import guitar from "./Images/Courses/guitar.png"
import ionic from "./Images/Courses/ionic.png"
import marketing from "./Images/Courses/marketing.png"
import mobile from "./Images/Courses/mobile.png"
import python from "./Images/Courses/python.png"

const condensedFont = Roboto_Condensed({weight: "700", subsets: ["cyrillic", "cyrillic-ext"]})
const robotomono = Roboto_Mono({weight: "700", subsets: ["greek"]})
const images = [
  duo, codeCov, codePen, cloud, ibm, magicLeap, udemy, userTesting
]

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


const filters = [
  "All Courses", "Design", "Development", "Photography", "Music"
]

const LearningAdventure: React.FC = () => {
  return (
    <main className="flex flex-col bg-opacity-0 bg-white pt-5 items-center mx-auto sm:max-w-[70%] pb-16">
      <HeroSection />
      <h1 className="text-4xl max-md:text-2xl text-neutral-600 lg:max-w-[50%] text-center" style={{fontFamily: condensedFont.style.fontFamily}}> Over 100 Collaborations Across the World </h1>
      <div className="flex overflow-hidden group gap-4 max-w-[90%] mt-12 mask-gradient">
        <div className="flex space-x-4 gap-4 animate-loop-scroll group-hover:paused items-center">
          {
            images.map((image, index) => (
              <Image 
                key={`img1-${index}`} 
                src={image} 
                alt="" 
                className="h-12 w-auto max-w-none" 
              />
            ))
          }
        </div>
        <div className="flex space-x-4 gap-4 animate-loop-scroll group-hover:paused items-center" aria-hidden="true">
          {
            images.map((image, index) => (
              <Image 
                key={`img2-${index}`} 
                src={image} 
                alt="" 
                className="h-12 w-auto max-w-none" 
              />
            ))
          }
        </div>
      </div>
      <section className="flex relative flex-col justify-center items-center px-16 w-full bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-[1089px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full items-center">
              <Image 
                loading="lazy" 
                src={landing} 
                className="relative object-contain grow w-full aspect-[0.96] max-md:mt-8 max-md:max-w-full drop-shadow-2xl shadow-orange-400 z-40" 
                alt="Learning adventure illustration"
              />
            </div>
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start self-stretch my-auto w-full font-semibold max-md:mt-10 max-md:max-w-full">
                <h1 className="self-stretch   text-5xl max-md:text-3xl text-zinc-800 max-md:max-w-full text-start">
                  Our Online Education is Smart and Effective
                </h1>
                <p className="mt-8 text-xs text-neutral-500 max-md:mt-10 max-w-md max-md:max-w-full">
                  Embark on an exhilarating learning adventure as you dive into our diverse range of
                  online courses. Explore new subjects, acquire valuable skills, and shape your
                  knowledge at your own pace, all from the comfort of your digital classroom
                </p>
                <button className="flex-1 px-7 py-2 mt-4 bg-violet-400 hover:bg-violet-400/90 active:bg-violet-400 transition duration-150 rounded border border-violet-400 border-solid text-violet-100 max-md:px-5">
                    Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex relative flex-col justify-center items-center px-16 w-full bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-[1089px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto w-full font-semibold max-md:mt-10 max-md:max-w-full">
                <h1 className="self-stretch text-5xl max-md:text-3xl text-zinc-800 max-md:max-w-full text-start">
                  What Will <span className="text-violet-600">YOU</span> Get?
                </h1>
                <p className="mt-8 text-xs text-neutral-500 max-md:mt-10 max-w-md max-md:max-w-full">
                  Embark on an exhilarating learning adventure as you dive into our diverse range of
                  online courses. Explore new subjects, acquire valuable skills, and shape your
                  knowledge at your own pace, all from the comfort of your digital classroom
                </p>
                <div className="flex flex-col gap-3 mt-4">
                  <HeroDescriptionCard />
                  <HeroDescriptionCard />
                  <HeroDescriptionCard />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full items-center">
              <Image 
                loading="lazy" 
                src={landing3} 
                className="relative object-contain grow w-full aspect-[0.96] max-md:mt-8 max-md:max-w-full drop-shadow-2xl shadow-orange-400 z-40" 
                alt="Learning adventure illustration"
              />
            </div>
            
          </div>
        </div>
      </section>
      <h1 className="text-5xl max-md:text-2xl max-w-2xl text-center text-black font-bold" style={{fontFamily: condensedFont.style.fontFamily}}> Search Among <span className="text-violet-600"> 5900 </span> Courses and Find Your Favourite Course </h1>
      <section className="flex relative flex-col justify-center items-center max-xl:px-0 2xl:px-16 w-full bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-[1089px] max-md:max-w-full justify-center items-center flex flex-col">
          <div className="max-w-xl flex w-full mt-8">
            <SearchComponent />
          </div>
        </div>
        <div className="w-full flex justify-between items-center mt-8">
          <h1 className="font-bold text-black flex items-center gap-1 text-lg" style={{fontFamily: robotomono.style.fontFamily}}> <span className="p-[2px] rounded-full w-fit h-fit bg-violet-600" /> Popular Courses </h1>
          <div className="flex gap-4 items-center font-semibold translate-y-[2px]">
            {
              filters.map((filter) => (
                <span className="text-black text-sm cursor-pointer hover:text-violet-700 transition duration-200" style={{fontFamily: robotomono.style.fontFamily}}> {filter} </span>
              ))
            }
          </div>
        </div>
        <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-2 mt-8 max-2xl:w-full"> 
          {
            courses.map((course, index) => (
              <CourseCard image={course.image} difficulty={course.difficulty} lessons={course.lessons} title={course.title} users={course.users} key={index} />
            ))
          }
        </div>
      </section>
    </main>
  );
};

export default LearningAdventure;