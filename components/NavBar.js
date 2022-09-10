import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button';

const NavBar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "BLOG'S", link: "/blogs" },
    { name: "CONTACT", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-10">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center">
            <span className='text-3xl text-indigo-600 mr-1 pt-2'>
              <ion-icon name="logo-ionic"></ion-icon>
            </span>
            Next WP API
          </div>

          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
            {
              Links.map((link) => (
                <li key={link.name} className='md:ml-8 md:my-0 my-7'>
                  <Link href={link.link}>
                    
                      {link.name}
                    
                  </Link>
                </li>
              ))
            }
            <Button>
              Get Started
            </Button>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar