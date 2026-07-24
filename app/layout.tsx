import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'

import localFont from 'next/font/local'

import { NavigationBar } from './components/NavigationBar'

import './globals.css'

const bernoru = localFont({
  src: '../public/fonts/bernoru-blackultraexpanded.otf',
  variable: '--font-bernoru',
})

const cochin = localFont({
  src: '../public/fonts/cochin-regular.otf',
  variable: '--font-conchin',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  weight: ['400', '500']
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '3TM - CHASE THE MOON',
  description: '_',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${bernoru.variable} ${cochin.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-16 ">
        <NavigationBar />
        {children}
      </body>
    </html>
  )
}
