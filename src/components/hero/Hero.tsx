'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Download, Send } from 'lucide-react'
import { DevImg, Socials } from '@/components'
import { RiArrowDownSLine } from 'react-icons/ri'
import { motion } from 'framer-motion'

// Initialise framer motion
const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity:1,
      y: 0,
      transition: {
        delay: 0.08 * index,
      },
    }),
  };

const Hero = () => {
    const { theme } = useTheme();

  return (
    <section className='py-12 xl:py-24 w-full h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
        <div className='container mx-auto'>
            <div className='flex flex-col justify-between gap-x-8'>
                {/* Text */}
                <div className='flex flex-col justify-center max-w-[600px] mx-auto xl:mx-0 text-center xl:text-left'>
                    <motion.div
                        variants={fadeInAnimationVariants}
                        initial='initial'
                        whileInView='animate'
                        viewport={{once: true}}
                        custom={0} 
                        className='text-sm font-semibold uppercase mb-4 text-primary tracking-[4px]'
                    >
                        Full-stack Developer
                    </motion.div>
                    <motion.h2
                        variants={fadeInAnimationVariants}
                        initial='initial'
                        whileInView='animate'
                        viewport={{once: true}}
                        custom={1} 
                        className='h2'
                    >
                        Hi, my name is
                    </motion.h2>
                    <motion.h1
                        variants={fadeInAnimationVariants}
                        initial='initial'
                        whileInView='animate'
                        viewport={{once: true}}
                        custom={2} 
                        className='h1'
                    >
                        Hikaru Suzuki
                    </motion.h1>
                    <motion.p
                        variants={fadeInAnimationVariants}
                        initial='initial'
                        whileInView='animate'
                        viewport={{once: true}}
                        custom={2} 
                        className='subtitle max-w-[490px] mx-auto mt-2 xl:mx-0'
                    >
                        Love to create a thing I love
                    </motion.p>
                </div>

                {/* Buttons */}
                <motion.div 
                    variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{once: true}}
                    custom={3} 
                    className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'
                >
                    <Link href='/contact'>
                        <Button className='gap-x-2 w-[166px] shadow-lg hover:shadow-none'>
                            Get in touch <Send size={18} />
                        </Button>
                    </Link>
                    <a href='https://drive.google.com/file/d/1D9Gej225L5fIxUwmcLZj5nkrZU3iSZ71/view?usp=sharing' target="_blank">
                        <Button variant='secondary' className='gap-x-2 w-[166px] shadow-lg hover:shadow-none'>
                            Download CV <Download size={18} />
                        </Button>
                    </a>
                </motion.div>

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