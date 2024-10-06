'use client'

import React from 'react'
import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Form } from '@/components'

type Props = {}

const Contact = (props: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <section>
      <div className='container mx-auto'>
          <div className='grid xl:grid-cols-2 pt-20 xl:h-[480px] mb-6 xl:mb-24'>
            {/* Text */}
            <div className='flex flex-col justify-center ml-10'>
              <div className='flex items-center gap-x-4 mb-4 w-full'>
                <span className='w-10 h-[2px] bg-primary'></span>
                <p className='tect-primay text-lg'>Say Hello 🙋‍♂️</p>
              </div>
              <h1 className='h1 max-w-md mb-8'>Let&apos;s Work Together.</h1>
              <p className='subtitle max-w-[400px]'>
                I would love to hear from you! Please fill out the form below or send an email to me.
              </p>
            </div>

            {/* Illustration */}
            <div className='hidden xl:flex'>
            <Image 
              src={`${theme === 'dark' ? '/svg/contact-dark.svg' : '/svg/contact-light.svg'}`} 
              alt="Contact image (pngaaa.com/detail/4605895#google_vignette)"
              width={550}
              height={257}
            />
            </div>
          </div>

          {/* Text/form */}
          <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
            <div className='flex flex-col gap-y-4 xl:gap-y-8 mb-12 xl:mb-24 text-base xl:text-lg ml-16'>
              {/* mail */}
              <div className='flex items-center gap-x-8'>
                <MailIcon size={18} className='text-primary'/>
                <a href='mailto:h.suzuki.028@gmail.com' className='hover:underline'>
                  <div>h.suzuki.028@gmail.com</div>
                </a>
              </div>
              {/* phone */}
              <div className='flex items-center gap-x-8'>
                <PhoneCall size={18} className='text-primary'/>
                <a href='tel:+642108463502' className='hover:underline'>
                  <div>+64 21 084 63502</div>
                </a>
              </div>
              {/* home */}
              <div className='flex items-center gap-x-8'>
                <HomeIcon size={18} className='text-primary'/>
                <div>Auckland, New Zealand </div>
              </div>
            </div>
            {/* Form */}
            <Form />
          </div>
      </div>
    </section>
  );
};

export default Contact
