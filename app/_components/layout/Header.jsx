import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='py-4'>
      <div className="max-w-7xl mx-auto px-2">
        <p className='text-center'>Welcome to Nextjs App</p>
        <ul className="flex justify-center gap-x-4">
          <li>
            <Link href="/" className='fs text-sky-700'>Home</Link>
          </li>
          <li>
            <Link href="/layout" className='fs text-sky-700'>Layout</Link>
          </li>
          <li>
            <Link href="/about" className='fs text-sky-700'>About</Link>
          </li>
          <li>
            <Link href="/contact" className='fs text-sky-700'>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;