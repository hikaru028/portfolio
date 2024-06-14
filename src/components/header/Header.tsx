'use client'

import React, { FC, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
// components
import { Logo, ThemeToggler, Nav, MobileNav } from '@/components'

const Header: FC = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Define the scroll event listener function
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Return a function to clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render
  return (
    <header className={`${header ? 'py-2 bg-white shadow-lg dark:bg-[#464F66]' : 'py-4 bg-[#f2f2f2] dark:bg-background'} sticky top-0 z-50 transition-all`}>
      <div className='container mx-auto'>
        <div className='w-full h-[80px] flex justify-between items-center'>
          {/* Logo */}
          <Logo />

          {/* Navigation */}
          <div className='flex items-center gap-x-6'>
            {/* Desktop Navigation */}
            <Nav 
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all cursor-pointer'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full rounded-full'
            />
            <div className='hidden xl:flex cursor-pointer'>
              <ThemeToggler />
            </div>

            {/* Mobile Navigation */}
            <div className='xl:hidden cursor-pointer'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

type Props = {
    containerStyles: string,
    linkStyles: string,
    underlineStyles: string,
    scrollYPros: any,
}