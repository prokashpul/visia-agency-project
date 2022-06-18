import React from "react";
import TitleHeader from "../../hooks/TitleHeader";

const Portfolio = () => {
  return (
    <div className="bg-black relative" id="portfolio">
      <div className="absolute top-0 left-0">
        <TitleHeader name="Portfolio"></TitleHeader>
      </div>

      <div className="md:flex text-white">
        <div className="w-full md:w-[25%]">
          <div
            className="h-[350px] md:h-[700px] group duration-700 cursor-pointer"
            style={{
              backgroundImage:
                "url(https://cdn.pixabay.com/photo/2016/09/22/11/55/kitchen-1687121_1280.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="h-[350px] md:h-[700px] duration-700 hidden group-hover:flex justify-center flex-col items-center text-white group-hover:bg-[#000000b0]">
              <div className=" text-center uppercase">
                <small className="">Interior</small>
                <h3 className="text-4xl font-bold">Living room</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <div
            className="h-[350px] md:h-[700px] group duration-700 cursor-pointer"
            style={{
              backgroundImage:
                "url(https://cdn.pixabay.com/photo/2016/08/09/10/14/psychology-1580252_1280.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="h-[350px] md:h-[700px] duration-700 hidden group-hover:flex justify-center flex-col items-center text-white group-hover:bg-[#000000b0]">
              <div className=" text-center uppercase">
                <small className="">Fashion</small>
                <h3 className="text-4xl font-bold">Modeling</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[25%] flex flex-col">
          <div
            className="h-[350px] group duration-700 cursor-pointer"
            style={{
              backgroundImage:
                "url(https://cdn.pixabay.com/photo/2019/12/25/04/14/fantasy-4717808_1280.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="h-[350px] duration-700 hidden group-hover:flex justify-center flex-col items-center text-white group-hover:bg-[#000000b0]">
              <div className=" text-center uppercase">
                <small className="">Creative</small>
                <h3 className="text-4xl font-bold">PSD Mockup</h3>
              </div>
            </div>
          </div>
          <div
            className="h-[350px] group duration-700 cursor-pointer"
            style={{
              backgroundImage:
                "url(https://cdn.pixabay.com/photo/2016/10/20/15/08/digitization-1755783_1280.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="h-[350px] duration-700 hidden group-hover:flex justify-center flex-col items-center text-white group-hover:bg-[#000000b0]">
              <div className=" text-center uppercase">
                <small className="">ARCHITECTURE</small>
                <h3 className="text-4xl font-bold">Pillars</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
