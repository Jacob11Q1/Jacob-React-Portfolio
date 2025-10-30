"use client"
import React, { useEffect, useState } from "react"
import clsx from "clsx"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState("#top")
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50)
            const scrollTop = window.scrollY
            const docHeight = document.body.scrollHeight - window.innerHeight
            const progress = (scrollTop / docHeight) * 100
            setScrollProgress(progress)
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(`#${entry.target.id}`)
                    }
                })
            },
            { threshold: 0.6 }
        )

        document.querySelectorAll("section").forEach((sec) => observer.observe(sec))

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
            observer.disconnect()
        }
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
            {/* Scroll progress bar */}
            <motion.div
                className="fixed top-0 left-0 h-1 bg-red-500 z-[100]"
                style={{ width: `${scrollProgress}%` }}
            />

            <nav
                className={clsx(
                    "font-Ovo w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-600",
                    isScroll && "backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg"
                )}
            >
                {/* Logo */}
                <motion.a
                    href="#top"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl font-bold tracking-wide cursor-pointer mr-14"
                >
                    Jacob<span className="text-red-500">.</span>
                </motion.a>

                {/* Desktop Nav */}
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
                                className={clsx(
                                    "relative font-Ovo text-gray-700 after:block after:h-0.5 after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300",
                                    active === href && "text-red-500 after:scale-x-100"
                                )}
                            >
                                {label}
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="relative w-8 h-8 flex flex-col justify-between items-center"
                    >
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                            className="w-8 h-1 bg-black rounded"
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-8 h-1 bg-black rounded"
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                            className="w-8 h-1 bg-black rounded"
                        />
                    </button>
                </div>

                {/* Mobile Menu Drawer */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute top-0 right-0 w-2/3 h-screen 
                         bg-white/30 backdrop-blur-xl 
                         border-l border-white/20 shadow-2xl p-8 
                         flex flex-col gap-6 md:hidden"
                        >
                            {navLinks.map(({ label, href }) => (
                                <a
                                    key={href}
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                    className={clsx(
                                        "text-lg font-semibold text-gray-800 relative after:block after:h-0.5 after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300",
                                        active === href && "text-red-500 after:scale-x-100"
                                    )}
                                >
                                    {label}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    )
}

export default Navbar
