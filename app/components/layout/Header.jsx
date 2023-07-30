import React from 'react';

const Header = () => {
  return (
    <header className='py-4'>
      <div className="max-w-7xl mx-auto px-2">
        <p className='text-center'>Welcome to Nextjs App</p>
        <ul className="flex justify-center gap-x-4">
          <li>
            <a href="/" className='fs text-sky-700'>Home</a>
          </li>
          <li>
            <a href="/layout" className='fs text-sky-700'>Layout</a>
          </li>
          <li>
            <a href="/about" className='fs text-sky-700'>About</a>
          </li>
          <li>
            <a href="/contact" className='fs text-sky-700'>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;