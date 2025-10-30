// app/motionVariants.js

// Page transition variants
export const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
}

export const pageTransition = {
    duration: 0.5,
    ease: "easeInOut",
}

// Fade-in for components
export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
}

// Staggered children container
export const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
}

// Scale pop (for icons, buttons, tools)
export const scalePop = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
}
