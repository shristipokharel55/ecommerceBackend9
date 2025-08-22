import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
        <div className="flex items-center px-4">
          <button className="text-gray-500 focus:outline-none focus:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search" />
        </div>
        <div className="flex items-center pr-4">
          <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
            
          <Link to='/admin/createproduct' className="text-xs font-bold me-2 px-2.5 shadow py-2  bg-green-200 text-green-600 font-semibold rounded-lg shadow">Create</Link>

          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar