'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"

function DarkModeButton() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className='mt-1.5 mr-1.5'>
      {currentTheme === 'dark' ? (
        <SunIcon
          className='h-8 w-8 text-yellow-500 cursor-pointer'
          onClick={() => setTheme('light')}
        />
      ) : (
        <MoonIcon
          className='h-8 w-8 text-gray-900 cursor-pointer'
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  )
}

export default DarkModeButton