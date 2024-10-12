'use client'

import React, { FC } from 'react'
import Image from 'next/image'

const DevImg: FC<Props> = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='photo' />
    </div>
  )
}

export default DevImg

type Props = {
  containerStyles: string,
  imgSrc: string,
}