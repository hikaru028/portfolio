'use client'

import React, { FC, useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { RiArrowDownSLine } from 'react-icons/ri'

const Dropdown: FC<DropdownProps> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className='relative inline-block'>
            <div 
                onClick={toggleDropdown}
                className='w-[22px] h-[22px] flex justify-center items-center m-auto cursor-pointer focus:outline-none'
            >
                <RiArrowDownSLine className={`text-[16px] text-foreground transition-transform duration-100 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            <div
                className={`absolute z-50 bg-background/90 rounded-[6px] border dark:border-foreground  shadow-lg mt-2 transition-all duration-300 ${
                    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
            >
                {items.map((item, index) => (
                    <Link href={item.path} key={item.label} className='capitalize transition-all block px-4 py-2 text-foreground hover:text-primary' onClick={() => setIsOpen(false)}>
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;

type DropdownProps = {
    items: ItemProps[]
}

type ItemProps = {
    path: string,
    label: string,
}
