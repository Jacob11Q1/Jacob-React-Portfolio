import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <div className='pt-20 w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4'>

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Image
                    src={assets.profile_image_j}
                    alt='Profile picture of Yacoub Qumsiyeh'
                    width={128}
                    height={128}
                    className='rounded-full w-32 border-4 border-red-500 shadow-lg'
                />
            </motion.div>

            <motion.h2
                className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                Hi! I'm Yacoub Qumsiyeh
                <Image src={assets.hand_icon} alt='Waving hand' width={24} height={24} className='w-6' />
            </motion.h2>

            <motion.h1
                className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                Building Scalable SaaS & Modern Web Apps with React & Django
            </motion.h1>

            <motion.div
                className='flex flex-col sm:flex-row items-center gap-4 mt-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-red-500 text-white flex items-center gap-2 hover:bg-red-600'>
                    Hire Me
                </a>
                <a href="/Yacoub_Qumseya_CV.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                    My CV
                </a>
            </motion.div>
        </div>
    )
}

export default Header
