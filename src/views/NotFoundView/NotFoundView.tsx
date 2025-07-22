import { NavLink } from 'react-router-dom';

function NotFoundView() {
  return (
    <div className="flex flex-col items-center m-auto">
      <h1 className="text-white text-3xl">Page is not found</h1>
      <NavLink
        className="bg-blue-800 text-white px-7 rounded-sm py-2 cursor-pointer hover:bg-blue-700 m-5"
        to="/"
        end
      >
        Go to Home
      </NavLink>
    </div>
  );
}

export default NotFoundView;
