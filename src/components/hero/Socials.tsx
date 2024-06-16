'use client'

import React, { FC } from 'react'
import {
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterXFill,
  RiInstagramFill,
} from 'react-icons/ri'
import Link from 'next/link'

const icons =[
  {
    path: 'https://www.linkedin.com/in/hsuzuki28/',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://github.com/hikaru028',
    name: <RiGithubFill />
  },
  {
    path: 'https://twitter.com/strangeman_jp',
    name: <RiTwitterXFill />
  },
  {
    path: 'https://www.instagram.com/itsrukahi/',
    name: <RiInstagramFill />
  }
]

const Socials:FC<Props> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return(
          <Link href={icon.path} key={index} legacyBehavior>
            <a target="_blank">
              <div className={`${iconStyles}`}>{icon.name}</div>              
            </a>
          </Link>
        );
      })}
    </div>
  )
}

export default Socials

type Props = {
  containerStyles: string,
  iconStyles: string,
}