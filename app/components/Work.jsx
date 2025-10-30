import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            {/* Section Title */}
            <motion.h4
                className='text-center mb-2 text-lg font-Ovo text-gray-600'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                My Portfolio
            </motion.h4>
            <motion.h2
                className='text-center text-5xl font-Ovo font-bold'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                Latest Work
            </motion.h2>

            {/* Projects Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
                {workData.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group'
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                    >
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between group-hover:bottom-7 transition'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center group-hover:bg-red-500 transition'>
                                <Image src={assets.send_icon} alt='send icon' className='w-6' />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Payments + Contact Strip */}
            <h3 className="text-center text-gray-500 font-Ovo mb-8">Payments & Contact</h3>
            <motion.div
                className="overflow-hidden relative w-full py-8 my-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-24 animate-marquee whitespace-nowrap">
                    {/* Payment Methods */}
                    <img src="/methods/visa.svg" alt="Visa" className="logo-accent h-12" />
                    <img src="/methods/mastercard.svg" alt="Mastercard" className="logo-accent h-12" />
                    <img src="/methods/stripe.svg" alt="Stripe" className="logo-accent h-12" />

                    {/* Contact Methods */}
                    <a href="mailto:qumsiyeh37@gmail.com">
                        <img src="/methods/email.svg" alt="Email" className="logo-accent h-12" />
                    </a>
                    <a href="https://wa.me/+972597298205" target="_blank" rel="noopener noreferrer">
                        <img src="/methods/whatsapp.svg" alt="WhatsApp" className="logo-accent h-12" />
                    </a>
                    <a href="https://linkedin.com/in/yacoub-qumseya-9227a2132/" target="_blank" rel="noopener noreferrer">
                        <img src="/methods/linkedin.svg" alt="LinkedIn" className="logo-accent h-12" />
                    </a>
                    <a href="https://github.com/Jacob11Q1" target="_blank" rel="noopener noreferrer">
                        <img src="/methods/github.svg" alt="GitHub" className="logo-accent h-12" />
                    </a>
                </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
                className="grid md:grid-cols-2 gap-8 my-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="border border-gray-300 p-6 rounded-xl bg-white shadow-sm">
                    <blockquote className="italic text-gray-700">
                        "Jacob delivered a clean, modern web app ahead of schedule. Highly recommend."
                    </blockquote>
                    <h4 className="mt-4 font-semibold">— John Doe, Startup Founder</h4>
                </div>
                <div className="border border-gray-300 p-6 rounded-xl bg-white shadow-sm">
                    <blockquote className="italic text-gray-700">
                        "Great eye for design and strong technical skills. The SaaS dashboard blew us away."
                    </blockquote>
                    <h4 className="mt-4 font-semibold">— Sarah L., Project Manager</h4>
                </div>
            </motion.div>

            {/* Big CTA Banner */}
            <motion.section
                className="bg-linear-to-r from-red-500 to-pink-500 text-white py-16 text-center rounded-2xl my-20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
                <p className="max-w-2xl mx-auto mb-6">
                    Looking for a full-stack developer who delivers scalable, modern web apps?
                    I'm available for freelance and contract work.
                </p>
                <a
                    href="#contact"
                    className="px-10 py-4 bg-white text-red-600 rounded-full font-semibold hover:scale-105 transition inline-block"
                >
                    Start Your Project
                </a>
            </motion.section>
        </div>
    )
}

export default Work
