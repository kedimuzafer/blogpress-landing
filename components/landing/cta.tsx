'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export function CTA() {
  const benefits = [
    'Alternatif platformlara göre PageSpeed 100 odaklı Astro build',
    'Planlı yayın takvimi ve otomatik build',
    'Yapay zeka içerik yazarı ve outline motoru',
    'Özel domain (A kaydı) ve Google Analytics entegrasyonu',
  ]

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden font-body-landing">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L50 50L0 100M50 0L100 50L50 100' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content Card */}
          <div className="bg-gradient-to-br from-card/90 to-muted/90 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading-landing">
                Klasik CMS'lerin Yetişemediği PageSpeed 100 Otomasyon Platformu
                <span className="bg-gradient-to-br from-primary via-yellow-500 to-orange-600 bg-clip-text text-transparent animate-gradient bg-[length:300%_auto]"> Yapay Zeka ile Büyüyen BlogPress</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                BlogPress; eklenti bağımlılığı yüksek klasik sistemlerden bağımsız, PageSpeed 100 puanını hedefleyen statik build altyapısını, yapay zekayla içerik üretimini, özel domain yönlendirmesini ve Google Analytics entegrasyonunu tek SaaS panelinde birleştirir.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 text-foreground"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-sm font-heading-landing">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-br from-primary via-yellow-500 to-orange-600 hover:from-primary hover:via-yellow-400 hover:to-orange-500 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all group w-full sm:w-auto animate-gradient bg-[length:200%_auto]"
              >
                <Link href="/auth/login">
                  Giriş Yap
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border hover:bg-card/50 text-foreground px-8 py-6 text-lg rounded-full backdrop-blur-sm w-full sm:w-auto"
              >
                <Link href="#features">
                  Daha Fazla Bilgi
                </Link>
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="mt-10 text-center">
              <p className="text-sm text-muted-foreground">
                Directus CMS ile entegre • Astro statik site üretimi • Otomatik SSL ve DNS senkronizasyonu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
