'use client'

import { Brush, Link2, Rocket, Sparkles, Tags } from 'lucide-react'

const pillars = [
  {
    title: 'SEO Otomasyonu',
    description: 'Meta başlık, açıklama, schema ve sitemap güncellemeleri içerik yayınlandığı anda hazırdır.',
    points: ['Ekstra eklenti ihtiyacını ortadan kaldırır', 'Yayın sonrası manuel SEO adımlarını sıfırlar'],
    icon: Tags,
  },
  {
    title: 'Akıllı İç Linklendirme',
    description: 'Yeni içerikleri eski yazılarla bağlar, ziyaretçiyi akışta tutar ve Google’a güçlü sinyal gönderir.',
    points: ['Bağlamı bozmayan öneriler', 'Daha uzun oturum süresi ve düşük çıkış oranı'],
    icon: Link2,
  },
  {
    title: 'Native Post Ads',
    description: 'Reklam yerleşimleri içerik kartları ile aynı tasarımda çalışır; gelir artarken deneyim bozulmaz.',
    points: ['AdSense ve özel anlaşmalarla uyumlu', 'Okuma akışında kesinti olmadan gelir'],
    icon: Brush,
  },
  {
    title: 'Domain & Analitik',
    description: 'A kaydı ile domain yönlendirin, SSL ve GA4 bağlantısı otomatik yapılandırılsın.',
    points: ['DNS doğrulama, SSL yenileme otomatik', 'Google Analytics/Tag Manager tek tıkla aktif'],
    icon: Rocket,
  },
  {
    title: 'AI Destekli Üretim',
    description: 'Başlıktan görsele kadar bütün üretim adımlarında yapay zekâ destek verir.',
    points: ['Planlı yayın takvimine AI önerileri', 'Görsel optimizasyonu ve kalite kontrol'],
    icon: Sparkles,
  },
]

export function Automation() {
  return (
    <section id="automation" className="relative bg-muted/10 py-20 sm:py-24 font-body-landing">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-heading-landing">
            Tüm Yayın Sürecini Otomatikleştiren Altyapı
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            SEO, içerik oluşturma, link inşası, reklam yönetimi ve performans optimizasyonu BlogPress çekirdeğinde yerleşik gelir. Siz yalnızca içerik stratejinize odaklanın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="group relative h-full rounded-3xl border border-border/60 bg-background/70 p-6 sm:p-7 lg:p-8 backdrop-blur-sm transition hover:-translate-y-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-yellow-500 to-orange-500 text-primary-foreground shadow-lg shadow-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground font-heading-landing">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
