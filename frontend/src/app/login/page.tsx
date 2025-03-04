"use client";

import { useState } from 'react'
import UnderstatedButton from '../../components/UnderstatedButton'

export default function LoginPage() {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white shadow rounded">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {isFocused && (
              <span className="absolute right-0 top-2 animate-pulse text-xl">✒️</span>
            )}
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {isFocused && (
              <span className="absolute right-0 top-2 animate-pulse text-xl">✒️</span>
            )}
          </div>
          <UnderstatedButton label="Continue" />
        </form>
      </div>
    </div>
  )
}
