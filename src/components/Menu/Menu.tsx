import { NavLink, Outlet } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <nav className="flex">
        <NavLink
          className="bg-blue-800 text-white px-7 rounded-sm py-2 cursor-pointer hover:bg-blue-700 m-5"
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className="bg-blue-800 text-white px-7 rounded-sm py-2 cursor-pointer hover:bg-blue-700 m-5"
          to="about"
        >
          About
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Menu;
