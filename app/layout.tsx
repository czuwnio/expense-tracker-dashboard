import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expense Tracker Dashboard',
  description: 'Manage your personal finances efficiently.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  )
}
