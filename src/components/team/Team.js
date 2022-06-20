import React from "react";
import TitleHeader from "../../hooks/TitleHeader";

import { useState } from "react";
import { useEffect } from "react";
import TeamInfo from "./TeamInfo";

const Team = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("teams.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <div className="bg-black" id="teams">
      <TitleHeader name="Teams"></TitleHeader>
      <div className="w-full md:w-[90%] mx-auto lg:w-[1080px] py-10">
        {teams?.map((team) => (
          <TeamInfo key={team._id} team={team}></TeamInfo>
        ))}
      </div>
    </div>
  );
};

export default Team;
