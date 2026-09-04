import type { Metadata } from 'next'
import { Geist, Geist_Mono, Manrope, Public_Sans } from 'next/font/google'

import './globals.css'
import { cn } from '@/lib/utils'
import { homeContent } from '@/content/home'

const manropeHeading = Manrope({ subsets: ['latin'], variable: '--font-heading' })

const publicSans = Public_Sans({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  ...homeContent.metadata,
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        'h-full',
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        'font-sans',
        publicSans.variable,
        manropeHeading.variable,
      )}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
