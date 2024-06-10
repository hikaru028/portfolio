import React from 'react'
import { Socials } from '@/components'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='py-20'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          {/* Social medias */}
          <Socials 
            containerStyles='flex gap-x-6 mx-auto xl:mx-0' 
            iconStyles='text-[20px] text-primary hover:text-primary/70 transition-all'
          />

          {/* Copyright */}
          <div className='text-muted-foreground mt-10'>
            Copyright &copy; Hikaru Suzuki &nbsp;&nbsp;|&nbsp;&nbsp; All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer