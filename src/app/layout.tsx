import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yasuhiro Yamamoto Playground',
  description: 'A sample site built with React, TypeScript, and Next.js.',
  robots: 'noindex',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        <main className="grid items-center min-h-screen">
          <section className="w-10/12 max-w-screen-md mx-auto">{children}</section>
        </main>
      </body>
    </html>
  )
}
