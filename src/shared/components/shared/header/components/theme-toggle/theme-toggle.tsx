'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
    >
      <span className='sr-only'>Toggle theme</span>
      <Sun className='dark:hidden' />
      <Moon className='hidden dark:block' />
    </Button>
  )
}
