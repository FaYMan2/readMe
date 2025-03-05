import '../styles/globals.css'
import { ReactNode } from 'react'
import FloatingHeader from '../components/FloatingHeader'
import ReadingProgress from '../components/ReadingProgress'



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className='bg-black text-white'>
        <FloatingHeader />
        {children}
        <ReadingProgress />
      </body>
    </html>
  )
}
  