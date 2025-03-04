import '../styles/globals.css'
import { ReactNode } from 'react'
import FloatingHeader from '../components/FloatingHeader'
import ReadingProgress from '../components/ReadingProgress'

export const metadata = {
  title: 'MyBlog',
  description: 'A Medium-inspired personal blog platform'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FloatingHeader />
        {children}
        <ReadingProgress />
      </body>
    </html>
  )
}
