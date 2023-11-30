import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = ' underline underline-offset-4';

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-cyan-950 text-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg gap-3 font-serif">
          <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Rick and Morty
          </NavLink>
        </li>
        <li className='font-serif'>
          <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined}>
            home
            
          </NavLink>
        </li>
        <li className='font-serif'>
          <NavLink to='/Contacto' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Contacto
          </NavLink>
        </li>
        <li className='font-serif'>
          <NavLink to='/Rick' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Personajes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
