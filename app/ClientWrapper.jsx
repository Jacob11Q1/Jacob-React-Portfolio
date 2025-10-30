"use client"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { pageVariants, pageTransition } from "./motionVariants"

export default function ClientWrapper({ children }) {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
