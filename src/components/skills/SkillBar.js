import React from "react";

const SkillBar = ({ skill }) => {
  const { width, name } = skill || {};
  return (
    <>
      <div className="flex items-center gap-5">
        <div className="text-4xl mt-4 font-bold text-gray-400">
          {skill.width}%
        </div>
        <div className="w-full">
          <div className="font-bold text-2xl mb-3">{skill.name}</div>
          <div className="w-full bg-gray-200 rounded-full mb-3 ">
            <div
              className="bg-green-500 text-xs h-5 duration-700  font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
              style={{ width: `${skill.width}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillBar;
