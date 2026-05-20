import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://curriculo.autonextech.com.br"),
  title: {
    default: "Victor Augustho | Desenvolvedor Full Stack",
    template: "%s | Victor Augustho",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  description:
    "Portfólio de Victor Augustho, desenvolvedor full stack focado em sistemas web, automações, integrações e IA aplicada.",
  openGraph: {
    title: "Victor Augustho | Desenvolvedor Full Stack",
    description:
      "Portfólio de Victor Augustho, desenvolvedor full stack focado em sistemas web, automações, integrações e IA aplicada.",
    url: "https://curriculo.autonextech.com.br",
    siteName: "Victor Augustho",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="bg-slate-950 text-slate-100 antialiased">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
