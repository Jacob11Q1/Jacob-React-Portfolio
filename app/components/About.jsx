import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                className='text-center mb-2 text-lg font-Ovo text-gray-600'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Introduction
            </motion.h4>

            <motion.h2
                className='text-center text-5xl font-Ovo font-bold'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                About Me
            </motion.h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                {/* Left Side - User Image */}
                <motion.div
                    className='w-64 sm:w-80 rounded-3xl max-w-none overflow-hidden'
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <Image src={assets.user_image_j} alt='user' width={320} height={320} className='w-full rounded-3xl border border-gray-400' />
                </motion.div>

                {/* Right Side */}
                <motion.div
                    className='flex-1'
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <p className='mb-10 max-w-2xl font-Ovo text-gray-800 leading-relaxed'>
                        Full Stack Developer with expertise in React, Tailwind CSS,
                        Python, and Django. Experienced in building scalable SaaS applications
                        and modern user interfaces with a strong emphasis on clean code
                        and performance.
                    </p>

                    {/* Info List */}
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, title, description }, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.8 }}
                                className='border border-gray-400 rounded-xl p-6 bg-white hover:-translate-y-2 transition'
                            >
                                <Image src={icon} alt={title} width={28} height={28} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm leading-snug'>{description}</p>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Tools */}
                    <motion.h4
                        className='my-6 text-gray-800 font-semibold font-Ovo'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Tools I Use
                    </motion.h4>
                    <ul className='flex flex-wrap items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg bg-white'
                            >
                                <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}

export default About
