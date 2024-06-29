'use client'

import React, { FC, useRef, MouseEvent } from 'react'
import Image from 'next/image'
import {
  RiBriefcase4Fill,
  RiTodoFill,
} from 'react-icons/ri'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { Badge } from '@/components'

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const DevImg:FC<Props> = ({ containerStyles, imgSrc }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return [0, 0];
   
    const target = e.target as HTMLDivElement;
    const rect = target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${containerStyles}`}
      style={{
        transform,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Badges */}
      {/* <Badge 
          containerStyles='hidden absolute top-[100px] -right-10 z-30'
          icon=<RiBriefcase4Fill/>
          endCountNum={1}
          endCountText=''
          badgeText='Years of Experience' 
      />
      <Badge 
          containerStyles='hidden absolute top-[330px] light-6 z-30'
          icon=<RiTodoFill/>
          endCountNum={7}
          endCountText=''
          badgeText='Finished Projects' 
      /> */}

      {/* Image */}
      <Image src={imgSrc} fill priority alt='photo' />
    </motion.div>
  )
}

export default DevImg

type Props = {
  containerStyles: string,
  imgSrc: string,
}

type MotionProps ={
  getBoundingClientRect: any,
}