import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Preloader from "@/components/preloader"
import Script from "next/script"
import { Toaster } from "@/components/ui/sonner"

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
        <div className="fixed inset-0 bg-grain opacity-[0.02] pointer-events-none z-[1]" />
        <Preloader />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />

        <Toaster />

        {/* <Script
          src="//code.tidio.co/djigl1juhhik9frwz95ibypmds77jeky.js"
          async
        /> */}

        <Script id="zoho-salesiq-config" strategy="beforeInteractive">
          {`
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
          `}
        </Script>
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siq8a436081e7b7921b294d87e3eedf69a8e45f119b4a0410c268f5139b059ec591"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}
