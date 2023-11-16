'use client';

import { useAnimation, motion } from 'framer-motion';
import { useState } from 'react';
import HeaderMenu from './HeaderMenu';
import Link from 'next/link';

const path01Variants = {
    open: { d: 'M3.06061 2.99999L21.0606 21' },
    closed: { d: 'M0 9.5L24 9.5' },
}
const path02Variants = {
    open: { d: 'M3.00006 21.0607L21 3.06064' },
    closed: { d: 'M0 14.5L24 14.5' },
}
const path03Variants = {
    open: { d: 'M0 0L0 0', opacity: 0 },
    closed: { d: 'M0 19.5L24 19.5', opacity: 1 },
}

type tLinks = {
    href: string,
    name: string
}

const LINKS: tLinks[] = [
    {
        href: '/',
        name: 'ГЛАВНАЯ'
    },
    {
        href: '/',
        name: 'О НАС'
    },
    {
        href: '/',
        name: 'ПРОЕКТЫ'
    },
    {
        href: '/',
        name: 'КОНТАКТЫ'
    },
]

export default function Header() {

    const [openMenu, setOpenMenu] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const path01Controls = useAnimation();
    const path02Controls = useAnimation();
    const path03Controls = useAnimation();

    const changeMenuState = async (e: boolean) => {
        setOpen(!isOpen);
        setOpenMenu(e)

        if (!isOpen) {
            path01Controls.start(path01Variants.open);
            path02Controls.start(path02Variants.open);
            path03Controls.start(path03Variants.open);
        } else {
            path01Controls.start(path01Variants.closed);
            path02Controls.start(path02Variants.closed);
            path03Controls.start(path03Variants.closed);
        }
    };

    return (
        <header className="w-full bg-transparent absolute z-10 mx-auto mt-10 py-5">
            <div className="gap-[90px] lg:gap-3 pt-1 justify-center items-center hidden md:flex">
                {
                    LINKS.map(({ href, name }: tLinks) => (
                        <Link href={`${href}`} key={name} className='text-white'>
                            {name}
                        </Link>
                    ))
                }
            </div>

            <button
                onClick={() => changeMenuState(!openMenu)}
                className="flex md:hidden justify-center items-center w-15 absolute top-[-20px] right-4">

                <svg width='39' height='39' viewBox='0 0 24 24'>
                    <motion.path
                        {...path01Variants.closed}
                        animate={path01Controls}
                        transition={{ duration: 0.7 }}
                        stroke='#FFFFFF'
                        strokeWidth='2'
                    />
                    <motion.path
                        {...path02Variants.closed}
                        animate={path02Controls}
                        transition={{ duration: 0.7 }}
                        stroke='#FFFFFF'
                        strokeWidth='2'
                    />
                    <motion.path
                        {...path03Variants.closed}
                        animate={path03Controls}
                        transition={{ duration: 0.7 }}
                        stroke='#FFFFFF'
                        strokeWidth='2'
                    />
                </svg>
            </button>

            <>
                {
                    openMenu
                        ? <HeaderMenu openMenu={openMenu} />
                        : null
                }
            </>
        </header>
    );
}