import React from "react";
import TitleHeader from "../../hooks/TitleHeader";

const Services = () => {
  return (
    <div className="bg-black text-white" id="services">
      <TitleHeader name="services"></TitleHeader>
      <div className="flex flex-col md:flex-row md:gap-8 gap-3 justify-center items-center md:py-20 py-5 w-[90%] mx-auto lg:w-[1080px]">
        <div className="p-5 ">
          <svg className="-z-50" height="150" width="200">
            <text
              fill="none"
              stroke="#fff"
              fontSize="250"
              fontWeight="bold"
              x="100"
              y="200"
              textAnchor="middle"
            >
              1
            </text>
          </svg>
          <div className="bg-black  z-20">
            <h2 className="text-5xl font-bold my-3">Preciese</h2>
            <p>
              Curabitur cursus mattis ligula a maximus pellentesque in purus
              malesuada pharetra eros.
            </p>
            <div className="relative">
              <button className="border-2 hover:border-green-500 hover:text-green-500 group rounded-full h-10 duration-500 w-32 hover:w-40 my-7">
                More
              </button>
            </div>
          </div>
        </div>
        <div className="p-5 ">
          <svg className="-z-50" height="150" width="200">
            <text
              fill="none"
              stroke="#fff"
              fontSize="250"
              fontWeight="bold"
              x="100"
              y="200"
              textAnchor="middle"
            >
              2
            </text>
          </svg>
          <div className="bg-black  z-20">
            <h2 className="text-5xl font-bold my-3">Support</h2>
            <p>
              Curabitur cursus mattis ligula a maximus pellentesque in purus
              malesuada pharetra eros.
            </p>
            <div className="relative">
              <button className="border-2 hover:border-green-500 hover:text-green-500 group rounded-full h-10 duration-500 w-32 hover:w-40 my-7">
                More
              </button>
            </div>
          </div>
        </div>

        <div className="p-5 ">
          <svg className="-z-50" height="150" width="200">
            <text
              fill="none"
              stroke="#fff"
              fontSize="250"
              fontWeight="bold"
              x="100"
              y="200"
              textAnchor="middle"
            >
              3
            </text>
          </svg>
          <div className="bg-black  z-20">
            <h2 className="text-5xl font-bold my-3">Responsive</h2>
            <p>
              Curabitur cursus mattis ligula a maximus pellentesque in purus
              malesuada pharetra eros.
            </p>
            <div className="relative">
              <button className="border-2 hover:border-green-500 hover:text-green-500 group rounded-full h-10 duration-500 w-32 hover:w-40 my-7">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
