import "./globals.css"
import { Outfit, Ovo, Geist_Mono } from "next/font/google"
import ClientWrapper from "./ClientWrapper"   // we'll create this

// Declare fonts
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
})
const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ovo",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

// ✅ metadata allowed here because layout is server component
export const metadata = {
  title: "Yacoub Qumseya - Portfolio",
  description: "Full Stack Developer Portfolio of Yacoub Qumseya",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${ovo.variable} ${geistMono.variable} 
          antialiased leading-8 overflow-x-hidden bg-white text-gray-900`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}
