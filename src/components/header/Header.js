import React, { useState } from "react";
import { MdMenu, MdClose, MdApi } from "react-icons/md";
import { Link } from "react-scroll";

const navBar = [
  { link: "services", name: "services", id: 2 },
  { link: "about", name: "about", id: 2 },
  { link: "testimonial", name: "testimonial", id: 2 },
  { link: "news", name: "news", id: 2 },
  { link: "portfolio", name: "portfolio", id: 3 },
  { link: "pricing", name: "pricing", id: 3 },
  { link: "teams", name: "teams", id: 3 },
  { link: "skills", name: "skills", id: 4 },
  { link: "milestones", name: "milestones", id: 4 },
  { link: "contact", name: "Contact", id: 5 },
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
      <nav className="flex fixed w-full top-0 justify-between h-16 items-center px-4 border-b-2  md:border-0 border-green-500 duration-500 z-50">
        <div className="font-extrabold text-4xl text-green-500">
          <MdApi />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="block font-bold duration-500  text-4xl md:hidden cursor-pointer text-green-500"
        >
          {!open ? <MdMenu /> : <MdClose />}
        </div>

        <ul
          onClick={() => setOpen(!open)}
          className={`flex  flex-col md:flex-row items-start md:items-center px-5 md:px-0  md:gap-5 absolute md:static bg-black overflow-y-scroll md:overflow-hidden md:bg-transparent top-16 md:top-auto w-3/4 md:w-auto duration-700  md:right-auto h-screen md:h-auto md:py-0 ${
            open ? "right-0" : "-right-96"
          } `}
        >
          <li className="duration-500 flex items-center py-3 md:py-auto">
            <Link
              activeClass="text-[#fff]"
              className="hover:text-white text-green-500  cursor-pointer uppercase"
              to="home"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              Home
            </Link>
          </li>
          {navBar?.map((nav) => (
            <li
              key={nav.id}
              className="duration-500 flex items-center py-3 md:py-auto"
            >
              <Link
                activeClass="text-[#fff]"
                className="hover:text-white text-green-500 cursor-pointer uppercase overflow-hidden"
                to={nav.link}
                spy={true}
                smooth={true}
                offset={-60}
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
