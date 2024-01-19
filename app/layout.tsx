import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anonypad',
  description: 'Criado por LucasAmaralDev',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" style={{
      overflowX: "hidden",
    }}>
      <body className={inter.className}
        style={{

        }}
      >{children}</body>
    </html>
  )
}
