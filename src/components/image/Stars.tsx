'use client'

import React, { FC } from 'react'
import { motion } from 'framer-motion';

type StarProps = {
    size: number,
    top: number,
    left: number,
    color: string,
  };

const Stars: FC<StarProps> = ({size, top, left, color}) => {
    const style = {
        position: 'absolute' as const,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: `#${color}`,
        top: `${top}px`,
        left: `${left}px`,
    };
    
    return (
        <motion.div 
            style={style} 
        />
    );
}

export default Stars