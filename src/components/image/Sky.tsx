'use client'

import React, { FC, useEffect, useState } from 'react'
import { Stars } from '@/components'
import { motion, useScroll, useTransform } from 'framer-motion';

const getColor = () => {
  const colorArray = ['FFFFF0', 'FFFEDC', 'FFDBA4'];
  const index = Math.floor(Math.random() * colorArray.length);
  return colorArray[index];
};

const Sky: FC = () => {
  const [stars, setStars] = useState<JSX.Element[]>([]);
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 6], [0, 90]);

  useEffect(() => {
    const generateStars = (numStars: number) => {
      const starsArray: JSX.Element[] = [];

      for (let i = 0; i < numStars; i++) {
        const size = Math.random() * 2 + 0.5; // Star size between 1 and 3 pixels
        const top = Math.random() * 5000;
        const left = Math.random() * 5000;
        const color = getColor();

        starsArray.push(<Stars key={i} size={size} top={top} left={left} color={color} />);
      }
      setStars(starsArray);
    };

    generateStars(4000);
  }, []);

  return (
    <motion.div
      className='fixed w-[5000px] h-[5000px] -top-1/2 -left-1/2 -z-50'
      style={{ rotate }}
    >
      Hello
      {stars}
    </motion.div>
  )
}

export default Sky;