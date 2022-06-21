import React from "react";
import Button from "../../hooks/Button";
import TitleHeader from "../../hooks/TitleHeader";

const skills = [
  { width: "85", name: "Web design", id: 1 },
  { width: "80", name: "Web Development", id: 2 },
  { width: "75", name: "Graphic Design", id: 3 },
  { width: "80", name: "Apps Development", id: 4 },
  { width: "75", name: "SEO", id: 5 },
  { width: "70", name: "Digital Marketing", id: 6 },
];

const Skills = () => {
  return (
    <div className="" id="skills">
      <TitleHeader name="Skills"></TitleHeader>
      <div className="grid md:grid-cols-2 gap-5 w-[90%] mx-auto lg:w-[1080px] my-10 ">
        <div className="flex flex-col gap-5 p-5">
          <small>OUR NUMBERS</small>
          <h2 className="text-3xl md:text-5xl font-bold">Check our Skills</h2>
          <p className="font-semibold text-xl text-gray-500">
            Code the energy hidden in matter citizens of distant epochs from
            which we spring drake equation perga inconspicuous motespatch clean
            designed code and energy matter.
          </p>
          <div className="">
            <Button title="Learn More"></Button>
          </div>
        </div>
        <div className=" ">
          {skills?.map((skill) => (
            <>
              <div>
                <div className="flex items-center gap-5">
                  <div className="text-4xl mt-4 font-bold text-gray-400">
                    {skill.width}%
                  </div>
                  <div className="w-full">
                    <div className="font-bold text-2xl mb-3">{skill.name}</div>
                    <div
                      key={skill.id}
                      class="w-full bg-gray-200 rounded-full mb-3 "
                    >
                      <div
                        class="bg-green-500 text-xs h-5 font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                        style={{ width: `${skill.width}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
