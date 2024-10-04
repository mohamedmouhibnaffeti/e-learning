import React from 'react';
import Header from './Header';
import HeroSection from './Hero';

const LearningAdventure: React.FC = () => {
  return (
    <main className="flex flex-col bg-opacity-0 h-screen bg-white">
      <div className="flex relative flex-col pt-5 w-full min-h-[714px] max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dce96131edf9b551233fa1b6c6487735ac09c7a94f49ea07ba15647395bd3b0a?placeholderIfAbsent=true&apiKey=fc6efef34e3641e0a00c3c8aba71e737" className="object-cover absolute inset-0 size-full" alt="Background" />
        <Header />
        <HeroSection />
      </div>
    </main>
  );
};

export default LearningAdventure;