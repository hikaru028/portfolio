'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'
import { ProjectCard, ProjectData } from '@/components'
import { IoIosArrowForward } from "react-icons/io";

const Projects:FC = () => {
  return (
    <section className='relative mb-12 xl:mb-48 mt-20 xl:mt-0'>
        <div className='container mx-auto'>
            <div className='max-w-[300px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items=center xl:items-start'>
                <h2 className='section-title text-center mx-auto'>
                    Projects I worked on
                </h2>
                <div className='w-[80px] h-1 bg-primary rounded-full mt-4 mx-auto'></div>
                <p className='subtitle mt-4 mb-20 xl:mb-6'>
                    These are the projects that I worked on both academically and professionally.  
                </p>
                <Link href='/projects'>
                    <Button className='h-14 shadow-lg hover:shadow-none'>See all projects</Button> 
                </Link>
            </div>

            <div className='w-full xl:max-w-[1000px] xl:absolute xl:-right-12 top-0'>
                <Swiper 
                    className='h-[600px] xl:h-[550px]' 
                    slidesPerView={1} 
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        }
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                >
                    {ProjectData.slice(0, 3).map((project, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        );
                    })}
                    <SwiperSlide className=''>
                        <div className='w-full h-full flex justify-start items-center'>
                            <Link href='/projects' className='flex justify-between items-center group'>
                                <p className=''>See more... </p> 
                                <IoIosArrowForward className='ml-1 transition-all group-hover:ml-2'/>
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    </section>
  );
};

export default Projects