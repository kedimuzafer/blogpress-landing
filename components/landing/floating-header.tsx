'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function FloatingHeader() {
  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-6xl px-4 pt-5">
      <nav className="rounded-2xl border border-border/50 bg-background/80 backdrop-blur-xl shadow-lg shadow-primary/5 font-body-landing">
        <div className="flex items-center justify-between p-3">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center gap-1 px-2 py-1 rounded-lg bg-accent/50">
            <img src="/logo-small.png" alt="BlogPress" className="h-10" />
            <span className="text-2xl font-bold">
              <span className="text-white">Blog</span>
              <span className="bg-gradient-to-br from-primary via-[color(display-p3_0.98_0.65_0.08)] to-[color(display-p3_0.99_0.79_0.13)] bg-clip-text text-transparent">Press</span>
            </span>
          </Link>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-br from-primary via-yellow-500 to-orange-600 hover:opacity-90 animate-gradient bg-[length:200%_auto]"
            >
              <Link href="/auth/login">Giriş Yap</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
