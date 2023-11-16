'use client'

import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const headerVariants = {
    hidden: {
        x: '-100vw',
    },
    visible: {
        x: '0vw',
        transition: {
            duration: 1,
        }
    },
}

type tHeaderMenu = {
    openMenu: boolean
}

export default function HeaderMenu({ openMenu }: tHeaderMenu) {
    const controller = useAnimation();

    return (
        <motion.div
            className="w-full h-screen px-5 pt-[90px] flex flex-col justify-between fixed z-[998] bg-black"
            variants={headerVariants}
            initial='hidden'
            animate='visible'
            exit={{ x: -300, opacity: 0 }}
        >

            

        </motion.div>
    )
}
