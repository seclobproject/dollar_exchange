import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import userImg from "../assets/Images/userImg.png";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { name: "Home", href: "#", current: true },
    { name: "Exchange", href: "#", current: false },
    { name: "About", href: "#", current: false },
    { name: "Market", href: "#", current: false },
    { name: "Earn", href: "#", current: false },
    { name: "Support", href: "#", current: false },
    { name: "Sign Out", href: "#", current: false },
  ];

  return (
    <div>
      <header className="sticky">
        <nav className="bg-custom-blue h-auto border-gray-200 px-4 lg:px-6 lg:py-10 py-4 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="*" className="flex items-center">
              <img
                src={logo}
                className="mr-3 h-7 sm:h-9 md:h-14"
                alt="Flowbite Logo"
              />
              {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
            </a>
            <div className="flex items-center lg:order-2">
              <div className="flex flex-row items-center gap-x-3 sm:gap-x-2">
                <img src={userImg} alt="" />
                <p className="text-white md:text-xl sm:text-base text-sm">James</p>
              </div>
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden  focus:outline-none "
                aria-controls="mobile-menu-2"
                aria-expanded={menuOpen}
              >
                <svg
                  className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
                menuOpen ? "block" : "hidden"
              }`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mr-8 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {menuItems.map((item, index) => (
                  <li key={index} className="group">
                    <a
                      href={item.href}
                      className={`block py-2 pr-2 pl-3 font-normal text-white lg:p-0  lg:dark:hover:bg-transparent`}
                    >
                      {item.name}
                      {item.current ? (
                        <div className="bg-gradient-to-r from-blue-300 via-purple-500 to-pink-500 h-[2px] w-full"></div>
                      ) : (
                        ""
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
