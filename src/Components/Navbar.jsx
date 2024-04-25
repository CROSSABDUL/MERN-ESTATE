import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className=' bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center mx-6 '>
        
        
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap ml-4'>
          <Link to='/' className='text-slate-500'>ABS</Link>
          <Link to='/' className='text-slate-700'>Next</Link>
        </h1>
        

       
        <form className='bg-slate-100 p-3 rounded-lg flex items-center mt-2 mb-3' >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          {/* <FaSearch className='tex w-4/6' /> */}
        </form>

        <ul className='flex gap-4'>
          <li className='hidden sm:inline text-slate-700 hover:underline'><Link to='/'>Home</Link></li>
          <li className='hidden sm:inline text-slate-700 hover:underline'><Link to='/about'>About</Link></li>
          <li className='hidden sm:inline text-slate-700 hover:underline'><Link to='/sign-in'>Signin</Link></li>
        </ul>
        </div>
    

    </div>
  )
}

export default Navbar