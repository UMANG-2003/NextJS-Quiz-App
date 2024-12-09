import React from 'react'

function Navbar() {
  return <> 
    <nav className='w-full h-16 bg-gray-800 shadow-2xl shadow-black rounded-b-xl flex items-center px-4 justify-between'>
      <div className='md:hidden'><img width={25} src="/hamburger.png" alt="" /></div>
      <div>Quiz App</div>
      <div>Profile</div>
    </nav>
  </>
}

export default Navbar