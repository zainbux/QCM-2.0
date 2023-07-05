'use client'

import React from 'react';
import NavSidebar from './NavMenu';
import { Link } from 'react-scroll';


const Nav = () => {
  const sections = ['home', 'about', 'photos', 'pricing', 'contact'];

  return (
    <div>
      <NavSidebar sections={sections} />
      <div className='flex items-center justify-between md:mx-10 p-10'>

        {/* Logo */}
        <div className='justify-start'>
          <img src="LogoW.png" alt="Logo" className='md:w-[130px] w-[100px] cursor-pointer'/>
        </div>

        {/* NavLinks */}
        <ul className="list-none justify-end gap-5 items-center flex-1 text-blue-100 hover:text-gradient md:flex hidden text-xl cursor-pointer">
          {sections.map(section => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={100}
                className="w-[55%] hover:text-secondary"
              >
                {section.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
