import React from "react";
import TitleHeader from "../../hooks/TitleHeader";
import { FiCheck, FiX } from "react-icons/fi";
import Button from "../../hooks/Button";

const Pricing = () => {
  return (
    <div className="" id="pricing">
      <TitleHeader name="Pricing"></TitleHeader>
      <div className="w-[90%] mx-auto lg:w-[1080px] flex md:flex-row flex-col gap-10 justify-center items-center py-20">
        <div
          data-aos="zoom-in"
          className="pl-10 md:px-10 py-5 border-2 w-full border-gray-700"
        >
          <p>BASIC</p>
          <h2 className="font-bold text-6xl text-green-500">$25</h2>
          <small className="text-gray-400">PER MONTH</small>

          <ul className="flex flex-col gap-4 mt-5">
            <li className="flex items-center gap-5 font-bold">
              <FiCheck className="text-green-500 font-bold text-xl" /> Unlimited
              Support
            </li>
            <li className="flex items-center gap-5 font-bold">
              <FiCheck className="text-green-500 font-bold text-xl" /> 5GB
              Server Space
            </li>
            <li className="flex items-center gap-5 font-bold">
              <FiCheck className="text-green-500 font-bold text-xl" /> 2 Users
              per Project
            </li>
            <li className="flex items-center gap-5 font-bold">
              <FiX className=" font-bold text-xl" />
              Email Integration
            </li>
            <li className="flex items-center gap-5 font-bold">
              <FiX className=" font-bold text-xl" />
              Unlimited Download
            </li>
          </ul>
          <div className="mt-5">
            <Button title="CHOOSE PLAN"></Button>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="pl-10 md:px-10 py-5 border-2 w-full border-gray-700"
        >
          <p>ADVANCED</p>
          <h2 className="font-bold text-6xl text-green-500">$50</h2>
          <small className="text-gray-400">PER MONTH</small>

          <ul className="flex flex-col gap-4 mt-5">
            <li className="flex items-center gap-5 font-bold">
              <FiCheck className="text-green-500 font-bold text-xl" /> Unlimited
              Support
            </li>
            <li className="flex items-center gap-5 font-bold">
              <FiCheck className="text-green-500 font-bold text-xl" /> 15GB
              Server Space
            </li>
            <li className="flex items-center gap-5 font-bold">
              <FiCheck className="text-green-500 font-bold text-xl" />
              10 Users per Project
            </li>
            <li className="flex items-center gap-5 font-bold">
              <FiCheck className="text-green-500 font-bold text-xl" />
              Email Integration
            </li>
            <li className="flex items-center gap-5 font-bold">
              <FiCheck className="text-green-500 font-bold text-xl" />
              Unlimited Download
            </li>
          </ul>
          <div className="mt-5">
            <Button title="CHOOSE PLAN"></Button>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="pl-10 md:px-10 py-5 border-2 w-full border-gray-700"
        >
          <p>EXPERT</p>
          <h2 className="font-bold text-6xl text-green-500">$100</h2>
          <small className="text-gray-400">PER MONTH</small>

          <ul className="flex flex-col gap-4 mt-5">
            <li className="flex items-center gap-5 font-bold">
              <FiCheck className="text-green-500 font-bold text-xl" /> Unlimited
              Support
            </li>
            <li className="flex items-center gap-5 font-bold">
              <FiCheck className="text-green-500 font-bold text-xl" /> 105GB
              Server Space
            </li>
            <li className="flex items-center gap-5 font-bold">
              <FiCheck className="text-green-500 font-bold text-xl" /> 20+ Users
              per Project
            </li>
            <li className="flex items-center gap-5 font-bold">
              <FiCheck className="text-green-500 font-bold text-xl" />
              Email Integration
            </li>
            <li className="flex items-center gap-5 font-bold">
              <FiCheck className="text-green-500 font-bold text-xl" />
              Unlimited Download
            </li>
          </ul>
          <div className="mt-5">
            <Button title="CHOOSE PLAN"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
