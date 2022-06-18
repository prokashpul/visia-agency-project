import React from "react";
import Button from "../../hooks/Button";

const Banner = () => {
  return (
    <div
      id="home"
      style={{
        backgroundImage: "url(https://i.ibb.co/syYwRh0/visha-agency.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="md:h-screen h-[500px] overflow-hidden "
    >
      <div className="bg-[rgba(0,0,0,0.66)]  h-full w-full flex flex-col justify-center ">
        <div className=" w-[90%] mx-auto lg:w-[1080px]">
          <h2 className="font-black md:text-6xl  text-4xl md:w-1/2 my-10 text-white">
            Technology & Visual Agency
          </h2>
          <Button title="Learn More"></Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
