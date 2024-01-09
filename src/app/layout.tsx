import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from './ui/components/Navbar/Navbar'

export const metadata: Metadata = {
  title: 'Eduardo’s Portfolio',
  description: 'my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='max-w-screen-2xl mx-auto'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}