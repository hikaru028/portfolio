'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Download, Send } from 'lucide-react'
import { DevImg, Socials } from '@/components'
import { RiArrowDownSLine } from 'react-icons/ri'

const Hero = () => {
    const { theme, setTheme } = useTheme();

  return (
    <section className='py-12 xl:py-24 w-full h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
        <div className='container mx-auto'>
            <div className='flex flex-col justify-between gap-x-8'>
                {/* Text */}
                <div className='flex flex-col justify-center max-w-[600px] mx-auto xl:mx-0 text-center xl:text-left'>
                    <div className='text-sm font-semibold uppercase mb-4 text-primary tracking-[4px]'>Full-stack Developer</div>
                    <h2 className='h2'>Hi, my name is</h2>
                    <h1 className='h1'>Hikaru Suzuki</h1>
                    <p className='subtitle max-w-[490px] mx-auto mt-2 xl:mx-0'>Love to create a thing I love</p>
                </div>

                {/* Buttons */}
                <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                    <Link href='/contact'>
                        <Button className='gap-x-2 w-[166px] shadow-lg hover:shadow-none'>
                            Get in touch <Send size={18} />
                        </Button>
                    </Link>
                    <a href='/pdf/CV_Hikaru Suzuki.pdf' download>
                        <Button variant='secondary' className='gap-x-2 w-[166px] shadow-lg hover:shadow-none'>
                            Download CV <Download size={18} />
                        </Button>
                    </a>
                </div>

                {/* Socials */}
                <Socials 
                    containerStyles='flex gap-x-6 mx-auto xl:mx-0' 
                    iconStyles='text-foreground text-[22px] hover:text-primary transition-all'
                />

                {/* Image */}
                <div className='hidden xl:flex relative'>
                    <DevImg
                        containerStyles='w-[510px] h-[462px] bg-no-repeat bg-bottom absolute top-[-400px] right-12 z-0'
                        imgSrc={`${theme === 'dark' ? '/svg/hero-blob-dark.svg' : '/svg/hero-blob-light.svg'}`}
                    />
                </div>
            </div>


            {/* Icons */}
            <div className='md:flex absolute left-2/4 bottom-44  xl:bottom-12 animate-bounce'>
                <RiArrowDownSLine className='text-3xl text-primary'/>
            </div>
        </div>
    </section>
  )
}

export default Hero 