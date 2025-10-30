<!-- Animated Header Banner -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=EF4444&height=140&section=header"/>
</p>

<h1 align="center">Yacoub “Jacob” Qumsiyeh — Full Stack Developer</h1>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?duration=3000&pause=800&center=true&vCenter=true&width=800&lines=I+build+scalable+SaaS+apps+with+React%2C+Tailwind%2C+Python%2FDjango;Clean+design.+Reliable+backends.+Enterprise+vibes.;Hireable+for+freelance+and+contract+work+right+now." alt="Typing Animation"/>
</p>

<p align="center">
  <a href="mailto:qumsiyeh37@gmail.com"><img alt="Email" src="https://img.shields.io/badge/Email-qumsiyeh37%40gmail.com-ef4444?style=for-the-badge&logo=gmail&logoColor=white"></a>
  <a href="https://wa.me/972597298205" target="_blank"><img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-Chat-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"></a>
  <a href="https://linkedin.com/in/yacoub-qumseya-9227a2132" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href="https://github.com/Jacob11Q1" target="_blank"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-Jacob11Q1-181717?style=for-the-badge&logo=github&logoColor=white"></a>
</p>

<p align="center">
  <a href="https://jacob11q1.github.io/Jacob-s-Portfolio/" target="_blank"><img alt="Live Demo" src="https://img.shields.io/badge/Live%20Demo-Open-ef4444?style=for-the-badge"></a>
  <img alt="Visitors" src="https://komarev.com/ghpvc/?username=Jacob11Q1&style=for-the-badge&color=ef4444">
</p>

---

## ✨ Overview

This repo contains my **Next.js + Tailwind + Framer Motion** portfolio: a clean, animated, client-ready site with **Projects**, **Testimonials**, a **Payments & Contact** marquee (Visa, PayPal, GitHub, LinkedIn, WhatsApp, etc.), and a strong **Hire Me** call-to-action.

- Smooth **page transitions** & scroll **reveal animations**
- Light-theme, accessible, mobile-first design
- **Contact form** integration (Web3Forms)
- **CV download** button
- **Rolling ticker** of payment + live contact methods

---

## 🛠 Tech Stack

**Frontend**

- ⚛️ Next.js (App Router)
- 🎨 Tailwind CSS
- 🎬 Framer Motion

**Content & Assets**

- SVG icons (payments + contacts)
- Responsive images via `next/image`

**Backend (future-ready)**

- 🐍 Python / Django
- 🗄 PostgreSQL

---

## 🔥 Features

- **Animated Header/Hero** with profile + CTA
- **About** with tools grid & hover effects
- **Services** cards with subtle motion + hover depth
- **Work (Projects) Grid** with animated cards
- **Payments & Contact Marquee** (infinite, hover glow)
- **Testimonials** (semantic `<blockquote>`)
- **CTA Banner**: “Let’s Build Something Amazing”
- **Animated Footer** with social links

---

## 📂 Project Structure

```bash
portfolio/
├─ app/
│  ├─ ClientWrapper.jsx         # AnimatePresence page transitions
│  ├─ layout.js                 # Root layout (server component + fonts + wrapper)
│  ├─ globals.css               # Tailwind + custom marquee/glow styles
│  ├─ motionVariants.js         # Centralized framer-motion variants
│  └─ components/
│     ├─ Navbar.jsx
│     ├─ Header.jsx
│     ├─ About.jsx
│     ├─ Services.jsx
│     ├─ Work.jsx               # Projects + Payments/Contact marquee + Testimonials + CTA
│     ├─ Contact.jsx
│     └─ Footer.jsx
├─ public/
│  ├─ assets/                   # images
│  └─ methods/                  # svg logos (visa, paypal, github, linkedin, whatsapp, etc.)
├─ README.md
└─ package.json


🚀 Getting Started
Prerequisites

Node.js 18+

npm or pnpm or yarn

Install & Run
# install
npm install

# dev
npm run dev

# build
npm run build

# start (after build)
npm start
Environment (optional)
If you use Web3Forms in Contact.jsx, you’ll see:
formData.append("access_key", "YOUR_WEB3FORMS_KEY");
Replace with your own key.




🧩 Animations
Global Page Transitions: ClientWrapper.jsx wraps pages in <AnimatePresence> and applies pageVariants from motionVariants.js.
Section Reveals: Components use whileInView + fadeInUp and staggerContainer variants.
Marquee: CSS keyframes in globals.css (@keyframes marquee) for infinite scrolling strip.
Glow on Hover: .logo-accent:hover uses a soft glowPulse animation for premium feel.


💳 Payments & 📞 Contact Marquee
SVGs live in /public/methods/ and are rendered in the Work section’s rolling strip:
Payments: Visa, Mastercard, PayPal, Stripe, Apple Pay, Google Pay
Contact: Email, WhatsApp, Telegram, LinkedIn, GitHub
Hover pauses the ticker and gently glows the icon for better UX.

🗺 Roadmap
 Add 3 flagship projects with live demos
 Case study pages (Problem → Solution → Stack → Results)
 Add metrics counters (projects, clients, uptime)
 Optional blog/articles
 Hook backend for contact/newsletter


💼 Hire Me
Need a clean, scalable web app or a modern SaaS MVP?
I’m available for freelance & contract work.
📧 Email: qumsiyeh37@gmail.com
💬 WhatsApp: Chat on WhatsApp
👔 LinkedIn: Connect
🐙 GitHub: Jacob11Q1


📜 License
This project is open-source under the MIT License.
```
