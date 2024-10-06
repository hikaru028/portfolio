import React, { FC } from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Blocks, GanttChartSquare, Gem } from 'lucide-react'
import designImg from '../../../public/png/web-design.png'
import developImg from '../../../public/png/develop.png'
import maintenanceImg from '../../../public/png/maintenance.png'


const iconSize = 30;
const strokeWidth = 1.5;
const color = '#FFEFB1';

const servicesData = [
    {
        icon: <GanttChartSquare size={iconSize} strokeWidth={strokeWidth} color={color} />,
        title: 'Web Design',
        description: 'Offering innovative and user-friendly web design solutions that enhance online presence and drive engagement through visually appealing and functional interfaces.',
        bg: designImg,
    },
    {
        icon: <Blocks size={iconSize} strokeWidth={strokeWidth} color={color} />,
        title: 'Web Development',
        description: 'Building robust, scalable, and efficient web solutions that deliver seamless performance and interactive experiences.',
        bg: developImg,
    },
    {
        icon: <Gem size={iconSize} strokeWidth={strokeWidth} color={color} />,
        title: 'System Maintenance',
        description: 'Delivering comprehensive system maintenance services to ensure your IT infrastructure remains secure, efficient, and up-to-date, minimising downtime and enhancing performance.',
        bg: maintenanceImg,
    },
]

const Services:FC = () => {
  return (
    <section id='services' className='mb-12 xl:mb-36 mt-20 xl:mt-0 pt-36 xl:pt-40'>
        <div className='container mx-auto'>
            <h2 className='section-title text-center mx-auto'>
                What I offer to you
            </h2>
            <div className='w-[80px] h-1 bg-primary rounded-full mt-4 mb-20 xl:mb-24 mx-auto'></div>

            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                {servicesData.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            className='group w-full max-w-[420px] h-[300px] mx-auto flex flex-col pb-10 justify-start items-center relative overflow-hidden'
                        >
                            <div
                                className='absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110'
                                style={{ 
                                    backgroundImage: `url(${item.bg.src})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center', 
                                    opacity: 0.25,
                                    zIndex: 0,
                                }}
                            ></div>
                            <CardHeader className='text-primary'>
                                <div className='w-[50px] h-[50px] rounded-full bg-primary/80 flex justify-center items-center brightness-100'>
                                    {item.icon}
                                </div>
                            </CardHeader>
                            <CardContent className='text-center z-10'>
                                <CardTitle className='mb-4'>{item.title}</CardTitle>
                                <div className='text-base'>
                                    {item.description}
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    </section>
  );
};

export default Services