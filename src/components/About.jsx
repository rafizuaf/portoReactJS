import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#E6AF2E]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Mukhtar Rafi Fauzi, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
            I am a full stack web developer with less than a year of experience. Familiar with HTML, CSS, Javascript and its framework such as React JS and Node JS. Discipline, resilient, attention to small details and analytical thinking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
