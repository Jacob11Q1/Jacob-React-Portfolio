"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { assets } from "@/assets/assets"
import clsx from "clsx"
import { motion } from "framer-motion"

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScroll(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { label: "Home", href: "#top" },
        { label: "About Me", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "My Work", href: "#work" },
        { label: "Contact Me", href: "#contact" },
    ]

    return (
        <>
            <nav
                className={clsx(
                    "font-Ovo w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-600",
                    isScroll &&
                    "backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg"
                )}
            >
                <motion.a
                    href="#top"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl font-bold tracking-wide cursor-pointer mr-14"
                >
                    Jacob<span className="text-red-500">.</span>
                </motion.a>

                <motion.ul
                    className={clsx(
                        "hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300",
                        isScroll
                            ? "bg-white/10 backdrop-blur-md border border-white/10 shadow-sm"
                            : "bg-white shadow-sm bg-opacity-50"
                    )}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    {navLinks.map(({ label, href }) => (
                        <motion.li key={href} whileHover={{ scale: 1.1 }}>
                            <a
                                href={href}
                                className="relative font-Ovo text-gray-700 after:block after:h-0.5 after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                            >
                                {label}
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>
            </nav>
        </>
    )
}

export default Navbar
