'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const logo = '../svg/logo.svg'
const logoDark = '../svg/logo-dark.svg'

const Logo:FC  = () => {
  const { theme } = useTheme();
  
  return (
    <Link href='/'>
      {theme === 'dark' ?
        <Image src={logoDark} width={55} height={60} style={{ height: 'auto' }}  alt='logo' priority />
      :
        <Image src={logo} width={55} height={60} style={{ height: 'auto' }} alt='logo' priority />
      }
    </Link>
  )
}

export default Logo