import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Фотограф Владимир Гуцало',
  description: 'Фотограф Вова Гуцало, свадебный фотограф в Новокузнецке +7 (913) 335 21 08',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
