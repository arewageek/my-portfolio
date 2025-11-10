import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Preloader from "@/components/preloader"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arewa Geek - Fullstack Blockchain Engineer",
  description:
    "Experienced blockchain engineer specializing in DeFi protocols, smart contracts, and Web3 applications. Solving real-world problems with DeFi"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Preloader />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />

        <Script
          src="//code.tidio.co/djigl1juhhik9frwz95ibypmds77jeky.js"
          async
        />
      </body>
    </html>
  )
}
