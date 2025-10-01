import type { Metadata } from 'next'
import { Dancing_Script, Poppins, Pacifico } from 'next/font/google'
import './globals.css'

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const pacifico = Pacifico({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pacifico',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Happy Birthday - A Romantic Surprise',
  description: 'A beautiful and romantic birthday wishing website with animations, photos, and interactive features.',
  keywords: 'birthday, romantic, surprise, love, celebration',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Happy Birthday - A Romantic Surprise',
    description: 'A beautiful and romantic birthday wishing website',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dancingScript.variable} ${poppins.variable} ${pacifico.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  )
}
