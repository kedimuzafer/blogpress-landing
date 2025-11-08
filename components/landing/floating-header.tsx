'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'

export function FloatingHeader() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check localStorage and system preference on mount
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = stored === 'dark' || (!stored && prefersDark)

    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle('dark', shouldBeDark)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newIsDark)
  }

  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-6xl px-4 pt-5">
      <nav className="rounded-2xl border border-border/50 bg-background/80 backdrop-blur-xl shadow-lg shadow-primary/5 font-body-landing transition-colors duration-300">
        <div className="flex items-center justify-between p-3">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center gap-1 px-2 py-1 rounded-lg bg-accent/50 transition-colors duration-300">
            <img src="/logo-small.png" alt="BlogPress" className="h-10" />
            <span className="text-2xl font-bold">
              <span className="text-foreground">Blog</span>
              <span className="bg-gradient-to-br from-primary via-yellow-500 to-orange-600 bg-clip-text text-transparent">Press</span>
            </span>
          </Link>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <Button
              onClick={toggleTheme}
              size="sm"
              variant="ghost"
              className="h-9 w-9 p-0 hover:bg-accent/80 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-foreground rotate-0 scale-100 transition-transform duration-300" />
              ) : (
                <Moon className="h-5 w-5 text-foreground rotate-0 scale-100 transition-transform duration-300" />
              )}
            </Button>

            <Button
              asChild
              size="sm"
              className="bg-gradient-to-br from-primary via-yellow-500 to-orange-600 hover:opacity-90 animate-gradient bg-[length:200%_auto] transition-all duration-300"
            >
              <Link href="/auth/login">Giriş Yap</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
