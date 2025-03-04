import Link from 'next/link'
import React from 'react'

const FloatingHeader: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white bg-opacity-95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold font-header">MyBlog</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/write">
            <span className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">Write</span>
          </Link>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </nav>
      </div>
    </header>
  )
}

export default FloatingHeader
