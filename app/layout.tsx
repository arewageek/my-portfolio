import type React from "react"
import type { Metadata } from "next"
import { Inter, Newsreader, Caveat } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Preloader from "@/components/preloader"
import Script from "next/script"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", style: ['normal', 'italic'] })
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" })

export const metadata: Metadata = {
  title: "Arewa Geek - Software Engineer",
  description:
    "Experienced software engineer specializing in scalable web applications, thoughtful interfaces, and robust systems."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${newsreader.variable} ${caveat.variable} font-sans antialiased bg-[#F4F1EA] text-[#1A1A1A] selection:bg-[#E8E8E8]`}>

        <Preloader />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />

        <Toaster />

        {/* <Script
          src="//code.tidio.co/djigl1juhhik9frwz95ibypmds77jeky.js"
          async
        /> */}

        {/* Smartsupp Configuration */}
        <Script id="smartsupp-config" strategy="beforeInteractive">
          {`
            window._smartsupp = window._smartsupp || {};
            window._smartsupp.key = '48e411adc6533eb79bccad34ac0d9b84a05af085';
          `}
        </Script>

        {/* Smartsupp Loader */}
        <Script
          id="smartsupp-loader"
          src="https://www.smartsuppchat.com/loader.js?"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}
