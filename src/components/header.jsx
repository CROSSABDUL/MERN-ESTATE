import React from 'react';
import header from '../components/header'


const header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>ABS</span>
            <span className='text-slate-700'>Next</span>
        </h1>


        <form action="">
            <input type='text' placeholder='Search...' />
        </form>
        </div>
    </header>
  )
}

export default header;