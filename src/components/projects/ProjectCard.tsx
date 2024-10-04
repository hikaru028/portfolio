import React, { FC, Fragment } from 'react'
import Link from 'next/link'
import { GithubIcon, Link2Icon } from 'lucide-react'
import { Card, CardHeader } from '../ui/card'
import { Badge } from '../ui/badge'
import Image from 'next/image'

type Props = {
    project?: any,
}

const ProjectCard:FC<Props> = ({ project }) => {
  return (
    <Card className='group overflow-hidden relative mx-auto xl:mx-0 shadow-lg'>
        {/* Categories */}
        <div className='w-full flex justify-start items-center absolute top-4 left-5 z-30 flex-wrap'>
            {project.category.map((lang: string, index: number) => (
                <Fragment key={index}>
                    <Badge className={`text-sm font-medium mr-1 mb-1`}>
                        {lang}
                    </Badge>
                    {index === 4 && <div className='w-full' />}
                </Fragment>
            ))}
        </div>
        <CardHeader className='p-0'>
            <div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary overflow-hidden bg-project_bg_light dark:bg-none dark:bg-[#464F66] bg-no-repeat bg-[30%]'>
                {/* Image */}
                <div className='w-full h-full flex justify-center items-center'>
                    <Image
                        width={300}
                        height={200}
                        alt="Project image"
                        src={project.image}
                        className='shadow-2xl scale-100 group-hover:scale-125 transition-all duration-200'
                        priority
                    />
                    {/* Link buttons */}
                    <div className='flex gap-x-4 absolute'>
                        {project.link !== '' &&
                            <a 
                                href={project.link}
                                target="_blank" 
                                className='bg-secondary w-[50px] h-[50px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
                            >
                                <Link2Icon className='text-white dark:text-black' />
                            </a>
                        }
                        {project.github !== '' &&
                            <a 
                                href={project.github}
                                target="_blank" 
                                className='bg-secondary w-[50px] h-[50px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
                            >
                                <GithubIcon className='text-white dark:text-black' />
                            </a>
                        }
                    </div>
                </div>

            </div>
        </CardHeader>
        
        {/* Information */}
        <div className='h-full px-8 py-6'>
            <h4 className='h4 mb-1'>{project.title}</h4>
            <p className='text-muted-foreground text-lg'>{project.description}</p>
        </div>
    </Card>
  )
}

export default ProjectCard