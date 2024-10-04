import React from 'react';

const AuthButtons: React.FC = () => {
  return (
    <div className="flex gap-9 self-stretch text-sm">
      <button className="my-auto text-zinc-600 hover:text-zinc-900">Log In</button>
      <button className="px-4 text-white bg-purple-600/80 hover:bg-purple-600 transition duration-150 active:bg-purple-600/80 rounded-md text-sm py-2"> Register </button>
    </div>
  );
};

export default AuthButtons;