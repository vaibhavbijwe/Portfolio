"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const links = [
    { URL: "/", title: "Home"},
    { URL: "/about", title: "About"},
    { URL: "/portfolio", title: "Portfolio"},
    { URL: "/contact", title: "Contact"},
];

function Navbar() {
const [open,setOpen] = useState(false)

  return (
    <div className='h h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        <div className='hidden md:flex gap-4'>
            {links.map(link =>(
                <Link href={link.URL} key={link.title}>{link.title}</Link>
            ))}
        </div>
      {/* LOGO */}
      <div className='md:hidden'>
        <Link href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center'>
        <span className='text-white mr-1'>lama</span>
        <span className= 'w-12 h-8 rounded bg-white flex items-center'>.dev</span>
        </Link>
      </div>
      {/* Responsive */}
      <div className='md:hidden'>
        {/* Menu button */}
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative' 
        onClick= {(()=>setOpen(!open))}>
            <div className='w-10 h-1 bg-white rounded'></div>
            <div className='w-10 h-1 bg-white rounded'></div>
            <div className='w-10 h-1 bg-white rounded'></div>
        </button>
        {/* Menu list  */}
        {( open &&
        <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-xl'>
            {links.map(link =>(
                <Link href={link.URL} key={link.title}>{link.title}</Link>
            ))}

        </div>
        )}
      </div>
        
    </div>
  )
}

export default Navbar