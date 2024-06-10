import React, { FC } from 'react'
import Link from 'next/link'
import { Github, Link2Icon } from 'lucide-react'
import { Card, CardHeader } from '../ui/card'
import { Badge } from '../ui/badge'
import Image from 'next/image'

type Props = {
    project?: any,
}

const ProjectCard:FC<Props> = ({ project }) => {
  return (
    <Card className='group overflow-hidden relative mx-auto xl:mx-0 shadow-lg'>
        <CardHeader className='p-0'>
            <div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary overflow-hidden bg-project_bg_light dark:bg-none dark:bg-[#464F66] bg-no-repeat bg-[30%]'>
                {/* image */}
                <Image
                    // isZoomed
                    width={240}
                    height={250}
                    alt="Project image"
                    src={project.image}
                    className='absolute bottom-0 shadow-2xl  scale-100 group-hover:scale-125 transition-all duration-200'
                    priority
                />

                {/* buttons */}
                <div className='flex gap-x-4'>
                    <Link 
                        href={project.link} 
                        className='bg-secondary w-[50px] h-[50px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
                    >
                        <Link2Icon className='text-white dark:text-black' />
                    </Link>
                    <Link 
                        href={project.github} 
                        className='bg-secondary w-[50px] h-[50px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
                    >
                        <Github className='text-white dark:text-black' />
                    </Link>
                </div>
            </div>
        </CardHeader>
        
        {/* Information */}
        <div className='h-full px-8 py-6'>
            <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>
                {project.category}
            </Badge>
            <h4 className='h4 mb-1'>{project.title}</h4>
            <p className='text-muted-foreground text-lg'>{project.description}</p>
        </div>
    </Card>
  )
}

export default ProjectCard