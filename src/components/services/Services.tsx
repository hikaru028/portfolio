import React, { FC } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Blocks, GanttChartSquare, Gem } from 'lucide-react'

type Props = {}

const iconSize = 55;
const strokeWidth = 0.8;

const servicesData = [
    {
        icon: <GanttChartSquare size={iconSize} strokeWidth={strokeWidth} />,
        title: 'Web Design',
        description: 'Offering innovative and user-friendly web design solutions that enhance online presence and drive engagement through visually appealing and functional interfaces.',
    },
    {
        icon: <Blocks size={iconSize} strokeWidth={strokeWidth} />,
        title: 'Web Development',
        description: 'Building robust, scalable, and efficient web solutions that deliver seamless performance and interactive experiences.',
    },
    {
        icon: <Gem size={iconSize} strokeWidth={strokeWidth} />,
        title: 'System Maintenance',
        description: 'Delivering comprehensive system maintenance services to ensure your IT infrastructure remains secure, efficient, and up-to-date, minimising downtime and enhancing performance.',
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
                            className='w-full max-w-[420px] h-[200px] xl:h-[300px] mx-auto flex flex-col pt-16 pb-10 justify-center items-center relative'
                            key={index}
                        >
                            <CardHeader className='text-primary absolute -top-[60px]'>
                                <div className='w-[140px] h-[80px] bg-background flex justify-center items-center'>
                                    {item.icon}
                                </div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle className='mb-4'>{item.title}</CardTitle>
                                <div className='text-lg'>
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