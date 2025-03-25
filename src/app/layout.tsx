import { Inter } from 'next/font/google'

import { Header, Wrappers } from '@/components/shared'

import './globals.css'

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${interSans.variable} font-sans antialiased`}>
        <Wrappers>
          <Header />
          {children}
        </Wrappers>
      </body>
    </html>
  )
}
