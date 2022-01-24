import Head from 'next/head'
import Document from "./documemt"

export default function Home() {
  return (
    <div>
    <Document />

      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center w-10/12">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src='./linkedin.svg'/>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center border-r-2">
      <span className='mr-10 hover:text-gray-900 cursor-pointer'>
      <img src='./discover.svg' className='mx-auto'/>
      <a className="hover:text-gray-900 text-center">Discover</a>
      </span>
      <span className='mr-10 hover:text-gray-900 cursor-pointer'>
      <img src='./people.svg' className='mx-auto'/>
      <a className="hover:text-gray-900 text-center">people</a>
      </span>
      <span className='mr-10 hover:text-gray-900 cursor-pointer'>
      <img src='./learning.svg' className='mx-auto'/>
      <a className="hover:text-gray-900 text-center">learning</a>
      </span>
      <span className='mr-10 hover:text-gray-900 cursor-pointer'>
      <img src='./jobs.svg' className='mx-auto scale-100 mb-1'/>
      <a className="hover:text-gray-900 text-center">Jobs</a>
      </span>
    </nav>
    <div className='inline-flex mt-4 lg:mt-0'>
    <button className="inline-flex items-center border-0 py-2 px-4 focus:outline-none font-medium hover:bg-gray-200 rounded text-base md:mt-0 transition-all mr-3">Join now</button>
    <button className="inline-flex outline outline-2 outline-linkedin-blue text-linkedin-blue font-medium items-center py-1 md:py-2 px-5 rounded-3xl transition-all hover:bg-blue-100">Sign in</button>
    </div>
  </div>
</header>

<div className='grid grid-cols-1 lg:grid-cols-2'>
  <div className='px-[2vw] py-[2vh] md:py-[10vh] md:px-[8vw]'>
    <h1 className='text-5xl font-thin mb-10 text-brown leading-snug'>Welcome to your<br/> professional community</h1>
    <div>
      <div className='inline-flex w-[408px] py-4 px-6 outline-1 rounded-xl justify-between mb-5 hover:shadow-lg'>
        <h1 className='text-lg'>Get Started</h1>
        <img src='./sidearrow.svg'/>
      </div>

      <div className='inline-flex w-[408px] py-4 px-6 outline-1 rounded-xl justify-between mb-5 hover:shadow-lg'>
        <h1 className='text-lg'>Find a person you know</h1>
        <img src='./sidearrow.svg'/>
      </div>

      <div className='inline-flex w-[408px] py-4 px-6 outline-1 rounded-xl justify-between mb-5 hover:shadow-lg'>
        <h1 className='text-lg'>Learn a new skill</h1>
        <img src='./sidearrow.svg'/>
      </div>
    </div>
  </div>

  <img src='./landing.svg' className='scale-90 m-auto'/>
</div>

      
    </div>
  )
}
