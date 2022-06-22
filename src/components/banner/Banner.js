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
      className="lg:h-[720px] h-[500px] overflow-hidden "
    >
      <div className="bg-[rgba(0,0,0,0.66)]  h-full w-full flex flex-col justify-center ">
        <div className=" w-[90%] mx-auto lg:w-[1080px]" data-aos="fade-right">
          <div className="font-extrabold lg:text-7xl flex flex-col lg:gap-5  text-5xl lg:w-[60%] lg:my-5 text-white leading-snug">
            <div> Technology & </div> Visual Agency
          </div>
          <Button title="Learn More"></Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
