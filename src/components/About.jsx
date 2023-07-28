import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-900'>
              About
            </p>
          </div>
          
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>I'm a software developer</p>
            </div>
            <div>
              <p> I thrive in building robust and scalable applications. I enjoy collaborating with teams, brainstorming ideas, and turning them into reality. My constant drive for learning and adapting to new technologies empowers me to stay ahead in the ever-evolving world of software development.
                 Solving complex challenges and creating user-friendly experiences is what motivates me to excel in my craft as a software developer.
                I enjoy creating web applications using technologies i've learned through schooling at WGU, work experience, and overall best practices.
              I specialize in creating software apps
              for clients ranging from individuals and small-businesses all the
              way to enterprise corporations.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;