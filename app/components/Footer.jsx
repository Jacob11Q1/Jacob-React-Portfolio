import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <motion.div className='mt-20'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='text-center'>
                <a href="#top" className="text-2xl font-bold cursor-pointer">
                    Jacob<span className="text-red-500">.</span>
                </a>
                <div className='w-max flex items-center gap-3 mx-auto mt-3'>
                    <Image src={assets.mail_icon} alt='Mail Icon' className='w-6' />
                    Qumsiyeh37@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-500 mx-[10%] mt-12 py-6'>
                <p>@ 2025 Jacob Qumsiyeh. All Rights Reserved.</p>
                <ul className='flex items-center gap-11 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/Jacob11Q1">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/yacoub-qumseya-9227a2132/">LinkedIn</a></li>
                    <li><a target='_blank' href="https://www.instagram.com/jacob1q11/">Instagram</a></li>
                </ul>
            </div>
        </motion.div>
    )
}

export default Footer
