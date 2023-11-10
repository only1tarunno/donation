import { Link, NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const links = (
    <>
      <li className="me-0 md:me-2 text-xl font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="me-0 md:me-2 text-xl font-bold">
        <NavLink to="/donation">Donation</NavLink>
      </li>
      <li className="me-0 md:me-2 text-xl font-bold">
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
    </>
  );
  return (
    <div className="container mx-auto px-5 lg:px-0">
      <div className="navbar">
        <div className="navbar-start">
          <Link to="/">
            <img src={logo} className="w-56" alt="logo" />
          </Link>
        </div>

        <div className="navbar-end">
          {/* desktop menu  */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          {/* mobile nav  */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm rounded-lg dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-base-100"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
