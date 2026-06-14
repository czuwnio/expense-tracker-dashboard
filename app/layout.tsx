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
    <html lang="en" className="dark">
      <body className="antialiased bg-gradient-to-br from-slate-100 to-gray-200 dark:from-slate-900 dark:via-gray-900 dark:to-black text-gray-900 dark:text-gray-100 min-h-screen selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  )
}
