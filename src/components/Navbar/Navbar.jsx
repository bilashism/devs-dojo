import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuDropDownOpen, setMenuDropDownOpen] = useState(false);

  return (
    <nav className="py-4 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="container flex flex-wrap justify-between items-center mx-auto px-4">
        <Link to="/" className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16"
            viewBox="0 0 375 375">
            <circle cx="187.5" cy="187.5" r="185" />
            <path
              d="M205.254 222.246c38.332-17.43 63.703-47.64 64.66-73.754-8.195 21.602-30.441 43.63-60.945 57.496-22.172 10.082-44.727 14.04-63.715 12.371-32.031-5.144-23.211-44.293-20.383-52.566.05-.137.094-.273.145-.41.027-.07.05-.133.078-.2 9.101-24.663 32.82-42.253 60.652-42.253 29.75 0 54.793 20.105 62.309 47.46 4.472-4.57 8.453-9.308 11.89-14.12-12.207-28.926-40.824-49.235-74.199-49.235-44.476 0-80.531 36.047-80.531 80.508 0 4.797.426 9.488 1.23 14.05 0 0-.004-.003-.007-.003.027.148.058.297.085.445.047.27.098.535.149.8.066.345.137.688.207 1.036.047.234.098.473.148.715.078.367.164.73.25 1.098.047.21.098.425.149.64.09.383.183.77.285 1.153.047.195.098.386.148.582.106.398.215.796.325 1.195.05.176.097.355.152.531.117.406.234.805.36 1.211a72.785 72.785 0 00.543 1.727c.058.164.109.332.163.496.137.398.278.797.418 1.195.059.172.118.34.18.512.14.387.285.773.43 1.156.039.098.07.195.11.293h.003a80.078 80.078 0 005.7 11.848c21.714 10.586 55.78 9.132 89.01-5.977"
              fill="#38b6ff"
            />
            <path
              d="M266.004 178.54c-10.996 16.194-27.988 32.503-49.488 46.183-26.524 16.875-54.63 26.379-78.118 27.945a80.281 80.281 0 0019.829 10.559c16.117-4.672 33.09-12.278 49.457-22.692 28.554-18.164 49.168-40.972 58.32-61.996"
              fill="#ff6b6b"
            />
            <path
              d="M220.988 242.148c-12.808 10.54-26.27 19.192-39.574 25.79 1.43.074 2.879.113 4.332.113 1.066 0 2.176-.031 3.297-.074 0 .003-.004.003-.008.003.102-.003.2-.011.297-.015.176-.008.344-.012.52-.02l.007-.007c42.227-2.125 75.88-36.766 76.403-79.387-9.461 18.031-24.934 36.863-45.274 53.597"
              fill="#38b6ff"
            />
            <path
              d="M175.629 162.117v48.356c5.95-1.215 12.039-2.942 18.18-5.188v-52.3a176.767 176.767 0 01-6.676 3.652 172.031 172.031 0 01-11.504 5.48zm-23.14 50.469c5.777.195 11.878-.219 18.179-1.215v-47.207c-6.258 2.469-12.367 4.426-18.18 5.863zm46.277-62.574v53.355a148.593 148.593 0 0018.18-8.969v-57.593c-5.321 4.547-11.43 9.007-18.18 13.207"
              fill="#ff6b6b"
            />
            <path
              d="M166.89 53.895a9.002 9.002 0 00-12.765 0L27.735 180.609c-3.528 3.536-3.528 9.266 0 12.801l126.39 126.715a9.009 9.009 0 0012.766 0c3.527-3.535 3.527-9.266 0-12.8L46.883 187.007 166.89 66.695c3.527-3.535 3.527-9.265 0-12.8zm41.212 267.203a8.98 8.98 0 006.382 2.652 8.98 8.98 0 006.383-2.652l126.387-126.715a9.06 9.06 0 000-12.797L220.867 54.87a9.009 9.009 0 00-12.765 0 9.06 9.06 0 000 12.797l120.003 120.316L208.102 308.3a9.06 9.06 0 000 12.797zm0 0"
              fill="#38b6ff"
            />
          </svg>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Devs Dojo
          </span>
        </Link>
        <div className="flex justify-end flex-grow">
          <button
            type="button"
            className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            🌙
          </button>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
          aria-controls="mobile-menu-2"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
        </button>
        <div
          className={`${menuOpen ? "" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="flex flex-col gap-2 p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page">
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/courses"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Blog
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/login"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Login
              </Link>
              <button
                onClick={() => setMenuDropDownOpen(!menuDropDownOpen)}
                className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                Profile
                <svg
                  className="ml-1 w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </button>
              {/* Profile Dropdown menu */}
              <div
                className={`${
                  menuDropDownOpen ? "" : `hidden`
                } absolute top-full mt-2 right-auto bottom-auto left-0 z-10 w-44 font-normal bg-white rounded shadow dark:bg-gray-700`}>
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Settings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                    Sign out
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
