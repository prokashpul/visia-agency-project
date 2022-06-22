import React from "react";
import Button from "../../hooks/Button";
import TitleHeader from "../../hooks/TitleHeader";
import SkillBar from "./SkillBar";

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
        <div className="flex flex-col gap-5 p-5" data-aos="fade-right">
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
        <div className=" " data-aos="fade-left">
          {skills?.map((skill) => (
            <SkillBar skill={skill} key={skill.id}></SkillBar>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
