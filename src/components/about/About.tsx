'use client'

import React, { FC } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Tabs, TabsList, TabsTrigger, TabsContent} from '../ui/tabs'
import AboutImg from '../image/AboutImg'
import { personalData, educationData, workData, skillData } from './Data';

const About:FC = () => {
    const { theme } = useTheme();

    return (
        <section id='about' className='xl:h-[860px] pb-12 xl:pb-24 pt-20 xl:pt-40 px-20 mb-20'>
            <div className='container mx-auto'>
                <h2 className='section-title text-center mx-auto'>
                    Who am I ?
                </h2>
                <div className='w-[80px] h-1 bg-primary rounded-full mt-4 mb-8 xl:mb-16 mx-auto'></div>
            </div>
            <div className='w-full flex flex-col md:flex-row justify-between items-center xl:items-start'>
                {/* image */}
                <div className='flex items-center justify-center md:justify-start md:ml-[60px]'>
                    <AboutImg 
                        containerStyles='w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-no-repeat relative'
                        imgSrc={`${theme === 'dark' ? '/svg/about-blob-dark.svg' : '/svg/about-blob-light.svg'}`}
                    />
                </div>

                {/* Tabs */}
                <div className='flex-1 xl:ml-20'>
                    <Tabs defaultValue='personal'>
                        <TabsList className='w-auto h-[45px] grid-cols-4 md:max-w-[520px] md:border dark:border-none'>
                            <TabsTrigger className='w-[80px] xl:w-[130px]' value='personal'>Personal</TabsTrigger>
                            <TabsTrigger className='w-[80px] xl:w-[130px]' value='education'>Education</TabsTrigger>
                            <TabsTrigger className='w-[80px] xl:w-[130px]' value='work'>Work</TabsTrigger>
                            <TabsTrigger className='w-[80px] xl:w-[130px]' value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        <div className='text-lg mt-12 xl:mt-8'>

                            {/* Personal Information */}
                            <TabsContent value='personal'>
                                <div>
                                    <h3 className='h3 mb-4'>Unmatched Service Quality for Over 1 Years</h3>
                                    <p className='subtitle max-w-xl max-auto xl:mx-8'>
                                        I specialise in crafting intuitive website with cutting-edge technology, delivering dynamic and engaging user experiences.
                                    </p>
                                </div>
                                <div className='text-left ml-20 xl:grid xl:grid-cols-2 xl:gap-4 xl:mb-12'>
                                    {personalData.map((item, index) => {
                                        return (
                                            <div className='flex items-center mb-2 xl:mb-0 gap-x-4 mx-auto xl:mx-0' key={index}>
                                                <div className='text-primary'>{item.icon}</div>
                                                <div className='text-sm font-light'>{item.text}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </TabsContent>

                            {/* Education */}
                            <TabsContent value='education'>
                                <div>
                                    <h3 className='h3 mb-4'>My Academic History</h3>
                                    <p className='subtitle max-w-xl max-auto xl:mx-8'>
                                    </p>
                                </div>
                                <div className='gap-4 mb-12 ml-24 relative'>
                                    <div className='h-full w-[1px] bg-border bg-[#ededed] dark:bg-[#979DAE] absolute top-[-5px] left-[5px] z-0'></div>
                                    {educationData.map((item, index) => {
                                        const { university, degree, years} = item;
                                         return (
                                             <div className='flex flex-col gap-x-4 mx-auto xl:mx-0' key={index}>
                                                <div className='flex flex-row items-center mb-2'>
                                                    <div className='w-3 h-3  bg-primary rounded-full mr-4 z-10'></div>
                                                    <div className='text-primary font-semibold text-lg leading-none'>{university}</div>
                                                </div>
                                                <div className='flex flex-col ml-12 mb-6'>
                                                    <div className='text-sm'>{degree}</div>
                                                    <div className='text-muted-foreground text-sm font-light'>{years}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </TabsContent>

                            {/* Work Experiences */}
                            <TabsContent value='work'>
                                <div>
                                    <h3 className='h3 mb-4'>My Work Experiences</h3>
                                    <p className='subtitle max-w-xl max-auto xl:mx-8'>
                                    </p>
                                </div>
                                <div className='gap-4 mb-12 ml-24 relative'>
                                    <div className='h-full w-[1px] bg-border bg-[#ededed] dark:bg-[#979DAE] absolute top-[-5px] left-[5px] z-0'></div>
                                    {workData.map((item, index) => {
                                        const { company, role, title, years} = item;
                                         return (
                                             <div className='flex flex-col gap-x-4 mx-auto xl:mx-0' key={index}>
                                                <div className='flex flex-row items-center mb-2'>
                                                    <div className='w-3 h-3  bg-primary rounded-full mr-4 z-10'></div>
                                                    <div className='text-muted-foreground text-base font-light'>{years}</div>
                                                </div>
                                                <div className='flex flex-col ml-12 mb-6'>
                                                    <div className='text-primary font-medium text-lg leading-none mb-2'>{company}</div>
                                                    <div className='text-sm'>{role} ({title})</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </TabsContent>

                            {/* Skills */}
                            <TabsContent value='skills'>
                                <div>
                                    <h3 className='h3 mb-4'>Skills I Create Excellent Products</h3>
                                    <p className='subtitle max-w-xl max-auto xl:mx-8'>
                                        I have been developing more skills and expanding relevant knowledge.
                                    </p>
                                </div>
                                <div className='text-left xl:ml-20 xl:gap-4 xl:mb-12'>
                                    <h4 className='text-lg font-medium mb-2 text-left pb-[0.5px] border-b border-[#ededed] dark:border-[#979DAE]'>
                                        Skills
                                    </h4>
                                    {skillData.map((item, index) => {
                                        const isPrimaryText = index % 2 === 0;
                                        return (
                                            <div
                                                key={index}
                                                className={`w-2/4 text-left mx-auto xl:mx-0 ${isPrimaryText ? 'text-primary' : ''}`}
                                            >
                                                <div className={`${isPrimaryText ? 'font-normal text-base' : 'ml-10 text-sm text-left font-light'}`}>
                                                    {item.name}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className='text-left xl:ml-20 xl:gap-4 xl:mb-12'>
                                    <h4 className='text-lg font-medium mb-2 text-left pb-[0.5px] border-b border-[#ededed] dark:border-[#979DAE]'>
                                        Tools
                                    </h4>
                                    <div className='flex flex-row gap-x-8 justify-center xl:justify-start mx-auto xl:mx-0'>
                                        {skillData.find(item => item.title === 'tools')?.data?.map((tool, index) => {
                                            return (
                                                <div key={index}>
                                                    <Image
                                                        src={tool.imgPath}
                                                        width={28}
                                                        height={28}
                                                        alt='tool image' 
                                                    />
                                                </div>
                                            );
                                        }) || <p>No tools listed.</p>} 
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

export default About

type DataItem = {
    title?: string;
    name?: string;
    company?: string;
    years?: string;
    degree?: string;
    university?: string;
    data?: DataItem[];
    imgPath?: string;
};

type GetDataFunction = (arr: DataItem[], title: string) => DataItem | undefined;