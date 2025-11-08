'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, CheckCircle2, Loader2, XCircle } from 'lucide-react'
import Link from 'next/link'
import { useDomainCheck } from '@/hooks/useDomainCheck'
import { cn } from '@/lib/utils'

export function Hero() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [siteName, setSiteName] = useState('')
  const [customSlug, setCustomSlug] = useState('')

  const { slug: autoSlug } = useDomainCheck(siteName)

  // Use custom slug if provided, otherwise use auto-generated
  const finalSlug = customSlug || autoSlug
  const finalDomain = finalSlug ? `${finalSlug}.blogpress.dev` : ''

  // Check availability of the final slug
  const { isAvailable, isChecking } = useDomainCheck(finalSlug)

  useEffect(() => {
    setMounted(true)
  }, [])



  const handleCreateSite = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (siteName.trim().length >= 3 && finalSlug && isAvailable) {
      // Redirect to theme selection page
      router.push(`/create-site/theme?siteName=${encodeURIComponent(siteName)}&slug=${finalSlug}`)
    }
  }

  return (
    <section className="relative min-h-[calc(100vh-120px)] flex items-start justify-center overflow-hidden bg-black pt-16 pb-14 font-body-landing md:pt-24">
      {/* Enhanced Modern Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Optimized gradient orbs - 5 strategic orbs for premium look */}
        <div className="absolute top-[15%] left-[20%] w-[650px] h-[650px] bg-gradient-to-br from-orange-500/40 to-orange-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[20%] right-[25%] w-[700px] h-[700px] bg-gradient-to-br from-orange-600/35 to-yellow-500/8 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] right-[15%] w-[600px] h-[600px] bg-gradient-to-br from-yellow-500/30 to-orange-400/12 rounded-full blur-[120px] animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-[35%] left-[10%] w-[580px] h-[580px] bg-gradient-to-br from-primary/35 to-yellow-500/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[25%] left-[50%] w-[550px] h-[550px] bg-gradient-to-br from-orange-400/25 to-yellow-600/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />

        {/* No particles - better performance */}

        {/* Enhanced grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, #f97316 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        {/* Content Grid: Text Left, Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-bold mb-6 transition-all duration-1000 delay-200 leading-tight font-heading-landing ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="bg-gradient-to-br from-primary via-yellow-500 to-orange-600 bg-clip-text text-transparent animate-gradient bg-[length:300%_auto] drop-shadow-sm">
                BlogPress ile Google'ın Sevdiği Hızlı Siteler Kurun
              </span>
              <br />
              <span className="text-white">Hızlı yayın altyapısı, otomasyon ve içerik yönetimi tek panelde buluşuyor.</span>
            </h1>

            <p
              className={`text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              BlogPress; hız, SEO ve içerik yönetimini tek bir altyapıda toplar. Yapay zekâ destekli araçlarla içerik üretimi, optimizasyonu ve yayını dakikalar içinde tamamlanır; siz yalnızca stratejinize odaklanırsınız.
            </p>
          </div>

          {/* Right Side - Form */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-base font-semibold uppercase tracking-[0.3em] bg-gradient-to-br from-primary via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                Hemen Başla
              </h3>
              <div className="w-full rounded-2xl bg-gradient-to-br from-primary via-yellow-500 to-orange-600 p-[1px] shadow-lg shadow-black/20">
                <form
                  onSubmit={handleCreateSite}
                  className="w-full rounded-[1.05rem] bg-black/70 p-4 sm:p-6 backdrop-blur-lg"
                >
                  <div className="flex flex-col gap-5">
                  {/* Site Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="site-name" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                      Site İsmi
                    </label>
                    <Input
                      id="site-name"
                      value={siteName}
                      onChange={(event) => setSiteName(event.target.value)}
                      placeholder="örnek: Toy Teknik"
                      className={cn(
                        "h-12 rounded-xl border-2 bg-black/50 text-base text-white placeholder:text-white/40 transition-all duration-300",
                        siteName.length >= 3
                          ? "border-green-500/50 ring-2 ring-green-500/20 focus:border-green-500 focus:ring-green-500/30"
                          : "border-white/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                      )}
                    />
                  </div>

                  {/* Domain Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="domain-slug" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                      Alan Adı
                    </label>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <div className="relative w-full sm:w-1/2">
                        <Input
                          id="domain-slug"
                          value={finalSlug}
                          onChange={(event) => {
                            const value = event.target.value
                            const sanitized = value
                              .toLowerCase()
                              .replace(/[^a-z0-9-]/g, '-')
                              .replace(/-+/g, '-')
                              .replace(/^-+|-+$/g, '')
                            setCustomSlug(sanitized)
                          }}
                          className={cn(
                            "h-12 rounded-xl border-2 bg-black/50 text-base text-white placeholder:text-white/40 font-mono transition-all duration-300",
                            isChecking && "border-yellow-500/50 ring-2 ring-yellow-500/20",
                            !isChecking && isAvailable === true && "border-green-500/50 ring-2 ring-green-500/20 focus:border-green-500 focus:ring-green-500/30",
                            !isChecking && isAvailable === false && "border-red-500/50 ring-2 ring-red-500/20 focus:border-red-500 focus:ring-red-500/30",
                            !finalSlug && "border-white/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                          )}
                        />
                        {/* Real-time status indicator */}
                        {finalSlug && (
                          <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            {isChecking && <Loader2 className="h-5 w-5 animate-spin text-white/60" />}
                            {!isChecking && isAvailable === true && (
                              <CheckCircle2 className="h-5 w-5 text-green-400 animate-in zoom-in duration-300" />
                            )}
                            {!isChecking && isAvailable === false && (
                              <XCircle className="h-5 w-5 text-red-400" />
                            )}
                          </div>
                        )}
                      </div>
                      <span className="font-mono text-white/90 text-base sm:pl-2">.blogpress.dev</span>
                    </div>
                    {/* Domain preview with status */}
                    {finalDomain && (
                      <div className="flex items-center gap-2 text-sm">
                        {!isChecking && isAvailable === true && (
                          <span className="text-green-400 font-semibold">✓ Müsait</span>
                        )}
                        {!isChecking && isAvailable === false && (
                          <span className="text-red-400 font-semibold">✗ Kullanımda</span>
                        )}
                      </div>
                    )}
                    {!finalDomain && (
                      <div className="text-xs text-white/50">
                        .blogpress.dev uzantısı ile yayınlanır
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isChecking}
                      className="h-12 w-full rounded-xl bg-gradient-to-br from-primary via-yellow-500 to-orange-600 px-6 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/40 hover:from-primary hover:via-yellow-400 hover:to-orange-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      Devam Et
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              </div>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border/70 bg-white/5 text-foreground px-10 py-6 text-base font-semibold rounded-full backdrop-blur-sm w-full transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:border-primary/30 hover:shadow-lg active:scale-[0.98]"
              >
                <Link href="/auth/login">
                  Giriş Yap
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>


      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-gradient {
          animation: gradient 8s ease infinite;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  )
}
