'use client'

import { Gauge, CloudLightning, PenTool } from 'lucide-react'

const highlights = [
  {
    title: 'Hızlı Performans',
    description: 'Astro tabanlı statik build ve global CDN; PageSpeed 100 hedefini standart hale getirir.',
    points: ['Otomatik görsel optimizasyonu', 'Yerleşik önbellek ve CDN dağıtımı'],
    icon: Gauge,
  },
  {
    title: 'Yayın Otomasyonu',
    description: 'Planlı yayın kuyruğu ve tetiklenen build süreçleri sayesinde içerik dakikalar içinde yayında olur.',
    points: ['Zamanlanmış yayın tetikleri', 'Domain doğrulama ve build durumu paneli'],
    icon: CloudLightning,
  },
  {
    title: 'AI İçerik Stüdyosu',
    description: 'Başlık, outline, tam metin ve görselleri yapay zekâ ile üretip tek panelden onaylayın.',
    points: ['AI destekli editör ve kontrol listeleri', 'Hazır plan şablonları ile içerik akışı'],
    icon: PenTool,
  },
]

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-background py-20 lg:py-32 font-body-landing">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-heading-landing">
            Performans, Otomasyon ve AI Aynı Altyapıda
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            BlogPress; hız, SEO ve içerik üretimini tek bir altyapıda birleştirir ve ekiplerinize otomasyonla zaman kazandırır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/70 p-6 backdrop-blur-sm transition hover:-translate-y-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-yellow-500 to-orange-600 text-primary-foreground shadow-lg shadow-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground font-heading-landing">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
