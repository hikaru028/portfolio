'use client';

import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

const ThemeToggler: FC = () => {
    const { theme, setTheme } = useTheme();
  return (
    <>
        <Button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
          className='w-[65px] h-10 rounded-full'
        >
          <div className='w-[1.9rem] h-[1.9rem] flex justify-center items-center bg-background rounded-full transition-all -translate-x-5 dark:translate-x-5'>
            <SunIcon  className='w-[1.4rem] h-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:translate-x-7'/>
            <MoonIcon color='#fafaf9' className='absolute w-[1.4rem] h-[1.4rem] rotate-90 scale-0 transition-all -translate-x-7 dark:rotate-0 dark:scale-100 dark:translate-x-0'/>
          </div>
        </Button>
    </>
  )
}

export default ThemeToggler