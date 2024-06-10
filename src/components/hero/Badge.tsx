'use client'

import React, { FC } from 'react'
import CountUp from 'react-countup'


const Badge:FC<Props> = ({containerStyles, icon, endCountNum, endCountText, badgeText}) => {
  return (
    <div className={`badge ${containerStyles} `}>
      <div className='text-3xl text-primary'>{icon}</div>
      <div className='flex items-center gap-x-2'>
        <div className='text-4xl leading-none font-bold text-primary'>
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
      <div className='max-w-[70px] leading-none text-[15px] font-medium text-black ml-2'>{badgeText}</div>
      </div>
    </div>
  )
}

export default Badge

type Props = {
  containerStyles: string,
  icon: any, 
  endCountNum: number, 
  endCountText: string, 
  badgeText: string,
}