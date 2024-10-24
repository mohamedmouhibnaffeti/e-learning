import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import AuthButtons from './AuthButton';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col justify-center items-center px-16 w-full font-semibold max-md:px-5 max-md:max-w-full py-5 -z-40 border-b">
      <div className="flex flex-wrap gap-5 justify-between items-center w-full max-w-[1083px] max-md:max-w-full">
        <Logo />
        <Navigation />
        <AuthButtons />
      </div>
    </header>
  );
};

export default Header;