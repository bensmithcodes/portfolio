import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import ecompic from '../assets/ecommerce-pic.png';
import movpic from '../assets/movie.png';
import moneypic from '../assets/money.png';
import blogpic from '../assets/blog.png';
import chatpic from '../assets/chat-pic.png';
import scpic from '../assets/scupic.png';
import javapic from '../assets/javapic.png';


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-900'>
            Work
          </p>
          <p className='py-6'> My  Projects</p>
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
                Full-Stack Med Store
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
                React Front End
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
            style={{ backgroundImage: `url(${scpic})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Web
              </span>
              <div className='pt-8 text-center'>
                  
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  <a target="_blank" href="https://github.com/bensmithcodes/SecureU">Code</a>



                  </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${javapic})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Java  crud real-time system scheduler
              </span>
              <div className='pt-8 text-center'>
               
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  <a target="_blank" href="https://github.com/bensmithcodes/studentSchedule">Code</a> 
                  </button>
                
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
                Node.Js Backend Server chat
              </span>
              <div className='pt-8 text-center'>
               
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  <a target="_blank" href="https://github.com/bensmithcodes/livechat-app">Code</a>
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