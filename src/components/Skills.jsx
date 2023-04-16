import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import MySql from '../assets/mysql.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import NextJS from '../assets/nextjs.png';
import NextAuth from '../assets/nextauth.png';
import Prisma from '../assets/prisma.png';

const Skills = () => {
  return (
    <div name='skills' className='pt-8 pb-4 w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className=' text-4xl font-bold inline border-b-4 border-[#E6AF2E] '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
              <div className='shadow-lg shadow-[#040c16] hover:shadow-[#E6AF2E] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto pt-4' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-lg shadow-[#040c16] hover:shadow-[#E6AF2E] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto pt-4' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-lg shadow-[#040c16] hover:shadow-[#E6AF2E] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto pt-4' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-lg shadow-[#040c16] hover:shadow-[#E6AF2E] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto pt-4' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>React.JS</p>
              </div>
              <div className='shadow-lg shadow-[#040c16] hover:shadow-[#E6AF2E] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto pt-4' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GitHub</p>
              </div>
              <div className='shadow-lg shadow-[#040c16] hover:shadow-[#E6AF2E] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto pt-4' src={Node} alt="HTML icon" />
                  <p className='my-4'>Node.JS</p>
              </div>
              <div className='shadow-lg shadow-[#040c16] hover:shadow-[#E6AF2E] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MySql} alt="HTML icon" />
                  <p className='my-4'>MySQL</p>
              </div>
              <div className='shadow-lg shadow-[#040c16] hover:shadow-[#E6AF2E] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>Tailwind CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:shadow-[#E6AF2E] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MongoDB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:shadow-[#E6AF2E] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={NextJS} alt="HTML icon" />
                  <p className='my-4'>Next.JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:shadow-[#E6AF2E] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={NextAuth} alt="HTML icon" />
                  <p className='my-4'>NextAuth</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:shadow-[#E6AF2E] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Prisma} alt="HTML icon" />
                  <p className='my-4'>Prisma</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
