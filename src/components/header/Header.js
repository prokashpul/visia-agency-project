import React, { useState } from "react";
import { MdMenu, MdClose, MdApi } from "react-icons/md";
import { Link } from "react-scroll";

const navBar = [
  { link: "services", name: "services", id: 1 },
  { link: "about", name: "about", id: 2 },
  { link: "testimonial", name: "testimonial", id: 3 },
  { link: "news", name: "news", id: 4 },
  { link: "portfolio", name: "portfolio", id: 5 },
  { link: "pricing", name: "pricing", id: 6 },
  { link: "teams", name: "teams", id: 7 },
  { link: "skills", name: "skills", id: 8 },
  { link: "milestones", name: "milestones", id: 9 },
  { link: "contact", name: "Contact", id: 10 },
];
const Header = () => {
  const [open, setOpen] = useState(false);
  // nab background change
  window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("bg-black", window.scrollY > 100);
  });
  return (
    <>
      <nav className="flex fixed w-full top-0 justify-between h-16 items-center px-4 border-b-2  lg:border-0 border-green-500 duration-500 z-50 max-w-screen-2xl">
        <div className="font-extrabold text-4xl text-green-500 cursor-pointer">
          <Link to="home" spy={true} smooth={true} offset={-62} duration={1000}>
            <MdApi />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="block font-bold duration-500  text-4xl lg:hidden cursor-pointer text-green-500"
        >
          {!open ? <MdMenu /> : <MdClose />}
        </div>

        <ul
          onClick={() => setOpen(!open)}
          className={`flex  flex-col lg:flex-row items-start lg:items-center px-5 lg:px-0  lg:gap-0 absolute lg:static bg-black overflow-y-scroll lg:overflow-hidden lg:bg-transparent top-16  lg:top-auto w-3/4 lg:w-auto duration-700  lg:right-auto h-screen lg:h-auto lg:py-0 ${
            open ? "right-0" : "-right-[100%]"
          } `}
        >
          <li className="duration-500 flex items-center py-3 lg:py-auto w-full lg:w-auto">
            <Link
              onClick={() => setOpen(!open)}
              activeClass="text-[#fff] border-b-2 border-green-500 bg-gray-900"
              className="hover:text-white hover:bg-slate-900 px-2 flex items-center hover:border-b-2 border-green-500 text-green-500 cursor-pointer uppercase lg:h-16 w-screen md:w-auto"
              to="home"
              spy={true}
              smooth={true}
              offset={-62}
              duration={1000}
            >
              Home
            </Link>
          </li>
          {navBar?.map((nav) => (
            <li
              key={nav.id}
              className="duration-500 flex items-center py-3 lg:py-auto w-full lg:w-auto"
            >
              <Link
                onClick={() => setOpen(!open)}
                activeClass="text-[#fff] border-b-2 border-green-500 bg-gray-900"
                className="hover:text-white hover:bg-gray-900 text-green-500 cursor-pointer uppercase overflow-hidden hover:border-b-2 px-2 border-green-500 lg:h-16 flex items-center  w-screen md:w-auto"
                to={nav.link}
                spy={true}
                smooth={true}
                offset={-62}
                duration={1000}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
