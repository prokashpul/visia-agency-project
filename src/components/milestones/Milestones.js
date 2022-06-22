import React from "react";
import TitleHeader from "../../hooks/TitleHeader";

const Milestones = () => {
  return (
    <div className="bg-black" id="milestones">
      <TitleHeader name="Milestones"></TitleHeader>
      <div className="  grid md:grid-cols-2  gap-10 justify-center items-center md:py-20 py-10 w-[90%] mx-auto lg:w-[1080px]">
        <div className="flex justify-start md:flex-row flex-col items-start gap-0 md:gap-5 text-white">
          <svg className=" bg-black" height="80" width="200">
            <text
              fill="none"
              stroke="#fff"
              fontSize="45"
              fontWeight="bold"
              x="50"
              y="50"
              textAnchor="middle"
            >
              125
            </text>
          </svg>
          <div>
            <h2 className="font-bold text-4xl mb-5">
              Terabytes of files uploaded
            </h2>
            <p className="text-xl ">
              Nulla ac laoreet est, a mollis nibh. Aenean eget auctor velit quis
              pharetra.
            </p>
          </div>
        </div>
        <div className="flex justify-start md:flex-row flex-col items-start gap-0 md:gap-5 text-white">
          <svg className=" bg-black" height="80" width="200">
            <text
              fill="none"
              stroke="#fff"
              fontSize="45"
              fontWeight="bold"
              x="50"
              y="50"
              textAnchor="middle"
            >
              101
            </text>
          </svg>
          <div>
            <h2 className="font-bold text-4xl mb-5">
              Cups of coffee drinked per week
            </h2>
            <p className="text-xl ">
              Nulla ac laoreet est, a mollis nibh. Aenean eget auctor velit quis
              pharetra.
            </p>
          </div>
        </div>
        <div className="flex justify-start md:flex-row flex-col items-start gap-0 md:gap-5 text-white">
          <svg className=" bg-black" height="80" width="200">
            <text
              fill="none"
              stroke="#fff"
              fontSize="45"
              fontWeight="bold"
              x="50"
              y="50"
              textAnchor="middle"
            >
              25k
            </text>
          </svg>
          <div>
            <h2 className="font-bold text-4xl mb-5">Lines of CSS code wrote</h2>
            <p className="text-xl ">
              Nulla ac laoreet est, a mollis nibh. Aenean eget auctor velit quis
              pharetra.
            </p>
          </div>
        </div>
        <div className="flex justify-start md:flex-row flex-col items-start gap-0 md:gap-5 text-white">
          <svg className=" bg-black" height="80" width="200">
            <text
              fill="none"
              stroke="#fff"
              fontSize="45"
              fontWeight="bold"
              x="56"
              y="50"
              textAnchor="middle"
            >
              100+
            </text>
          </svg>
          <div>
            <h2 className="font-bold text-4xl mb-5">
              Happy clients served this year
            </h2>
            <p className="text-xl ">
              Nulla ac laoreet est, a mollis nibh. Aenean eget auctor velit quis
              pharetra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
