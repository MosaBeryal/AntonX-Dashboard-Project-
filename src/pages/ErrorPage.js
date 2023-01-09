import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
      
<div className=" w-full h-screen bg-[#f1eeee] flex items-center rounded ml-32 mt-28">
	<div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
   		<div className="max-w-md">
      		<div className="text-5xl font-dark font-bold">404</div>
            <p
              className="text-2xl md:text-3xl font-light leading-normal"
            >Sorry we couldn't find this page. </p>
          <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
          
          <Link to='/home' className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-[#008DB9] hover:bg-[#43a1d6]">back to homepage</Link>
    </div>         
      <div className="max-w-lg">
      
    </div>
    
  </div>
</div>
    </div>
  )
}

export default ErrorPage
