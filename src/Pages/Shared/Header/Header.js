import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  return (
    <div>
      <div className=" bg-cyan-300">
        <div className="navbar px-20 py-5">
          <div className="navbar-start">
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li tabIndex={0}></li>
                <li>
                  <NavLink to="/destination">Destination</NavLink>
                </li>
                <li tabIndex={0}></li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li tabIndex={0}></li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li tabIndex={0}></li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li tabIndex={0}></li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <img className="h-14 w-32" src={logo} alt="" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className="header">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeStyle" : undefined
                }
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeStyle" : undefined
                }
                to="/destination"
              >
                Destination
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeStyle" : undefined
                }
                to="/blog"
              >
                Blog
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeStyle" : undefined
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </div>
          <div className="navbar-end">
            {user && user.uid ? (
              <div className="flex justify-between">
                <h1 className="mt-2 mr-3 text-lg lg:block hidden">
                  {user?.displayName}
                </h1>
                <button
                  onClick={logOut}
                  className="btn btn-outline btn-primary text-normal px-7 normal-case text-base hidden lg:block"
                >
                  Logout
                </button>{" "}
              </div>
            ) : (
              <>
                <Link to="/register">
                  <button className="btn btn-outline btn-primary text-normal px-7 normal-case text-base hidden lg:block">
                    Register
                  </button>
                </Link>
                <Link to="/login">
                  <button className="btn btn-outline btn-primary text-normal mx-5 px-7  normal-case text-base hidden lg:block">
                    Login
                  </button>
                </Link>
              </>
            )}

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="..." src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              ></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
