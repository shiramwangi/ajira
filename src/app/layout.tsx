import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ajira - AI-Powered Job Platform',
  description: 'Find your dream job with AI-powered matching and cover letter generation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navigation />
          <main className="min-h-screen bg-background">
            {children}
          </main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
} 