import { NavLink, Outlet } from 'react-router-dom';

import { MdWbSunny } from 'react-icons/md';
import { IoMoon } from 'react-icons/io5';

import useTheme from '@/hooks/useTheme';

function Menu() {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen  ${darkTheme ? 'bg-blue-950 text-white' : 'bg-blue-300 text-black'}`}
    >
      <nav className="flex justify-between items-center mt-2.5">
        <div>
          <NavLink
            className={`px-7 rounded-sm py-2 cursor-pointer ${
              darkTheme
                ? 'bg-blue-800 text-white hover:bg-blue-700 m-5 disabled:bg-blue-900'
                : 'bg-blue-400  text-black hover:bg-blue-500 m-5 disabled:bg-blue-800'
            }`}
            to="/"
            end
          >
            Home
          </NavLink>
          <NavLink
            className={`px-7 rounded-sm py-2 cursor-pointer m-5 ${
              darkTheme
                ? 'bg-blue-800 text-white hover:bg-blue-700 m-5 disabled:bg-blue-900'
                : 'bg-blue-400  text-black hover:bg-blue-500 m-5 disabled:bg-blue-800'
            }`}
            to="about"
          >
            About
          </NavLink>
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
      <Outlet />
    </div>
  );
}

export default Menu;
