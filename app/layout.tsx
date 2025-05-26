import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CIITM - Top BCA College in Dhanbad | Computer Applications Education",
  description:
    "CIITM offers premier BCA programs in Dhanbad with industry-focused curriculum, expert faculty, and excellent placement opportunities. Shape your future in technology with us.",
  keywords: "BCA college Dhanbad, computer applications, CIITM, technology education, programming courses",
  authors: [{ name: "CIITM" }],
  openGraph: {
    title: "CIITM - Top BCA College in Dhanbad",
    description: "Premier computer applications education with industry-focused curriculum and excellent placements.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
