import React from "react";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiGithubLine,
  RiEarthFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col justify-center items-center text-white py-10">
      <div>
        <ul className="flex justify-center items-center gap-2  h-20 w-full lg:w-72 ">
          <li
            className="hover:text-gray-200
  text-green-500
 duration-500 font-bold text-3xl"
          >
            <a href="/">
              <RiFacebookFill />
            </a>
          </li>
          <li
            className="hover:text-gray-200
  text-green-500
 duration-500 font-bold text-3xl"
          >
            <a href="/">
              <RiTwitterFill />
            </a>
          </li>
          <li
            className="hover:text-gray-200
  text-green-500
 duration-500 font-bold text-3xl"
          >
            <a href="/">
              <RiLinkedinBoxFill />
            </a>
          </li>
          <li
            className="hover:text-gray-200
  text-green-500
 duration-500 font-bold text-3xl"
          >
            <a href="/">
              <RiGithubLine />
            </a>
          </li>
          <li
            className="hover:text-gray-200
  text-green-500
 duration-500 font-bold text-3xl"
          >
            <a href="/">
              <RiEarthFill />
            </a>
          </li>
        </ul>
      </div>
      <div className="border-2 border-green-500 h-9 mb-5"></div>
      <p>
        © Copyright by <span className="text-green-500"> virtual Agency</span>{" "}
      </p>
    </footer>
  );
};

export default Footer;
