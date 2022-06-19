import React from "react";
import Button from "../../hooks/Button";

const Banner = () => {
  return (
    <div
      id="home"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="md:h-screen h-[500px] overflow-hidden "
    >
      <div className="bg-[rgba(0,0,0,0.66)]  h-full w-full flex flex-col justify-center ">
        <div className=" w-[90%] mx-auto lg:w-[1080px]">
          <h2 className="font-black md:text-7xl  text-4xl md:w-[60%] my-10 text-white leading-snug">
            Technology & Visual Agency
          </h2>
          <Button title="Learn More"></Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
