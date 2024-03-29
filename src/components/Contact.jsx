import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-8'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Please send message to : - bencoder28@gmail.com</p>
            </div>
            <input className='bg-[#FBFBFB] p-1' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#FBFBFB]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#FBFBFB] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Get in touch.</button>
        </form>
    </div>
  )
}

export default Contact