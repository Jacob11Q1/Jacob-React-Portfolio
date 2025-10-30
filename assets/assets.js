// --- Assets Imports ---
import user_image from './user-image.png'
import user_image_j from './user-image-j.png'
import profile_image_j from './profile-image-j.png'

import code_icon from './code-icon.png'
import code_icon_dark from './code-icon-dark.png'
import edu_icon from './edu-icon.png'
import edu_icon_dark from './edu-icon-dark.png'
import project_icon from './project-icon.png'
import project_icon_dark from './project-icon-dark.png'

import vscode from './vscode.png'
import firebase from './firebase.png'
import figma from './figma.png'
import git from './git.png'
import mongodb from './mongodb.png'

import right_arrow_white from './right-arrow-white.png'
import right_arrow from './right-arrow.png'
import right_arrow_bold from './right-arrow-bold.png'
import right_arrow_bold_dark from './right-arrow-bold-dark.png'

import logo from './logo.png'
import logo_dark from './logo_dark.png'

import mail_icon from './mail_icon.png'
import mail_icon_dark from './mail_icon_dark.png'

import profile_img from './profile-img.png'
import download_icon from './download-icon.png'
import hand_icon from './hand-icon.png'
import header_bg_color from './header-bg-color.png'

import moon_icon from './moon_icon.png'
import sun_icon from './sun_icon.png'
import arrow_icon from './arrow-icon.png'
import arrow_icon_dark from './arrow-icon-dark.png'

import menu_black from './menu-black.png'
import menu_white from './menu-white.png'
import close_black from './close-black.png'
import close_white from './close-white.png'

import web_icon from './web-icon.png'
import mobile_icon from './mobile-icon.png'
import ui_icon from './ui-icon.png'
import graphics_icon from './graphics-icon.png'

import send_icon from './send-icon.png'

// --- Centralized Asset Registry ---
export const assets = {
    // Profile Images
    user_image,
    user_image_j,
    profile_image_j,
    profile_img,

    // Icons
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,

    mail_icon,
    mail_icon_dark,

    download_icon,
    hand_icon,

    // Logos
    logo,
    logo_dark,

    // Navigation
    arrow_icon,
    arrow_icon_dark,
    right_arrow,
    right_arrow_white,
    right_arrow_bold,
    right_arrow_bold_dark,

    // Theme
    moon_icon,
    sun_icon,

    // UI elements
    menu_black,
    menu_white,
    close_black,
    close_white,
    header_bg_color,

    // Services
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,

    // Misc
    send_icon,

    // Tools
    vscode,
    firebase,
    figma,
    git,
    mongodb,
}

// --- Work Showcase Data ---
export const workData = [
    {
        title: 'Frontend Project',
        description: 'Modern Designs',
        bgImage: '/work-1.png',
    },
    {
        title: 'Full Stack Projects',
        description: 'End-to-end',
        bgImage: '/work-2.png',
    },
    {
        title: 'Backend Project',
        description: 'Web Development',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX Design',
        description: 'Creative Designs',
        bgImage: '/work-4.png',
    },
]

// --- Services Offered ---
export const serviceData = [
    {
        icon: assets.web_icon,
        title: 'Web Design',
        description:
            'Crafting visually stunning and responsive websites with a focus on clean layouts and usability.',
        link: '',
    },
    {
        icon: assets.mobile_icon,
        title: 'Full Stack Web Development',
        description:
            'Building reliable, high-performing websites using modern stacks like React, Next.js, Python, and Django.',
        link: '',
    },
    {
        icon: assets.ui_icon,
        title: 'UI/UX Design',
        description:
            'Designing seamless, user-friendly interfaces that balance aesthetics with functionality.',
        link: '',
    },
    {
        icon: assets.graphics_icon,
        title: 'Backend Development',
        description:
            'Engineering secure, scalable, and efficient backend systems to power digital products.',
        link: '',
    },
]

// --- Personal Info / Highlights ---
export const infoList = [
    {
        icon: assets.code_icon,
        iconDark: assets.code_icon_dark,
        title: 'Languages',
        description: 'HTML, CSS, JavaScript, React.js, Next.js, Python, Django',
    },
    {
        icon: assets.edu_icon,
        iconDark: assets.edu_icon_dark,
        title: 'Education',
        description: 'Graduate of Axsos Academy',
    },
    {
        icon: assets.project_icon,
        iconDark: assets.project_icon_dark,
        title: 'Projects',
        description: 'Developed over 5 full-scale projects',
    },
]

// --- Tools in Use ---
export const toolsData = [assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git]
