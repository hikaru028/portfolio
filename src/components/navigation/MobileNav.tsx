'use client'

import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Nav, Logo, Socials, ThemeToggler } from '@/components'
import { AlignJustify } from 'lucide-react'

type Props = {}

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='text-2xl'
              underlineStyles='' 
            />
            <ThemeToggler />  
          </div>
          <Socials
            containerStyles='flex gap-x-4'
            iconStyles='text-2xl' 
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav