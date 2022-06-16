import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/syYwRh0/visha-agency.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className=" h-screen "
    >
      <div className="bg-[rgba(0,0,0,0.37)]  h-full w-full flex flex-col justify-center p-14">
        <h2 className="font-black md:text-6xl  text-4xl md:w-1/2 my-10 text-white">
          Technology & Visual Agency
        </h2>
        <button className="bg-green-500 w-48 py-3 px-6 rounded-full text-white font-semibold hover:bg-transparent border-2 border-transparent duration-500 hover:text-green-500 hover:border-green-500">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Banner;
