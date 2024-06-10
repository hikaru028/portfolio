'use client'

import React, { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useScrollProgress, Sky } from '@/components'
import { useTheme } from 'next-themes'

// Variants
const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
};

const Template: FC<RootLayoutProps> = ({ children }) => {
    const {theme, setTheme} = useTheme();
    const completion = useScrollProgress();

  return (
    <>
        <motion.main
            variants={variants}
            initial='hidden'
            animate='enter'
            transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
        >
            {children}

            {theme === 'dark' && <Sky />}
        </motion.main>

        {/* completion bar */}
        <span
            style={{transform: `translateY(${completion - 100}%)`}} 
            className='fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700'
        ></span>

    </>
  )
}

export default Template

interface RootLayoutProps {
    children: ReactNode;
  }

