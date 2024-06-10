'use client'

import React, { FC, useState, useEffect } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';

const ScrollButton: FC = () => {
    const [upButton, setUpButton] = useState(false);

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            setUpButton(window.scrollY > 1000);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            onClick={scrollUp}
            className={`sticky bottom-4 m-auto w-10 h-10 rounded-full cursor-pointer flex justify-center items-center bg-white/70 shadow-lg dark:bg-[#464F66] z-50 transition-transform duration-300 ${upButton ? 'scale-100' : 'scale-0'}`}
        >
            <RiArrowUpSLine className='text-xl text-black dark:text-white' />
        </div>
    );
};

export default ScrollButton;
