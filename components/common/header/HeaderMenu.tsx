'use client'

import { motion } from 'framer-motion';

const headerVariants = {
    hidden: { x: '-100vw' },
    visible: { x: '0vw', transition: { duration: 1 }, },
};

export default function HeaderMenu() {

    return (
        <motion.div
            className="w-full h-screen px-5 pt-[90px] flex flex-col justify-between fixed z-11 bg-black"
            variants={headerVariants}
            initial='hidden'
            animate='visible'
            exit={{ x: -300, opacity: 0 }}
        >
        </motion.div>
    );
};
