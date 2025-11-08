'use client'

import { ArrowUpRight, Globe2, Mail, Phone, Rss } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { ComponentType } from 'react'

type FooterLink = {
  label: string
  href: string
  icon?: ComponentType<{ className?: string }>
}

export function ModernFooter() {
  const footerLinks: Record<string, FooterLink[]> = {
    Platform: [
      { label: 'Öne Çıkan Katmanlar', href: '#features' },
      { label: 'Otomasyon Süreçleri', href: '#automation' },
      { label: 'Paneli Gör', href: '/auth/login' },
      { label: 'Hızlı Başla', href: '/create-site/theme' },
    ],
    İletişim: [
      { label: 'merhaba@blogpress.dev', href: 'mailto:merhaba@blogpress.dev', icon: Mail },
      {
        label: '+90 539 375 91 25 (WhatsApp)',
        href: 'https://wa.me/905393759125?text=Merhaba%20BlogPress%2C%20platformunuzu%20denemek%20istiyorum.',
        icon: Phone,
      },
      { label: 'RSS Akışı', href: '/rss.xml', icon: Rss },
    ],
  }

  return (
    <footer className="relative bg-gradient-to-b from-background to-card pt-20 pb-10 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 mb-2">
              <Image src="/logo-small.png" alt="BlogPress" width={36} height={36} className="h-9 w-9" />
              <span className="font-bold text-2xl tracking-tight">BlogPress</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              SEO ve hız için tasarlanmış statik içerik altyapısı. AI destekli planlama, otomatik SEO ve PageSpeed 100 performansını tek panelde sunuyoruz.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Globe2 className="h-4 w-4" />
              <span>Global CDN • Bursa / Kestel / Türkiye</span>
            </div>
          </div>

          {/* Footer Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-[0.2em] text-white/70">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => {
                  const Icon = link.icon
                  return (
                    <li key={link.label}>
                      {Icon ? (
                        <a
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                        >
                          <Icon className="h-4 w-4" />
                          {link.label}
                        </a>
                      ) : link.href.startsWith('http') ? (
                        <a
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ArrowUpRight className="h-4 w-4 opacity-60" />
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ArrowUpRight className="h-4 w-4 opacity-60" />
                          {link.label}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 BlogPress. Tüm hakları saklıdır.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Hizmet Şartları
              </Link>
              <Link href="/legal/cookie" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
