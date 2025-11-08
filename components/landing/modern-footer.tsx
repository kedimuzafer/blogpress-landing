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
    <footer className="relative bg-gradient-to-b from-background to-card pt-20 pb-10 overflow-hidden font-body-landing">
      {/* Enhanced Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-5 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-2 group">
              <Image
                src="/logo-small.png"
                alt="BlogPress"
                width={40}
                height={40}
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-bold text-2xl tracking-tight font-heading-landing">
                <span className="text-foreground">Blog</span>
                <span className="bg-gradient-to-br from-primary via-yellow-500 to-orange-600 bg-clip-text text-transparent">Press</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              SEO ve hız için tasarlanmış statik içerik altyapısı. AI destekli planlama, otomatik SEO ve PageSpeed 100 performansını tek panelde sunuyoruz.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Globe2 className="h-4 w-4 text-primary" />
              <span>Global CDN • Bursa / Kestel / Türkiye</span>
            </div>
          </div>

          {/* Footer Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-5">
              <h4 className="font-semibold text-sm uppercase tracking-[0.2em] text-foreground/70 font-heading-landing">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => {
                  const Icon = link.icon
                  return (
                    <li key={link.label}>
                      {Icon ? (
                        <a
                          href={link.href}
                          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                        >
                          <Icon className="h-4 w-4 transition-colors duration-300 group-hover:text-primary" />
                          {link.label}
                        </a>
                      ) : link.href.startsWith('http') ? (
                        <a
                          href={link.href}
                          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ArrowUpRight className="h-4 w-4 opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:text-primary" />
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                        >
                          <ArrowUpRight className="h-4 w-4 opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:text-primary" />
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
        <div className="pt-10 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground order-2 md:order-1">
              © 2025 BlogPress. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-wrap justify-center gap-6 order-1 md:order-2">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:underline underline-offset-4"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:underline underline-offset-4"
              >
                Hizmet Şartları
              </Link>
              <Link
                href="/legal/cookie"
                className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:underline underline-offset-4"
              >
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
