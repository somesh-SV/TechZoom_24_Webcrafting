import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICES", link: "/services" },
    { name: "CONTACT", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center
      text-indigo-500"
        >
          <span className="text-3xl">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Mediflex
        </div>

        <div
          onClick={() => setOpen(!open)}
          className={`text-3xl absolute right-8 top-6 cursor-pointer md:hidden transition-transform duration-300 ${
            open ? "transform" : "transform "
          }`}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 md:border-none md:border md:shadow-none  border shadow-lg rounded-b-2xl absolute md:static backdrop-blur-sm bg-white/30 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            open ? "top-20 -mt-4" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-3">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-50 md:hover:text-indigo-400 duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
