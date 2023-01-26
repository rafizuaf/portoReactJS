import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/87335000-5454-41e4-bda8-9052874379dc" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#E6AF2E] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - mukhtar.r.f@gmail.com</p>
            </div>
            <input className='bg-gray-300 p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-gray-300' type="email" placeholder='Email' name='email' />
            <textarea className='bg-gray-300 p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#E6AF2E] hover:border-[#E6AF2E] hover:text-[#0a192f] duration-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact