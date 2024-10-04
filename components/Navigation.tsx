import React from 'react';

const Navigation: React.FC = () => {
  const navItems = [
    { text: 'Courses', path: '' },
    { text: 'Freebie', path: '' },
    { text: 'Pricing', path: '' },
    { text: 'Contacts', path: '' }
  ];

  return (
    <nav className="flex gap-10 self-stretch my-auto text-xs whitespace-nowrap">
      {navItems.map((item, index) => (
        <a key={index} href="#" className={`text-sm text-zinc-600 hover:text-zinc-800`}>
          {item.text}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;