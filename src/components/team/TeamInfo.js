import React from "react";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiGithubLine,
  RiEarthFill,
} from "react-icons/ri";

const TeamInfo = ({ team }) => {
  const { name, image, details, job, fb, tw, linkedIn, git, web } = team || {};
  return (
    <>
      <div className="grid md:grid-cols-2 py-10 relative">
        <div data-aos="fade-right">
          <img
            className="w-full md:h-[700px] h-500px]"
            src={image}
            alt={name}
          />
        </div>
        <div data-aos="fade-left">
          <div className="bg-white flex justify-center items-start flex-col md:-ml-20 w-full md:m-10 md:h-[80%] p-5 md:p-20">
            <small> {job}</small>
            <h2 className="font-bold text-5xl my-5">{name}</h2>
            <p className="text-xl text-gray-500">{details}</p>
          </div>
        </div>
        <div
          className=" md:left-[30%] md:absolute md:bottom-24"
          data-aos="fade-up"
        >
          <ul className="flex justify-around items-center gap-2 bg-green-500 h-20 w-full md:w-72 px-5">
            <li className="text-white hover:text-gray-200 duration-500 font-bold text-3xl">
              <a href={fb}>
                <RiFacebookFill />
              </a>
            </li>
            <li className="text-white hover:text-gray-200 duration-500 font-bold text-3xl">
              <a href={tw}>
                <RiTwitterFill />
              </a>
            </li>
            <li className="text-white hover:text-gray-200 duration-500 font-bold text-3xl">
              <a href={linkedIn}>
                <RiLinkedinBoxFill />
              </a>
            </li>
            <li className="text-white hover:text-gray-200 duration-500 font-bold text-3xl">
              <a href={git}>
                <RiGithubLine />
              </a>
            </li>
            <li className="text-white hover:text-gray-200 duration-500 font-bold text-3xl">
              <a href={web}>
                <RiEarthFill />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TeamInfo;
