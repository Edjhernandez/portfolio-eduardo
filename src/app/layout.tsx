import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from './ui/components/Navbar'

export const metadata: Metadata = {
  title: 'Portfolio Eduardo Hernandez',
  description: 'my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
