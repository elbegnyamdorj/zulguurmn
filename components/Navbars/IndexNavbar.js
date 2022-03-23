import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#pablo"
              >
                Zulguur.mn
              </a>
            </Link>
          </div>
          <div>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700  flex items-center text-xs uppercase font-bold"
                  href="/"
                >
                  <i className="cursor-pointer text-md hover:font-black" />
                  Нүүр
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700  flex items-center text-xs uppercase font-bold"
                  href="#CarWash"
                >
                  <i className="cursor-pointer font-semibold px-3 py-2 text-md hover:font-black" />
                  Угаалгын газрууд
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700  flex items-center text-xs uppercase font-bold"
                  href="#Order"
                >
                  <i className="cursor-pointer font-semibold px-3 py-2 text-md hover:font-black" />
                  Цаг захиалах
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 flex items-center text-xs uppercase font-bold"
                  href="#about"
                >
                  <i className="cursor-pointer font-semibold px-3 py-2 text-md hover:font-black" />
                  Бидний тухай
                </a>
              </li>

              {/* Profile Icon oruulna */}
              {/* <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
                  href="#Profile"
                >
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
