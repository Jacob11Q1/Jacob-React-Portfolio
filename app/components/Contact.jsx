import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    const [result, setResult] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()
        setResult("Sending....")
        const formData = new FormData(e.target)
        formData.append("access_key", "c40cd2d9-d392-4fae-9c0f-5d2e1cf33fe1")
        const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData })
        const data = await response.json()
        setResult(data.success ? "Form Submitted Successfully ✅" : data.message)
        if (data.success) e.target.reset()
    }

    return (
        <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 className='text-center mb-2 text-lg font-Ovo text-gray-600'
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                Contact With Me
            </motion.h4>
            <motion.h2 className='text-center text-5xl font-Ovo font-bold'
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
                Get In Touch
            </motion.h2>

            <motion.form onSubmit={onSubmit} className='max-w-2xl mx-auto'
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 my-10'>
                    <input type="text" placeholder='Enter Your name' required className='p-3 border rounded-md bg-white' name='name' />
                    <input type="email" placeholder='Enter Your email' required className='p-3 border rounded-md bg-white' name='email' />
                </div>
                <textarea rows='6' placeholder='Enter Your Message' required className='w-full p-4 border rounded-md bg-white mb-6' name='message'></textarea>
                <button type='submit' className='py-3 px-9 flex items-center gap-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition mx-auto'>
                    Submit Now <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </button>
                <p className='mt-4 text-center'>{result}</p>
            </motion.form>
        </div>
    )
}

export default Contact
