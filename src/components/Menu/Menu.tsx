'use client';

import Link from 'next/link';

import { MdWbSunny } from 'react-icons/md';
import { IoMoon } from 'react-icons/io5';

import useTheme from '@/hooks/useTheme';

function Menu({ children }: { children: React.ReactNode }) {
  const { darkTheme, toggleTheme } = useTheme();
  return (
    <div
      className={`min-h-screen ${darkTheme ? 'bg-blue-950 text-white' : 'bg-blue-300 text-black'}`}
    >
      <nav className="flex justify-between items-center mt-2.5">
        <div>
          <Link
            className={`px-7 rounded-sm py-2 cursor-pointer ${
              darkTheme
                ? 'bg-blue-800 text-white hover:bg-blue-700 m-5 disabled:bg-blue-900'
                : 'bg-blue-400  text-black hover:bg-blue-500 m-5 disabled:bg-blue-800'
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`px-7 rounded-sm py-2 cursor-pointer m-5 ${
              darkTheme
                ? 'bg-blue-800 text-white hover:bg-blue-700 m-5 disabled:bg-blue-900'
                : 'bg-blue-400  text-black hover:bg-blue-500 m-5 disabled:bg-blue-800'
            }`}
            href="/about"
          >
            About
          </Link>
        </div>
        <div className="mr-5">
          {darkTheme ? (
            <IoMoon className="h-8 w-8 cursor-pointer" onClick={toggleTheme} />
          ) : (
            <MdWbSunny
              className="h-8 w-8 cursor-pointer text-blue-600"
              onClick={toggleTheme}
            />
          )}
        </div>
      </nav>
      {children}
    </div>
  );
}

export default Menu;
