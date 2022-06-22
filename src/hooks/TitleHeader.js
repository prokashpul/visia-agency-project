import React from "react";

const TitleHeader = ({ name }) => {
  return (
    <>
      <div className="flex z-30">
        <div className="bg-green-500 w-40 lg:w-60 h-24 flex justify-center items-center">
          <h2 className="font-semibold text-xl text-white uppercase z-10">
            {name}
          </h2>
        </div>
        <div className="w-0 h-0 border-b-green-500 border-b-[96px] border-r-transparent border-r-[96px] border-l-transparent border-l-[96px] rotate-180 -ml-24"></div>
      </div>
    </>
  );
};

export default TitleHeader;
