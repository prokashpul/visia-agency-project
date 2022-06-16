import React, { useState } from "react";
import { MdMenu, MdClose, MdApi } from "react-icons/md";
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
      <nav className="flex fixed w-full top-0 justify-between h-16 items-center px-4  border-b-2 border-green-500 duration-500">
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
          className={`flex text-green-500 flex-col md:flex-row items-start md:items-center px-5 md:px-0  gap-5 absolute md:static bg-slate-100 md:bg-transparent top-16 md:top-auto w-3/4 md:w-auto duration-700  md:right-auto h-screen md:h-auto py-2 md:py-0 ${
            open ? "right-0" : "-right-96"
          } `}
        >
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
