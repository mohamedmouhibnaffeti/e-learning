import React from 'react';
import HeroSection from './Hero';
import duo from "./Images/svg/logotype-dark.svg"
import Image from 'next/image';
const LearningAdventure: React.FC = () => {
  return (
    <main className="flex flex-col bg-opacity-0 bg-white pt-5 items-center mx-auto">
        <HeroSection />
        <h1></h1>
        <div className="w-full max-w-[1089px] max-md:max-w-full mx-auto flex gap-4q">
          <Image src={duo} alt="" className="h-12" />
        </div>
    </main>
  );
};

export default LearningAdventure;