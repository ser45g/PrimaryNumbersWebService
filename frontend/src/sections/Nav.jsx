import { Link } from "react-router-dom";
import { headerLogo } from "../assets/icons";
import ToggleThemeButton from "../components/ToggleThemeButton";
import { navLinks } from "../constants";
import { useState ,useRef} from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    console.log(!isOpen);
    setIsOpen(s=>!isOpen);
  };


  
  return (
    <header className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <nav className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto py-4 px-1 ">
        <article className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="p-2 rounded-full bg-white">
            <img src={headerLogo} className="h-8 " alt="Header Logo" />
          </div>

          <span className="self-center text-xl font-semibold  dark:text-white">
            Primary Numbers
          </span>
        </article>
        <article className="flex md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse flex-row justify-between items-center">
          <ToggleThemeButton />
          <button
            onClick={toggleDropdown}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </article>

        <article
          className={`items-center justify-between ${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  max-sm:shadow-md rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" id="nav-links-elements">
            {navLinks.map((link, index) => (
              <li key={link.label} className="my-1">
                <Link
                  onClick={() => setIsOpen(false)}
                  to={link.href}
                  className="block py-2 px-3  rounded-sm 
                  md:hover:bg-transparent md:hover:text-blue-700
                   md:p-0
                    md:dark:hover:text-blue-500
                     dark:text-blue-200 dark:hover:bg-gray-700
                   dark:hover:text-white
                    md:dark:hover:bg-transparent
                    text-blue-950  max-md:ring-1
                    hover:md:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </nav>
    </header>
  );
};

export default Nav;
