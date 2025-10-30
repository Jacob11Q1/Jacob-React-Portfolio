import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 className='text-center mb-2 text-lg font-Ovo text-gray-600'
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                What I offer
            </motion.h4>

            <motion.h2 className='text-center text-5xl font-Ovo font-bold'
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Services
            </motion.h2>

            <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                I craft modern, scalable web solutions with React, Tailwind, Django, and Python.
            </motion.p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, i) => (
                    <motion.div key={i}
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        className='border border-gray-500 rounded-lg px-8 py-12 bg-white hover:-translate-y-2 transition'>
                        <Image src={icon} alt='' className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>{description}</p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                            Read More <Image src={assets.right_arrow} alt='' className='w-4' />
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Services
