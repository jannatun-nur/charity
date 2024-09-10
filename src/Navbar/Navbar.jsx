import { useState } from "react";
import logo from  '../../public/image/Frame 21.png'
import { BiSolidDashboard } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="p-4 bg-white dark:text-gray-800 ">
        <div className="container flex justify-between h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            {/* Logo */}
          <img src={logo} className=" h-6 w-6 lg:h-10 lg:w-10" />
          </a>

          {/* Hamburger Icon for Mobile */}
          <button className="p-4 lg:hidden" onClick={toggleMenu}>
          <p className="text-[#399866] text-2xl"><BiSolidDashboard /></p>

          </button>

          {/* Dropdown Menu for Mobile */}
          {isOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-100 dark:text-gray-800 p-4 lg:hidden">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="block text-lg text-[#399866] "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-lg text-[#399866] "
                  >
                   About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-lg text-[#399866] "
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-lg text-[#399866] "
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-lg rounded-3xl text-[#399866] "
                  >
                    Donate
                  </a>
                </li>
              </ul>
            </div>
          )}





          {/* desktop */}
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <p
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1"
              >
                Home
              </p>
            </li>
            <li className="flex">
              <p
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 "
              >
                About Us
              </p>
            </li>
            <li className="flex">
              <p
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 "
              >
                Contact Us
              </p>
            </li>
            <li className="flex">
              <p
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 "
              >
                Blogs
              </p>
            </li>
            
          </ul>

          {/* button for dasktop */}
          <div className="items-center flex-shrink-0 hidden lg:flex">
           
            <button className="self-center px-8 py-3  rounded-3xl bg-[#399866] shadow-green-800 shadow-md text-white">
              Donate
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
