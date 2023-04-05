import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#E6AF2E]">
              About Me
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
              As a full stack web developer with less than a year of experience,
              I bring a strong understanding of web development fundamentals and
              experience with key technologies such as HTML, CSS, Javascript,
              React.JS, Node.JS, Tailwind CSS, Express JS, Github, and MySQL. I
              specialize in quickly learning new skills and programming
              languages, implementing clean code principles, and creating
              responsive designs that optimize website performance. My strengths
              include problem-solving, website optimization, discipline,
              resilience, attention to small details, and analytical thinking. I
              am a dedicated and driven individual who is passionate about
              developing innovative solutions to complex problems and always
              strives to deliver high-quality work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
