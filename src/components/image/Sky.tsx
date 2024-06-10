'use client'

import React, { FC, useEffect, useState } from 'react'
import { Stars } from '@/components'
import { motion, useAnimation, useScroll } from 'framer-motion';

const getColor = () => {
  const colorArray = ['FFFFF0', 'FFFEDC', 'FFDBA4'];
  const index = Math.floor(Math.random() * colorArray.length);
  return colorArray[index];
};

const Sky: FC = () => {
  const [stars, setStars] = useState<JSX.Element[]>([]);
  const controls = useAnimation();
  const { scrollY } = useScroll();

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

    generateStars(5000); // Adjust the number of stars as needed
  }, []);

  useEffect(() => {
    const updateAnimation = () => {
      controls.start({
        rotate: scrollY.get() / 3000, // Adjust the divisor to control the rotation speed
        transition: {
          type: 'spring',
          stiffness: 30,
          damping: 10,
          ease: "ease",
          duration: 0.01,
        }
      });
    };

    const unsubscribe = scrollY.on("change", updateAnimation);
    return () => unsubscribe();
  }, [controls, scrollY]);

  return (
    <motion.div
      className='fixed w-[5000px] h-[5000px] -top-1/2 -left-1/2 -z-50'
      animate={controls}
      style={{ transform: 'translate(-50%, -50%)'}} // Set the rotation origin to the bottom center
    >
      {stars}
    </motion.div>
  )
}

export default Sky;