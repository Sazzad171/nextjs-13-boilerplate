import React from 'react';

const Footer = () => {
  return (
    <footer className='py-4'>
      <div className="max-w-7xl mx-auto px-2">
        <p className='text-center'>Copyright &copy; {new Date().getFullYear()} Nextjs Boilerplate</p>
      </div>
    </footer>
  )
}

export default Footer;