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
      className="md:h-screen h-[85%] overflow-hidden "
    >
      <div className="bg-[rgba(0,0,0,0.66)]  h-full w-full flex flex-col justify-center p-14">
        <h2 className="font-black md:text-6xl  text-4xl md:w-1/2 my-10 text-white">
          Technology & Visual Agency
        </h2>
        <Button title="Learn More"></Button>
      </div>
    </div>
  );
};

export default Banner;
