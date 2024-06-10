'use client'

import React, { FC, useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { ProjectCard, ProjectData } from '@/components'
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

// Remove category duplicattes
const uniqueCategories: string[] = [
  'all projects',
  ...new Set(ProjectData.map(item => item.category).filter((category): category is string => category !== undefined))
];

const Projects: FC = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState<string>('all projects');
  const filteredProjects = ProjectData.filter(project =>
    category === 'all projects' || project.category === category
  );

  return (
    <section className='min-h-screen pt-12'>
      {/* title */}
      <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
        My Projects
      </h2>

      {/* tabs */}
      <Tabs defaultValue={category} className='mb-24 xl:mb-48 mx-4'>
        <TabsList className='w-full h-full grid grid-cols-4 md:max-w-[600px] xl:border dark:border-none mx-auto rounded-[20px]'>
          {categories.map((category, index) => {
            console.log(category);
            return (
              <TabsTrigger 
                onClick={() => setCategory(category)}
                value={category} 
                key={index} 
                className='capitarize w-{162px} md:w-auto'
              >
                {category}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {/* Tabs content */}
        <div className='tect-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {filteredProjects.map((project, index) => {
            return (
              <motion.div
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{once: true}}
                custom={index}
                key={index}
              >
                <TabsContent value={category} key={index}>  
                  <ProjectCard project={project} />
                </TabsContent>
              </motion.div>
            );
          })}
        </div>
      </Tabs>
    </section>
  )
}

export default Projects

type Props = {
  category: string;
}
