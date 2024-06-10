'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Dropdown } from '@/components'
// Hooks from Next.js
import { usePathname } from 'next/navigation'

const links: linkProps[] = [
    { path: '/', name: 'home'},
    { path: '/projects', name: 'projects'},
    { path: '/contact', name: 'contact'},
];

const items: itemProps[] = [
    { path: '/#about', label: 'about' },
    { path: '/#services', label: 'services' },
];

const Nav:FC<Props> = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();

    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => (
                <div key={index} className="relative flex justify-center items-center">
                    <Link
                        href={link.path}
                        className={`capitalize ${linkStyles}`}
                    >
                        {link.path === path && (
                            <motion.span
                                initial={{ y: '-100%' }}
                                animate={{ y: '0' }}
                                transition={{ type: 'tween' }}
                                layoutId='underline'
                                className={`${underlineStyles}`}
                            />
                        )}
                        {link.name}
                    </Link>
                    {link.path === '/' && <Dropdown items={items} />}
                </div>
            ))}
        </nav>
    )
}

export default Nav

type Props = {
    containerStyles: string,
    linkStyles: string,
    underlineStyles: string,
}

type linkProps = {
    path: string,
    name: string,
}

type itemProps = {
    path: string,
    label: string,
}