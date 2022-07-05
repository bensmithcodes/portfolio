import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import ecompic from '../assets/ecommerce-pic.png';
import movpic from '../assets/movie.png';
import moneypic from '../assets/money.png';
import blogpic from '../assets/blog.png';
import chatpic from '../assets/chat-pic.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-600'>
            Work
          </p>
          <p className='py-6'> My recent projects</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ecompic})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Med Store
              </span>
              <div className='pt-8 text-center'>
              
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    
                    <a target="_blank" href="https://ubiquitous-swan-cc5417.netlify.app/">Demo</a>
                  </button>
              
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  <a target="_blank" href="https://github.com/bensmithcodes/eCommerce-fullstack">Code</a>
                    
                  </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${moneypic})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Landing Page
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  <a target="_blank" href="https://main--timely-faun-335a5a.netlify.app/">Demo</a>
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  <a target="_blank" href=" https://github.com/bensmithcodes/business-landingpage">Code</a>

                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${blogpic})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Blog Application
              </span>
              <div className='pt-8 text-center'>
                  
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  <a target="_blank" href="https://github.com/bensmithcodes/fullstack-blog-project">Code</a>



                  </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${movpic})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Api Movie Search
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
               
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${chatpic})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Realtime Chat App
              </span>
              <div className='pt-8 text-center'>
               
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  <a target="_blank" href="https://github.com/bensmithcodes/fullstack-blog-project">Code</a>
                  </button>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Work;