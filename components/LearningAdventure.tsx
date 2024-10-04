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
import {Roboto_Condensed} from "next/font/google"
import Image from 'next/image';
const condensedFont = Roboto_Condensed({weight: "700", subsets: ["cyrillic", "cyrillic-ext"]})
const images = [
  duo, codeCov, codePen, cloud, ibm, magicLeap, udemy, userTesting
]

const LearningAdventure: React.FC = () => {
  return (
    <main className="flex flex-col bg-opacity-0 bg-white pt-5 items-center mx-auto max-w-[70%]">
        <HeroSection />
        <h1 className="lg:text-4xl md:text-2xl text-xl text-neutral-600 max-w-[50%] text-center" style={{fontFamily: condensedFont.style.fontFamily}}> Over 100 Collaborations Across the World </h1>
        <div className="flex overflow-hidden group gap-3 max-w-[90%] mt-12 mask-gradient">
          <div className="flex space-x-4 gap-3 animate-loop-scroll group-hover:paused items-center">
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
          <div className="flex space-x-4 gap-3 animate-loop-scroll group-hover:paused items-center" aria-hidden="true">
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

    </main>
  );
};

export default LearningAdventure;