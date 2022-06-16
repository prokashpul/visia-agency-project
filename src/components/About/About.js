import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="flex ">
        <div className="bg-green-500 w-40 md:w-60 h-24 flex justify-center items-center">
          <h2 className="font-semibold text-xl text-white uppercase">About</h2>
        </div>
        <div className="w-0 h-0 border-b-green-500 border-b-[96px] border-r-transparent border-r-[96px] border-l-transparent border-l-[96px] rotate-180 -ml-24 -z-5"></div>
      </div>
    </div>
  );
};

export default About;
