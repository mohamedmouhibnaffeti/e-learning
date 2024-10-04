import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/03f41cf57d9c42abb33e1c767b192142fcd9c6949fb92ee968bcd2ad0fd082f2?placeholderIfAbsent=true&apiKey=fc6efef34e3641e0a00c3c8aba71e737" 
        className="object-contain grow w-full aspect-[0.96] max-md:mt-8 max-md:max-w-full" 
        alt="Learning adventure illustration"
      />
    </div>
  );
};

export default HeroImage;