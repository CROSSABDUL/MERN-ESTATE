import React from 'react'

export default function header() {
  return (
    <header>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>ABS</span>
            <span className='text-slate-700'>Next</span>
        </h1>


        <form action="">
            <input type='text' placeholder='Search...' />
        </form>
    </header>
  )
}
