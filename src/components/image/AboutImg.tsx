'use client'

import React, { FC, useRef, MouseEvent } from 'react'
import Image from 'next/image'

const AboutImg:FC<Props> = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='photo' />
    </div>
  )
}

export default AboutImg

type Props = {
  containerStyles: string,
  imgSrc: string,
}