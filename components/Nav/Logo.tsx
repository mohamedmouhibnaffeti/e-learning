import React from 'react';
import Image from 'next/image';
import icon from "../Images/logo.png"
const Logo: React.FC = () => {
  return (
    <div className="flex gap-1.5 self-stretch my-auto text-base whitespace-nowrap text-neutral-700">
      <Image loading="lazy" src={icon} className="object-contain shrink-0 aspect-[0.95] w-[21px]" alt="SmartAcumen logo"/>
      <div className="basis-auto">SmartAcumen</div>
    </div>
  );
};

export default Logo;