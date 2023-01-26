import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-300'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#E6AF2E]'>
          Mukhtar Rafi Fauzi,
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-300'>
          a Full Stack Developer.
        </h2>
        <p className='text-gray-300 py-4 max-w-[700px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi enim eos nesciunt accusamus vero dolore, excepturi expedita est quia repellendus aspernatur aperiam ducimus cum assumenda deserunt, in dolorem fuga sequi.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E6AF2E] hover:border-[#E6AF2E] hover:text-[#0a192f] duration-300'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
