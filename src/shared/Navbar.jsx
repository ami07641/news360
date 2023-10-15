import { NavLink } from "react-router-dom";

const active =
  " border-b-2 border-basicColor text-basicColor px-4 py-2 rounded  inline-block w-full uppercase";
const inActive = "px-4 py-2 rounded  inline-block w-full uppercase";

const Navbar = () => {
  const navItem = (
    <div className="flex items-center space-x-8">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? active : inActive)}
        >
          News
        </NavLink>
      </li>
      <li className={({ isActive }) => (isActive ? active : inActive)}>
        <a>Breaking News</a>
      </li>
      <li className={({ isActive }) => (isActive ? active : inActive)}>
        <a>Sports</a>
      </li>
      <li className={({ isActive }) => (isActive ? active : inActive)}>
        <a>Entertainment</a>
      </li>

      <li className={({ isActive }) => (isActive ? active : inActive)}>
        <a>Magazine</a>
      </li>
    </div>
  );

  return (
    <div className="bg-base-200 mt-5">
      <div className="drawer max-w-screen-2xl mx-auto">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="mx-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className=" w-6 h-6 stroke-current  text-basicColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex items-center justify-between w-full">
              <div>
                <ul>
                  {/* Navbar menu content here */}
                  {navItem}
                </ul>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="search"
                  className="px-3 rounded-lg py-2 w-[25rem] border outline-none border-basicColor"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="space-y-4 p-4 w-80 min-h-full bg-base-200 ">
            {/* Sidebar content here */}
            <li className="bg-basicColor text-white py-3 px-4 rounded-lg">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="bg-basicColor text-white py-3 px-4 rounded-lg">
              <NavLink to={{}}>Video</NavLink>
            </li>
            <li className="bg-basicColor text-white py-3 px-4 rounded-lg">
              <NavLink to={{}}>Magazine</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
